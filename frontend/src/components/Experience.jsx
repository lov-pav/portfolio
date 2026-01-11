function Experience() {
  const timelineItems = [
    {
      id: 1,
      type: 'honors',
      period: '2023 — 2025',
      title: 'Academic Honors & Recognition',
      institution: 'UT Permian Basin',
      location: 'Odessa, TX',
      points: [
        "President's List: Fall 2023, Spring 2024, Fall 2024, Spring 2025.",
        'Maintained a perfect 4.0 GPA throughout undergraduate career.',
        'Graduated Summa Cum Laude.',
        'Chevron Legacy Scholar recipient.',
      ],
      side: 'left',
    },
    {
      id: 2,
      type: 'education',
      period: 'AUG 2023 — DEC 2025',
      title: 'Bachelor of Science in Computer Science',
      institution: 'UT Permian Basin',
      location: 'Odessa, TX',
      gpa: '4.0',
      points: [
        'Built 4 full-stack applications including ChatPlusBot (real-time chat with AI), GetItDone (productivity platform), MoodCurve (ML playlist analysis), and Degree Coordinator.',
        'Technologies: React, Django, Express.js, PostgreSQL, AWS, Docker, Socket.IO, scikit-learn.',
        'Specialized in full-stack development, database design, and secure authentication systems.',
      ],
      side: 'right',
    },
    {
      id: 3,
      type: 'work',
      period: 'JUN 2024 — AUG 2024',
      title: 'IT Technician',
      institution: 'UT Permian Basin',
      location: 'Odessa, TX',
      points: [
        'Provided technical support to students, faculty, and staff.',
        'Troubleshot hardware and software issues across campus.',
        'Conducted system maintenance and managed IT assets.',
        'Created documentation and training materials.',
      ],
      side: 'left',
    },
    {
      id: 4,
      type: 'education',
      period: 'JAN 2021 — DEC 2022',
      title: "Associate's Degree",
      institution: 'Odessa College',
      location: 'Odessa, TX',
      gpa: '4.0',
      points: [
        'Maintained a perfect 4.0 GPA throughout the program.',
        'Completed dual enrollment—managing college coursework alongside high school classes.',
        'Earned 62 college credits in just 4 semesters.',
        'Built strong foundation in mathematics, sciences, and general education.',
      ],
      side: 'right',
    },
  ]

  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
        )
      case 'work':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        )
      case 'honors':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
            <circle cx="12" cy="8" r="6"></circle>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
        <div className="flex items-center justify-center gap-2 mb-4 text-gray-500 text-xs uppercase tracking-widest">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>Timeline</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white tracking-tighter font-cyber">
          EXPERIENCE
        </h1>
        <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto font-light">
          A timeline of professional roles, education, and achievements.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700"></div>

        {/* Timeline items */}
        <div className="space-y-16 md:space-y-24">
          {timelineItems.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Center dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 z-10">
                <div className="w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-gray-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                </div>
              </div>

              {/* Card */}
              <div className={`flex ${item.side === 'left' ? 'justify-start pr-[52%]' : 'justify-end pl-[52%]'}`}>
                <div 
                  className="relative w-full max-w-lg bg-[#111]/80 border border-white/10 p-6 animate-fade-in-up cyber-card corner-accents"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Corner decorations */}
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20"></div>

                  {/* Date with icon */}
                  <div className="flex items-center gap-2 mb-3 text-gray-500">
                    {getIcon(item.type)}
                    <span className="text-xs font-mono-cyber tracking-wider">{item.period}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  {/* Institution & Location */}
                  <p className="text-gray-400 text-sm font-mono mb-4">
                    {item.institution} <span className="text-gray-600">|</span> {item.location}
                  </p>

                  {/* GPA Badge (if exists) */}
                  {item.gpa && (
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-mono-cyber text-[#ff10f0] bg-[#ff10f0]/10 border border-[#ff10f0]/30">
                      GPA: {item.gpa}
                    </div>
                  )}

                  {/* Points */}
                  <ul className="space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-gray-600 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
        </div>
      </div>
    </div>
  )
}

export default Experience
