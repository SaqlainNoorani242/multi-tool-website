import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WordToPdfConverter } from "@/components/word-to-pdf-converter"

export const metadata: Metadata = {
  title: "Word to PDF Converter - Convert DOCX to PDF Online | ConvertHub",
  description:
    "Convert Word documents (DOCX, DOC) to PDF files online. Preserve formatting, fonts, and layout with our professional document converter.",
  keywords: "Word to PDF, DOCX to PDF, DOC to PDF, convert Word, document converter, PDF generator",
  openGraph: {
    title: "Word to PDF Converter - Convert DOCX to PDF Online",
    description:
      "Convert Word documents to PDF with perfect formatting preservation. Professional quality PDF generation.",
    type: "website",
  },
}

export default function WordToPdfPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <WordToPdfConverter />
      </main>
      <Footer />
    </div>
  )
}
