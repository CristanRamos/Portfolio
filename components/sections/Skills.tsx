'use client'

import { Layers } from 'lucide-react'
import {
  SiJavascript, SiReact, SiTailwindcss, SiHtml5, SiFlutter, SiDart,
  SiBootstrap, SiNodedotjs, SiPhp, SiPostgresql, SiMongodb, SiMysql,
  SiPostman, SiVercel, SiFirebase, SiGit, SiSupabase,
} from 'react-icons/si'
import { FaAws, FaCss3Alt } from 'react-icons/fa'
import Reveal from '@/components/Reveal'
import { useInView } from '@/hooks/useInView'

function SkillCategoryBlock({ title, skills, index }: { title: string; skills: { name: string; icon: any }[]; index: number }) {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`space-y-3 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map(({ name, icon: Icon }) => (
          <span
            key={name}
            className="px-3 py-1.5 text-sm rounded-full bg-muted hover:bg-primary/10 hover:border-primary/40 transition-colors border border-border flex items-center gap-2"
          >
            <Icon className="w-4 h-4" aria-hidden />
            <span>{name}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'React', icon: SiReact },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'HTML', icon: SiHtml5 },
        { name: 'CSS', icon: FaCss3Alt },
        { name: 'Flutter', icon: SiFlutter },
        { name: 'Dart', icon: SiDart },
        { name: 'Bootstrap', icon: SiBootstrap },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'PHP', icon: SiPhp },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'MySQL', icon: SiMysql },
        { name: 'REST APIs', icon: SiPostman },
      ],
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', icon: FaAws },
        { name: 'Vercel', icon: SiVercel },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'Git', icon: SiGit },
        { name: 'Supabase', icon: SiSupabase },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Layers className="w-5 h-5" />
              Tech Stack
            </h2>
          </div>
        </Reveal>

        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryBlock key={category.title} title={category.title} skills={category.skills} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}