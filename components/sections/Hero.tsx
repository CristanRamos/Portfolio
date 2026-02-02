import { Github, Mail, Phone, ArrowRight, Sparkles, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"> </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
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
            BS Information Technology graduate working as a <span className="text-foreground font-medium">QA and Full Stack Web Developer</span> at Kalamansi Studios Inc.
            Specializing in building modern, scalable applications using <span className="text-foreground font-medium">AWS and its components</span>, React, Next.js, and Flutter.
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

            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/cristan-ramos-837763306"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Linkedin className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                LinkedIn
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

          {/* Right Column - Profile Picture */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-3"></div>
              
              {/* Image container */}
              {/* <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                  <Image
                    src="/images/Cristan2x2.jpg"
                    alt="Cristan Ramos - QA and Full Stack Web Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
