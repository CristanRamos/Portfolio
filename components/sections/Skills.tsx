import { Code, Server, Layers, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML', 'CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'PHP', 'Laravel', 'PostgreSQL', 'MongoDB', 'MySQL', 'REST APIs'],
    },
    {
      title: 'DevOps & Cloud',
      skills: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Vercel', 'Firebase'],
    },
  ]

  return (
    <section id="skills" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Layers className="w-5 h-5" />
            Tech Stack
          </h2>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Skills Grid */}
        <div className="space-y-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-muted hover:bg-muted/70 transition-colors border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
