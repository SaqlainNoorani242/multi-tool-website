import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AudioFormatConverter } from "@/components/audio-format-converter"

export const metadata: Metadata = {
  title: "Audio Format Converter - Convert MP3, WAV, FLAC, AAC Online | ConvertHub",
  description:
    "Convert audio files between formats: MP3, WAV, FLAC, AAC, OGG, M4A. Adjust bitrate, sample rate, and quality for optimal audio conversion.",
  keywords: "audio converter, MP3 converter, WAV to MP3, FLAC converter, audio format conversion, bitrate adjustment",
  openGraph: {
    title: "Audio Format Converter - Convert MP3, WAV, FLAC, AAC Online",
    description:
      "Professional audio format conversion with quality control and metadata preservation for all audio formats.",
    type: "website",
  },
}

export default function AudioConverterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <AudioFormatConverter />
      </main>
      <Footer />
    </div>
  )
}
