import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About ConvertHub - Professional File Conversion Tools",
  description:
    "Learn about ConvertHub's mission to provide professional-grade file conversion tools for creators and businesses worldwide.",
  keywords: "about ConvertHub, file conversion company, professional tools, team",
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every conversion maintains the highest quality and accuracy standards.",
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Lightning-fast processing without compromising on quality.",
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Professional tools that are easy to use for everyone.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Continuous innovation and improvement in everything we do.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              About ConvertHub
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-bold sm:text-5xl">
              Empowering Creators with <span className="text-gradient">Professional Tools</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              ConvertHub was founded with a simple mission: to provide professional-grade file conversion tools that are
              accessible, reliable, and lightning-fast.
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 font-heading text-3xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2024, ConvertHub emerged from the frustration of dealing with unreliable, slow, and
                  feature-limited file conversion tools. Our team of developers and designers recognized the need for a
                  comprehensive platform that could handle specialized conversions with professional-grade quality.
                </p>
                <p>
                  Today, we serve thousands of creators, businesses, and professionals worldwide, processing over 10,000
                  files monthly. From embroidery designers to 3D artists, our tools have become an essential part of
                  creative workflows.
                </p>
                <p>
                  We're committed to continuous innovation, regularly adding new formats and features based on user
                  feedback and industry needs.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="font-heading text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Files Converted</div>
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold">Our Values</h2>
              <p className="text-muted-foreground">The principles that guide everything we do</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mission Section */}
          <Card className="bg-muted/30">
            <CardContent className="p-8 text-center">
              <h2 className="mb-4 font-heading text-2xl font-bold">Our Mission</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                To democratize access to professional-grade file conversion tools, enabling creators and businesses
                worldwide to work more efficiently and focus on what they do best.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
