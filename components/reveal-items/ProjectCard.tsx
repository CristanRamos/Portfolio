'use client'

import { ArrowUpRight } from 'lucide-react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useInView } from '@/hooks/useInView'

interface ProjectCardProps {
    title: string
    description: string
    category: string
    technologies: string[]
    icon: React.ElementType
    index: number
    onClick: () => void
}

export default function ProjectCard({ title, description, category, technologies, icon: Icon, index, onClick }: ProjectCardProps) {
    const { ref, isInView } = useInView<HTMLDivElement>()

    return (
        <Card
            ref={ref}
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onClick()
                }
            }}
            className={`group cursor-pointer hover:shadow-md hover:border-primary/40 transition-all duration-700 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isInView
                    ? 'opacity-100 translate-x-0 translate-y-0'
                    : index % 3 === 0
                        ? 'opacity-0 -translate-x-full'
                        : index % 3 === 1
                            ? 'opacity-0 translate-y-16'
                            : 'opacity-0 translate-x-full'
                }`}
        >
            <CardHeader className="p-4 pb-3">
                <div className="flex items-center justify-between mb-2">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <CardTitle className="text-base font-semibold group-hover:text-foreground transition-colors">
                    {title}
                </CardTitle>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {category}
                </p>
                <CardDescription className="text-sm mt-1">
                    {description}
                </CardDescription>
            </CardHeader>

            <CardFooter className="p-4 pt-0">
                <div className="flex flex-wrap gap-2">
                    {technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                            {tech}
                        </span>
                    ))}
                    {technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                            +{technologies.length - 3}
                        </span>
                    )}
                </div>
            </CardFooter>
        </Card>
    )
}