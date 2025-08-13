import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VideoFormatConverter } from "@/components/video-format-converter"

export const metadata: Metadata = {
  title: "Video Format Converter - Convert MP4, AVI, MOV, WebM Online | ConvertHub",
  description:
    "Convert videos between formats: MP4, AVI, MOV, WebM, MKV, FLV. Compress videos, adjust quality, and optimize for web or mobile devices.",
  keywords: "video converter, MP4 converter, AVI to MP4, MOV converter, video compression, format conversion",
  openGraph: {
    title: "Video Format Converter - Convert MP4, AVI, MOV, WebM Online",
    description: "Professional video format conversion with compression and quality optimization for all devices.",
    type: "website",
  },
}

export default function VideoConverterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <VideoFormatConverter />
      </main>
      <Footer />
    </div>
  )
}
