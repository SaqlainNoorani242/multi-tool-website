import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Cookie Policy - ConvertHub",
  description: "Learn about how ConvertHub uses cookies and similar technologies to improve your experience.",
  keywords: "cookie policy, cookies, tracking, ConvertHub cookies",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="mb-4 font-heading text-4xl font-bold">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>What Are Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  Cookies are small text files that are stored on your device when you visit our website. They help us
                  provide you with a better experience by remembering your preferences and analyzing how you use our
                  services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <h3>Essential Cookies</h3>
                <p>These cookies are necessary for the website to function properly and cannot be disabled.</p>

                <h3>Analytics Cookies</h3>
                <p>We use Google Analytics to understand how visitors interact with our website.</p>

                <h3>Advertising Cookies</h3>
                <p>These cookies are used to serve relevant advertisements through Google AdSense.</p>

                <h3>Preference Cookies</h3>
                <p>These cookies remember your settings like theme preferences and language choices.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Managing Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>You can control and manage cookies in several ways:</p>
                <ul>
                  <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                  <li>Opt-out tools: Use industry opt-out tools for advertising cookies</li>
                  <li>Privacy settings: Adjust your privacy preferences in your browser</li>
                </ul>
                <p>
                  Please note that disabling certain cookies may affect the functionality of our website and your user
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>We use third-party services that may set their own cookies:</p>
                <ul>
                  <li>Google Analytics for website analytics</li>
                  <li>Google AdSense for advertising</li>
                  <li>Social media platforms for sharing features</li>
                </ul>
                <p>These third parties have their own privacy policies governing their use of cookies.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>If you have any questions about our use of cookies, please contact us at privacy@converthub.com.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
