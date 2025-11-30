function Navigation({ activeSection, setActiveSection, activeColor }) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
  ]

  return (
    <nav className="sticky top-5 z-50 flex justify-center pt-5">
      <div 
        className="backdrop-blur-md rounded-full px-4 py-2 border shadow-2xl transition-colors duration-500"
        style={{ 
          borderColor: `${activeColor}30`, // 30 is hex opacity ~20%
          backgroundColor: 'rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="flex gap-1.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-5 py-2 rounded-full transition-all duration-500 text-sm font-medium ${
                activeSection === item.id
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              style={activeSection === item.id ? {
                backgroundColor: activeColor,
                boxShadow: `0 0 20px ${activeColor}80` // 80 is hex opacity 50%
              } : {}}
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

