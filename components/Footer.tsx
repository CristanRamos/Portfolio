import { ArrowUp, Mail } from 'lucide-react'
import { SiGithub, SiLinkerd } from 'react-icons/si'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Cristan Ramos. All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            <a
              href="mailto:ramoscristan4@gmail.com"
              aria-label="Email"
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/CristanRamos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
            >
              <SiGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/cristan-ramos-837763306"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
            >
              <SiLinkerd className="w-4 h-4" />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}