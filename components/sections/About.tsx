import { Award, GraduationCap, Briefcase, Database, Code2, ClipboardList } from 'lucide-react'
import Reveal from '@/components/Reveal'
import ExperienceItem from '@/components/reveal-items/ExperienceItem'
import EducationItem from '@/components/reveal-items/EducationItem'
import CertificationItem from '@/components/reveal-items/CertificationItem'

export default function About() {
  const experiences = [
    {
      title: 'QA and Full Stack Web Developer',
      company: 'Kalamansi Studios Inc.',
      year: '2025',
      type: 'Full-time',
      description: 'Developing and maintaining web applications using AWS and its components. Ensuring quality through comprehensive testing.'
    },
    {
      title: 'Team Lead - Event Registration System',
      company: 'Junior Philippines Computer Society',
      year: '2024',
      type: 'Project',
      description: 'Engineered and managed a web-based event registration system that successfully processed over 200 participant sign-ups.'
    },
  ]

  const education = [
    {
      title: 'BS Information Technology',
      school: 'National University - Dasmariñas',
      year: '2019',
      description: 'Specialization in Web and App Development · GPA: 3.1'
    },
  ]

  // Add a real credentialUrl per cert if you have one (Credly/Certiport verify link).
  // Rows without a credentialUrl render as plain (non-clickable) cards, no chevron.
  const certifications = [
    { name: 'IT Specialist - Databases', issuer: 'Certiport', icon: Database, credentialUrl: '' },
    { name: 'IT Specialist - HTML and CSS', issuer: 'Certiport', icon: Code2, credentialUrl: '' },
    { name: 'IT Specialist - Project Management', issuer: 'Certiport', icon: ClipboardList, credentialUrl: '' },
  ]

  return (
    <section id="about" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Experience Section */}
        <div className="mb-12">
          <Reveal>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Experience
              </h2>
            </div>
          </Reveal>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} index={index} />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <Reveal>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Education
              </h2>
            </div>
          </Reveal>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <EducationItem key={index} {...edu} index={index} />
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <Reveal>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Award className="w-5 h-5" />
                Recent Certifications
              </h2>
            </div>
          </Reveal>

          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <CertificationItem key={index} {...cert} index={index} />
            ))}
          </div>

          {/* LinkedIn Link Section */}
          <Reveal delay={certifications.length * 100}>
            <div className="mt-6 pt-4 border-t border-border/50 text-center">
              <a href="https://www.linkedin.com/in/cristan-ramos-837763306" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
                <span>Check my LinkedIn account for my certifications</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}