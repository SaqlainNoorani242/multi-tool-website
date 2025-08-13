import Link from "next/link"
import { Zap } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold text-gradient">ConvertHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional file conversion tools for creators and businesses.
            </p>
          </div>

          {/* Tools */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/svg-to-embroidery" className="text-muted-foreground hover:text-foreground">
                  SVG to Embroidery
                </Link>
              </li>
              <li>
                <Link href="/handwriting-to-vector" className="text-muted-foreground hover:text-foreground">
                  Handwriting to Vector
                </Link>
              </li>
              <li>
                <Link href="/3d-model-converter" className="text-muted-foreground hover:text-foreground">
                  3D Model Converter
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">© {currentYear} ConvertHub. All rights reserved.</p>

            {/* AdSense placeholder */}
            <div className="flex h-12 w-48 items-center justify-center rounded border-2 border-dashed border-muted-foreground/20 text-xs text-muted-foreground">
              AdSense Placeholder
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
