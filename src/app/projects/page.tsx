'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Github, Linkedin, ArrowLeft } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Badge } from '@/components/ui/badge'
import { ProjectThumbnail } from '@/components/ProjectThumbnail'
import { projects } from '@/data/projects'

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false })

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const categories = [
  { key: 'all', label: 'All' },
  { key: 'aerospace', label: 'Aerospace' },
  { key: 'computer-science', label: 'Computer Science' },
  { key: 'finance', label: 'Finance' },
] as const

type CategoryKey = typeof categories[number]['key']

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all')

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category.includes(selectedCategory))

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-sm font-medium text-foreground">
            Aníbal Guerrero Hernandez
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
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </Link>

        <h1 className="text-2xl font-bold tracking-tight text-foreground mb-2">Projects</h1>
        <p className="text-muted-foreground mb-8">
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
              className="group rounded-lg border border-border/60 bg-card overflow-hidden hover:border-border transition-colors"
            >
              <div className={`relative w-full h-40 ${project.media.objectFit === 'contain' ? 'bg-black' : 'bg-muted'}`}>
                <ProjectThumbnail project={project} />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-foreground text-[15px] mb-1.5 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
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
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Source
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-border/60">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
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
