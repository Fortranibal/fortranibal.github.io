'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Github, Linkedin, GraduationCap, Calendar, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface EducationItem {
  id: string
  institution: string
  logo: string
  degree: string
  field: string
  date: string
  location: string
  // gpa: string
  description: string
  courses: string[]
  projects: Array<{
    name: string
    description: string
    link: string
  }>
  awards: Array<{
    name: string
    description: string
    link: string
  }>
}

const educationData: EducationItem[] = [
  {
    id: 'tum',
    institution: 'Technical University of Munich (ASG, TUM)',
    logo: '/media/education/TUM/TUM.png',
    degree: 'M.Sc. Aerospace',
    field: 'Space Engineering and Computer Science',
    date: 'Oct 2022 - Present',
    location: 'Munich, Germany',
    // gpa: '3.3',
    description: 'Pursuing advanced studies in aerospace engineering with a focus on space systems and computer science applications in the field.',
    courses: [
        'Control and Simulation of Rocket Hopper Demonstrator (Grade: 1.0)',
        'Hands-on Deep Learning (Grade: 1.0)',
        'Space Mission Design (Grade: 1.0)',
        'Spacecraft Design - Fundamentals (Grade: 1.3)',
        'Rocket Propulsion 2 and Design Challenge (Grade: 1.3)',
        'Literature Research and Implementation of a Relative Position-Estimating for Landing Planning on an Asteroid (Grade: 1.3)',
        'Orbit and Flight Mechanics (Grade: 1.7)',
        'Spacecraft Propulsion and Design Challenge (Grade: 2.0)',
        'Aeroelasticity (Grade: 2.0)',
        'Introduction to Scientific Machine Learning for Engineers (Grade: 2.0)',
        'Advanced Programming',
        'Investment and Financial Management',
        'Rocket Propulsion 1',
        'Interaction Programming',
        'Space Resources',
        'On Orbit Dynamics and Robotics',
        'Human Spaceflight',
        'Satellite Navigation',
        'Aerospace Structures'
    ],
    projects: [
      {
        name: 'AI-driven Asteroid Navigation',
        description: 'Developing AI-driven navigation systems for asteroid exploration missions',
        link: '/projects#asteroid-navigation'
      },
      {
        name: 'Interplanetary Trajectory Optimization',
        description: 'Optimizing trajectory planning for interplanetary missions',
        link: '/projects#trajectory-optimization'
      }
    ],
    awards: [
      {
        name: 'Excellence in Hands-On Deep Learning',
        description: 'Achieved a grade of 1.0 in Hands-On Deep Learning at TUM.',
        link: '/awards#deep-learning'
      },
      {
        name: 'Outstanding Performance in Spacecraft Design',
        description: 'Achieved a grade of 1.3 in Spacecraft Design Fundamentals and Space Mission Design at TUM.',
        link: '/awards#spacecraft-design'
      }
    ]
  },
  {
    id: 'upm',
    institution: 'Technical University of Madrid (ETSIAE, UPM)',
    logo: '/media/education/UPM/ETSIAE-UPM.png', 
    degree: 'B.Eng. Aerospace Engineering',
    field: 'Aerospace Science and Technologies',
    date: 'Sep 2017 - Sep 2022',
    location: 'Madrid, Spain',
    // gpa: '3.1',
    description: 'Completed a comprehensive program in aerospace engineering, covering both aeronautical and astronautical aspects of the field.',
    courses: [
      'Aerodynamics and Flight Mechanics',
      'Propulsion Systems',
      'Structural Analysis of Aircraft',
      'Space Systems Engineering',
      'Orbital Mechanics',
      'Avionics and Control Systems',
      'Computational Fluid Dynamics'
    ],
    projects: [
      {
        name: 'Reusable Launch Vehicle Design',
        description: 'Designed and simulated a novel reusable launch vehicle concept, focusing on cost-efficiency and environmental sustainability',
        link: '/projects#reusable-launch-vehicle'
      },
      {
        name: 'Mars Habitat Design',
        description: 'Participated in a team project to design a Mars habitat for long-term human missions',
        link: '/projects#mars-habitat'
      }
    ],
    awards: [
      {
        name: 'Outstanding Bachelor Thesis',
        description: 'Stability of Equilibrium Points of Asteroid 243 Ida Applying Polyhedral Method to Approximate Gravitational Potential Field.',
        link: '/awards#bachelor-thesis'
      },
      {
        name: 'Outstanding Performance in Orbital Mechanics',
        description: 'Achieved a grade of 10/10 in Orbital Mechanics and Dynamics at UPM.',
        link: '/awards#orbital-mechanics'
      }
    ]
  }
]


export default function EducationPage() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="py-4 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold">Anibal Guerrero Hernandez</Link>
          <ul className="hidden md:flex space-x-4">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/experience" className="hover:text-primary">Experience</Link></li>
            <li><Link href="/education" className="text-primary">Education</Link></li>
            <li><Link href="/projects" className="hover:text-primary">Projects</Link></li>
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

        <h1 className="text-4xl font-bold mb-8">Education</h1>

        <div className="space-y-8">
          {educationData.map((edu) => (
            <Card 
              key={edu.id} 
              className="w-full transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => toggleExpand(edu.id)}
            >
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="flex-grow">
                  <CardTitle>{edu.degree}</CardTitle>
                  <CardDescription>{edu.field}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm">{edu.date}</p>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm">{edu.location}</p>
                </div>
                {/* <p className="text-sm mt-1">GPA: {edu.gpa}</p> */}
                <p className="mt-2">{edu.description}</p>
              </CardContent>
              {expandedItem === edu.id && (
                <CardFooter className="flex flex-col items-start pt-4" onClick={(e) => e.stopPropagation()}>
                  <Tabs defaultValue="courses" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="courses">Courses</TabsTrigger>
                      <TabsTrigger value="projects">Projects</TabsTrigger>
                      <TabsTrigger value="awards">Awards</TabsTrigger>
                    </TabsList>
                    <TabsContent value="courses">
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        {edu.courses.map((course, index) => (
                          <li key={index}>{course}</li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="projects">
                      <ul className="space-y-4 mt-2">
                        {edu.projects.map((project, index) => (
                          <li key={index} className="bg-muted p-4 rounded-lg">
                            <h4 className="font-semibold">{project.name}</h4>
                            <p className="text-sm mt-1">{project.description}</p>
                            <Link href={project.link} className="text-sm text-primary hover:underline mt-2 inline-block">
                              View Project
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="awards">
                      <ul className="space-y-4 mt-2">
                        {edu.awards.map((award, index) => (
                          <li key={index} className="bg-muted p-4 rounded-lg">
                            <h4 className="font-semibold">{award.name}</h4>
                            <p className="text-sm mt-1">{award.description}</p>
                            <Link href={award.link} className="text-sm text-primary hover:underline mt-2 inline-block">
                              View Award
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <GraduationCap className="mr-2 h-6 w-6" />
            Continuous Learning Journey
          </h2>
          <p className="text-muted-foreground">
            While my formal university education has been completed, my journey of learning and growth continues. 
            Constantly pursuing new knowledge and skills in the rapidly evolving fields of aerospace engineering 
            and computer science. Through ongoing courses, projects, and industry engagement, I remain at the forefront 
            of technological advancements in my field. My awards and honors page showcases my commitment to excellence 
            and continuous improvement beyond traditional academic settings.
          </p>
        </div>
      </main>

      <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 Anibal Guerrero Hernandez</p>
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