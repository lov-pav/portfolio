import { useState } from 'react'

function Projects({ setActiveColor }) {
  const [isDegreeExpanded, setIsDegreeExpanded] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  // Update color when Degree Coordinator is expanded/collapsed
  const handleDegreeToggle = () => {
    const newState = !isDegreeExpanded
    setIsDegreeExpanded(newState)
    if (newState) {
      setActiveColor('#f97316') // Orange-500
    } else {
      setActiveColor('#ffffff') // Revert to white (GetItDone theme)
    }
  }

  // Set default color to white on mount/when interacting with GetItDone
  const handleGetItDoneHover = () => {
    if (!isDegreeExpanded) {
      setActiveColor('#ffffff')
    }
  }

  const getItDoneImages = [
    '/img/getitdone/inbox page.png',
    '/img/getitdone/week view.png',
    '/img/getitdone/month view.png',
    '/img/getitdone/date picker.png',
    '/img/getitdone/sign in.png',
    '/img/getitdone/register.png',
  ]

  const degreeImages = [
    '/img/degree coordinator/degree planner.png',
    '/img/degree coordinator/degree sections.png',
    '/img/degree coordinator/adding courses.png',
    '/img/degree coordinator/login.png',
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Project screenshot" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* GetItDone - Black/White/Gray Theme */}
      <div 
        onMouseEnter={handleGetItDoneHover}
        className="bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] animate-fade-in-up"
      >
        <h3 className="text-3xl font-bold text-white mb-4">GetItDone</h3>
        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
          Full-Stack Productivity Application
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {getItDoneImages.map((img, i) => (
            <div 
              key={i} 
              className="relative group overflow-hidden rounded-lg border border-white/10 aspect-video cursor-pointer"
              style={{ animationDelay: `${i * 100}ms` }}
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`GetItDone screenshot ${i + 1}`}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">VIEW</span>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-gray-400 mb-6 leading-relaxed">
          Developed a modern web-based productivity platform that unifies task management and calendar scheduling into a single, elegant interface. Built with Django REST Framework and React/TypeScript, featuring AWS Cognito authentication, real-time updates, and a glassmorphic UI design.
        </p>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">Key Accomplishments:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Architected RESTful API using Django REST Framework with 10+ endpoints</li>
            <li>Integrated AWS Cognito authentication with custom JWT validation</li>
            <li>Designed normalized PostgreSQL database schema with 10 entities</li>
            <li>Built responsive React frontend with TypeScript and custom hooks</li>
            <li>Developed real-time notification system supporting multiple delivery channels</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {['Django', 'React', 'TypeScript', 'PostgreSQL', 'AWS Cognito', 'Docker', 'Redis', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-sm border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Degree Coordinator - Black/Orange Theme (Dropdown) */}
      <div className={`transition-all duration-700 ease-in-out overflow-hidden rounded-2xl border animate-fade-in-up animate-delay-200 ${
          isDegreeExpanded 
            ? 'bg-black/60 border-orange-500/50 shadow-[0_0_30px_rgba(255,165,0,0.15)]' 
            : 'bg-white/5 border-white/10 hover:border-orange-500/30'
        }`}
      >
        <button
          onClick={handleDegreeToggle}
          className="w-full text-left p-8 flex justify-between items-center group"
        >
          <div>
            <h3 className={`text-2xl font-bold transition-colors ${
              isDegreeExpanded ? 'text-orange-500' : 'text-white group-hover:text-orange-400'
            }`}>
              Degree Coordinator
            </h3>
            <p className="text-gray-400 mt-2">University Course Planning System</p>
          </div>
          <span className={`transform transition-transform duration-500 text-2xl ${
            isDegreeExpanded ? 'rotate-180 text-orange-500' : 'text-gray-500 group-hover:text-orange-400'
          }`}>
            ▼
          </span>
        </button>

        <div className={`transition-all duration-500 ease-in-out ${
          isDegreeExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="p-8 pt-0 border-t border-orange-500/20">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-6">
              {degreeImages.map((img, i) => (
                <div 
                  key={i} 
                  className="relative group overflow-hidden rounded-lg border border-orange-500/20 aspect-video shadow-lg cursor-pointer"
                  style={{ animationDelay: `${i * 150}ms` }}
                  onClick={() => setSelectedImage(img)}  
                >
                  <img 
                    src={img} 
                    alt={`Degree Coordinator screenshot ${i + 1}`}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-orange-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">VIEW</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Created a Degree Coordinator that allows students of University of Texas Permian Basin to track which courses they need to take to meet graduation criteria. It allows students to track previous courses, current courses, grades, graduation eligibility, and courses for the upcoming semester.
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-orange-400 mb-3">Key Accomplishments:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Designed using Figma with user-centered design principles</li>
                <li>Leveraged Auth0's external API for security and login functionality</li>
                <li>Implemented significant database integration through MySQL</li>
                <li>Supports user-role management for students and administrators</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-orange-400 mb-3">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {['PHP', 'MySQL', 'Auth0', 'Figma', 'Web Application Development'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-orange-500/10 text-orange-300 rounded-full text-sm border border-orange-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
