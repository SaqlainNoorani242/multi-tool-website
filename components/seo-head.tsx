import Head from "next/head"

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: "website" | "article"
  twitterCard?: "summary" | "summary_large_image"
  noIndex?: boolean
}

export function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://converthub.com/og-image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
}: SEOHeadProps) {
  const fullTitle = title.includes("ConvertHub") ? title : `${title} | ConvertHub`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="ConvertHub" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@converthub" />
      <meta name="twitter:creator" content="@converthub" />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="ConvertHub Team" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="theme-color" content="#6366f1" />

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
