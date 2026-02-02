import { Award, Database, GraduationCap, Users, Briefcase, Code2, BookOpen } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              About
            </h2>
          </div>
          <p className="text-muted-foreground">
            Background and experience
          </p>
        </div>

        <div className="space-y-12">
          {/* Education */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-medium group-hover:text-foreground transition-colors">Education</h3>
            </div>
            <div className="space-y-2 pl-13 border-l-2 border-border group-hover:border-primary transition-colors ml-5">
              <p className="font-medium">
                Bachelor of Science in Information Technology
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5" />
                Specialization in Web and App Development
              </p>
              <p className="text-sm text-muted-foreground">
                National University - Dasmariñas · GPA: 3.1
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-medium group-hover:text-foreground transition-colors">Experience</h3>
            </div>
            <div className="space-y-6 pl-13 border-l-2 border-border group-hover:border-primary transition-colors ml-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-muted-foreground" />
                  <p className="font-medium">
                    QA and Full Stack Web Developer
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Kalamansi Studios Inc.
                </p>
                <p className="text-sm text-muted-foreground">
                  Developing and maintaining web applications using AWS and its components. Ensuring quality through comprehensive testing and implementing scalable solutions for production environments.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-muted-foreground" />
                  <p className="font-medium">
                    Junior Philippines Computer Society - Dasmariñas Chapter
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Engineered and managed a web-based event registration system that successfully processed over 200 participant sign-ups, demonstrating strong technical implementation and project management skills.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-medium group-hover:text-foreground transition-colors">Certifications</h3>
            </div>
            <ul className="space-y-3 text-sm pl-13 ml-5">
              <li className="flex items-center gap-3 hover:text-foreground transition-colors cursor-default group/item">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover/item:bg-primary/10 transition-colors">
                  <Database className="w-4 h-4 text-muted-foreground group-hover/item:text-primary" />
                </div>
                <span>IT Specialist - Databases</span>
              </li>
              <li className="flex items-center gap-3 hover:text-foreground transition-colors cursor-default group/item">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover/item:bg-primary/10 transition-colors">
                  <Code2 className="w-4 h-4 text-muted-foreground group-hover/item:text-primary" />
                </div>
                <span>IT Specialist - HTML and CSS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
