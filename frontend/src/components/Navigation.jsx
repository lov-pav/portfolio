function Navigation({ activeSection, setActiveSection, activeColor }) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection('about');
            }}
            className="text-base md:text-xl font-bold tracking-tight text-white border border-white/20 px-2 md:px-3 py-1 hover:bg-white/10 transition-colors shrink-0"
          >
            Portfolio
          </a>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className="text-gray-400 hover:text-white transition-colors relative group text-xs lg:text-sm font-medium tracking-wide uppercase whitespace-nowrap"
              >
                {item.label}
                <span 
                  className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  style={activeSection === item.id ? {
                    backgroundColor: activeColor,
                    boxShadow: `0 0 10px ${activeColor}`
                  } : {}}
                ></span>
              </button>
            ))}
          </div>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 19h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

