import { useState } from 'react'

function Projects({ setActiveColor }) {
  const [isDegreeExpanded, setIsDegreeExpanded] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isChatExpanded, setIsChatExpanded] = useState(true) // ChatPlusBot open by default
  const [isGetItDoneExpanded, setIsGetItDoneExpanded] = useState(false) // GetItDone minimized by default
  const [isMoodCurveExpanded, setIsMoodCurveExpanded] = useState(false) // MoodCurve minimized by default

  // Update color when Degree Coordinator is expanded/collapsed
  const handleDegreeToggle = () => {
    const newState = !isDegreeExpanded
    setIsDegreeExpanded(newState)
    if (newState) {
      setActiveColor('#f97316') // Orange-500
    } else {
      // When Degree Coordinator is collapsed, default back to the neutral theme
      setActiveColor('#ffffff')
    }
  }

  // Toggle GetItDone section and adjust nav color
  const handleGetItDoneToggle = () => {
    const newState = !isGetItDoneExpanded
    setIsGetItDoneExpanded(newState)

    if (newState) {
      // GetItDone uses black/white theme
      if (!isDegreeExpanded && !isChatExpanded) {
        setActiveColor('#ffffff')
      }
    } else {
      // If other sections are open, keep their colors; otherwise default to white
      if (isDegreeExpanded) {
        setActiveColor('#f97316')
      } else if (isChatExpanded) {
        setActiveColor('#ffffff')
      } else {
        setActiveColor('#ffffff')
      }
    }
  }

  // Toggle ChatPlusBot section and switch nav color to black/white theme
  const handleChatToggle = () => {
    const newState = !isChatExpanded
    setIsChatExpanded(newState)

    if (newState) {
      // ChatPlusBot uses a neutral black/white theme
      setActiveColor('#ffffff')
    } else {
      // If Degree Coordinator is open, keep orange; otherwise default back to white
      if (isDegreeExpanded) {
        setActiveColor('#f97316')
      } else {
        setActiveColor('#ffffff')
      }
    }
  }

  // Toggle MoodCurve section
  const handleMoodCurveToggle = () => {
    const newState = !isMoodCurveExpanded
    setIsMoodCurveExpanded(newState)

    if (newState) {
      setActiveColor('#10b981') // Emerald-500 for data science theme
    } else {
      if (isDegreeExpanded) {
        setActiveColor('#f97316')
      } else if (isChatExpanded) {
        setActiveColor('#ffffff')
      } else {
        setActiveColor('#ffffff')
      }
    }
  }

  const chatPlusImages = [
    '/img/chatplusbot/room list.png',
    '/img/chatplusbot/ai chat.png',
    '/img/chatplusbot/no ai chat.png',
    '/img/chatplusbot/ai chat context.png',
    '/img/chatplusbot/room creation.png',
    '/img/chatplusbot/room joining.png',
    '/img/chatplusbot/room management.png',
    '/img/chatplusbot/account menu.png',
    '/img/chatplusbot/sign in.png',
    '/img/chatplusbot/register.png',
  ]

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
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16" style={{ opacity: 0, transform: 'translateY(20px)' }}>
        <div className="flex items-center justify-center gap-2 mb-4 text-gray-500 text-xs uppercase tracking-widest">
          <span>Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white tracking-tighter">
          Projects
        </h1>
        <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto font-light">
          A comprehensive catalog of engineering projects and system architectures.
        </p>
      </div>
      
      <div className="space-y-12">
      
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

      {/* ChatPlusBot - Black/White Theme (Dropdown, first section) */}
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden rounded-2xl border animate-fade-in-up ${
          isChatExpanded
            ? 'bg-black/80 border-gray-600/50 shadow-[0_0_15px_rgba(150,150,150,0.1)]'
            : 'bg-white/5 border-white/10 hover:border-gray-500/40'
        }`}
      >
        <button
          onClick={handleChatToggle}
          className="w-full text-left p-8 flex justify-between items-center group"
        >
          <div>
            <h3
              className={`text-2xl font-bold transition-colors ${
                isChatExpanded ? 'text-white' : 'text-white group-hover:text-gray-200'
              }`}
            >
              ChatPlusBot
            </h3>
            <p className="text-gray-400 mt-2">
              Real-time collaborative chat application with AI integration
            </p>
          </div>
          <span
            className={`transform transition-transform duration-500 text-2xl ${
              isChatExpanded ? 'rotate-180 text-white' : 'text-gray-500 group-hover:text-gray-200'
            }`}
          >
            ▼
          </span>
        </button>

        <div
          className={`transition-all duration-500 ease-in-out ${
            isChatExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-8 pt-0 border-t border-white/15 text-gray-200 space-y-8">
            {/* Phone-sized Image Gallery */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 mt-6">
              {chatPlusImages.map((img, i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden rounded-2xl border-4 border-gray-800 bg-gray-900 shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ 
                    width: '180px',
                    height: '380px',
                    animationDelay: `${i * 100}ms`,
                    borderRadius: '32px',
                  }}
                  onClick={() => setSelectedImage(img)}
                >
                  {/* Phone notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-800 rounded-full z-10" />
                  <img
                    src={img}
                    alt={`ChatPlusBot screenshot ${i + 1}`}
                    className="object-cover w-full h-full transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-medium tracking-wider bg-black/50 px-3 py-1 rounded-full">
                      TAP TO VIEW
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Overview Card */}
            <div className="p-4 md:p-5 border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r mb-6">
              <div className="flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                <span className="text-cyan-400 font-medium text-sm uppercase tracking-wide">Project Overview</span>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Real-time collaborative chat application with AI integration, designed for educational
                institutions to facilitate student communication, study groups, and academic collaboration.
              </p>
            </div>

            {/* 2-Column Grid for Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Frontend Development */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <line x1="3" x2="21" y1="9" y2="9"></line>
                      <line x1="9" x2="9" y1="21" y2="9"></line>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">Frontend</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">›</span>React Native + Expo (iOS, Android, Web)</li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">›</span>Expo Router for file-based navigation</li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">›</span>React Native Reanimated animations</li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">›</span>AWS Amplify + Cognito auth</li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">›</span>Socket.IO real-time communication</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-purple-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-purple-500/30"></div>
              </div>

              {/* Backend Architecture */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                      <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                      <line x1="6" x2="6.01" y1="6" y2="6"></line>
                      <line x1="6" x2="6.01" y1="18" y2="18"></line>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">Backend</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">›</span>Express.js v5 + TypeScript API</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">›</span>Socket.IO WebSocket server</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">›</span>RabbitMQ message broker</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">›</span>Redis caching & sessions</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">›</span>PostgreSQL + Sequelize ORM</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-emerald-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-emerald-500/30"></div>
              </div>

              {/* Cloud & DevOps */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-500/10 border border-orange-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">Cloud & DevOps</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">›</span>Docker Compose containerization</li>
                  <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">›</span>AWS S3 media storage</li>
                  <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">›</span>AWS Cognito authentication</li>
                  <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">›</span>Automated DB migrations</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-orange-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-orange-500/30"></div>
              </div>

              {/* Security */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-red-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">Security</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-1">›</span>JWT + AWS Cognito auth</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-1">›</span>Route protection middleware</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-1">›</span>WebSocket token verification</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-1">›</span>Helmet.js + CORS hardening</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500/30"></div>
              </div>

              {/* AI Integration */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                      <path d="M12 18V5"></path>
                      <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
                      <circle cx="12" cy="5" r="3"></circle>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">AI Integration</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">›</span>Claude + GPT AI providers</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">›</span>Contextual chatbot responses</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">›</span>Per-room AI toggle control</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">›</span>Message history context</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500/30"></div>
              </div>

              {/* Real-Time & Media */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-yellow-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">Real-Time & Media</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-yellow-400 mt-1">›</span>Live messaging + presence</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-400 mt-1">›</span>Multi-user broadcasting</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-400 mt-1">›</span>S3 media upload pipeline</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-400 mt-1">›</span>Attachment metadata tracking</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-yellow-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-yellow-500/30"></div>
              </div>
            </div>

            {/* Tech Stack Summary */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {['React Native', 'TypeScript', 'Express.js', 'PostgreSQL', 'Redis', 'Socket.IO', 'AWS', 'Docker'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono bg-white/5 text-gray-400 border border-white/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MoodCurve - Emerald/Green Theme (Dropdown) */}
      <div className={`transition-all duration-700 ease-in-out overflow-hidden rounded-2xl border animate-fade-in-up animate-delay-100 ${
          isMoodCurveExpanded 
            ? 'bg-black/60 border-emerald-600/40 shadow-[0_0_12px_rgba(16,185,129,0.1)]' 
            : 'bg-white/5 border-white/10 hover:border-emerald-500/30'
        }`}
      >
        <button
          onClick={handleMoodCurveToggle}
          className="w-full text-left p-8 flex justify-between items-center group"
        >
          <div>
            <h3 className={`text-2xl font-bold transition-colors ${
              isMoodCurveExpanded ? 'text-emerald-400' : 'text-white group-hover:text-emerald-400'
            }`}>
              MoodCurve
            </h3>
            <p className="text-gray-400 mt-2">AI-Powered Playlist Flow Analysis</p>
          </div>
          <span className={`transform transition-transform duration-500 text-2xl ${
            isMoodCurveExpanded ? 'rotate-180 text-emerald-400' : 'text-gray-500 group-hover:text-emerald-400'
          }`}>
            ▼
          </span>
        </button>

        <div className={`transition-all duration-500 ease-in-out ${
          isMoodCurveExpanded ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="p-8 pt-0 border-t border-emerald-500/20">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-6">
              {[
                '/img/moodcurve/prediction_analysis_v14.png',
                '/img/moodcurve/playlists_comparison.png'
              ].map((img, i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden rounded-lg border border-emerald-500/20 aspect-[4/3] shadow-lg cursor-pointer"
                  style={{ animationDelay: `${i * 150}ms` }}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`MoodCurve analysis ${i + 1}`}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">VIEW</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Overview Card */}
            <div className="p-4 md:p-5 border-l-4 border-emerald-500 bg-emerald-500/5 rounded-r mb-6">
              <div className="flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
                <span className="text-emerald-400 font-medium text-sm uppercase tracking-wide">Project Overview</span>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Data science project leveraging machine learning to analyze and score the musical "flow" of Spotify playlists. Evaluates how seamlessly songs transition from one to another, providing quantitative metrics and actionable insights for playlist optimization.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Automated Analysis */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                      <path d="M3 3v18h18"></path>
                      <path d="m19 9-5 5-4-4-3 3"></path>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">Automated Analysis</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">›</span>Extracts audio features via Spotify Web API</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">›</span>Processed 60+ playlists with thousands of tracks</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">›</span>Calculates transition quality scores</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">›</span>Rate limiting and API error management</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-emerald-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-emerald-500/30"></div>
              </div>

              {/* Machine Learning */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
                      <circle cx="7.5" cy="17.5" r=".5"></circle>
                      <circle cx="16.5" cy="17.5" r=".5"></circle>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">Machine Learning</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">›</span>Gradient Boosting Regressor model</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">›</span>30+ engineered features (tempo, key, energy)</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">›</span>Logit transformation & adaptive weighting</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">›</span>Comprehensive model diagnostics (R², MSE, MAE)</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500/30"></div>
              </div>

              {/* Data Visualization */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                      <line x1="18" x2="18" y1="20" y2="10"></line>
                      <line x1="12" x2="12" y1="20" y2="4"></line>
                      <line x1="6" x2="6" y1="20" y2="14"></line>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">Data Visualization</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">›</span>Multi-panel analysis dashboards</li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">›</span>Transition quality & energy flow charts</li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">›</span>Tempo variation visualizations</li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">›</span>Actionable optimization recommendations</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-purple-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-purple-500/30"></div>
              </div>

              {/* Feature Engineering */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-amber-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">Feature Engineering</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">›</span>Key & mode matching algorithms</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">›</span>Genre similarity scoring</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">›</span>Acoustic property analysis</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">›</span>Data validation & preprocessing pipelines</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-500/30"></div>
              </div>
            </div>

            {/* Tech Stack Summary */}
            <div className="mt-6 pt-6 border-t border-emerald-500/20">
              <div className="flex flex-wrap gap-2">
                {['Python', 'scikit-learn', 'pandas', 'numpy', 'Spotify API', 'RapidAPI', 'matplotlib', 'seaborn'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GetItDone - Black/White/Gray Theme (Dropdown) */}
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden rounded-2xl border animate-fade-in-up animate-delay-100 ${
          isGetItDoneExpanded
            ? 'bg-black/40 border-gray-600/40 shadow-[0_0_12px_rgba(150,150,150,0.08)]'
            : 'bg-white/5 border-white/10 hover:border-white/40'
        }`}
      >
        <button
          onClick={handleGetItDoneToggle}
          className="w-full text-left p-8 flex justify-between items-center group"
        >
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">
              GetItDone
            </h3>
            <p className="text-gray-400 mt-2">
              Full-Stack Productivity Application
            </p>
          </div>
          <span
            className={`transform transition-transform duration-500 text-2xl ${
              isGetItDoneExpanded ? 'rotate-180 text-white' : 'text-gray-500 group-hover:text-gray-200'
            }`}
          >
            ▼
          </span>
        </button>

        <div
          className={`transition-all duration-500 ease-in-out ${
            isGetItDoneExpanded ? 'max-h-[2200px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-8 pt-0 border-t border-white/20">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 mt-6">
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
                    <span className="text-white text-sm font-medium tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      VIEW
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Overview Card */}
            <div className="p-4 md:p-5 border-l-4 border-blue-500 bg-blue-500/5 rounded-r mb-6">
              <div className="flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="text-blue-400 font-medium text-sm uppercase tracking-wide">Project Overview</span>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Modern web-based productivity platform that unifies task management and calendar scheduling into a single, elegant interface. Built with Django REST Framework and React/TypeScript, featuring AWS Cognito authentication and glassmorphic UI.
              </p>
            </div>

            {/* 2-Column Grid for Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Backend & API */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                      <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                      <line x1="6" x2="6.01" y1="6" y2="6"></line>
                      <line x1="6" x2="6.01" y1="18" y2="18"></line>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">Backend & API</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">›</span>Django REST Framework (10+ endpoints)</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">›</span>Custom JWT validation middleware</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">›</span>PostgreSQL with 10 normalized entities</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-emerald-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-emerald-500/30"></div>
              </div>

              {/* Frontend */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <line x1="3" x2="21" y1="9" y2="9"></line>
                      <line x1="9" x2="9" y1="21" y2="9"></line>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">Frontend</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">›</span>React + TypeScript + Vite</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">›</span>Custom hooks for state management</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">›</span>Glassmorphic UI with Tailwind CSS</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-500/30"></div>
              </div>

              {/* Auth & Security */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-red-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">Auth & Security</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-1">›</span>AWS Cognito authentication</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-1">›</span>Automatic user synchronization</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-1">›</span>Secure session management</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500/30"></div>
              </div>

              {/* Features */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                      <path d="M12 2v4"></path>
                      <path d="m16.2 7.8 2.9-2.9"></path>
                      <path d="M18 12h4"></path>
                      <path d="m16.2 16.2 2.9 2.9"></path>
                      <path d="M12 18v4"></path>
                      <path d="m4.9 19.1 2.9-2.9"></path>
                      <path d="M2 12h4"></path>
                      <path d="m4.9 4.9 2.9 2.9"></path>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">Key Features</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">›</span>Multi-channel notifications</li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">›</span>Task-event linking system</li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">›</span>Day/Week/Month calendar views</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-purple-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-purple-500/30"></div>
              </div>
            </div>

            {/* Tech Stack Summary */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {['Django', 'React', 'TypeScript', 'PostgreSQL', 'AWS Cognito', 'Docker', 'Redis', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono bg-white/5 text-gray-400 border border-white/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Degree Coordinator - Black/Orange Theme (Dropdown) */}
      <div className={`transition-all duration-700 ease-in-out overflow-hidden rounded-2xl border animate-fade-in-up animate-delay-200 ${
          isDegreeExpanded 
            ? 'bg-black/60 border-orange-600/40 shadow-[0_0_12px_rgba(200,120,50,0.1)]' 
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

            {/* Project Overview Card */}
            <div className="p-4 md:p-5 border-l-4 border-orange-500 bg-orange-500/5 rounded-r mb-6">
              <div className="flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                <span className="text-orange-400 font-medium text-sm uppercase tracking-wide">Project Overview</span>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Degree Coordinator for UT Permian Basin students to track courses needed for graduation. Manage previous courses, current courses, grades, graduation eligibility, and upcoming semester planning.
              </p>
            </div>

            {/* 2-Column Grid for Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Design & UX */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-500/10 border border-orange-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
                      <circle cx="13.5" cy="6.5" r=".5"></circle>
                      <circle cx="17.5" cy="10.5" r=".5"></circle>
                      <circle cx="8.5" cy="7.5" r=".5"></circle>
                      <circle cx="6.5" cy="12.5" r=".5"></circle>
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"></path>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">Design & UX</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">›</span>Figma prototyping & design</li>
                  <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">›</span>User-centered design principles</li>
                  <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">›</span>Intuitive course tracking UI</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-orange-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-orange-500/30"></div>
              </div>

              {/* Security & Auth */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-amber-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">Security & Auth</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">›</span>Auth0 API integration</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">›</span>Secure login functionality</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">›</span>Role-based access control</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-500/30"></div>
              </div>

              {/* Database */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-yellow-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">Database</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-yellow-400 mt-1">›</span>MySQL database integration</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-400 mt-1">›</span>Course & grade tracking</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-400 mt-1">›</span>Student records management</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-yellow-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-yellow-500/30"></div>
              </div>

              {/* User Management */}
              <div className="relative p-4 md:p-5 bg-[#111] border border-white/10 rounded-lg hover:border-red-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">User Management</h4>
                </div>
                <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-1">›</span>Student & admin roles</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-1">›</span>Graduation eligibility tracking</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-1">›</span>Semester planning tools</li>
                </ul>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500/30"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500/30"></div>
              </div>
            </div>

            {/* Tech Stack Summary */}
            <div className="mt-6 pt-6 border-t border-orange-500/20">
              <div className="flex flex-wrap gap-2">
                {['PHP', 'MySQL', 'Auth0', 'Figma', 'SDLC'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono bg-orange-500/10 text-orange-400 border border-orange-500/30 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects
