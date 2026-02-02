import { Award, Database, GraduationCap, Briefcase, Code2, ChevronRight } from 'lucide-react'

export default function About() {
  const experiences = [
    {
      title: 'QA and Full Stack Web Developer',
      company: 'Kalamansi Studios Inc.',
      year: '2025',
      description: 'Developing and maintaining web applications using AWS and its components. Ensuring quality through comprehensive testing.'
    },
    {
      title: 'Software Engineering Lead',
      company: 'Junior Philippines Computer Society',
      year: '2024',
      description: 'Engineered and managed a web-based event registration system that successfully processed over 200 participant sign-ups.'
    },
    {
      title: 'BS Information Technology',
      company: 'National University - Dasmariñas',
      year: '2019',
      description: 'Specialization in Web and App Development · GPA: 3.1'
    },
  ]

  const certifications = [
    { name: 'IT Specialist - Databases', issuer: 'Certiport' },
    { name: 'IT Specialist - HTML and CSS', issuer: 'Certiport' },
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
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-muted/50 transition-colors flex-shrink-0">
                  {cert.name.includes('Database') ? (
                    <Database className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <Code2 className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium group-hover:text-foreground transition-colors">
                    {cert.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
