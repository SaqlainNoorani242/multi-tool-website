import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { WebApplicationSchema, OrganizationSchema } from "@/components/structured-data"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "ConvertHub - Professional File Conversion Tools | 10 Advanced Converters",
  description:
    "Professional file conversion suite with 10 specialized tools: PDF to Word, Image converter, Video converter, Audio converter, SVG to embroidery, 3D model converter, and more. Fast, secure, and free online conversion.",
  keywords:
    "file converter, PDF to Word, image converter, video converter, audio converter, SVG to embroidery, handwriting to vector, 3D model converter, Excel to CSV, PowerPoint to PDF, online conversion tools",
  authors: [{ name: "ConvertHub Team" }],
  creator: "Saqlain Noorani",
  publisher: "ConvertHub",
  robots: "index, follow",
  metadataBase: new URL("https://playh5games.site"),
  alternates: {
    canonical: "https://playh5games.site",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://playh5games.site",
    title: "ConvertHub - Professional File Conversion Tools | 10 Advanced Converters",
    description:
      "Professional file conversion suite with 10 specialized tools for documents, images, videos, audio, and specialized formats. Fast, secure, and free.",
    siteName: "ConvertHub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ConvertHub - Professional File Conversion Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@converthub",
    creator: "@converthub",
    title: "ConvertHub - Professional File Conversion Tools | 10 Advanced Converters",
    description:
      "Professional file conversion suite with 10 specialized tools for documents, images, videos, audio, and specialized formats.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
    generator: 'saqlain'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color */}
        <meta name="theme-color" content="#6366f1" />
        <meta name="msapplication-TileColor" content="#6366f1" />

        {/* Additional SEO meta tags */}
        <meta name="application-name" content="ConvertHub" />
        <meta name="apple-mobile-web-app-title" content="ConvertHub" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Structured Data */}
        <WebApplicationSchema />
        <OrganizationSchema />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9226719532045553"
     crossorigin="anonymous"></script>
</head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="converthub-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
