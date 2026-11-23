import type { Metadata } from 'next'
import { ProjectsPage } from '@/components/ProjectsPage'

export const metadata: Metadata = {
  title: 'Projects',
  alternates: {
    canonical: 'https://www.anibalguerrero.com/projects',
  },
}

export default function Page() {
  return <ProjectsPage />
}
