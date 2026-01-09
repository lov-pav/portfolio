import { useEffect, useState } from 'react'

function Starfield() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    let animationFrameId

    const animate = () => {
      setSmoothPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.05,
        y: prev.y + (mousePosition.y - prev.y) * 0.05,
      }))
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationFrameId)
  }, [mousePosition])

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden bg-[#0a0a0a]"
      style={{ zIndex: 1 }}
    >
      {/* Subtle grid that moves with parallax */}
      <div 
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${smoothPosition.x * 30}px, ${smoothPosition.y * 30}px)`,
        }}
      />
      
      {/* Secondary offset grid for depth */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: `translate(${smoothPosition.x * 15}px, ${smoothPosition.y * 15}px)`,
        }}
      />
    </div>
  )
}

export default Starfield
