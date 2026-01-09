import { useState } from 'react'

function About() {
  const [selectedSkill, setSelectedSkill] = useState(null)

  const skillCategories = {
    frameworks: {
      title: 'FRAMEWORKS',
      color: 'purple',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <line x1="3" x2="21" y1="9" y2="9"></line>
          <line x1="9" x2="9" y1="21" y2="9"></line>
        </svg>
      ),
      skills: [
        { name: 'Express.js v5', desc: 'ChatPlusBot: Built complete REST API with modular controller/service architecture, middleware chains for auth validation, and error handling' },
        { name: 'React 18', desc: 'GetItDone: Developed SPA with custom hooks (useAuth, useTasks), lazy-loaded routes, and optimistic UI updates for task management' },
        { name: 'React Native', desc: 'ChatPlusBot: Cross-platform mobile app supporting iOS, Android, and Web from single codebase with platform-specific optimizations' },
        { name: 'Expo SDK 52', desc: 'ChatPlusBot: Leveraged managed workflow for OTA updates, push notifications, and native module access without ejecting' },
        { name: 'Django 5.2', desc: 'GetItDone: RESTful backend with Django REST Framework, custom serializers, viewsets, and filter backends for task/event CRUD' },
        { name: 'Django REST Framework', desc: 'GetItDone: Built 10+ API endpoints with pagination, filtering, nested serializers, and custom permission classes' },
        { name: 'Scikit-Learn', desc: 'MoodCurve: Trained Gradient Boosting Regressor for playlist transition quality prediction with logit transformation and adaptive sample weighting' },
        { name: 'Vite', desc: 'GetItDone & Portfolio: Lightning-fast HMR dev server, optimized production builds with code splitting and tree shaking' },
      ]
    },
    frontend: {
      title: 'FRONTEND',
      color: 'cyan',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: [
        { name: 'TypeScript', desc: 'ChatPlusBot & GetItDone: Strict type checking, interface definitions for API responses, generic utility types, and discriminated unions for state' },
        { name: 'Tailwind CSS', desc: 'GetItDone: Custom design system with glassmorphic components, responsive breakpoints, dark mode, and CSS variable theming' },
        { name: 'Expo Router', desc: 'ChatPlusBot: File-based routing with dynamic [roomId] segments, nested layouts, deep linking for chat://room/123 URLs' },
        { name: 'React Context API', desc: 'ChatPlusBot: Global providers for SocketContext (connection state), AuthContext (user session), and ThemeContext' },
        { name: 'React Native Reanimated', desc: 'ChatPlusBot: 60fps animations for message bubbles, gesture-driven swipe actions, and shared element transitions' },
        { name: 'AWS Amplify UI', desc: 'GetItDone: Pre-built auth components (SignIn, SignUp, ConfirmSignUp) with custom theming to match glassmorphic design' },
        { name: 'Radix UI', desc: 'GetItDone: Accessible dropdown menus, modals, and date pickers with keyboard navigation and screen reader support' },
        { name: 'Figma', desc: 'Degree Coordinator: Designed complete UI/UX mockups, interactive prototypes, and component library before development' },
      ]
    },
    backend: {
      title: 'BACKEND',
      color: 'emerald',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
          <path d="M3 12A9 3 0 0 0 21 12"></path>
        </svg>
      ),
      skills: [
        { name: 'PostgreSQL', desc: 'ChatPlusBot & GetItDone: Normalized schemas with foreign keys, indexes on frequently queried columns, and complex JOIN queries for analytics' },
        { name: 'Sequelize ORM', desc: 'ChatPlusBot: Defined models for Users, Rooms, Messages, Media with associations (hasMany, belongsTo), hooks, and scopes' },
        { name: 'Sequelize CLI', desc: 'ChatPlusBot: Version-controlled migrations for schema changes, seeders for test data, and rollback support for deployments' },
        { name: 'Socket.IO', desc: 'ChatPlusBot: WebSocket server with room-based namespaces, event acknowledgments, binary streaming, and automatic reconnection' },
        { name: 'Redis', desc: 'ChatPlusBot: Session storage, pub/sub for horizontal scaling, rate limiting counters, and caching frequently accessed room data' },
        { name: 'RabbitMQ', desc: 'ChatPlusBot: Message queue for async tasks like email notifications, AI response generation, and media processing jobs' },
        { name: 'AWS S3', desc: 'ChatPlusBot: Presigned URLs for secure direct uploads, organized bucket structure (/rooms/{id}/media/), lifecycle policies for cleanup' },
        { name: 'MySQL', desc: 'Degree Coordinator: Relational schema for courses, requirements, student progress tracking, and graduation eligibility calculations' },
        { name: 'Docker Compose', desc: 'ChatPlusBot & GetItDone: Multi-container dev environments with PostgreSQL, Redis, and app services with volume mounts' },
        { name: 'pandas', desc: 'MoodCurve: Data manipulation for 60+ playlists, feature engineering with 30+ audio attributes, and preprocessing pipelines' },
        { name: 'numpy', desc: 'MoodCurve: Numerical operations for transition scoring, statistical analysis, and array operations in ML pipeline' },
        { name: 'Spotify Web API', desc: 'MoodCurve: Automated extraction of audio features (tempo, energy, key, mode) from playlists with rate limiting and error handling' },
        { name: 'Matplotlib & Seaborn', desc: 'MoodCurve: Multi-panel dashboards visualizing transition quality, energy flow, tempo changes, and model diagnostics' },
      ]
    },
    security: {
      title: 'SECURITY & AUTH',
      color: 'orange',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
      ),
      skills: [
        { name: 'AWS Cognito', desc: 'ChatPlusBot & GetItDone: User pools with MFA, password policies, email verification flows, and OAuth2 token management' },
        { name: 'JWT Validation', desc: 'ChatPlusBot: Custom Express middleware verifying Cognito JWTs, extracting claims, and attaching user to request context' },
        { name: 'WebSocket Auth', desc: 'ChatPlusBot: Token verification on socket handshake, automatic disconnection on token expiry, and secure room join validation' },
        { name: 'Auth0', desc: 'Degree Coordinator: External identity provider with role-based access (student vs admin), silent token refresh, and SSO support' },
        { name: 'Helmet.js', desc: 'ChatPlusBot: HTTP security headers (CSP, HSTS, X-Frame-Options), preventing XSS, clickjacking, and MIME sniffing attacks' },
        { name: 'CORS Config', desc: 'ChatPlusBot: Whitelist-based origin validation, credentials support for cookies, and preflight caching for performance' },
        { name: 'Rate Limiting', desc: 'ChatPlusBot: Redis-backed request throttling per user/IP, preventing brute force attacks and API abuse' },
        { name: 'Input Validation', desc: 'ChatPlusBot & GetItDone: Joi/Zod schemas for request body validation, SQL injection prevention, and XSS sanitization' },
      ]
    }
  }

  const colorClasses = {
    purple: {
      text: 'text-purple-400',
      bg: 'bg-purple-500',
      bgLight: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      hover: 'hover:border-purple-500/50 hover:bg-purple-500/5',
    },
    cyan: {
      text: 'text-cyan-400',
      bg: 'bg-cyan-500',
      bgLight: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      hover: 'hover:border-cyan-500/50 hover:bg-cyan-500/5',
    },
    emerald: {
      text: 'text-emerald-400',
      bg: 'bg-emerald-500',
      bgLight: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      hover: 'hover:border-emerald-500/50 hover:bg-emerald-500/5',
    },
    orange: {
      text: 'text-orange-400',
      bg: 'bg-orange-500',
      bgLight: 'bg-orange-500/10',
      border: 'border-orange-500/30',
      hover: 'hover:border-orange-500/50 hover:bg-orange-500/5',
    },
  }

  const handleSkillClick = (categoryKey, skillName) => {
    const key = `${categoryKey}-${skillName}`
    setSelectedSkill(selectedSkill === key ? null : key)
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-20 md:mb-28">
        <div className="mb-4 inline-block animate-fade-in-up">
          <span className="px-3 py-1 text-sm font-mono text-gray-400 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            AVAILABLE FOR HIRE
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 md:mb-8 animate-fade-in-up">
          <span className="block text-white">LOVE</span>
          <span className="block text-white">PAVLICEK</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-light text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100">
          Full-Stack Developer building modern, scalable web applications with Django, React & AWS.
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-fade-in-up animate-delay-200">
          <a 
            href="https://www.linkedin.com/in/pavliceklove/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-white text-black font-medium overflow-hidden transition-all hover:pr-12"
          >
            <span className="relative z-10">LINKEDIN</span>
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
          </a>
          <a 
            href="/resume.pdf" 
            download
            className="group px-8 py-4 bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 transition-all flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" x2="12" y1="15" y2="3"></line>
            </svg>
            RESUME
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-white/5 pt-16 md:pt-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest mb-4">
              <span>About</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 md:mb-8">
              Full-Stack Developer & CS Graduate
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-sm md:text-base lg:text-lg text-gray-400 font-light leading-relaxed">
              <p>
                Computer Science graduate from <span className="text-white font-medium">UT Permian Basin</span> with a perfect{' '}
                <span className="text-white font-medium">4.0 GPA</span>. Presidential List and Dean's List honoree throughout my academic career.
              </p>
              
              <p>
                My technical toolkit spans <span className="text-purple-400">Python, Java, C, JavaScript/TypeScript, and SQL</span>, with hands-on experience in both backend frameworks (Django, Django REST Framework) and frontend technologies (React, Tailwind CSS). I specialize in creating intuitive user interfaces while architecting robust server-side systems, integrating third-party APIs, and implementing <span className="text-emerald-400">secure authentication solutions</span>.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-8 pt-6 md:pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-mono">4.0<span className="text-xs md:text-sm text-gray-500 ml-0.5 md:ml-1">/ 4.0</span></div>
                <div className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500">GPA</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-mono">4</div>
                <div className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500">Projects</div>
              </div>
            </div>
          </div>
          
          {/* Right - Profile Image */}
          <div className="w-full md:w-1/3 aspect-[3/4] relative group animate-fade-in-up animate-delay-200">
            <div className="absolute inset-0 border border-white/10 z-20"></div>
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/50 z-30"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/50 z-30"></div>
            <div className="relative h-full w-full overflow-hidden bg-[#111]">
              <img 
                src="/images/profile.png" 
                alt="Love Pavlicek" 
                className="h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 hover:grayscale-0 filter contrast-125"
              />
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[url('/scanline.png')] opacity-10 pointer-events-none z-10 mix-blend-overlay"></div>
              {/* Animated scan line */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[50%] w-full animate-scan pointer-events-none z-10"></div>
              {/* Bottom info */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="flex justify-between items-end">
                  <div className="font-mono text-[10px] text-white/60">
                    ID: LP-2025<br/>
                    STATUS: ONLINE
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 animate-pulse">
                    <path d="M12 20v2"></path>
                    <path d="M12 2v2"></path>
                    <path d="M17 20v2"></path>
                    <path d="M17 2v2"></path>
                    <path d="M2 12h2"></path>
                    <path d="M2 17h2"></path>
                    <path d="M2 7h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="M20 17h2"></path>
                    <path d="M20 7h2"></path>
                    <path d="M7 20v2"></path>
                    <path d="M7 2v2"></path>
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Arsenal Section */}
      <section className="mt-20 md:mt-28 border-t border-white/5 pt-16 md:pt-24">
        <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
            <line x1="6" x2="6.01" y1="6" y2="6"></line>
            <line x1="6" x2="6.01" y1="18" y2="18"></line>
          </svg>
          <span>Tech_Stack</span>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
          TECHNICAL ARSENAL
        </h3>
        <p className="text-gray-500 text-sm mb-10 md:mb-16">Click on any technology to see where it was used.</p>
        
        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
          {Object.entries(skillCategories).map(([key, category]) => {
            const colors = colorClasses[category.color]
            return (
              <div key={key} className="relative p-4 md:p-6 lg:p-8 bg-[#111] border transition-all duration-300 border-white/10 hover:border-white/20">
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className={`p-2 md:p-3 bg-white/5 border border-white/10 rounded-sm ${colors.text} shrink-0`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base lg:text-lg font-bold text-white tracking-wide">{category.title}</h3>
                      <div className="flex items-center gap-1 md:gap-2 mt-1">
                        <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${colors.bg}`}></span>
                        <span className="text-[9px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest whitespace-nowrap">
                          {category.skills.length} TECHNOLOGIES
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Skills as clickable tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isSelected = selectedSkill === `${key}-${skill.name}`
                    return (
                      <div key={skill.name} className="flex flex-col">
                        <button
                          onClick={() => handleSkillClick(key, skill.name)}
                          className={`px-3 py-1.5 text-xs font-mono rounded border transition-all duration-200 ${
                            isSelected 
                              ? `${colors.bgLight} ${colors.border} ${colors.text}` 
                              : `bg-white/5 border-white/10 text-gray-400 ${colors.hover}`
                          }`}
                        >
                          {skill.name}
                        </button>
                        {isSelected && (
                          <div className={`mt-2 p-2 text-xs ${colors.text} bg-black/40 rounded border ${colors.border} animate-fade-in-up`}>
                            {skill.desc}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
                
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20"></div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default About
