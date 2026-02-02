import { Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Contact Info */}
          <div className="space-y-2 text-sm text-muted-foreground">
            <a
              href="mailto:ramoscristan4@gmail.com"
              className="block hover:text-foreground transition-all hover:translate-x-1"
            >
              ramoscristan4@gmail.com
            </a>
            <a
              href="tel:+639296218192"
              className="block hover:text-foreground transition-all hover:translate-x-1"
            >
              0929-621-8192
            </a>
            <a
              href="https://github.com/CristanRamos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-all hover:translate-x-1 group"
            >
              <Github size={14} className="group-hover:rotate-12 transition-transform" />
              GitHub
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p>&copy; {currentYear} Cristan Ramos</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
