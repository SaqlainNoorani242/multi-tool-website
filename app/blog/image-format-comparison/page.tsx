import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ImageIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Image Format Comparison Guide 2024 | ConvertHub",
  description:
    "Compare PNG, JPG, WebP, AVIF, and other image formats. Learn when to use each format for optimal web performance and quality.",
  keywords: "image formats, PNG vs JPG, WebP, AVIF, image optimization, web performance",
  openGraph: {
    title: "Complete Image Format Comparison Guide 2024",
    description: "Master image format selection with our comprehensive comparison guide",
    type: "article",
  },
}

export default function ImageFormatComparison() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Complete Image Format Comparison Guide 2024
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Choose the right image format for your needs with our comprehensive comparison of PNG, JPG, WebP, AVIF,
              and more.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Published: January 10, 2024</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2>Understanding Image Formats</h2>
            <p>
              Choosing the right image format is crucial for web performance, storage efficiency, and visual quality.
              Each format has unique characteristics that make it suitable for specific use cases.
            </p>

            <h2>Popular Image Formats Compared</h2>

            <h3>JPEG (JPG) - The Universal Standard</h3>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-4">
              <p>
                <strong>Best for:</strong> Photographs, complex images with many colors
              </p>
              <p>
                <strong>Pros:</strong>
              </p>
              <ul>
                <li>Excellent compression for photos</li>
                <li>Universal browser support</li>
                <li>Small file sizes</li>
                <li>Adjustable quality settings</li>
              </ul>
              <p>
                <strong>Cons:</strong>
              </p>
              <ul>
                <li>No transparency support</li>
                <li>Lossy compression</li>
                <li>Not ideal for text or simple graphics</li>
              </ul>
            </div>

            <h3>PNG - The Transparency Champion</h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
              <p>
                <strong>Best for:</strong> Images with transparency, logos, simple graphics
              </p>
              <p>
                <strong>Pros:</strong>
              </p>
              <ul>
                <li>Lossless compression</li>
                <li>Full transparency support</li>
                <li>Excellent for text and simple graphics</li>
                <li>Wide browser support</li>
              </ul>
              <p>
                <strong>Cons:</strong>
              </p>
              <ul>
                <li>Larger file sizes for photos</li>
                <li>No animation support</li>
                <li>Limited compression for complex images</li>
              </ul>
            </div>

            <h3>WebP - The Modern Optimizer</h3>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
              <p>
                <strong>Best for:</strong> Web images, modern browsers
              </p>
              <p>
                <strong>Pros:</strong>
              </p>
              <ul>
                <li>Superior compression (25-35% smaller than JPEG)</li>
                <li>Supports both lossy and lossless compression</li>
                <li>Transparency and animation support</li>
                <li>Good browser support (95%+)</li>
              </ul>
              <p>
                <strong>Cons:</strong>
              </p>
              <ul>
                <li>Limited support in older browsers</li>
                <li>Requires fallback for compatibility</li>
                <li>Less familiar to non-technical users</li>
              </ul>
            </div>

            <h3>AVIF - The Next Generation</h3>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-4">
              <p>
                <strong>Best for:</strong> Cutting-edge web applications
              </p>
              <p>
                <strong>Pros:</strong>
              </p>
              <ul>
                <li>Exceptional compression (50% smaller than JPEG)</li>
                <li>High dynamic range support</li>
                <li>Wide color gamut</li>
                <li>Both lossy and lossless compression</li>
              </ul>
              <p>
                <strong>Cons:</strong>
              </p>
              <ul>
                <li>Limited browser support (~85%)</li>
                <li>Slower encoding/decoding</li>
                <li>Requires careful implementation</li>
              </ul>
            </div>

            <h2>Format Selection Guide</h2>

            <h3>For Web Development</h3>
            <ul>
              <li>
                <strong>Hero Images:</strong> WebP with JPEG fallback
              </li>
              <li>
                <strong>Product Photos:</strong> WebP or JPEG
              </li>
              <li>
                <strong>Logos/Icons:</strong> SVG or PNG
              </li>
              <li>
                <strong>Screenshots:</strong> PNG or WebP
              </li>
              <li>
                <strong>Thumbnails:</strong> WebP or JPEG
              </li>
            </ul>

            <h3>For Print and Professional Use</h3>
            <ul>
              <li>
                <strong>High-Quality Photos:</strong> TIFF or PNG
              </li>
              <li>
                <strong>Print Materials:</strong> TIFF or high-quality JPEG
              </li>
              <li>
                <strong>Archival Storage:</strong> TIFF or PNG
              </li>
              <li>
                <strong>Professional Graphics:</strong> PNG or TIFF
              </li>
            </ul>

            <h2>Optimization Strategies</h2>

            <h3>Progressive Enhancement</h3>
            <p>Use modern formats with fallbacks:</p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>`}</code>
            </pre>

            <h3>Responsive Images</h3>
            <p>Serve appropriate sizes for different devices:</p>
            <ul>
              <li>Use srcset for different resolutions</li>
              <li>Implement lazy loading</li>
              <li>Consider device pixel ratio</li>
              <li>Optimize for mobile-first</li>
            </ul>

            <h2>Performance Impact</h2>

            <h3>File Size Comparison (Typical)</h3>
            <ul>
              <li>
                <strong>JPEG:</strong> Baseline (100%)
              </li>
              <li>
                <strong>PNG:</strong> 200-400% larger than JPEG
              </li>
              <li>
                <strong>WebP:</strong> 25-35% smaller than JPEG
              </li>
              <li>
                <strong>AVIF:</strong> 50% smaller than JPEG
              </li>
            </ul>

            <h3>Loading Performance</h3>
            <ul>
              <li>Smaller files = faster loading</li>
              <li>Progressive formats improve perceived performance</li>
              <li>Consider encoding/decoding overhead</li>
              <li>Balance quality vs. file size</li>
            </ul>

            <div className="bg-muted/50 p-6 rounded-lg my-8">
              <h3 className="text-lg font-semibold mb-3">Convert Between Image Formats</h3>
              <p className="mb-4">
                Optimize your images by converting between formats with our professional image converter.
              </p>
              <Link
                href="/image-converter"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Convert Images
                <ImageIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
