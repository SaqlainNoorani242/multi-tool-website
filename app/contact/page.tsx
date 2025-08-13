import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageSquare, Clock, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact ConvertHub - Get Support & Feedback",
  description:
    "Contact ConvertHub for support, feature requests, or business inquiries. We're here to help with your file conversion needs.",
  keywords: "contact ConvertHub, support, help, feedback, business inquiries",
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with technical issues or account questions",
      contact: "support@converthub.com",
    },
    {
      icon: MessageSquare,
      title: "General Inquiries",
      description: "Questions about our services or partnerships",
      contact: "hello@converthub.com",
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We typically respond within 24 hours",
      contact: "24 hours",
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "Available worldwide in multiple languages",
      contact: "Worldwide",
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
              Contact Us
            </Badge>
            <h1 className="mb-6 font-heading text-4xl font-bold sm:text-5xl">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Have questions, feedback, or need support? We'd love to hear from you. Our team is here to help you get
              the most out of ConvertHub.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactMethods.map((method) => (
                      <div key={method.title} className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <method.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{method.title}</h3>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                          <p className="text-sm font-medium">{method.contact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium">File size limits?</h4>
                      <p className="text-muted-foreground">Up to 50MB for 3D models, 10MB for other formats.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Processing time?</h4>
                      <p className="text-muted-foreground">Most files process in under 30 seconds.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">File security?</h4>
                      <p className="text-muted-foreground">Files are automatically deleted after 24 hours.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ad Placeholder */}
              <Card className="border-dashed">
                <CardContent className="flex h-32 items-center justify-center p-6">
                  <div className="text-center text-sm text-muted-foreground">
                    <div className="mb-2 text-xs">Advertisement</div>
                    <div className="text-xs opacity-60">AdSense Placeholder</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
