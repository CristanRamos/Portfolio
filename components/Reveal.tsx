'use client'

import { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface RevealProps {
    children: ReactNode
    className?: string
    delay?: number
    direction?: 'up' | 'left' | 'right'
}

export default function Reveal({ children, className = '', delay = 0, direction = 'up' }: RevealProps) {
    const { ref, isInView } = useInView()

    const hiddenClass =
        direction === 'left'
            ? '-translate-x-12'
            : direction === 'right'
                ? 'translate-x-12'
                : 'translate-y-8'

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${hiddenClass}`
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}