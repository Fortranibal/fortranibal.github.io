'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Github, Linkedin, Award, Book, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface AwardItem {
  id: string
  title: string
  category: 'course' | 'award' | 'performance'
  description: string
  date: string
  relatedProject?: string
  icon: 'Award' | 'Book' | 'Star'
}

const awards: AwardItem[] = [
  {
    id: 'deep-learning',
    title: 'Excellence in Hands-On Deep Learning',
    category: 'performance',
    description: 'Achieved a grade of 1.0 in Hands-On Deep Learning at TUM.',
    date: '2023',
    relatedProject: 'adversarial-attack',
    icon: 'Star'
  },
  {
    id: 'spacecraft-design',
    title: 'Outstanding Performance in Spacecraft Design',
    category: 'performance',
    description: 'Achieved a grade of 1.3 in Spacecraft Design Fundamentals and Space Mission Design at TUM.',
    date: '2023',
    relatedProject: 'mars-mission',
    icon: 'Star'
  },
  {
    id: 'rocket-propulsion-award',
    title: 'Excellence Award in Rocket Propulsion II',
    category: 'award',
    description: 'Outstanding grade (1.3) in Rocket Propulsion II, and Space Propulsion and Design Challenge at TUM.',
    date: '2023',
    relatedProject: 'rocket-hopper',
    icon: 'Award'
  },
  {
    id: 'js-rag-web-apps',
    title: 'JavaScript RAG Web Apps with LlamaIndex',
    category: 'course',
    description: 'Completed course on building RAG web applications using JavaScript and LlamaIndex.',
    date: '2023',
    icon: 'Book'
  },
  {
    id: 'vector-db-apps',
    title: 'Building Applications with Vector Databases',
    category: 'course',
    description: 'Completed course on developing applications using vector databases.',
    date: '2023',
    icon: 'Book'
  },
  {
    id: 'chatgpt-api-apps',
    title: 'Build Systems with ChatGPT API',
    category: 'course',
    description: 'Completed course on building systems using the ChatGPT API.',
    date: '2023',
    icon: 'Book'
  },
  {
    id: 'bachelor-thesis',
    title: 'Outstanding Bachelor Thesis',
    category: 'award',
    description: 'Stability of Equilibrium Points of Asteroid 243 Ida Applying Polyhedral Method to Approximate Gravitational Potential Field.',
    date: '2022',
    relatedProject: 'mars-mission',
    icon: 'Award'
  },
  {
    id: 'amc-internship-award',
    title: 'Excellence Award for Best Interns',
    category: 'award',
    description: 'Recognized as one of the best interns of 2022 during Asteroid Mining Corporation Internship.',
    date: '2022',
    icon: 'Award'
  },
  {
    id: 'orbital-mechanics',
    title: 'Outstanding Performance in Orbital Mechanics',
    category: 'performance',
    description: 'Achieved a grade of 10/10 in Orbital Mechanics and Dynamics at UPM.',
    date: '2021',
    relatedProject: 'mars-mission',
    icon: 'Star'
  },
]

const iconComponents = {
  Award,
  Book,
  Star
}

const categoryColors = {
  performance: 'bg-blue-100 dark:bg-blue-900/30',
  award: 'bg-green-100 dark:bg-green-900/30',
  course: 'bg-yellow-100 dark:bg-yellow-900/30'
}

const categoryIconColors = {
  performance: 'text-blue-500 dark:text-blue-300',
  award: 'text-green-500 dark:text-green-300',
  course: 'text-yellow-500 dark:text-yellow-300'
}

export default function AwardsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'course' | 'award' | 'performance'>('all')
  const [visibleAwards, setVisibleAwards] = useState<string[]>([])

  const filteredAwards = selectedCategory === 'all' 
    ? awards 
    : awards.filter(award => award.category === selectedCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleAwards((prev) => [...prev, entry.target.id])
          }
        })
      },
      { threshold: 0.1 }
    )

    const awardElements = document.querySelectorAll('.award-item')
    awardElements.forEach((el) => observer.observe(el))

    return () => {
      awardElements.forEach((el) => observer.unobserve(el))
    }
  }, [filteredAwards])

  return (
    <div className="min-h-screen bg-background">
      <header className="py-4 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold">Anibal Guerrero Hernandez</Link>
          <ul className="hidden md:flex space-x-4">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/experience" className="hover:text-primary">Experience</Link></li>
            <li><Link href="/education" className="hover:text-primary">Education</Link></li>
            <li><Link href="/projects" className="hover:text-primary">Projects</Link></li>
            <li><Link href="/awards" className="text-primary">Awards</Link></li>
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

      {/* <div className="relative w-full h-48 mb-8">
        <Image
          src="/images/awards-banner.jpg"
          alt="Awards Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Awards and Honors</h1>
        </div>
      </div> */}

      <main className="container mx-auto px-4 py-8">
        <Button asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="text-4xl font-bold mb-8">Awards and Honors</h1>

        <div className="mb-6 flex justify-center space-x-4">
          <Button 
            onClick={() => setSelectedCategory('all')}
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
          >
            All
          </Button>
          <Button 
            onClick={() => setSelectedCategory('award')}
            variant={selectedCategory === 'award' ? 'default' : 'outline'}
          >
            Awards
          </Button>
          <Button 
            onClick={() => setSelectedCategory('course')}
            variant={selectedCategory === 'course' ? 'default' : 'outline'}
          >
            Courses
          </Button>
          <Button 
            onClick={() => setSelectedCategory('performance')}
            variant={selectedCategory === 'performance' ? 'default' : 'outline'}
          >
            Performances
          </Button>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
          {filteredAwards.map((award, index) => {
            const IconComponent = iconComponents[award.icon]
            const isEven = index % 2 === 0
            return (
              <div 
                key={award.id} 
                id={award.id}
                className={`award-item relative mb-16 ${isEven ? 'md:pr-12' : 'md:pl-12'} md:w-[calc(50%-2rem)] ${isEven ? 'md:ml-auto' : ''} transition-all duration-500 ease-in-out ${
                  visibleAwards.includes(award.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className={`absolute top-0 ${isEven ? 'md:-left-6' : 'md:-right-6'} w-12 h-12 rounded-full ${categoryColors[award.category]} flex items-center justify-center shadow-md z-10`}>
                  <IconComponent className={`w-7 h-7 ${categoryIconColors[award.category]}`} />
                </div>
                <Card className={`flex flex-col ${categoryColors[award.category]} border-none shadow-md mt-2`}>
                  <CardHeader>
                    <div className={`flex items-center space-x-2 ${isEven ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                      <CardTitle>{award.title}</CardTitle>
                    </div>
                    <CardDescription>{award.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className={isEven ? 'md:text-right' : ''}>{award.description}</p>
                  </CardContent>
                  <CardFooter className={`flex ${isEven ? 'md:flex-row-reverse' : ''} justify-between items-center`}>
                    <Badge variant="outline">
                      {award.category === 'award' && 'Award'}
                      {award.category === 'course' && 'Course'}
                      {award.category === 'performance' && 'Performance'}
                    </Badge>
                    {award.relatedProject && (
                      <Button asChild variant="link">
                        <Link href={`/projects#${award.relatedProject}`}>
                          Related Project
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </div>
            )
          })}
        </div>
      </main>

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