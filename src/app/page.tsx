'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Github, Linkedin, ArrowUp, Mail } from 'lucide-react'
import dynamic from 'next/dynamic'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ProjectItem, getFeaturedProjects } from '@/data/projects'

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false })

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const featuredProjects = getFeaturedProjects()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-lg font-semibold text-primary">
              Anibal Guerrero Hernandez
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link href="/experience" className="hover:text-primary transition-all duration-300 hover:scale-105">Experience</Link>
              <Link href="/education" className="hover:text-primary transition-all duration-300 hover:scale-105">Education</Link>
              <Link href="/projects" className="hover:text-primary transition-all duration-300 hover:scale-105">Projects</Link>
              <Link href="/awards" className="hover:text-primary transition-all duration-300 hover:scale-105">Awards</Link>
              <Link href="/contact" className="hover:text-primary transition-all duration-300 hover:scale-105">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <Link href="/experience" className="text-2xl hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Experience</Link>
            <Link href="/education" className="text-2xl hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Education</Link>
            <Link href="/projects" className="text-2xl hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link href="/awards" className="text-2xl hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Awards</Link>
            <Link href="/contact" className="text-2xl hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">Anibal<br /><span className="text-primary">Guerrero Hernandez</span></h1>
              <p className="text-xl mb-4">Aerospace Engineer | Innovator | Space Enthusiast</p>
              <p className="mb-6">
                I am an Aerospace Engineer with experience in research, development, and project management. 
                My interests include autonomous navigation, rocketry, and space missions.
              </p>
              <div className="flex space-x-4">
                <Button asChild>
                  <Link href="/experience">Learn More</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/pdfs/Resume - Anibal Guerrero Hernandez.pdf" download>Download CV</a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/media/shared/pfp.jpeg"
                  alt="Anibal Guerrero Hernandez"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card 
                key={project.id} 
                className={`flex flex-col cursor-pointer transition-all duration-300 hover:shadow-lg
                  ${project.isWide ? 'md:col-span-2' : ''}
                  ${project.isVertical ? 'row-span-2' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className={`w-full mb-4 relative overflow-hidden
                    ${project.media.aspectRatio === '9:16' ? 'h-auto flex justify-center' : 'h-48'}`}>
                    {project.media.type === 'video' ? (
                      <video 
                        key={project.media.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={`
                          ${project.media.aspectRatio === '9:16' ? 'h-full w-auto' : 'w-full h-full object-cover'}
                        `}
                      >
                        <source src={project.media.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        src={project.media.src}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    )}
                  </div>
                  <p>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="ghost">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <div className="mb-4">
                  {selectedProject.media.type === 'video' ? (
                    <video 
                      key={selectedProject.media.src}
                      controls
                      className="w-full rounded-lg"
                    >
                      <source src={selectedProject.media.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="relative w-full h-[400px]">
                      <Image
                        src={selectedProject.media.src}
                        alt={selectedProject.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  )}
                </div>
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
                          key={media.src}
                          controls
                          className="w-full rounded-lg"
                        >
                          <source src={media.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
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
          <p>&copy; 2024 Anibal Guerrero Hernandez</p>
          <div className="flex space-x-4">
            <Link href="https://github.com/Fortranibal" className="text-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com/in/anibal-guerrero" className="text-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>

      {showBackToTop && (
        <Button
          className="fixed bottom-4 right-4 rounded-full p-2"
          onClick={scrollToTop}
          size="icon"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}