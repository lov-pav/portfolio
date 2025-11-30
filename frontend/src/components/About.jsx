function About() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10">
        <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
        
        <div className="space-y-4 text-gray-200 leading-relaxed">
          <p>
            Full-stack developer and Computer Science student with a passion for building modern, scalable web applications. 
            Experienced in developing end-to-end solutions using Django, React, TypeScript, and PostgreSQL, with expertise 
            in RESTful API design, cloud services (AWS), and containerized deployments.
          </p>
          
          <p>
            My technical toolkit includes Python, Java, C, JavaScript/TypeScript, and SQL, with hands-on experience in both 
            backend frameworks (Django, Django REST Framework) and frontend technologies (React, Tailwind CSS). I specialize 
            in creating intuitive user interfaces while architecting robust server-side systems, integrating third-party APIs, 
            and implementing secure authentication solutions.
          </p>
          
          <p>
            Recent projects include developing a full-stack productivity application featuring AWS Cognito authentication, 
            real-time notifications, and a responsive glassmorphic UI—demonstrating my ability to deliver production-ready 
            applications from database design through deployment.
          </p>
          
          <p>
            Maintaining a <span className="font-bold text-[#ff10f0]">4.0 GPA</span> throughout my academic career while 
            building practical, real-world applications. Fluent in English and committed to writing clean, maintainable code 
            that solves real problems.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <h3 className="text-2xl font-semibold text-white mb-4">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'SQL',
              'Django', 'React', 'PostgreSQL', 'AWS', 'Docker', 'Tailwind CSS',
              'RESTful APIs', 'Git', 'MySQL', 'PHP'
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-[#ff10f0]/20 text-[#ff10f0] rounded-full text-sm font-medium border border-[#ff10f0]/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

