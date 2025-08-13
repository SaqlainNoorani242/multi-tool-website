import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ConvertHub Blog - File Conversion Tips & Tutorials",
  description: "Learn about file conversion best practices, tutorials, and industry insights from the ConvertHub team.",
  keywords: "file conversion blog, tutorials, tips, best practices, ConvertHub blog",
}

const blogPosts = [
  {
    title: "Complete SVG to Embroidery Conversion Guide 2024",
    excerpt:
      "Master the art of converting SVG files to professional embroidery formats with our comprehensive guide and best practices.",
    category: "Tutorial",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    slug: "svg-to-embroidery-guide",
  },
  {
    title: "PDF to Word Conversion Best Practices 2024",
    excerpt:
      "Professional techniques for converting PDF documents to Word format while maintaining quality and formatting.",
    category: "Guide",
    date: "Jan 12, 2024",
    readTime: "6 min read",
    slug: "pdf-to-word-best-practices",
  },
  {
    title: "Complete Image Format Comparison Guide 2024",
    excerpt:
      "Choose the right image format for your needs with our comprehensive comparison of PNG, JPG, WebP, AVIF, and more.",
    category: "Comparison",
    date: "Jan 10, 2024",
    readTime: "10 min read",
    slug: "image-format-comparison",
  },
  {
    title: "3D Model File Formats Explained: GLB vs FBX vs OBJ",
    excerpt:
      "Understanding the differences between popular 3D model formats and when to use each one for your projects.",
    category: "Guide",
    date: "Jan 8, 2024",
    readTime: "7 min read",
    slug: "3d-model-formats-explained",
  },
  {
    title: "Handwriting to Vector Conversion: AI Tips & Techniques",
    excerpt: "Discover how AI-powered handwriting recognition works and get tips for better vector conversion results.",
    category: "Technology",
    date: "Jan 5, 2024",
    readTime: "5 min read",
    slug: "handwriting-to-vector-tips",
  },
  {
    title: "Video Format Optimization for Web and Mobile",
    excerpt: "Learn how to choose the right video format and optimize for different platforms and devices.",
    category: "Optimization",
    date: "Jan 3, 2024",
    readTime: "9 min read",
    slug: "video-format-optimization",
  },
  {
    title: "Audio File Formats: Lossless vs Lossy Compression",
    excerpt: "Complete guide to audio formats including MP3, FLAC, WAV, and AAC with quality comparisons.",
    category: "Guide",
    date: "Dec 30, 2023",
    readTime: "6 min read",
    slug: "audio-formats-guide",
  },
  {
    title: "Document Conversion Security: Protecting Your Files",
    excerpt:
      "Best practices for secure document conversion and protecting sensitive information during file processing.",
    category: "Security",
    date: "Dec 28, 2023",
    readTime: "7 min read",
    slug: "document-conversion-security",
  },
  {
    title: "File Compression Techniques: Reduce Size Without Quality Loss",
    excerpt:
      "Advanced techniques for compressing files while maintaining quality across different formats and use cases.",
    category: "Optimization",
    date: "Dec 25, 2023",
    readTime: "8 min read",
    slug: "file-compression-techniques",
  },
  {
    title: "Digital Asset Management: Organizing Your File Library",
    excerpt:
      "Professional strategies for organizing, naming, and managing large collections of digital files and assets.",
    category: "Management",
    date: "Dec 22, 2023",
    readTime: "6 min read",
    slug: "digital-asset-management",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              ConvertHub Blog
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-bold sm:text-5xl">
              Tips, Tutorials & <span className="text-gradient">Insights</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Stay updated with the latest file conversion techniques, industry trends, and best practices from our team
              of experts.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="mt-16 bg-muted/30">
            <CardContent className="p-8 text-center">
              <h2 className="mb-4 font-heading text-2xl font-bold">Stay Updated</h2>
              <p className="mb-6 text-muted-foreground">
                Subscribe to our newsletter for the latest tutorials, tips, and product updates.
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-md border border-input bg-background"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
