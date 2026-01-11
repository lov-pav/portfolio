import { useState, useEffect } from 'react'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Navigation from './components/Navigation'
import CustomCursor from './components/CustomCursor'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  // Initialize from URL hash
  const getInitialSection = () => {
    const hash = window.location.hash.replace('#', '')
    return ['about', 'projects', 'experience'].includes(hash) ? hash : 'about'
  }

  const [activeSection, setActiveSection] = useState(getInitialSection)
  const [activeColor, setActiveColor] = useState('#ff10f0')

  // Listen for hash changes (back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (['about', 'projects', 'experience'].includes(hash)) {
        setActiveSection(hash)
        if (hash !== 'projects') {
          setActiveColor('#ff10f0')
        }
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Update URL hash when section changes
  const handleSectionChange = (section) => {
    setActiveSection(section)
    window.location.hash = section
    if (section !== 'projects') {
      setActiveColor('#ff10f0')
    }
  }

  return (
    <>
      {/* Custom cursor - highest z-index */}
      <CustomCursor />
      
      {/* Animated background - z-index: 1 */}
      <AnimatedBackground />
      
      {/* Main content wrapper - z-index: 2+ */}
      <div className="min-h-screen relative" style={{ zIndex: 2 }}>
        
        <Navigation 
          activeSection={activeSection} 
          setActiveSection={handleSectionChange}
          activeColor={activeColor}
        />
        
        <main className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" style={{ zIndex: 5 }}>
          {activeSection === 'about' && <About />}
          {activeSection === 'projects' && <Projects setActiveColor={setActiveColor} />}
          {activeSection === 'experience' && <Experience />}
        </main>
      </div>
    </>
  )
}

export default App
