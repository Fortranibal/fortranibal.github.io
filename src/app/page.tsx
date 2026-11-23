import type { Metadata } from 'next'
import { HomePage } from '@/components/HomePage'
import { JsonLd } from '@/components/JsonLd'
import {
  SITE_CANONICAL_URL,
  buildHomepageJsonLdGraph,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_CANONICAL_URL,
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={buildHomepageJsonLdGraph()} />
      <HomePage />
    </>
  )
}
