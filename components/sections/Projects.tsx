'use client'

import { useState } from 'react'
import { ExternalLink, Github, Code2, Smartphone, Globe, Database as DatabaseIcon, ArrowUpRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface Project {
  id: number
  title: string
  description: string
  detailedDescription: string
  technologies: string[]
  category: string
  highlights: string[]
  githubLink?: string
  demoLink?: string
  icon: any
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'Water Quality Monitoring System',
      category: 'Full-Stack Web & Mobile',
      description: 'A comprehensive full-stack solution for real-time water quality monitoring and data visualization.',
      detailedDescription: 'Developed a complete full-stack monitoring system that tracks water quality parameters in real-time. The system features a responsive web dashboard built with React and a mobile application developed using Flutter, both connected to a MySQL database for centralized data management.',
      technologies: ['React', 'Flutter', 'MySQL', 'JavaScript', 'Dart'],
      icon: DatabaseIcon,
      highlights: [
        'Full-stack architecture with web and mobile interfaces',
        'Real-time data visualization and monitoring dashboards',
        'Robust database design and architecture for scalable data management',
        'Cross-platform mobile application for field data collection',
        'RESTful API for seamless communication between platforms',
      ],
      githubLink: 'https://github.com/CristanRamos',
    },
    {
      id: 2,
      title: 'Barangay Complaint Web System',
      category: 'Web Application',
      description: 'A streamlined case management system designed for local government units to handle citizen complaints efficiently.',
      detailedDescription: 'Created a comprehensive web-based complaint management system for barangay (local government) operations. The system digitalizes the entire complaint lifecycle from submission to resolution, improving transparency and efficiency in local governance.',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5'],
      icon: Globe,
      highlights: [
        'Intuitive complaint submission and tracking interface',
        'Role-based access control for administrators and citizens',
        'Real-time status updates and notification system',
        'Responsive design for accessibility on all devices',
        'Improved case processing efficiency for local government staff',
      ],
      githubLink: 'https://github.com/CristanRamos',
    },
    {
      id: 3,
      title: 'Digital Entry Pass Application',
      category: 'Mobile Application',
      description: 'A seamless cross-platform mobile application for digital access management and validation.',
      detailedDescription: 'Engineered a mobile-first digital entry pass system using Flutter and Supabase. The application provides secure authentication, real-time validation, and seamless user experience for managing access permissions in various environments.',
      technologies: ['Flutter', 'Supabase', 'Dart', 'Firebase Auth'],
      icon: Smartphone,
      highlights: [
        'Cross-platform mobile experience (iOS & Android)',
        'Integrated Supabase for backend services and real-time database',
        'Secure authentication and authorization system',
        'Real-time pass validation and verification',
        'Offline-capable with local data caching',
        'QR code generation and scanning functionality',
      ],
      githubLink: 'https://github.com/CristanRamos',
    },
    {
      id: 4,
      title: 'School Reports and Violation Management System',
      category: 'Web Application',
      description: 'A dynamic web-based system for managing student records, reports, and disciplinary actions.',
      detailedDescription: 'Developed a comprehensive school management system that centralizes student records, incident reports, and violation tracking. The platform improves administrative efficiency by providing a unified digital solution for managing student behavior and academic records.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      icon: Code2,
      highlights: [
        'Centralized digital platform for school administration',
        'Student record management with search and filter capabilities',
        'Violation tracking and reporting system',
        'Automated report generation and analytics',
        'Improved administrative efficiency through digital transformation',
        'User-friendly interface for non-technical staff',
      ],
      githubLink: 'https://github.com/CristanRamos',
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Projects
          </h2>
          <p className="text-muted-foreground">
            Selected development work
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <Card 
                key={project.id} 
                className="border-none shadow-none hover:bg-muted/50 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader className="px-0">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="shrink-0 group-hover:border-primary transition-colors">
                          {project.category.split(' ')[0]}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-0 pl-16">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    )).reduce((prev, curr) => [prev, ' · ', curr] as any)}
                  </div>
                </CardContent>

                <CardFooter className="px-0 pl-16 gap-2">
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project)
                    }} 
                    variant="ghost"
                    size="sm"
                    className="h-8 hover:bg-transparent hover:text-foreground"
                  >
                    Details →
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="h-8 hover:bg-transparent hover:text-foreground"
                    asChild
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={14} className="mr-1" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription>
                  {selectedProject.detailedDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 py-4">
                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium mb-2">
                    Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    {selectedProject.technologies.join(' · ')}
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="text-sm font-medium mb-2">
                    Highlights
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">·</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                {selectedProject.githubLink && (
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2" size={14} />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
