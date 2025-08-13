import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedCounter } from "@/components/animated-counter"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-bg py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-r from-primary/20 to-primary/5 blur-3xl animate-pulse-glow" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <ScrollAnimation animation="fade-up">
            <div className="mb-8 inline-flex items-center rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur-sm glass hover-glow">
              <Sparkles className="mr-2 h-4 w-4 text-primary animate-float" />
              10 Professional File Conversion Tools
            </div>
          </ScrollAnimation>

          {/* Heading */}
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Convert Files Like a <span className="text-gradient animate-shimmer text-black text-black text-white text-transparent">Professional</span>
            </h1>
          </ScrollAnimation>

          {/* Description */}
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl lg:text-2xl">
              Transform documents, images, videos, and audio with our comprehensive suite of conversion tools. From PDF
              to Word, SVG to embroidery, and 3D model formats - all with professional-grade quality and lightning-fast
              processing.
            </p>
          </ScrollAnimation>

          {/* CTA Buttons */}
          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="group hover-lift">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="glass bg-transparent hover-glow">
                View All Tools
              </Button>
            </div>
          </ScrollAnimation>

          {/* Stats */}
          <ScrollAnimation animation="fade-up" delay={400}>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-4">
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary">
                  <AnimatedCounter end={2847291} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Files Converted</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary">
                  <AnimatedCounter end={10} suffix="" />
                </div>
                <div className="text-sm text-muted-foreground">Conversion Tools</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary">
                  <AnimatedCounter end={99} suffix=".9%" />
                </div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary">
                  <AnimatedCounter end={2} suffix=".5s" />
                </div>
                <div className="text-sm text-muted-foreground">Avg Processing</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
