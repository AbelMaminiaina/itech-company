import { Helmet } from 'react-helmet-async'

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Service' | 'Article'
  data?: any
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'iTech-Company',
    url: 'https://itech-company.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://itech-company.com/logo-512.png',
      width: 512,
      height: 512,
    },
    description: 'Agence web spécialisée en développement web, mobile, UI/UX design et IA à Madagascar',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ambohimanarina',
      addressLocality: 'Antananarivo',
      addressRegion: 'Analamanga',
      addressCountry: 'MG',
    },
    email: 'contact@itech-company.com',
    foundingDate: '2025',
    sameAs: [
      'https://www.facebook.com/itech-company',
      'https://twitter.com/itech-company',
      'https://www.linkedin.com/company/itech-company',
      'https://github.com/itech-company',
    ],
  })

  const getWebSiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'iTech-Company',
    url: 'https://itech-company.com',
    description: 'Expériences numériques à fort impact',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://itech-company.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  })

  const getServiceSchema = () => {
    if (!data) return null
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.name || 'Services de développement web',
      description: data.description || 'Services professionnels de développement web et mobile',
      provider: {
        '@type': 'Organization',
        name: 'iTech-Company',
        url: 'https://itech-company.com',
      },
      serviceType: data.serviceType || 'Développement Web',
      areaServed: {
        '@type': 'Country',
        name: 'Madagascar',
      },
    }
  }

  const getArticleSchema = () => {
    if (!data) return null
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      description: data.description,
      author: {
        '@type': 'Person',
        name: data.author || 'iTech-Company',
      },
      publisher: {
        '@type': 'Organization',
        name: 'iTech-Company',
        logo: {
          '@type': 'ImageObject',
          url: 'https://itech-company.com/logo.svg',
        },
      },
      datePublished: data.publishedTime,
      dateModified: data.modifiedTime || data.publishedTime,
      image: data.image || 'https://itech-company.com/og-image.svg',
    }
  }

  const getSchema = () => {
    switch (type) {
      case 'Organization':
        return getOrganizationSchema()
      case 'WebSite':
        return getWebSiteSchema()
      case 'Service':
        return getServiceSchema()
      case 'Article':
        return getArticleSchema()
      default:
        return null
    }
  }

  const schema = getSchema()

  if (!schema) return null

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default StructuredData
