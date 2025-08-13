import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PdfToWordConverter } from "@/components/pdf-to-word-converter"

export const metadata: Metadata = {
  title: "PDF to Word Converter - Convert PDF to DOCX Online | ConvertHub",
  description:
    "Convert PDF files to editable Word documents (DOCX) online. Fast, secure, and free PDF to Word conversion with OCR support for scanned documents.",
  keywords: "PDF to Word, PDF to DOCX, convert PDF, document converter, OCR, editable documents",
  openGraph: {
    title: "PDF to Word Converter - Convert PDF to DOCX Online",
    description:
      "Convert PDF files to editable Word documents with our advanced online converter. Supports OCR for scanned PDFs.",
    type: "website",
  },
}

export default function PdfToWordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <PdfToWordConverter />
      </main>
      <Footer />
    </div>
  )
}
