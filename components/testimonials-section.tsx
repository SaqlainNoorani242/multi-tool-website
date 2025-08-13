import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Embroidery Designer",
    company: "Stitch Studio",
    content:
      "ConvertHub's SVG to embroidery converter is a game-changer. The stitch quality is professional-grade and saves me hours of manual work.",
    rating: 5,
    avatar: "/professional-woman-designer.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "3D Artist",
    company: "Digital Creations",
    content:
      "The 3D model converter handles complex meshes flawlessly. I can now work with any format my clients need without compatibility issues.",
    rating: 5,
    avatar: "/professional-3d-artist-man.png",
  },
  {
    name: "Emily Watson",
    role: "Graphic Designer",
    company: "Creative Agency",
    content:
      "Converting handwriting to vectors has never been easier. The AI does an incredible job preserving the original character and style.",
    rating: 5,
    avatar: "/professional-woman-graphic-designer.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-muted/30 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">Trusted by Professionals</h2>
          <p className="text-lg text-muted-foreground">
            See what creators and businesses are saying about our conversion tools.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-0 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="mb-4 flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="mb-4 text-sm leading-relaxed">"{testimonial.content}"</blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
