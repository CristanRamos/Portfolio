'use client'

import { useInView } from '@/hooks/useInView'

interface EducationItemProps {
    title: string
    school: string
    year: string
    description: string
    index: number
}

export default function EducationItem({ title, school, year, description, index }: EducationItemProps) {
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
                <p className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap mb-1">
                    {year}
                </p>
                <h3 className="font-semibold mb-1 group-hover:text-foreground transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                    {school}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}