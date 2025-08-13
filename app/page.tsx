import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import dynamic from "next/dynamic"

const FeaturesGrid = dynamic(
  () => import("@/components/features-grid").then((mod) => ({ default: mod.FeaturesGrid })),
  {
    loading: () => <div className="h-96 animate-pulse bg-muted/20 rounded-lg" />,
  },
)

const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((mod) => ({ default: mod.TestimonialsSection })),
  {
    loading: () => <div className="h-64 animate-pulse bg-muted/20 rounded-lg" />,
  },
)

const CTASection = dynamic(() => import("@/components/cta-section").then((mod) => ({ default: mod.CTASection })), {
  loading: () => <div className="h-48 animate-pulse bg-muted/20 rounded-lg" />,
})

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
