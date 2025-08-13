import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedCounter } from "@/components/animated-counter"
import {
  Palette,
  PenTool,
  Box,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  FileText,
  ImageIcon,
  Video,
  Music,
  Table,
  Presentation,
} from "lucide-react"

const documentTools = [
  {
    icon: FileText,
    title: "PDF to Word",
    description: "Convert PDF files to editable Word documents with OCR support for scanned documents.",
    href: "/pdf-to-word",
    badge: "OCR Enabled",
    features: ["OCR technology", "Format preservation", "Batch processing", "Password protection"],
  },
  {
    icon: FileText,
    title: "Word to PDF",
    description: "Transform Word documents to professional PDF files with password protection options.",
    href: "/word-to-pdf",
    badge: "Professional",
    features: ["Perfect formatting", "Password security", "High quality", "Font embedding"],
  },
  {
    icon: Table,
    title: "Excel to CSV",
    description: "Convert Excel spreadsheets to CSV format with custom delimiters and data integrity.",
    href: "/excel-to-csv",
    badge: "Data Safe",
    features: ["Multi-sheet support", "Custom delimiters", "Data integrity", "Encoding options"],
  },
  {
    icon: Presentation,
    title: "PowerPoint to PDF",
    description: "Convert presentations to PDF with layout preservation and speaker notes inclusion.",
    href: "/powerpoint-to-pdf",
    badge: "Layout Perfect",
    features: ["Perfect layouts", "Include notes", "Print ready", "Multiple slides per page"],
  },
]

const mediaTools = [
  {
    icon: ImageIcon,
    title: "Image Converter",
    description: "Convert between image formats (PNG, JPG, WebP, AVIF) with quality optimization.",
    href: "/image-converter",
    badge: "Modern Formats",
    features: ["WebP & AVIF support", "Quality control", "Batch processing", "Resize options"],
  },
  {
    icon: Video,
    title: "Video Converter",
    description: "Convert videos between formats with codec selection and resolution optimization.",
    href: "/video-converter",
    badge: "HD Quality",
    features: ["Multiple codecs", "4K support", "Compression", "Device optimization"],
  },
  {
    icon: Music,
    title: "Audio Converter",
    description: "Convert audio files with bitrate control and metadata preservation.",
    href: "/audio-converter",
    badge: "Lossless",
    features: ["Lossless formats", "Bitrate control", "Metadata preservation", "Normalize volume"],
  },
]

const specializedTools = [
  {
    icon: Palette,
    title: "SVG to Embroidery",
    description: "Convert SVG graphics to professional embroidery formats (PES, DST, EXP) with precise stitch control.",
    href: "/svg-to-embroidery",
    badge: "Popular",
    features: ["Multiple formats", "Stitch optimization", "Color mapping", "Size scaling"],
  },
  {
    icon: PenTool,
    title: "Handwriting to Vector",
    description: "Transform handwritten text and drawings into crisp, scalable vector graphics (SVG/PDF).",
    href: "/handwriting-to-vector",
    badge: "AI Powered",
    features: ["Smart tracing", "Noise reduction", "Vector optimization", "Multiple outputs"],
  },
  {
    icon: Box,
    title: "3D Model Converter",
    description: "Seamlessly convert between 3D model formats (GLB, FBX, OBJ, STL, USDZ) with optimization.",
    href: "/3d-model-converter",
    badge: "Pro",
    features: ["Format flexibility", "Mesh optimization", "Texture preservation", "Batch processing"],
  },
]

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process files in seconds with our optimized conversion algorithms.",
    stat: "2.5s",
    statLabel: "Avg. Processing Time",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your files are automatically deleted after processing. No data retention.",
    stat: "100%",
    statLabel: "Privacy Guaranteed",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Convert files anytime, anywhere with our cloud-based processing.",
    stat: "99.9%",
    statLabel: "Uptime",
  },
]

const stats = [
  { number: 2847291, label: "Files Converted", suffix: "" },
  { number: 156, label: "Countries Served", suffix: "" },
  { number: 99, label: "Customer Satisfaction", suffix: "%" },
  { number: 10, label: "Conversion Tools", suffix: "" },
]

function ToolCard({ tool, index }: { tool: any; index: number }) {
  return (
    <ScrollAnimation animation="scale" delay={index * 100}>
      <Card className="group relative overflow-hidden border-2 glass hover-lift transition-all hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <tool.icon className="h-6 w-6 text-primary" />
            </div>
            <Badge variant="secondary" className="animate-pulse-glow">
              {tool.badge}
            </Badge>
          </div>
          <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
            {tool.title}
          </CardTitle>
          <CardDescription className="text-base">{tool.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2">
            {tool.features.map((item: string, featureIndex: number) => (
              <li
                key={item}
                className={`flex items-center text-sm text-muted-foreground stagger-${featureIndex + 1} animate-fade-in-left`}
              >
                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                {item}
              </li>
            ))}
          </ul>
          <Button asChild className="w-full group hover-glow">
            <Link href={tool.href}>
              Try Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </ScrollAnimation>
  )
}

export function FeaturesGrid() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollAnimation animation="fade-up">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl text-gradient">
              Professional Conversion Tools
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from our comprehensive suite of 10 specialized conversion tools, each designed for professional
              results and optimized for speed, security, and quality.
            </p>
          </div>
        </ScrollAnimation>

        {/* Stats Section */}
        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Document Converters */}
        <div className="mb-16">
          <ScrollAnimation animation="fade-up">
            <div className="mb-8 text-center">
              <h3 className="mb-2 font-heading text-2xl font-bold">Document Converters</h3>
              <p className="text-muted-foreground">
                Professional document conversion tools for PDFs, Word, Excel, and PowerPoint files.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {documentTools.map((tool, index) => (
              <ToolCard key={tool.title} tool={tool} index={index} />
            ))}
          </div>
        </div>

        {/* Media Converters */}
        <div className="mb-16">
          <ScrollAnimation animation="fade-up">
            <div className="mb-8 text-center">
              <h3 className="mb-2 font-heading text-2xl font-bold">Media Converters</h3>
              <p className="text-muted-foreground">
                Advanced media conversion tools for images, videos, and audio files with modern format support.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mediaTools.map((tool, index) => (
              <ToolCard key={tool.title} tool={tool} index={index} />
            ))}
          </div>
        </div>

        {/* Specialized Converters */}
        <div className="mb-20">
          <ScrollAnimation animation="fade-up">
            <div className="mb-8 text-center">
              <h3 className="mb-2 font-heading text-2xl font-bold">Specialized Converters</h3>
              <p className="text-muted-foreground">
                Unique conversion tools for specialized workflows including embroidery, handwriting, and 3D models.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {specializedTools.map((tool, index) => (
              <ToolCard key={tool.title} tool={tool} index={index} />
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <ScrollAnimation animation="fade-up">
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className={`text-center stagger-${index + 1} animate-fade-in-up`}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 hover-glow">
                  <benefit.icon className="h-8 w-8 text-primary animate-float" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold">{benefit.title}</h3>
                <p className="mb-3 text-muted-foreground">{benefit.description}</p>
                <div className="text-2xl font-bold text-primary">{benefit.stat}</div>
                <p className="text-sm text-muted-foreground">{benefit.statLabel}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
