import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PowerpointToPdfConverter } from "@/components/powerpoint-to-pdf-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "PowerPoint to PDF Converter - Convert PPTX to PDF Online | ConvertHub",
  description:
    "Convert PowerPoint presentations (PPTX, PPT) to PDF format online. Preserve animations, layouts, and formatting with professional PDF output quality.",
  keywords: "PowerPoint to PDF, PPTX to PDF, PPT converter, presentation converter, slides to PDF",
  openGraph: {
    title: "PowerPoint to PDF Converter - Convert PPTX to PDF Online",
    description:
      "Convert PowerPoint presentations to PDF with perfect layout preservation and professional quality output.",
    type: "website",
  },
}

export default function PowerpointToPdfPage() {
  const breadcrumbItems = [
    { label: "Document Converters", href: "/#document-converters" },
    { label: "PowerPoint to PDF" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        <PowerpointToPdfConverter />
      </main>
      <Footer />
    </div>
  )
}
