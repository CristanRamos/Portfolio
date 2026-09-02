'use client'

import { ChevronRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

interface CertificationItemProps {
    name: string
    issuer: string
    icon: React.ElementType
    credentialUrl?: string
    index: number
}

export default function CertificationItem({ name, issuer, icon: Icon, credentialUrl, index }: CertificationItemProps) {
    const { ref, isInView } = useInView<HTMLDivElement>()
    const isLinked = Boolean(credentialUrl)
    const Wrapper = isLinked ? 'a' : 'div'
    const wrapperProps = isLinked
        ? { href: credentialUrl, target: '_blank', rel: 'noopener noreferrer' }
        : {}

    return (
        <Wrapper
            ref={ref as any}
            {...wrapperProps}
            className={`flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted/30 transition-all duration-700 ease-out group ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-muted/50 transition-colors flex-shrink-0">
                <Icon className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="font-medium group-hover:text-foreground transition-colors">
                    {name}
                </p>
                <p className="text-sm text-muted-foreground">
                    {issuer}
                </p>
            </div>
            {isLinked && (
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            )}
        </Wrapper>
    )
}