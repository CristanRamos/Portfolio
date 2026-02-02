import { Code, Database, Wrench, Terminal, Layers, Server, Palette, Boxes } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Palette,
      skills: ['React', 'Next.js', 'Flutter', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Backend & Database',
      icon: Server,
      skills: ['Supabase', 'MySQL', 'SQL', 'REST APIs', 'Authentication'],
    },
    {
      title: 'Languages',
      icon: Code,
      skills: ['JavaScript', 'TypeScript', 'Dart', 'SQL', 'HTML/CSS'],
    },
    {
      title: 'Tools & Platforms',
      icon: Boxes,
      skills: ['Git', 'GitHub', 'VS Code', 'Firebase', 'Vercel', 'npm'],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Layers className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Skills
            </h2>
          </div>
          <p className="text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon
            
            return (
              <div 
                key={category.title} 
                className="space-y-3 group p-6 rounded-lg border border-transparent hover:border-border hover:bg-muted/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-lg group-hover:text-foreground transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors pl-13">
                  {category.skills.join(' · ')}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
