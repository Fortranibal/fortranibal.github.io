const SITE_URL = 'https://www.anibalguerrero.com'
const HEADSHOT_URL = `${SITE_URL}/media/shared/pfp.jpeg`

export const SITE_CANONICAL_URL = `${SITE_URL}/`
export const PERSON_HEADSHOT_URL = HEADSHOT_URL

/** Profiles clearly linked from the site (plus LinkedIn URL normalized to the canonical form). */
export const PERSON_SAME_AS = [
  'https://www.linkedin.com/in/anibal-guerrero/',
  'https://github.com/Fortranibal',
  'https://x.com/fortranibal',
] as const

/**
 * Published paper stated on the site (projects data).
 * No DOI or article URL is present in the repo — only title, conference year, and paper number.
 */
export const PUBLISHED_PAPERS = [
  {
    title:
      'Bridging the Data Gap of Asteroid Exploration: OAISYS Extension for Synthetic Asteroids Creation',
    datePublished: '2025',
    conference: 'IEEE Aerospace Conference 2025',
    paperNumber: '2696',
    doi: null as string | null,
    url: null as string | null,
  },
] as const

export function buildPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aníbal Guerrero Hernández',
    alternateName: ['Anibal Guerrero', 'Anibal Guerrero Hernandez'],
    url: SITE_CANONICAL_URL,
    image: HEADSHOT_URL,
    jobTitle: 'GNC Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Rocket Lab',
      url: 'https://www.rocketlab.com',
    },
    affiliation: {
      '@type': 'Organization',
      name: 'Rocket Lab',
      url: 'https://www.rocketlab.com',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Technical University of Munich',
      alternateName: 'TUM',
      description: 'M.Sc. Aerospace',
    },
    sameAs: [...PERSON_SAME_AS],
  }
}

export function buildScholarlyArticleJsonLd() {
  return PUBLISHED_PAPERS.map((paper) => {
    const article: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'ScholarlyArticle',
      name: paper.title,
      headline: paper.title,
      author: {
        '@type': 'Person',
        name: 'Aníbal Guerrero Hernández',
        url: SITE_CANONICAL_URL,
      },
      datePublished: paper.datePublished,
      isPartOf: {
        '@type': 'CreativeWork',
        name: paper.conference,
      },
      identifier: {
        '@type': 'PropertyValue',
        name: 'Paper Number',
        value: paper.paperNumber,
      },
    }

    if (paper.doi) {
      article.sameAs = `https://doi.org/${paper.doi}`
      article.identifier = [
        article.identifier,
        {
          '@type': 'PropertyValue',
          propertyID: 'DOI',
          value: paper.doi,
        },
      ]
    }

    if (paper.url) {
      article.url = paper.url
    }

    return article
  })
}

function withoutContext(
  node: Record<string, unknown>
): Record<string, unknown> {
  const { ['@context']: _context, ...rest } = node
  void _context
  return rest
}

export function buildHomepageJsonLdGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      withoutContext(buildPersonJsonLd()),
      ...buildScholarlyArticleJsonLd().map(withoutContext),
    ],
  }
}
