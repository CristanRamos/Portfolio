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
        <div
            ref={ref}
            className={`flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/30 transition-all duration-700 ease-out group ${isInView
                    ? 'opacity-100 translate-x-0'
                    : index % 2 === 0
                        ? 'opacity-0 -translate-x-12'
                        : 'opacity-0 translate-x-12'
                }`}
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
                    {school}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}