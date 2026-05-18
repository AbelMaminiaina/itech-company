import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  author?: string
  publishedTime?: string
  modifiedTime?: string
  noindex?: boolean
}

const SEO = ({
  title,
  description,
  keywords = 'agence web, développement web, développement mobile, UI/UX design, DevOps, IA, automatisation, Madagascar, Antananarivo, France, Paris, iTech-Company',
  image = '/logo-512.png',
  url = 'https://www.itech-company.com',
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  noindex = false,
}: SEOProps) => {
  const siteTitle = 'iTech-Company'
  const fullTitle = title === siteTitle ? `${title} - Expériences numériques à fort impact` : `${title} | ${siteTitle}`
  const fullUrl = url.startsWith('http') ? url : `https://www.itech-company.com${url}`
  const fullImage = image.startsWith('http') ? image : `https://www.itech-company.com${image}`

  return (
    <Helmet>
      {/* Balises de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {author && <meta name="author" content={author} />}

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Alternate URLs pour éviter le contenu dupliqué */}
      <link rel="alternate" hrefLang="fr" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content={`${title} - iTech-Company`} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:locale:alternate" content="fr_MG" />

      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && (
        <meta property="article:publisher" content="https://www.facebook.com/itechcompanymg" />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={`${title} - iTech-Company`} />
      <meta name="twitter:site" content="@itechcompanymg" />
      <meta name="twitter:creator" content="@itechcompanymg" />

      {/* Robots et indexation */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="bingbot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Autres balises SEO avancées */}
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="coverage" content="Worldwide" />

      {/* Géolocalisation */}
      <meta name="geo.region" content="MG-T;FR-75" />
      <meta name="geo.placename" content="Antananarivo, Paris" />
      <meta name="geo.position" content="-18.8792;47.5079" />
      <meta name="ICBM" content="-18.8792, 47.5079" />

      {/* Mobile */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="iTech-Company" />

      {/* Vérification moteurs de recherche (à personnaliser) */}
      {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}
      {/* <meta name="msvalidate.01" content="YOUR_BING_CODE" /> */}
    </Helmet>
  )
}

export default SEO
