import { useState } from 'react'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Navigation from './components/Navigation'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [activeColor, setActiveColor] = useState('#ff10f0')

  // Reset color when changing sections, unless it's projects where it's dynamic
  const handleSectionChange = (section) => {
    setActiveSection(section)
    if (section !== 'projects') {
      setActiveColor('#ff10f0')
    }
  }

  return (
    <div className="min-h-screen bg-black transition-colors duration-700">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={handleSectionChange}
        activeColor={activeColor}
      />
      
      <main className="container mx-auto px-4 py-16">
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects setActiveColor={setActiveColor} />}
        {activeSection === 'experience' && <Experience />}
      </main>
    </div>
  )
}

export default App

