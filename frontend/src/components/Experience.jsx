function Experience() {
  const experiences = [
    {
      title: 'IT Technician',
      company: 'The University of Texas Permian Basin',
      location: 'Odessa, Texas, United States',
      period: 'Jun 2024 - Aug 2024 · 3 mos',
      type: 'Part-time · On-site',
      description: 'Provided comprehensive technical support to students, faculty, and staff, ensuring seamless operation of computer systems and network connectivity across the campus. My role involved troubleshooting hardware and software issues, conducting regular system maintenance, and managing IT assets.',
      responsibilities: [
        'Troubleshooting hardware and software issues',
        'Conducting regular system maintenance',
        'Managing IT assets',
        'Creating user documentation and conducting training sessions to enhance IT literacy among users',
        'Collaborating with senior IT staff on new technology implementations',
        'Contributing to network upgrades'
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      <h2 className="text-4xl font-bold text-white mb-8">Experience</h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10 hover:border-[#ff10f0]/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,16,240,0.1)]"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
              <p className="text-[#ff10f0] text-lg font-semibold">{exp.company}</p>
              <p className="text-gray-400 text-sm mt-1">{exp.location} · {exp.type}</p>
              <p className="text-gray-400 text-sm">{exp.period}</p>
            </div>
            
            <p className="text-gray-200 mb-4 leading-relaxed">{exp.description}</p>
            
            <div>
              <h4 className="text-lg font-semibold text-[#ff10f0] mb-3">Key Responsibilities:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience

