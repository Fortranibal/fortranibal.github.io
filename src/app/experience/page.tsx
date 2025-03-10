'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Github, Linkedin, Calendar, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ExperienceItem {
  id: string
  company: string
  logo: string
  position: string
  date: string
  location: string
  description: string
  responsibilities: string[]
  projects: Array<{
    name: string
    description: string
    link?: string
  }>
  achievements: Array<{
    name: string
    description: string
  }>
}

const experienceData: ExperienceItem[] = [
  {
    id: 'dlr-researcher',
    company: 'German Aerospace Center (DLR)',
    logo: '/media/experiences/DLR/DLR-white.png', // Make sure to add this logo
    position: 'Student Researcher',
    date: 'Jan 2024 - Dec 2024',
    location: 'Munich, Germany',
    description: 'Developing a robust computer vision pipeline for 3D model asteroid reconstruction using classic and learning-based approaches.',
    responsibilities: [
      'Developed a robust computer vision pipeline for autonomous asteroid navigation, comparing classical and machine learning (ML) based feature extraction methods, implementing a 3D model reconstruction system for asteroid surface mapping.',
      "Enhanced DLR’s OAISYS simulator to generate over 30,000 images as part of trajectory sequences, including RGB-D data and 6D poses, ensuring physically accurate and high-fidelity mission simulations for asteroid exploration and validation.",
      'Co-authored Track Best Paper Award for the IEEE Aerospace Conference 2025, focusing on landing trajectory simulations on asteroids.'
    ],
    projects: [
      {
        name: 'Bridging the Data Gap of Asteroid Exploration: OAISYS Extension for Synthetic Asteroids Creation',
        description: 'Track Best Paper Award at IEEE Aerospace Conference 2025 (Paper No. 2696, 10.0815) - Procedural generation of highly realistic crater surfaces on any mesh you load into OAISYS, with instance-level crater annotations',
        link: '/projects#landing-trajectory-sim'
      },
      {
        name: 'A Comparative Study of Classical and Learning-Based Methods for Vision Aided Close-Proximity Asteroid Exploration',
        description: 'Developed a robust computer vision pipeline for autonomous asteroid navigation, comparing classical and machine learning (ML) based feature extraction methods, implementing a 3D model reconstruction system for asteroid surface mapping.',
        link: '/projects#oaisys'
      },
      {
        name: 'Exploring Asteroids: A Survey',
        description: "Internally published dissertation paper for DLR - Enhanced DLR’s OAISYS simulator to generate over 30,000 images as part of trajectory sequences, including RGB-D data and 6D poses, ensuring physically accurate and high-fidelity mission simulations for asteroid exploration and validation.",
        link: '/projects#oaisys'
      }
    ],
    achievements: [
      {
        name: 'Academic Excellence for Master Thesis',
        description: 'Achieved grade 1.3 (High Distinction) for Master Thesis research project'
      },
      {
        name: 'Academic Excellence for Semesterarbeit',
        description: 'Achieved grade 1.3 (High Distinction) for Semesterarbeit research project'
      },
      {
        name: 'Research Publications',
        description: 'Track Best Paper Award at IEEE Aerospace Conference 2025 (Paper No. 2696, 10.0815). Additionally, published both dissertations internally at DLR.'
      }
    ]
  },
  {
    id: 'warr-colead',
    company: 'WARR Rocketry',
    logo: '/media/education/TUM/WARR.png',
    position: 'Project WESP Co-Lead',
    date: 'Mar 2024 - Jul 2024',
    location: 'Munich, Germany',
    description: "Led Europe's and WARR's first student-developed staged rocket in history.",
    responsibilities: [
      'Co-led EX-1E project development and launch campaign',
      'Managed team of 40+ members and 25,000+ engineering hours',
      'Orchestrated EX-1D single-stage launch attempt in Germany',
      'Led strategic planning and team coordination efforts'
    ],
    projects: [
      {
        name: 'EX-1E Staged Rocket',
        description: 'Achieved 7.8km launch at Spaceport America Cup 2024, securing 3rd place in "30k ft COTS" category',
        link: '/projects#ex1e'
      },
      {
        name: 'EX-1D Single Stage',
        description: 'Managed launch attempt in Germany, demonstrating resilience and adaptability',
        link: '/projects#ex1d'
      }
    ],
    achievements: [
      {
        name: 'Competition Success',
        description: '3rd place in category and 16th overall out of 122 teams at Spaceport America Cup 2024'
      },
      {
        name: 'Project Milestone',
        description: 'First staged rocket in WARR\'s history and European student rocketry'
      }
    ]
  },
  {
    id: 'warr-simulation',
    company: 'WARR Rocketry',
    logo: '/media/projects/12-EX-1D/2023-09 DARE/WESP Logo.png',
    position: 'Simulations Team Lead',
    date: 'May 2023 - Jul 2024',
    location: 'Munich, Germany',
    description: 'Developed and led the WSPR (WESP Simulation Predictive Rocketry Tool) project.',
    responsibilities: [
      'Developed 6 DOF simulation tool for rocket stability analysis',
      'Implemented wind impact and Monte Carlo simulations',
      'Created user-friendly GUIs for simulation tools',
      'Developed automated report generation system'
    ],
    projects: [
      {
        name: 'WSPR Development',
        description: 'Created comprehensive simulation tool for rocket flight prediction and analysis',
        link: '/projects#wspr'
      }
    ],
    achievements: [
      {
        name: 'Tool Implementation',
        description: 'Successfully transitioned from single-stage to multi-stage rocket simulations'
      },
      {
        name: 'Process Automation',
        description: 'Developed automated LaTeX report generation system'
      }
    ]
  },
  {
    id: 'amc-intern',
    company: 'Asteroid Mining Corporation Ltd',
    logo: '/media/experiences/AMC/AMC.png', 
    position: 'Special Operations Team Intern',
    date: 'Jun 2022 - Sep 2022',
    location: 'London, United Kingdom',
    description: 'Contributed to market research and technical feasibility studies for asteroid mining operations.',
    responsibilities: [
      'Developed market forecasts to identify future demand and opportunities',
      'Assessed mining viability for specific asteroids using terrestrial technologies',
      'Collaborated with multinational team across different time zones',
      'Contributed to foundational knowledge base for space mining industry',
      'Developed comprehensive scoping studies'
    ],
    projects: [
      {
        name: 'Market Techno-economic Analysis Study',
        description: 'Conducted detailed market research to identify potential opportunities in space mining sector',
        link: '/projects#market-analysis'
      },
      {
        name: 'Mining Feasibility Assessment',
        description: 'Evaluated application of terrestrial mining technologies to asteroid mining scenarios',
        link: '/projects#mining-feasibility'
      }
    ],
    achievements: [
      {
        name: 'Research Foundation',
        description: 'Helped establish knowledge base shaping future space mining operations'
      },
      {
        name: 'International Collaboration',
        description: 'Successfully managed projects across multiple time zones and cultural contexts'
      }
    ]
  }
]

export default function ExperiencePage() {
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
            <li><Link href="/experience" className="text-primary">Experience</Link></li>
            <li><Link href="/education" className="hover:text-primary">Education</Link></li>
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

        <h1 className="text-4xl font-bold mb-8">Experience</h1>

        <div className="space-y-8">
          {experienceData.map((exp) => (
            <Card 
              key={exp.id} 
              className="w-full transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => toggleExpand(exp.id)}
            >
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="flex-grow">
                  <CardTitle>{exp.position}</CardTitle>
                  <CardDescription>{exp.company}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mt-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm">{exp.date}</p>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm">{exp.location}</p>
                </div>
                <p className="mt-2">{exp.description}</p>
              </CardContent>
              {expandedItem === exp.id && (
                <CardFooter className="flex flex-col items-start pt-4" onClick={(e) => e.stopPropagation()}>
                  <Tabs defaultValue="responsibilities" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
                      <TabsTrigger value="projects">Projects</TabsTrigger>
                      <TabsTrigger value="achievements">Achievements</TabsTrigger>
                    </TabsList>
                    <TabsContent value="responsibilities">
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        {exp.responsibilities.map((responsibility, index) => (
                          <li key={index}>{responsibility}</li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="projects">
                      <ul className="space-y-4 mt-2">
                        {exp.projects.map((project, index) => (
                          <li key={index} className="bg-muted p-4 rounded-lg">
                            <h4 className="font-semibold">{project.name}</h4>
                            <p className="text-sm mt-1">{project.description}</p>
                            {project.link && (
                              <Link href={project.link} className="text-sm text-primary hover:underline mt-2 inline-block">
                                View Project
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="achievements">
                      <ul className="space-y-4 mt-2">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className="bg-muted p-4 rounded-lg">
                            <h4 className="font-semibold">{achievement.name}</h4>
                            <p className="text-sm mt-1">{achievement.description}</p>
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