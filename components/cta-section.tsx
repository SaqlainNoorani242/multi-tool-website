import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/80 px-8 py-16 text-center lg:px-16">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:30px_30px]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[400px] w-[400px] rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <Sparkles className="h-8 w-8 text-white" />
            </div>

            {/* Heading */}
            <h2 className="mb-4 font-heading text-3xl font-bold text-white sm:text-4xl">
              Ready to Convert Your Files?
            </h2>

            {/* Description */}
            <p className="mb-8 text-lg text-white/90 sm:text-xl">
              Join thousands of professionals who trust ConvertHub for their file conversion needs. Start converting
              today with our free tier.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="group">
                Start Converting Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
