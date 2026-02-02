import { Github, Mail, Phone, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          {/* Badge */}
          <Badge variant="outline" className="gap-1.5 animate-in fade-in duration-700">
            <Sparkles size={12} />
            <span>Available for opportunities</span>
          </Badge>

          {/* Name */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Cristan Ramos
            </h1>
            <div className="flex items-center gap-2 text-lg text-muted-foreground">
              <div className="h-px w-12 bg-border"></div>
              <span>Full-Stack Developer</span>
            </div>
          </div>

          {/* Specialization */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            BS Information Technology graduate specializing in <span className="text-foreground font-medium">Web and App Development</span>. 
            Building modern, scalable applications with React, Next.js, and Flutter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/CristanRamos"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Github className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t animate-in fade-in duration-700 delay-700">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Get in touch</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="mailto:ramoscristan4@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                ramoscristan4@gmail.com
              </a>
              <a
                href="tel:+639296218192"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Phone size={16} className="group-hover:scale-110 transition-transform" />
                0929-621-8192
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
