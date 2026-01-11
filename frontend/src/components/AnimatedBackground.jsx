import { useEffect, useState, useRef, useCallback, useMemo } from 'react'
import ParticleNetwork from './ParticleNetwork'
import FloatingShapes from './FloatingShapes'

// Hook to detect mobile devices
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  return isMobile
}

// Animated gradient orbs that follow mouse with delay
function GradientOrbs() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const orb1Ref = useRef({ x: 0.3, y: 0.3 })
  const orb2Ref = useRef({ x: 0.7, y: 0.7 })
  const orb3Ref = useRef({ x: 0.5, y: 0.2 })
  const rafRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const animate = () => {
      // Slower follow with trailing effect
      orb1Ref.current.x += (mousePos.x - orb1Ref.current.x) * 0.04
      orb1Ref.current.y += (mousePos.y - orb1Ref.current.y) * 0.04
      
      orb2Ref.current.x += (mousePos.x - orb2Ref.current.x) * 0.025
      orb2Ref.current.y += (mousePos.y - orb2Ref.current.y) * 0.025
      
      orb3Ref.current.x += (mousePos.x - orb3Ref.current.x) * 0.032
      orb3Ref.current.y += (mousePos.y - orb3Ref.current.y) * 0.032

      // Update CSS custom properties for gradient positions
      document.documentElement.style.setProperty('--orb1-x', `${orb1Ref.current.x * 100}%`)
      document.documentElement.style.setProperty('--orb1-y', `${orb1Ref.current.y * 100}%`)
      document.documentElement.style.setProperty('--orb2-x', `${orb2Ref.current.x * 100}%`)
      document.documentElement.style.setProperty('--orb2-y', `${orb2Ref.current.y * 100}%`)
      document.documentElement.style.setProperty('--orb3-x', `${orb3Ref.current.x * 100}%`)
      document.documentElement.style.setProperty('--orb3-y', `${orb3Ref.current.y * 100}%`)

      rafRef.current = requestAnimationFrame(animate)
    }
    
    animate()
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [mousePos])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary magenta orb */}
      <div 
        className="gradient-orb gradient-orb-1"
        style={{
          left: 'var(--orb1-x, 30%)',
          top: 'var(--orb1-y, 30%)',
        }}
      />
      {/* Cyan orb */}
      <div 
        className="gradient-orb gradient-orb-2"
        style={{
          left: 'var(--orb2-x, 70%)',
          top: 'var(--orb2-y, 70%)',
        }}
      />
      {/* Purple orb */}
      <div 
        className="gradient-orb gradient-orb-3"
        style={{
          left: 'var(--orb3-x, 50%)',
          top: 'var(--orb3-y, 20%)',
        }}
      />
    </div>
  )
}

// Animated matrix-like code rain effect
function CodeRain({ isMobile }) {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>/{}[]()=+-*&^%$#@!~`|\\;:\'",.<>?'
    const charArray = chars.split('')
    
    // Larger font and fewer columns on mobile for better performance
    const fontSize = isMobile ? 18 : 14
    const columnSpacing = isMobile ? 3 : 1 // Skip columns on mobile
    const columns = Math.floor(canvas.width / (fontSize * columnSpacing))
    const drops = Array(columns).fill(1)
    
    // Color palette matching the portfolio theme
    const colors = ['#ff10f0', '#06b6d4', '#a855f7', '#22c563']
    const columnColors = drops.map(() => colors[Math.floor(Math.random() * colors.length)])
    
    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.font = `${fontSize}px monospace`
      
      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)]
        const x = i * fontSize * columnSpacing
        const y = drops[i] * fontSize
        
        // Gradient effect - brighter at the head
        ctx.fillStyle = columnColors[i]
        ctx.globalAlpha = 0.1 + Math.random() * 0.1
        ctx.fillText(char, x, y)
        
        // Reset drop randomly after reaching bottom
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
          columnColors[i] = colors[Math.floor(Math.random() * colors.length)]
        }
        drops[i]++
      }
      ctx.globalAlpha = 1
    }
    
    // Slower interval on mobile
    const interval = setInterval(draw, isMobile ? 70 : 50)
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobile])

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-50"
    />
  )
}

// Dot matrix grid overlay
function DotGrid() {
  return (
    <div className="absolute inset-0 dot-grid-overlay pointer-events-none" />
  )
}

// Circuit board pattern overlay
function CircuitPattern() {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const drawCircuit = () => {
      ctx.strokeStyle = 'rgba(255, 16, 240, 0.08)'
      ctx.lineWidth = 1
      
      const gridSize = 80
      const cols = Math.ceil(canvas.width / gridSize)
      const rows = Math.ceil(canvas.height / gridSize)
      
      // Draw horizontal and vertical lines with nodes
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * gridSize
          const y = row * gridSize
          
          // Randomly draw circuit paths
          if (Math.random() > 0.7) {
            ctx.beginPath()
            ctx.moveTo(x, y)
            
            // Random direction
            const direction = Math.floor(Math.random() * 4)
            switch (direction) {
              case 0: ctx.lineTo(x + gridSize, y); break
              case 1: ctx.lineTo(x, y + gridSize); break
              case 2: ctx.lineTo(x + gridSize / 2, y + gridSize / 2); break
              case 3: 
                ctx.lineTo(x + gridSize / 2, y)
                ctx.lineTo(x + gridSize / 2, y + gridSize / 2)
                break
            }
            ctx.stroke()
            
            // Draw node at intersection
            if (Math.random() > 0.6) {
              ctx.beginPath()
              ctx.arc(x, y, 2, 0, Math.PI * 2)
              ctx.fillStyle = 'rgba(255, 16, 240, 0.2)'
              ctx.fill()
            }
          }
        }
      }
    }
    
    drawCircuit()
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawCircuit()
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  )
}


// Main animated background component
function AnimatedBackground() {
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    // Faster load on mobile, slight delay on desktop for smooth entry
    const timer = setTimeout(() => setIsLoaded(true), isMobile ? 50 : 100)
    return () => clearTimeout(timer)
  }, [isMobile])

  return (
    <div 
      className="fixed inset-0 overflow-hidden bg-[#0a0a0a]"
      style={{ zIndex: 1 }}
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      
      {/* Circuit pattern layer - skip on mobile */}
      {!isMobile && <CircuitPattern />}
      
      {/* Code rain matrix effect */}
      <CodeRain isMobile={isMobile} />
      
      {/* Interactive gradient orbs - only on desktop (mouse-based) */}
      {!isMobile && <GradientOrbs />}
      
      {/* Static gradient for mobile */}
      {isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="gradient-orb gradient-orb-1"
            style={{ left: '20%', top: '30%' }}
          />
          <div 
            className="gradient-orb gradient-orb-2"
            style={{ left: '80%', top: '60%' }}
          />
        </div>
      )}
      
      {/* 3D floating shapes (Three.js) - only on desktop */}
      {isLoaded && !isMobile && <FloatingShapes />}
      
      {/* Particle network (tsParticles) - only on desktop */}
      {isLoaded && !isMobile && <ParticleNetwork />}
      
      {/* Dot matrix grid overlay */}
      <DotGrid />
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 vignette-overlay pointer-events-none" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
    </div>
  )
}

export default AnimatedBackground

