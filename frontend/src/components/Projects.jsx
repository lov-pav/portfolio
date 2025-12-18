import { useState } from 'react'

function Projects({ setActiveColor }) {
  const [isDegreeExpanded, setIsDegreeExpanded] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isChatExpanded, setIsChatExpanded] = useState(true) // ChatPlusBot open by default
  const [isGetItDoneExpanded, setIsGetItDoneExpanded] = useState(false) // GetItDone minimized by default

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

      {/* ChatPlusBot - Black/White Theme (Dropdown, first section) */}
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden rounded-2xl border animate-fade-in-up ${
          isChatExpanded
            ? 'bg-black/80 border-white/40 shadow-[0_0_40px_rgba(255,255,255,0.25)]'
            : 'bg-white/5 border-white/10 hover:border-white/40'
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
            isChatExpanded ? 'max-h-[3200px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-8 pt-0 border-t border-white/15 text-gray-200 space-y-8">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 mt-6">
              {chatPlusImages.map((img, i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden rounded-lg border border-white/15 aspect-video cursor-pointer"
                  style={{ animationDelay: `${i * 100}ms` }}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`ChatPlusBot screenshot ${i + 1}`}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      VIEW
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Project Overview</h4>
              <p className="text-gray-300">
                Real-time collaborative chat application with AI integration, designed for educational
                institutions to facilitate student communication, study groups, and academic collaboration.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Frontend Development</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Built cross-platform mobile application using React Native and Expo (iOS, Android, Web).</li>
                <li>Implemented file-based routing with Expo Router for navigation and deep linking.</li>
                <li>Developed responsive UI with React Native Reanimated for smooth animations and gestures.</li>
                <li>Integrated AWS Amplify and Cognito for authentication and user management.</li>
                <li>Used Socket.IO client for real-time communication with automatic reconnection.</li>
                <li>Managed global socket and authentication state with React Context API.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Backend Architecture</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Designed RESTful API using Express.js v5 with TypeScript for type safety.</li>
                <li>Built WebSocket server with Socket.IO for room-based real-time messaging.</li>
                <li>Implemented microservices-ready architecture using RabbitMQ as a message broker.</li>
                <li>Used Redis for caching and session management to improve performance.</li>
                <li>Persisted data in PostgreSQL using Sequelize ORM with migrations.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Cloud Infrastructure & DevOps</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Containerized services with Docker Compose for local development.</li>
                <li>Integrated AWS S3 for media storage with presigned URLs for secure access.</li>
                <li>Implemented AWS Cognito for authentication and environment-based configuration.</li>
                <li>Automated database migrations and connection pooling for production deployments.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Security & Authentication</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Implemented JWT-based authentication integrated with AWS Cognito.</li>
                <li>Developed middleware for route protection and user authorization validation.</li>
                <li>Secured WebSocket connections with token verification on connection.</li>
                <li>Configured Helmet.js and CORS for hardened API security configuration.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">AI Integration</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Integrated Anthropic Claude and OpenAI GPT for flexible AI assistance.</li>
                <li>Implemented AI-powered chatbot with conversation context management.</li>
                <li>Added room-level AI toggle to enable or disable AI per chat room.</li>
                <li>Designed AI response generation using message history for intelligent replies.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Real-Time & Media Features</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Implemented real-time messaging with user presence and room join/leave events.</li>
                <li>Built message broadcasting system for multi-user chat rooms.</li>
                <li>Created media upload pipeline for images, videos, and files stored in S3.</li>
                <li>Linked media attachments to chat messages with full metadata tracking.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Database & Scalability</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Designed normalized models for Users, Rooms, Messages, and Media.</li>
                <li>Supported class-based and social room types with join codes for private access.</li>
                <li>Implemented caching with Redis and connection pooling for scalability.</li>
                <li>Used RabbitMQ for asynchronous processing and stateless APIs for horizontal scaling.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Code Quality & Tooling</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Used TypeScript end-to-end with modular architecture (controllers, services, repositories).</li>
                <li>Followed RESTful API best practices with DTOs and centralized error handling.</li>
                <li>Configured ESLint, Nodemon hot reload, migration scripts, and structured logging.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* GetItDone - Black/White/Gray Theme (Dropdown) */}
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden rounded-2xl border animate-fade-in-up animate-delay-100 ${
          isGetItDoneExpanded
            ? 'bg-black/40 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.15)]'
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

            <p className="text-gray-400 mb-6 leading-relaxed">
              Developed a modern web-based productivity platform that unifies task management and calendar
              scheduling into a single, elegant interface. Built with Django REST Framework and React/TypeScript,
              featuring AWS Cognito authentication, real-time updates, and a glassmorphic UI design.
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
                {['Django', 'React', 'TypeScript', 'PostgreSQL', 'AWS Cognito', 'Docker', 'Redis', 'Tailwind CSS'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-sm border border-white/20"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
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
