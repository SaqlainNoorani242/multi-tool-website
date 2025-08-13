import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SvgToEmbroideryConverter } from "@/components/svg-to-embroidery-converter"

export const metadata: Metadata = {
  title: "SVG to Embroidery Converter - Convert SVG to PES, DST, EXP | ConvertHub",
  description:
    "Convert SVG graphics to professional embroidery formats (PES, DST, EXP) with precise stitch control. Free online SVG to embroidery file converter.",
  keywords: "SVG to embroidery, SVG to PES, SVG to DST, SVG to EXP, embroidery file converter, digitizing",
  openGraph: {
    title: "SVG to Embroidery Converter - Professional Digitizing Tool",
    description: "Convert SVG graphics to embroidery formats with professional-grade quality and stitch optimization.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SVG to Embroidery Converter - Professional Digitizing Tool",
    description: "Convert SVG graphics to embroidery formats with professional-grade quality and stitch optimization.",
  },
}

export default function SvgToEmbroideryPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-8">
        <SvgToEmbroideryConverter />
      </main>
      <Footer />
    </div>
  )
}
