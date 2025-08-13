import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HandwritingToVectorConverter } from "@/components/handwriting-to-vector-converter"

export const metadata: Metadata = {
  title: "Handwriting to Vector Converter - AI-Powered SVG & PDF | ConvertHub",
  description:
    "Convert handwritten text and drawings to crisp vector graphics (SVG/PDF) using AI. Transform handwriting to scalable vectors with smart tracing.",
  keywords: "handwriting to vector, handwriting to SVG, handwriting to PDF, AI vector conversion, text vectorization",
  openGraph: {
    title: "Handwriting to Vector Converter - AI-Powered Tool",
    description: "Transform handwritten text and drawings into crisp, scalable vector graphics using advanced AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Handwriting to Vector Converter - AI-Powered Tool",
    description: "Transform handwritten text and drawings into crisp, scalable vector graphics using advanced AI.",
  },
}

export default function HandwritingToVectorPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-8">
        <HandwritingToVectorConverter />
      </main>
      <Footer />
    </div>
  )
}
