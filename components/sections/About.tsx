import { Award, Database, GraduationCap, Briefcase, Code2, ClipboardList, ChevronRight } from 'lucide-react'

export default function About() {
  const experiences = [
    {
      title: 'QA and Full Stack Web Developer',
      company: 'Kalamansi Studios Inc.',
      year: '2025',
      type: 'Full-time',
      description: 'Developing and maintaining web applications using AWS and its components. Ensuring quality through comprehensive testing.'
    },
    {
      title: 'Team Lead - Event Registration System',
      company: 'Junior Philippines Computer Society',
      year: '2024',
      type: 'Project',
      description: 'Engineered and managed a web-based event registration system that successfully processed over 200 participant sign-ups.'
    },
  ]

  const education = [
    {
      title: 'BS Information Technology',
      school: 'National University - Dasmariñas',
      year: '2019',
      description: 'Specialization in Web and App Development · GPA: 3.1'
    },
  ]

  // Add a real credentialUrl per cert if you have one (Credly/Certiport verify link).
  // Rows without a credentialUrl render as plain (non-clickable) cards, no chevron.
  const certifications = [
    { name: 'IT Specialist - Databases', issuer: 'Certiport', icon: Database, credentialUrl: '' },
    { name: 'IT Specialist - HTML and CSS', issuer: 'Certiport', icon: Code2, credentialUrl: '' },
    { name: 'IT Specialist - Project Management', issuer: 'Certiport', icon: ClipboardList, credentialUrl: '' },
  ]

  return (
    <section id="about" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Experience Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Experience
            </h2>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors group"
              >
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {exp.year}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-1 group-hover:text-foreground transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                <div className="flex-shrink-0 hidden sm:flex items-start">
                  <span className="text-xs px-2 py-1 rounded-full border border-border text-muted-foreground">
                    {exp.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Education
            </h2>
          </div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors group"
              >
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {edu.year}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-1 group-hover:text-foreground transition-colors">
                    {edu.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.school}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Award className="w-5 h-5" />
              Recent Certifications
            </h2>
          </div>

          <div className="space-y-3">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              const isLinked = Boolean(cert.credentialUrl)
              const Wrapper = isLinked ? 'a' : 'div'
              const wrapperProps = isLinked
                ? { href: cert.credentialUrl, target: '_blank', rel: 'noopener noreferrer' }
                : {}

              return (
                <Wrapper
                  key={index}
                  {...wrapperProps}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-muted/50 transition-colors flex-shrink-0">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium group-hover:text-foreground transition-colors">
                      {cert.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                  {isLinked && (
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  )}
                </Wrapper>
              )
            })}
          </div>

          {/* LinkedIn Link Section */}
          <div className="mt-6 pt-4 border-t border-border/50 text-center">
            <a
              href="https://www.linkedin.com/in/cristan-ramos-837763306"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <span>Check my LinkedIn account for my certifications</span>
              <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}