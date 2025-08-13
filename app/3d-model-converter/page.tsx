import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ModelFormatConverter } from "@/components/model-format-converter"

export const metadata: Metadata = {
  title: "3D Model Format Converter - GLB, FBX, OBJ, STL, USDZ | ConvertHub",
  description:
    "Convert between 3D model formats (GLB, FBX, OBJ, STL, USDZ) with mesh optimization and texture preservation. Professional 3D file converter.",
  keywords: "3D model converter, GLB to FBX, OBJ to STL, USDZ converter, 3D file conversion, mesh optimization",
  openGraph: {
    title: "3D Model Format Converter - Professional 3D File Conversion",
    description: "Convert between 3D model formats with mesh optimization and texture preservation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Model Format Converter - Professional 3D File Conversion",
    description: "Convert between 3D model formats with mesh optimization and texture preservation.",
  },
}

export default function ModelConverterPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-8">
        <ModelFormatConverter />
      </main>
      <Footer />
    </div>
  )
}
