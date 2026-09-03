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
        <div ref={ref}>
            <div
                className={`p-4 rounded-lg border border-border hover:bg-muted/30 transition-all duration-700 ease-out group ${isInView
                        ? 'opacity-100 translate-x-0'
                        : index % 2 === 0
                            ? 'opacity-0 -translate-x-full'
                            : 'opacity-0 translate-x-full'
                    }`}
                style={{ transitionDelay: `${index * 100}ms` }}
            >
                <div className="flex items-start justify-between gap-3 mb-1">
                    <div>
                        <p className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                            {year}
                        </p>
                        <h3 className="font-semibold group-hover:text-foreground transition-colors">
                            {title}
                        </h3>
                    </div>
                    <span className="flex-shrink-0 text-xs px-2 py-1 rounded-full border border-border text-muted-foreground whitespace-nowrap">
                        {type}
                    </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                    {company}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}