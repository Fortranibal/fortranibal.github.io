'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Github, ArrowUpRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Badge } from '@/components/ui/badge'
import { ProjectThumbnail } from '@/components/ProjectThumbnail'
import { SocialLinks } from '@/components/SocialLinks'
import { getFeaturedProjects } from '@/data/projects'
import { HOMEPAGE_PRESS, HOMEPAGE_PUBLICATIONS } from '@/lib/structured-data'

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false })

function AuthorList({
  authors,
}: {
  authors: readonly { readonly name: string; readonly isOwner?: boolean }[]
}) {
  return (
    <>
      {authors.map((author, index) => (
        <span key={author.name}>
          {index > 0 ? ', ' : null}
          {author.isOwner ? (
            <strong className="font-semibold text-foreground">{author.name}</strong>
          ) : (
            author.name
          )}
        </span>
      ))}
    </>
  )
}

type ExperienceItem = {
  company: string
  role: string
  period: string
  location: string
  description: string
  link?: string
  publication?: { href: string; label: string }
}

const experience: ExperienceItem[] = [
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
    description: 'Computer vision pipeline for autonomous asteroid navigation and 3D reconstruction.',
    publication: {
      href: 'https://doi.org/10.1109/AERO63441.2025.11068790',
      label: 'IEEE Aerospace Conference 2025 Track Best Paper',
    },
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

export function HomePage() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">
            Anibal Guerrero Hernandez
          </span>
          <div className="flex items-center gap-5">
            <Link
              href="#publications"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Publications
            </Link>
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <div className="flex items-center gap-3">
              <SocialLinks />
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
                Anibal Guerrero<br />Hernandez
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
                  alt="Anibal Guerrero Hernandez"
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
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {item.description}
                  {item.publication ? (
                    <>
                      {' '}
                      <Link
                        href={item.publication.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {item.publication.label}
                      </Link>
                      .
                    </>
                  ) : null}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border/60" />

        {/* Publications */}
        <section id="publications" className="py-16 scroll-mt-20">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-8">
            Publications
          </h2>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                <AuthorList authors={HOMEPAGE_PUBLICATIONS.aeroconf2025.authors} />
                {', '}
                &lsquo;
                <Link
                  href={HOMEPAGE_PUBLICATIONS.aeroconf2025.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {HOMEPAGE_PUBLICATIONS.aeroconf2025.title}
                </Link>
                &rsquo;, {HOMEPAGE_PUBLICATIONS.aeroconf2025.venue},{' '}
                {HOMEPAGE_PUBLICATIONS.aeroconf2025.pages}. DOI{' '}
                <Link
                  href={HOMEPAGE_PUBLICATIONS.aeroconf2025.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {HOMEPAGE_PUBLICATIONS.aeroconf2025.doi}
                </Link>
                {', '}
                <Link
                  href={HOMEPAGE_PUBLICATIONS.aeroconf2025.elibUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  DLR elib
                </Link>
                . {HOMEPAGE_PUBLICATIONS.aeroconf2025.awardLabel}.
              </p>
              <p className="text-sm text-foreground/60 leading-relaxed mt-2">
                Cited by:{' '}
                {HOMEPAGE_PUBLICATIONS.aeroconf2025.citedBy.authors}, &lsquo;
                <Link
                  href={HOMEPAGE_PUBLICATIONS.aeroconf2025.citedBy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {HOMEPAGE_PUBLICATIONS.aeroconf2025.citedBy.title}
                </Link>
                &rsquo; ({HOMEPAGE_PUBLICATIONS.aeroconf2025.citedBy.affiliation}).
              </p>
            </div>

            <div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                <AuthorList authors={HOMEPAGE_PUBLICATIONS.masterThesis.authors} />
                {', '}
                &lsquo;
                <Link
                  href={HOMEPAGE_PUBLICATIONS.masterThesis.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {HOMEPAGE_PUBLICATIONS.masterThesis.title}
                </Link>
                &rsquo;, {HOMEPAGE_PUBLICATIONS.masterThesis.kind},{' '}
                {HOMEPAGE_PUBLICATIONS.masterThesis.year}.
              </p>
            </div>

            <div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                <AuthorList authors={HOMEPAGE_PUBLICATIONS.studentThesis.authors} />
                {', '}
                &lsquo;
                <Link
                  href={HOMEPAGE_PUBLICATIONS.studentThesis.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {HOMEPAGE_PUBLICATIONS.studentThesis.title}
                </Link>
                &rsquo;, {HOMEPAGE_PUBLICATIONS.studentThesis.kind},{' '}
                {HOMEPAGE_PUBLICATIONS.studentThesis.year}.
              </p>
            </div>
          </div>

          <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mt-12 mb-6">
            In the press
          </h3>
          <div>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {HOMEPAGE_PRESS.diarioIbiza2024.publisher},{' '}
              {HOMEPAGE_PRESS.diarioIbiza2024.dateLabel}, by{' '}
              {HOMEPAGE_PRESS.diarioIbiza2024.author}, &lsquo;
              <Link
                href={HOMEPAGE_PRESS.diarioIbiza2024.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {HOMEPAGE_PRESS.diarioIbiza2024.title}
              </Link>
              &rsquo;.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
              {HOMEPAGE_PRESS.diarioIbiza2024.englishGloss}
            </p>
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
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Source
                    </Link>
                  )}
                  {project.externalUrl && (
                    <Link
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {project.externalLabel ?? 'Link'}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
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
            © {new Date().getFullYear()} Anibal Guerrero Hernandez
          </p>
          <SocialLinks className="flex items-center gap-4" />
        </div>
      </footer>
    </div>
  )
}
