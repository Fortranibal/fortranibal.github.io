'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, ArrowUpRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Badge } from '@/components/ui/badge'
import { ProjectThumbnail } from '@/components/ProjectThumbnail'
import { getFeaturedProjects } from '@/data/projects'

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false })

const experience = [
  {
    company: 'Rocket Lab',
    role: 'GNC Engineer',
    period: '2025 —',
    location: 'Auckland, New Zealand',
    description: 'Trajectory optimization and mission design for Electron launches. 3DOF/6DOF analysis, Monte Carlo simulations, and Mission Control operations.',
  },
  {
    company: 'Reflektion',
    role: 'Founder',
    period: '2025 —',
    location: 'tryreflektion.com',
    description: 'Building an AI mental wellness companion with voice and text conversations, long-term memory, structured insights, and multi-language support.',
    link: 'https://tryreflektion.com',
  },
  {
    company: 'German Aerospace Center (DLR)',
    role: 'Student Researcher',
    period: '2024',
    location: 'Munich, Germany',
    description: 'Computer vision pipeline for autonomous asteroid navigation and 3D reconstruction. IEEE Aerospace Conference 2025 Track Best Paper.',
  },
  {
    company: 'WARR Rocketry',
    role: 'Project Co-Lead & Simulations Lead',
    period: '2023 — 2024',
    location: 'Munich, Germany',
    description: "Led Europe's first student-developed staged rocket. Developed WSPR 6-DOF simulation tool. 3rd place at Spaceport America Cup 2024.",
  },
  {
    company: 'Asteroid Mining Corporation',
    role: 'Special Operations Intern',
    period: '2022',
    location: 'London, UK',
    description: 'Market research and techno-economic feasibility studies for near-Earth asteroid mining operations.',
  },
]

const education = [
  {
    institution: 'Technical University of Munich (TUM)',
    degree: 'M.Sc. Aerospace',
    field: 'Space Engineering & Computer Science',
    period: '2022 — 2024',
  },
  {
    institution: 'Technical University of Madrid (UPM)',
    degree: 'B.Eng. Aerospace Engineering',
    field: 'Aerospace Science & Technologies',
    period: '2017 — 2022',
  },
]

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Home() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">
            Aníbal Guerrero Hernandez
          </span>
          <div className="flex items-center gap-5">
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <div className="flex items-center gap-3">
              <Link href="https://github.com/Fortranibal" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-[18px] w-[18px]" />
              </Link>
              <Link href="https://linkedin.com/in/anibal-guerrero" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-[18px] w-[18px]" />
              </Link>
              <Link href="https://x.com/fortranibal" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-muted-foreground hover:text-foreground transition-colors">
                <XIcon className="h-[18px] w-[18px]" />
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6">
        {/* Hero */}
        <section className="pt-20 pb-16">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
                Aníbal Guerrero<br />Hernandez
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Aerospace Engineer · AI Enthusiast
              </p>
              <p className="text-[15px] leading-relaxed text-foreground/80 max-w-lg">
                GNC Engineer at Rocket Lab and founder of{' '}
                <Link href="https://tryreflektion.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Reflektion
                </Link>
                , an AI mental wellness companion. Previously researcher at the German Aerospace
                Center (DLR) and co-lead at WARR Rocketry. Passionate about autonomous navigation,
                space missions, and the intersection of aerospace and AI.
              </p>
            </div>
            <div className="shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 relative rounded-full overflow-hidden ring-2 ring-border">
                <Image
                  src="/media/shared/pfp.jpeg"
                  alt="Aníbal Guerrero Hernandez"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border/60" />

        {/* Experience */}
        <section className="py-16">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-8">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((item) => (
              <div key={item.company + item.role} className="group">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                  <div>
                    {item.link ? (
                      <Link href={item.link} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary transition-colors">
                        {item.company} ↗
                      </Link>
                    ) : (
                      <span className="font-medium text-foreground">{item.company}</span>
                    )}
                    <span className="text-muted-foreground"> · {item.role}</span>
                  </div>
                  <span className="text-sm text-muted-foreground shrink-0">{item.period}</span>
                </div>
                <p className="text-sm text-foreground/60 mb-1">{item.location}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border/60" />

        {/* Selected Projects */}
        <section className="py-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Selected Projects
            </h2>
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              View all <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-lg border border-border/60 bg-card p-5 hover:border-border transition-colors"
              >
                <div className={`relative w-full h-36 mb-4 rounded-md overflow-hidden ${project.media.objectFit === 'contain' ? 'bg-black' : 'bg-muted'}`}>
                  <ProjectThumbnail project={project} />
                </div>
                <h3 className="font-medium text-foreground text-[15px] mb-1.5 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-[11px] px-2 py-0.5 font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mt-3 transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Source
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border/60" />

        {/* Education */}
        <section className="py-16">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-8">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((item) => (
              <div key={item.institution}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <span className="font-medium text-foreground">{item.institution}</span>
                  <span className="text-sm text-muted-foreground shrink-0">{item.period}</span>
                </div>
                <p className="text-sm text-foreground/70">
                  {item.degree} · {item.field}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aníbal Guerrero Hernandez
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/Fortranibal" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-[18px] w-[18px]" />
            </Link>
            <Link href="https://linkedin.com/in/anibal-guerrero" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-[18px] w-[18px]" />
            </Link>
            <Link href="https://x.com/fortranibal" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-muted-foreground hover:text-foreground transition-colors">
              <XIcon className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
