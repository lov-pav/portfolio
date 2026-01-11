import { useState } from 'react'

function Navigation({ activeSection, setActiveSection, activeColor }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
  ]

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
            className="text-base md:text-xl font-cyber font-bold tracking-tight text-white border border-white/20 px-3 md:px-4 py-1.5 hover:border-[#ff10f0] hover:text-[#ff10f0] hover:shadow-[0_0_15px_rgba(255,16,240,0.3)] transition-all duration-300 shrink-0"
          >
            LP_
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-400 hover:text-white transition-all duration-300 relative group text-xs lg:text-sm font-mono-cyber tracking-wider uppercase whitespace-nowrap"
              >
                <span className="relative z-10">{item.label}</span>
                <span 
                  className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  style={activeSection === item.id ? {
                    backgroundColor: activeColor,
                    boxShadow: `0 0 10px ${activeColor}, 0 0 20px ${activeColor}`
                  } : {
                    backgroundColor: '#ff10f0',
                    boxShadow: '0 0 10px #ff10f0'
                  }}
                ></span>
              </button>
            ))}
          </div>
          
          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden text-white p-2 -mr-2 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 35 }}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden fixed top-16 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ zIndex: 45 }}
      >
        <div className="px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-lg font-medium tracking-wide uppercase transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              style={activeSection === item.id ? {
                borderLeft: `3px solid ${activeColor}`,
              } : {
                borderLeft: '3px solid transparent',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
