"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, Zap, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isConvertersOpen, setIsConvertersOpen] = useState(false)

  const converters = [
    { name: "SVG to Embroidery", href: "/svg-to-embroidery" },
    { name: "Handwriting to Vector", href: "/handwriting-to-vector" },
    { name: "3D Model Converter", href: "/3d-model-converter" },
    { name: "PDF to Word", href: "/pdf-to-word" },
    { name: "Word to PDF", href: "/word-to-pdf" },
    { name: "Excel to CSV", href: "/excel-to-csv" },
    { name: "PowerPoint to PDF", href: "/powerpoint-to-pdf" },
    { name: "Image Converter", href: "/image-converter" },
    { name: "Video Converter", href: "/video-converter" },
    { name: "Audio Converter", href: "/audio-converter" },
  ]

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold text-gradient">ConvertHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}

            {/* Converters Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                className="flex items-center space-x-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsConvertersOpen(!isConvertersOpen)}
              >
                <span>Converters</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isConvertersOpen ? "rotate-180" : ""}`} />
              </Button>

              {isConvertersOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 rounded-md border bg-popover p-2 shadow-lg">
                  <div className="grid grid-cols-1 gap-1">
                    {converters.map((converter) => (
                      <Link
                        key={converter.name}
                        href={converter.href}
                        className="block rounded-sm px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        onClick={() => setIsConvertersOpen(false)}
                      >
                        {converter.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <ModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <ModeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="h-8 w-8 p-0">
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t pb-4 pt-4 lg:hidden">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Converters Section */}
              <div className="border-t pt-2 mt-2">
                <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Converters
                </div>
                {converters.map((converter) => (
                  <Link
                    key={converter.name}
                    href={converter.href}
                    className="block px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {converter.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
