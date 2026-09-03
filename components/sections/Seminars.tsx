'use client'

import { GraduationCap as SeminarIcon } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { useInView } from '@/hooks/useInView'

const seminars = [
    {
        title: 'Tech4All – Web Development Seminar Series',
        subtitle: 'Front-End to Full-Stack Development',
    },
    {
        title: 'CIT Congress',
        subtitle: 'Series of seminars, hands-on workshops, and research presentations on Computer Science and IT',
    },
    {
        title: 'The Double-Edged Sword',
        subtitle: 'Navigating Cybersecurity in an Age of Digital Insecurity',
    },
    {
        title: 'Onboarding the Next Generation of Users Onto Web3',
        subtitle: '',
    },
    {
        title: 'Making the Move with Aptos',
        subtitle: '',
    },
    {
        title: 'I Had No Idea What I Was Doing … Until I Did',
        subtitle: 'My Cloud Journey',
    },
    {
        title: 'IT Infrastructure Overview in a Semiconductor Company',
        subtitle: '',
    },
]

function SeminarItem({ title, subtitle, index }: { title: string; subtitle: string; index: number }) {
    const { ref, isInView } = useInView<HTMLDivElement>()

    return (
        <div ref={ref} className="h-full">
            <div
                className={`h-full flex flex-col p-4 rounded-lg border border-border hover:bg-muted/30 transition-all duration-700 ease-out ${isInView
                    ? 'opacity-100 translate-x-0'
                    : index % 2 === 0
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                    }`}
                style={{ transitionDelay: `${index * 80}ms` }}
            >
                <p className="font-medium text-sm">{title}</p>
                {subtitle && (
                    <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
                )}
                <p className="text-xs text-muted-foreground mt-auto pt-2">National University Dasmariñas</p>
            </div>
        </div>
    )
}

export default function Seminars() {
    return (
        <section id="seminars" className="py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <SeminarIcon className="w-5 h-5" />
                            Seminars &amp; Workshops
                        </h2>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-stretch">
                    {seminars.map((seminar, index) => (
                        <SeminarItem key={seminar.title} title={seminar.title} subtitle={seminar.subtitle} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}