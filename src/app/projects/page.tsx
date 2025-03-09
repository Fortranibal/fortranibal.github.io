'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { projects, ProjectItem } from '@/data/projects'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'aerospace' | 'computer-science' | 'finance'>('all')
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(selectedCategory))

  return (
    <div className="min-h-screen bg-background">
      <header className="py-4 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold">Anibal Guerrero Hernandez</Link>
          <ul className="hidden md:flex space-x-4">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/experience" className="hover:text-primary">Experience</Link></li>
            <li><Link href="/education" className="hover:text-primary">Education</Link></li>
            <li><Link href="/projects" className="text-primary">Projects</Link></li>
            <li><Link href="/awards" className="hover:text-primary">Awards</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
          <div className="flex space-x-4">
            <Link href="https://github.com/Fortranibal" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com/in/anibal-guerrero" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Button asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="text-4xl font-bold mb-8">Projects</h1>

        <div className="flex justify-center space-x-4 mb-8">
          <Button 
            onClick={() => setSelectedCategory('all')}
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
          >
            All
          </Button>
          <Button 
            onClick={() => setSelectedCategory('aerospace')}
            variant={selectedCategory === 'aerospace' ? 'default' : 'outline'}
          >
            Aerospace
          </Button>
          <Button 
            onClick={() => setSelectedCategory('computer-science')}
            variant={selectedCategory === 'computer-science' ? 'default' : 'outline'}
          >
            Computer Science
          </Button>
          <Button 
            onClick={() => setSelectedCategory('finance')}
            variant={selectedCategory === 'finance' ? 'default' : 'outline'}
          >
            Finance
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="flex flex-col transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <CardHeader>
                <div className="relative w-full h-48 mb-4">
                  {project.media.type === 'video' ? (
                    <video
                      src={project.media.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  ) : (
                    <Image
                      src={project.media.src}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  )}
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.github && (
                  <Button asChild variant="outline">
                    <Link href={project.github}>
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                {selectedProject.media.type === 'video' ? (
                  <video
                    src={selectedProject.media.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-lg mb-4"
                  />
                ) : (
                  <div className="relative w-full h-[400px] mb-4">
                    <Image
                      src={selectedProject.media.src}
                      alt={selectedProject.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-2">Project Details</h3>
                <p>{selectedProject.longDescription}</p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Additional Media</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.additionalMedia.map((media, index) => (
                    <div key={index} className="space-y-2">
                      {media.type === 'video' ? (
                        <video
                          src={media.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full rounded-lg"
                        />
                      ) : (
                        <div className="relative h-48">
                          <Image
                            src={media.src}
                            alt={media.alt}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                      )}
                      <p className="text-sm text-muted-foreground">{media.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              {selectedProject.achievements && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Achievements</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedProject.github && (
                <div className="mt-4">
                  <Button asChild>
                    <Link href={selectedProject.github}>
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>

      <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2025 Anibal Guerrero Hernandez</p>
          <div className="flex space-x-4">
            <Link href="https://github.com/Fortranibal" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com/in/anibal-guerrero" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
