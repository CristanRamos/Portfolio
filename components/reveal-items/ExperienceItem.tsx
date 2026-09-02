'use client'

import { useInView } from '@/hooks/useInView'

interface ExperienceItemProps {
    title: string
    company: string
    year: string
    type: string
    description: string
    index: number
}

export default function ExperienceItem({ title, company, year, type, description, index }: ExperienceItemProps) {
    const { ref, isInView } = useInView<HTMLDivElement>()

    return (
        <div
            ref={ref}
            className={`flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/30 transition-all duration-700 ease-out group ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="flex-shrink-0 w-16 text-right">
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {year}
                </span>
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="font-semibold mb-1 group-hover:text-foreground transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                    {company}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </div>
            <div className="flex-shrink-0 hidden sm:flex items-start">
                <span className="text-xs px-2 py-1 rounded-full border border-border text-muted-foreground">
                    {type}
                </span>
            </div>
        </div>
    )
}