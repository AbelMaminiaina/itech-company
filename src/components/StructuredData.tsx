import { Helmet } from 'react-helmet-async'

interface BreadcrumbItem {
  name: string
  url: string
}

interface FAQItem {
  question: string
  answer: string
}

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Service' | 'Article' | 'LocalBusiness' | 'BreadcrumbList' | 'FAQPage'
  data?: any
  breadcrumbs?: BreadcrumbItem[]
  faqs?: FAQItem[]
}

const StructuredData = ({ type, data, breadcrumbs, faqs }: StructuredDataProps) => {
  const getOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.itech-company.com/#organization',
    name: 'iTech-Company',
    url: 'https://www.itech-company.com',
    logo: {
      '@type': 'ImageObject',
      '@id': 'https://www.itech-company.com/#logo',
      url: 'https://www.itech-company.com/logo-512.png',
      width: 512,
      height: 512,
      caption: 'iTech-Company Logo',
    },
    image: 'https://www.itech-company.com/logo-512.png',
    description: 'Agence web spécialisée en développement web, mobile, UI/UX design et IA à Madagascar et en France',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Ambohimanarina',
        addressLocality: 'Antananarivo',
        addressRegion: 'Analamanga',
        postalCode: '101',
        addressCountry: 'MG',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Paris',
        addressRegion: 'Île-de-France',
        addressCountry: 'FR',
      },
    ],
    email: 'contact@itech-company.com',
    foundingDate: '2025',
    founder: {
      '@type': 'Person',
      name: 'Abel Maminiaina',
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 1,
      maxValue: 10,
    },
    slogan: 'Nous créons des expériences numériques à fort impact',
    knowsAbout: [
      'Développement Web',
      'Développement Mobile',
      'UI/UX Design',
      'DevOps',
      'Intelligence Artificielle',
      'Cloud Computing',
    ],
    sameAs: [
      'https://www.facebook.com/itechcompanymg',
      'https://www.linkedin.com/company/itech-company-mg',
      'https://github.com/AbelMaminiaina',
    ],
  })

  const getWebSiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.itech-company.com/#website',
    name: 'iTech-Company',
    url: 'https://www.itech-company.com',
    description: 'Nous créons des expériences numériques à fort impact',
    publisher: {
      '@id': 'https://www.itech-company.com/#organization',
    },
    inLanguage: 'fr-FR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.itech-company.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  })

  const getLocalBusinessSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://www.itech-company.com/#localbusiness',
    name: 'iTech-Company',
    image: 'https://www.itech-company.com/logo-512.png',
    url: 'https://www.itech-company.com',
    telephone: '+261 34 00 00 00',
    email: 'contact@itech-company.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ambohimanarina',
      addressLocality: 'Antananarivo',
      addressRegion: 'Analamanga',
      postalCode: '101',
      addressCountry: 'MG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -18.8792,
      longitude: 47.5079,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'EUR, MGA',
    paymentAccepted: 'Virement bancaire, PayPal',
    areaServed: [
      { '@type': 'Country', name: 'Madagascar' },
      { '@type': 'Country', name: 'France' },
      { '@type': 'Country', name: 'Belgique' },
      { '@type': 'Country', name: 'Suisse' },
      { '@type': 'Country', name: 'Canada' },
    ],
    serviceType: [
      'Développement Web',
      'Développement Mobile',
      'UI/UX Design',
      'DevOps',
      'Intelligence Artificielle',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '15',
      bestRating: '5',
      worstRating: '1',
    },
  })

  const getBreadcrumbSchema = () => {
    if (!breadcrumbs || breadcrumbs.length === 0) return null
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `https://www.itech-company.com${item.url}`,
      })),
    }
  }

  const getFAQSchema = () => {
    if (!faqs || faqs.length === 0) return null
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }
  }

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
      case 'LocalBusiness':
        return getLocalBusinessSchema()
      case 'BreadcrumbList':
        return getBreadcrumbSchema()
      case 'FAQPage':
        return getFAQSchema()
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
