import { Github, Mail, Phone, MapPin, Linkedin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          {/* Left Column - Profile Picture */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-56 h-56 lg:w-56 lg:h-56 lg:aspect-square">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border shadow-lg bg-muted">
                <Image
                  src="/images/Cristan2x2.jpg"
                  alt="Cristan Ramos"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-6">
            {/* Name and Title */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Cristan Ramos
              </h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin size={16} />
                <span>Dasmariñas, Philippines</span>
              </div>
              <p className="text-lg text-muted-foreground">
                QA | Full Stack Web Developer | Content Creator
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button size="default" className="group" asChild>
                <a href="mailto:ramoscristan4@gmail.com">
                  <Mail size={16} className="mr-2" />
                  Send Email
                </a>
              </Button>

              <Button size="default" variant="outline" asChild>
                <a href="tel:+639296218192">
                  <Phone size={16} className="mr-2" />
                  Schedule a Call
                </a>
              </Button>

              <Button size="default" variant="outline" asChild>
                <a href="#about">
                  Read my blog
                </a>
              </Button>
            </div>

            {/* Availability Badge */}
            <Badge variant="outline" className="w-fit">
              Available for opportunities
            </Badge>

            {/* About Description */}
            <div className="pt-4 border-t">
              <h2 className="text-xl font-semibold mb-3">About</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I&apos;m a full-stack web developer specializing in developing solutions with JavaScript, React, and AWS.
                I work on projects including building modern web applications, mobile apps, and implementing scalable cloud solutions.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                I&apos;ve helped startups grow and streamline their processes through software solutions as a QA and Full Stack Web Developer at Kalamansi Studios Inc.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                Lately, I&apos;ve been diving deeper into cloud technologies, focusing on AWS and its components to build robust, scalable applications.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="ghost" asChild>
                <a
                  href="https://github.com/CristanRamos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </Button>
              <Button size="sm" variant="ghost" asChild>
                <a
                  href="https://www.linkedin.com/in/cristan-ramos-837763306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
