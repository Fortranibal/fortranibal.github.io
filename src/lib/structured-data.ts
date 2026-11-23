const SITE_URL = 'https://www.anibalguerrero.com'
const HEADSHOT_URL = `${SITE_URL}/media/shared/pfp.jpeg`

export const SITE_CANONICAL_URL = `${SITE_URL}/`
export const PERSON_HEADSHOT_URL = HEADSHOT_URL
export const PERSON_ID = `${SITE_URL}/#person`
export const TUM_ID = `${SITE_URL}/#organization-tum`

/** Profiles clearly linked from the site (plus LinkedIn URL normalized to the canonical form). */
export const PERSON_SAME_AS = [
  'https://www.linkedin.com/in/anibal-guerrero/',
  'https://github.com/Fortranibal',
  'https://x.com/fortranibal',
] as const

/** Visible publication / thesis links used on the site. */
export const PUBLICATION_LINKS = {
  aeroconf2025: {
    doi: '10.1109/AERO63441.2025.11068790',
    doiUrl: 'https://doi.org/10.1109/AERO63441.2025.11068790',
    ieeeUrl: 'https://ieeexplore.ieee.org/document/11068790',
    elibUrl: 'https://elib.dlr.de/214534/',
  },
  masterThesis: {
    elibUrl: 'https://elib.dlr.de/213747/',
  },
  exploringAsteroidsSurvey: {
    elibUrl: 'https://elib.dlr.de/208193/',
  },
} as const

const TUM_ORGANIZATION = {
  '@type': 'CollegeOrUniversity',
  '@id': TUM_ID,
  name: 'Technical University of Munich',
  alternateName: 'TUM',
}

export function buildPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
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
      ...TUM_ORGANIZATION,
      description: 'M.Sc. Aerospace',
    },
    sameAs: [...PERSON_SAME_AS],
  }
}

export function buildScholarlyArticleJsonLd() {
  const { doi, doiUrl, ieeeUrl, elibUrl } = PUBLICATION_LINKS.aeroconf2025

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ScholarlyArticle',
      '@id': `${SITE_URL}/#publication-aeroconf-2025`,
      name: 'Bridging the Data Gap of Asteroid Exploration: OAISYS Extension for Synthetic Asteroids Creation',
      headline:
        'Bridging the Data Gap of Asteroid Exploration: OAISYS Extension for Synthetic Asteroids Creation',
      author: [
        { '@type': 'Person', name: 'Marcus Gerhard Müller' },
        { '@type': 'Person', name: 'Wout Boerdijk' },
        { '@id': PERSON_ID },
        { '@type': 'Person', name: 'Leonard Klüpfel' },
        { '@type': 'Person', name: 'Maximilian Durner' },
        { '@type': 'Person', name: 'Rudolph Triebel' },
      ],
      datePublished: '2025-07-14',
      isPartOf: {
        '@type': 'CreativeWork',
        name: '2025 IEEE Aerospace Conference (AERO 2025)',
        description: 'Big Sky, Montana, 1–8 March 2025',
      },
      url: ieeeUrl,
      sameAs: [doiUrl, elibUrl],
      identifier: [
        {
          '@type': 'PropertyValue',
          propertyID: 'DOI',
          value: doi,
        },
        {
          '@type': 'PropertyValue',
          name: 'Paper Number',
          value: '2696',
        },
      ],
    },
  ]
}

export function buildThesisJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Thesis',
      '@id': `${SITE_URL}/#thesis-master-2025`,
      name: 'A Comparative Study of Classical and Learning-Based Methods for Vision-Aided Close-Proximity Asteroid Exploration',
      author: { '@id': PERSON_ID },
      datePublished: '2025-01',
      url: PUBLICATION_LINKS.masterThesis.elibUrl,
      inSupportOf: 'M.Sc. Aerospace',
      sourceOrganization: { '@id': TUM_ID },
      description: "Master's thesis, Technical University of Munich, 84 pages.",
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Thesis',
      '@id': `${SITE_URL}/#thesis-exploring-asteroids-2024`,
      name: 'Exploring Asteroids: A Survey',
      author: { '@id': PERSON_ID },
      datePublished: '2024',
      url: PUBLICATION_LINKS.exploringAsteroidsSurvey.elibUrl,
      inSupportOf: 'Student thesis',
      sourceOrganization: { '@id': TUM_ID },
      description: 'Student thesis, Technical University of Munich, 2024.',
    },
  ]
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
      withoutContext({ '@context': 'https://schema.org', ...TUM_ORGANIZATION }),
      ...buildScholarlyArticleJsonLd().map(withoutContext),
      ...buildThesisJsonLd().map(withoutContext),
    ],
  }
}
