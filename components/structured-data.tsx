import Script from "next/script"

interface StructuredDataProps {
  type: "WebApplication" | "SoftwareApplication" | "WebPage" | "Organization"
  data: Record<string, any>
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

// Predefined structured data for common use cases
export function WebApplicationSchema() {
  return (
    <StructuredData
      type="WebApplication"
      data={{
        name: "ConvertHub - Professional File Conversion Tools",
        description:
          "Professional online file conversion tools for documents, images, videos, and audio. Convert between formats with advanced options and security.",
        url: "https://converthub.com",
        applicationCategory: "UtilityApplication",
        operatingSystem: "Web Browser",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "SVG to Embroidery Conversion",
          "Handwriting to Vector Conversion",
          "3D Model Format Conversion",
          "PDF to Word Conversion",
          "Word to PDF Conversion",
          "Image Format Conversion",
          "Video Format Conversion",
          "Audio Format Conversion",
          "Batch Processing",
          "Security & Privacy",
        ],
        screenshot: "https://converthub.com/screenshot.png",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "2847",
        },
      }}
    />
  )
}

export function OrganizationSchema() {
  return (
    <StructuredData
      type="Organization"
      data={{
        name: "ConvertHub",
        description: "Professional file conversion tools and services",
        url: "https://converthub.com",
        logo: "https://converthub.com/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-555-CONVERT",
          contactType: "customer service",
          availableLanguage: ["English"],
        },
        sameAs: [
          "https://twitter.com/converthub",
          "https://facebook.com/converthub",
          "https://linkedin.com/company/converthub",
        ],
      }}
    />
  )
}
