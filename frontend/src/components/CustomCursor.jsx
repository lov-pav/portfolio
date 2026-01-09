import { useState, useEffect, useRef } from 'react'

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const requestRef = useRef()
  const targetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Check if it's a touch device
    const checkTouchDevice = () => {
      const hasTouchScreen = (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      )
      setIsTouchDevice(hasTouchScreen)
    }

    checkTouchDevice()

    // Also listen for window resize in case of device orientation change
    window.addEventListener('resize', checkTouchDevice)
    return () => window.removeEventListener('resize', checkTouchDevice)
  }, [])

  useEffect(() => {
    // Don't set up mouse listeners on touch devices
    if (isTouchDevice) return

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      targetRef.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Check if hovering over clickable elements
    const handleMouseOver = (e) => {
      const target = e.target
      const isClickable = target.matches('a, button, [role="button"], input, textarea, select, [onclick]') ||
                          target.closest('a, button, [role="button"]')
      setIsHovering(!!isClickable)
    }

    // Smooth animation for trail
    const animateTrail = () => {
      setTrailPosition(prev => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.25,
        y: prev.y + (targetRef.current.y - prev.y) * 0.25,
      }))
      requestRef.current = requestAnimationFrame(animateTrail)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseover', handleMouseOver)
    requestRef.current = requestAnimationFrame(animateTrail)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(requestRef.current)
    }
  }, [isVisible, isTouchDevice])

  // Don't render on touch devices or when not visible
  if (isTouchDevice || !isVisible) return null

  return (
    <>
      {/* Main pointer - stylized arrow shape */}
      <svg
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: position.x,
          top: position.y,
          transform: isHovering ? 'scale(0.8)' : 'scale(1)',
          transition: 'transform 0.15s ease-out',
        }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        {/* Pointer arrow */}
        <path
          d="M5 3L19 12L12 13L9 20L5 3Z"
          fill="white"
          stroke="rgba(0,0,0,0.3)"
          strokeWidth="1"
        />
      </svg>
      
      {/* Trailing dot - smooth follow */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: trailPosition.x + 4,
          top: trailPosition.y + 4,
          width: isHovering ? '32px' : '6px',
          height: isHovering ? '32px' : '6px',
          borderRadius: '50%',
          backgroundColor: isHovering ? 'transparent' : 'rgba(255, 255, 255, 0.4)',
          border: isHovering ? '1px solid rgba(255, 255, 255, 0.5)' : 'none',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s ease-out, border 0.2s ease-out',
        }}
      />
    </>
  )
}

export default CustomCursor
