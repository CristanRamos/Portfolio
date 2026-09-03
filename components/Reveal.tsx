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
            ? '-translate-x-full'
            : direction === 'right'
                ? 'translate-x-full'
                : 'translate-y-16'

    return (
        <div ref={ref}>
            <div
                className={`transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${hiddenClass}`
                    } ${className}`}
                style={{ transitionDelay: `${delay}ms` }}
            >
                {children}
            </div>
        </div>
    )
}