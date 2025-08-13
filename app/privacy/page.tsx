import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy - ConvertHub",
  description: "ConvertHub's privacy policy explaining how we collect, use, and protect your personal information.",
  keywords: "privacy policy, data protection, ConvertHub privacy",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="mb-4 font-heading text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <h4>Information You Provide</h4>
                <p>We collect information you provide directly to us, including:</p>
                <ul>
                  <li>Contact information (name, email address) when you contact us</li>
                  <li>Files you upload for conversion (stored temporarily and securely)</li>
                  <li>Feedback, comments, and support requests</li>
                  <li>Newsletter subscription information (if applicable)</li>
                </ul>

                <h4>Automatically Collected Information</h4>
                <p>We automatically collect certain information when you use our services:</p>
                <ul>
                  <li>Device information (browser type, operating system, device identifiers)</li>
                  <li>Usage data (pages visited, features used, time spent)</li>
                  <li>IP address and general location information</li>
                  <li>Referral sources and search terms</li>
                  <li>Technical data for performance optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>We use collected information for the following purposes:</p>

                <h4>Service Provision</h4>
                <ul>
                  <li>Process your file conversions efficiently and securely</li>
                  <li>Provide technical support and customer service</li>
                  <li>Maintain and improve our conversion algorithms</li>
                  <li>Ensure service security and prevent abuse</li>
                </ul>

                <h4>Communication</h4>
                <ul>
                  <li>Send service-related notifications and updates</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Provide important security and legal notices</li>
                  <li>Send newsletters (with your consent)</li>
                </ul>

                <h4>Analytics and Improvement</h4>
                <ul>
                  <li>Analyze usage patterns to improve user experience</li>
                  <li>Conduct research and development for new features</li>
                  <li>Monitor service performance and reliability</li>
                  <li>Generate anonymized usage statistics</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>File Security and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <h4>File Handling</h4>
                <p>Your file security is our highest priority. We implement the following measures:</p>
                <ul>
                  <li>
                    <strong>Automatic Deletion:</strong> All uploaded files are permanently deleted within 24 hours
                  </li>
                  <li>
                    <strong>Encryption:</strong> Files are encrypted during upload, processing, and storage
                  </li>
                  <li>
                    <strong>Secure Processing:</strong> Conversions occur in isolated, secure environments
                  </li>
                  <li>
                    <strong>No Human Access:</strong> Files are processed automatically without human intervention
                  </li>
                  <li>
                    <strong>Secure Transmission:</strong> All data transfers use HTTPS encryption
                  </li>
                </ul>

                <h4>Data Protection Measures</h4>
                <ul>
                  <li>Industry-standard SSL/TLS encryption</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication systems</li>
                  <li>Monitoring for unauthorized access attempts</li>
                  <li>Compliance with data protection regulations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <h4>Types of Cookies We Use</h4>
                <ul>
                  <li>
                    <strong>Essential Cookies:</strong> Required for basic site functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how you use our site
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings and preferences
                  </li>
                  <li>
                    <strong>Advertising Cookies:</strong> Used to serve relevant advertisements
                  </li>
                </ul>

                <h4>Managing Cookies</h4>
                <p>
                  You can control cookies through your browser settings. Note that disabling certain cookies may affect
                  site functionality. Most browsers allow you to:
                </p>
                <ul>
                  <li>View and delete cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block third-party cookies</li>
                  <li>Clear all cookies when closing the browser</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Services and Advertising</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <h4>Analytics Services</h4>
                <p>
                  We use Google Analytics to understand site usage and improve our services. Google Analytics may
                  collect:
                </p>
                <ul>
                  <li>Pages visited and time spent on site</li>
                  <li>Referral sources and search terms</li>
                  <li>Device and browser information</li>
                  <li>General geographic location</li>
                </ul>

                <h4>Advertising</h4>
                <p>We participate in Google AdSense to display relevant advertisements. AdSense may:</p>
                <ul>
                  <li>Use cookies to serve personalized ads</li>
                  <li>Collect information about your interests</li>
                  <li>Show ads based on your browsing history</li>
                  <li>Allow you to opt out of personalized advertising</li>
                </ul>

                <p>
                  You can opt out of personalized advertising by visiting{" "}
                  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                    Google Ad Settings
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>Depending on your location, you may have the following rights:</p>
                <ul>
                  <li>
                    <strong>Access:</strong> Request information about data we collect
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal data
                  </li>
                  <li>
                    <strong>Portability:</strong> Request a copy of your data in a portable format
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to certain types of data processing
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request restriction of data processing
                  </li>
                </ul>

                <p>To exercise these rights, please contact us at privacy@converthub.com.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  Our services may involve transferring data internationally. We ensure appropriate safeguards are in
                  place for international transfers, including:
                </p>
                <ul>
                  <li>Adequacy decisions by relevant authorities</li>
                  <li>Standard contractual clauses</li>
                  <li>Certification schemes and codes of conduct</li>
                  <li>Binding corporate rules where applicable</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal
                  information from children under 13. If we become aware that we have collected personal information
                  from a child under 13, we will take steps to delete such information promptly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this
                  Privacy Policy periodically for any changes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us:
                </p>
                <ul>
                  <li>
                    <strong>Email:</strong> privacy@converthub.com
                  </li>
                  <li>
                    <strong>Response Time:</strong> We aim to respond within 48 hours
                  </li>
                  <li>
                    <strong>Data Protection Officer:</strong> Available upon request
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
