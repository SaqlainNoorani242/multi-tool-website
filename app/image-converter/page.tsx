import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ImageFormatConverter } from "@/components/image-format-converter"

export const metadata: Metadata = {
  title: "Image Format Converter - Convert PNG, JPG, WebP, AVIF Online | ConvertHub",
  description:
    "Convert images between formats: PNG, JPG, WebP, AVIF, GIF, BMP. Optimize file size, adjust quality, and batch convert multiple images online.",
  keywords: "image converter, PNG to JPG, WebP converter, AVIF converter, image optimization, batch convert",
  openGraph: {
    title: "Image Format Converter - Convert PNG, JPG, WebP, AVIF Online",
    description:
      "Convert images between all popular formats with quality optimization and batch processing capabilities.",
    type: "website",
  },
}

export default function ImageConverterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <ImageFormatConverter />
      </main>
      <Footer />
    </div>
  )
}
