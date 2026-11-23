'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Github, ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { ProjectThumbnail } from '@/components/ProjectThumbnail'
import { SocialLinks } from '@/components/SocialLinks'
import { SiteHeader, navLinkClassName } from '@/components/SiteHeader'
import { projects } from '@/data/projects'

const categories = [
  { key: 'all', label: 'All' },
  { key: 'aerospace', label: 'Aerospace' },
  { key: 'computer-science', label: 'Computer Science' },
  { key: 'finance', label: 'Finance' },
] as const

type CategoryKey = typeof categories[number]['key']

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all')

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category.includes(selectedCategory))

  return (
    <div className="min-h-screen overflow-x-clip">
      <SiteHeader
        maxWidthClass="max-w-4xl"
        brandLabel="Anibal Guerrero Hernandez"
        brandShortLabel="Anibal G. H."
        brandHref="/"
        navLinks={
          <>
            <Link href="/#experience" className={navLinkClassName}>
              Experience
            </Link>
            <Link href="/#publications" className={navLinkClassName}>
              Publications
            </Link>
            <Link href="/projects" className={navLinkClassName}>
              Projects
            </Link>
          </>
        }
      />

      <main className="max-w-4xl mx-auto w-full px-5 sm:px-6 py-12 min-w-0">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </Link>

        <h1 className="text-2xl font-bold tracking-tight text-foreground mb-2">Projects</h1>
        <p className="text-muted-foreground mb-8 break-words">
          A collection of work spanning aerospace engineering, computer science, and finance.
        </p>

        <div className="flex gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                selectedCategory === cat.key
                  ? 'bg-foreground text-background font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg border border-border/60 bg-card overflow-hidden hover:border-border transition-colors min-w-0"
            >
              <div className={`relative w-full h-40 ${project.media.objectFit === 'contain' ? 'bg-black' : 'bg-muted'}`}>
                <ProjectThumbnail project={project} />
              </div>
              <div className="p-4 min-w-0">
                <h3 className="font-medium text-foreground text-[15px] mb-1.5 leading-snug break-words">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2 break-words">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-[11px] px-2 py-0.5 font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
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
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-border/60">
        <div className="max-w-4xl mx-auto w-full px-5 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 min-w-0">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Anibal Guerrero Hernandez
          </p>
          <SocialLinks className="flex items-center gap-4 flex-wrap justify-center" />
        </div>
      </footer>
    </div>
  )
}
