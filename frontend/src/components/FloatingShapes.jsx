import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'

// Glowing wireframe octahedron
function GlowingOctahedron({ position, scale, color, speed }) {
  const meshRef = useRef()
  const glowRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002 * speed
      meshRef.current.rotation.y += 0.003 * speed
      meshRef.current.rotation.z += 0.001 * speed
    }
    if (glowRef.current) {
      glowRef.current.rotation.x = meshRef.current?.rotation.x || 0
      glowRef.current.rotation.y = meshRef.current?.rotation.y || 0
      glowRef.current.rotation.z = meshRef.current?.rotation.z || 0
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        {/* Inner solid shape */}
        <mesh ref={meshRef} scale={scale}>
          <octahedronGeometry args={[1, 0]} />
          <meshBasicMaterial color={color} transparent opacity={0.1} />
        </mesh>
        {/* Outer wireframe */}
        <mesh ref={glowRef} scale={scale}>
          <octahedronGeometry args={[1, 0]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.4} />
        </mesh>
      </group>
    </Float>
  )
}

// Morphing sphere with distortion
function MorphingSphere({ position, scale, color, speed }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={2}
          roughness={0.2}
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  )
}

// Wireframe torus
function WireframeTorus({ position, scale, color, speed }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003 * speed
      meshRef.current.rotation.y += 0.002 * speed
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 16, 50]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.2} />
      </mesh>
    </Float>
  )
}

// Glowing icosahedron with edges
function GlowingIcosahedron({ position, scale, color, speed }) {
  const meshRef = useRef()
  const edgesRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001 * speed
      meshRef.current.rotation.y += 0.002 * speed
    }
  })

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1, 1), [])
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry])

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <group position={position} ref={meshRef}>
        <mesh scale={scale}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color={color} transparent opacity={0.05} />
        </mesh>
        <lineSegments scale={scale}>
          <primitive object={edges} attach="geometry" />
          <lineBasicMaterial color={color} transparent opacity={0.3} />
        </lineSegments>
      </group>
    </Float>
  )
}

// Pulsating ring
function PulsatingRing({ position, scale, color, speed }) {
  const meshRef = useRef()
  const [pulseScale, setPulseScale] = useState(1)

  useEffect(() => {
    const pulse = gsap.to({ scale: 1 }, {
      scale: 1.2,
      duration: 2 / speed,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      onUpdate: function() {
        setPulseScale(this.targets()[0].scale)
      }
    })
    return () => pulse.kill()
  }, [speed])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.002 * speed
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale * pulseScale}>
        <torusGeometry args={[1, 0.02, 8, 64]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
    </Float>
  )
}

// Data stream lines - flowing particles
function DataStream({ startPos, endPos, color, speed }) {
  const lineRef = useRef()
  const points = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(...startPos),
      new THREE.Vector3(
        (startPos[0] + endPos[0]) / 2 + (Math.random() - 0.5) * 2,
        (startPos[1] + endPos[1]) / 2 + (Math.random() - 0.5) * 2,
        (startPos[2] + endPos[2]) / 2
      ),
      new THREE.Vector3(...endPos),
    ])
    return curve.getPoints(50)
  }, [startPos, endPos])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points)
    return geo
  }, [points])

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.material.opacity = 0.1 + Math.sin(state.clock.elapsedTime * speed) * 0.1
    }
  })

  return (
    <line ref={lineRef}>
      <primitive object={geometry} attach="geometry" />
      <lineBasicMaterial color={color} transparent opacity={0.2} />
    </line>
  )
}

// Mouse follow light
function MouseLight() {
  const lightRef = useRef()
  const { viewport } = useThree()
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (lightRef.current) {
        const x = (event.clientX / window.innerWidth) * 2 - 1
        const y = -(event.clientY / window.innerHeight) * 2 + 1
        gsap.to(lightRef.current.position, {
          x: x * viewport.width / 2,
          y: y * viewport.height / 2,
          duration: 0.45,
          ease: 'power2.out'
        })
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [viewport])

  return (
    <pointLight
      ref={lightRef}
      color="#ff10f0"
      intensity={0.5}
      distance={10}
      position={[0, 0, 3]}
    />
  )
}

// Scene with all shapes
function Scene() {
  const colors = ['#ff10f0', '#06b6d4', '#a855f7', '#22c563', '#fbbf24']
  
  const shapes = useMemo(() => [
    // Octahedrons
    { type: 'octahedron', position: [-6, 3, -5], scale: 0.8, color: colors[0], speed: 1 },
    { type: 'octahedron', position: [5, -2, -6], scale: 0.6, color: colors[1], speed: 1.2 },
    { type: 'octahedron', position: [7, 4, -8], scale: 1, color: colors[2], speed: 0.8 },
    
    // Morphing spheres
    { type: 'sphere', position: [-4, -3, -7], scale: 1.2, color: colors[0], speed: 1 },
    { type: 'sphere', position: [3, 2, -9], scale: 1.5, color: colors[3], speed: 0.7 },
    
    // Torus
    { type: 'torus', position: [-7, 0, -6], scale: 0.7, color: colors[2], speed: 1.1 },
    { type: 'torus', position: [6, -4, -7], scale: 0.9, color: colors[4], speed: 0.9 },
    
    // Icosahedrons
    { type: 'icosahedron', position: [0, 4, -10], scale: 1.3, color: colors[1], speed: 0.6 },
    { type: 'icosahedron', position: [-3, -5, -8], scale: 0.9, color: colors[3], speed: 1.3 },
    
    // Rings
    { type: 'ring', position: [4, 0, -4], scale: 0.5, color: colors[0], speed: 1 },
    { type: 'ring', position: [-5, 2, -5], scale: 0.7, color: colors[2], speed: 0.8 },
    { type: 'ring', position: [2, -3, -6], scale: 0.6, color: colors[4], speed: 1.2 },
  ], [])

  const dataStreams = useMemo(() => [
    { start: [-8, 5, -5], end: [8, -5, -5], color: colors[0], speed: 2 },
    { start: [8, 4, -6], end: [-8, -4, -6], color: colors[1], speed: 1.5 },
    { start: [-6, -5, -7], end: [6, 5, -7], color: colors[2], speed: 1.8 },
  ], [])

  return (
    <>
      <ambientLight intensity={0.1} />
      <MouseLight />
      
      {shapes.map((shape, i) => {
        switch (shape.type) {
          case 'octahedron':
            return <GlowingOctahedron key={i} {...shape} />
          case 'sphere':
            return <MorphingSphere key={i} {...shape} />
          case 'torus':
            return <WireframeTorus key={i} {...shape} />
          case 'icosahedron':
            return <GlowingIcosahedron key={i} {...shape} />
          case 'ring':
            return <PulsatingRing key={i} {...shape} />
          default:
            return null
        }
      })}
      
      {dataStreams.map((stream, i) => (
        <DataStream
          key={`stream-${i}`}
          startPos={stream.start}
          endPos={stream.end}
          color={stream.color}
          speed={stream.speed}
        />
      ))}
    </>
  )
}

function FloatingShapes() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

export default FloatingShapes

