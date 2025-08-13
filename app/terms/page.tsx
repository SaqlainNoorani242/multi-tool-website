import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Service - ConvertHub",
  description: "ConvertHub's terms of service outlining the rules and guidelines for using our file conversion tools.",
  keywords: "terms of service, terms and conditions, ConvertHub terms",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="mb-4 font-heading text-4xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  By accessing, browsing, or using ConvertHub ("the Service"), you acknowledge that you have read,
                  understood, and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these
                  Terms, please do not use our Service.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and ConvertHub. We reserve the right to
                  modify these Terms at any time, and such modifications will be effective immediately upon posting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Description of Service</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>ConvertHub provides online file conversion services, including but not limited to:</p>
                <ul>
                  <li>Document conversion (PDF, Word, Excel, PowerPoint)</li>
                  <li>Image format conversion (PNG, JPG, WebP, AVIF)</li>
                  <li>Media conversion (video and audio formats)</li>
                  <li>Specialized conversions (SVG to embroidery, handwriting to vector, 3D models)</li>
                </ul>
                <p>
                  Our services are provided "as is" and we make no warranties regarding the accuracy, reliability, or
                  availability of the Service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Responsibilities and Acceptable Use</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <h4>
                  You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree
                  NOT to:
                </h4>
                <ul>
                  <li>Upload files containing malicious code, viruses, or harmful software</li>
                  <li>Convert copyrighted material without proper authorization</li>
                  <li>Upload content that is illegal, harmful, threatening, or offensive</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Use automated tools to access the Service without permission</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                </ul>

                <h4>File Upload Requirements</h4>
                <p>When uploading files, you represent and warrant that:</p>
                <ul>
                  <li>You own the files or have the legal right to convert them</li>
                  <li>The files do not contain confidential or sensitive information of third parties</li>
                  <li>The files comply with all applicable laws and regulations</li>
                  <li>You have obtained all necessary permissions and licenses</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <h4>Our Intellectual Property</h4>
                <p>
                  The Service, including its design, functionality, software, and content, is owned by ConvertHub and is
                  protected by copyright, trademark, and other intellectual property laws. You may not:
                </p>
                <ul>
                  <li>Copy, modify, or distribute our software or content</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                  <li>Remove or alter any proprietary notices</li>
                  <li>Use our trademarks or branding without permission</li>
                </ul>

                <h4>Your Content</h4>
                <p>
                  You retain ownership of files you upload. By using our Service, you grant us a limited, temporary
                  license to process your files solely for the purpose of providing conversion services. This license
                  expires when your files are automatically deleted from our servers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy and Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  Your privacy is important to us. Our data handling practices are governed by our Privacy Policy, which
                  is incorporated into these Terms by reference. Key points include:
                </p>
                <ul>
                  <li>Files are automatically deleted within 24 hours</li>
                  <li>All data transmission is encrypted using HTTPS</li>
                  <li>We do not access or view your files during processing</li>
                  <li>We implement industry-standard security measures</li>
                </ul>
                <p>Please review our Privacy Policy for complete information about our data practices.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Availability and Modifications</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <h4>Service Availability</h4>
                <p>
                  While we strive to maintain high availability, we cannot guarantee uninterrupted access to our
                  Service. The Service may be temporarily unavailable due to:
                </p>
                <ul>
                  <li>Scheduled maintenance and updates</li>
                  <li>Technical difficulties or server issues</li>
                  <li>Circumstances beyond our reasonable control</li>
                  <li>Security incidents or investigations</li>
                </ul>

                <h4>Service Modifications</h4>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or
                  without notice. We may also impose limits on certain features or restrict access to parts of the
                  Service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Disclaimers and Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <h4>Disclaimers</h4>
                <p>
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                  IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                  AND NON-INFRINGEMENT.
                </p>

                <h4>Limitation of Liability</h4>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, CONVERTHUB SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul>
                  <li>Loss of data or files</li>
                  <li>Business interruption or lost profits</li>
                  <li>Cost of substitute services</li>
                  <li>Any other commercial damages or losses</li>
                </ul>
                <p>
                  Our total liability for any claims related to the Service shall not exceed the amount you paid us in
                  the 12 months preceding the claim, or $100, whichever is greater.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Indemnification</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  You agree to indemnify, defend, and hold harmless ConvertHub and its officers, directors, employees,
                  and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or
                  in any way connected with:
                </p>
                <ul>
                  <li>Your use of the Service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Your uploaded content or files</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Governing Law and Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction],
                  without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of
                  the Service shall be resolved through binding arbitration, except that either party may seek
                  injunctive relief in court.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Termination</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  We may terminate or suspend your access to the Service immediately, without prior notice, for any
                  reason, including if you breach these Terms. Upon termination, your right to use the Service will
                  cease immediately.
                </p>
                <p>
                  Sections of these Terms that by their nature should survive termination shall survive, including
                  ownership provisions, warranty disclaimers, and limitations of liability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Severability and Entire Agreement</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in
                  full force and effect. These Terms, together with our Privacy Policy, constitute the entire agreement
                  between you and ConvertHub regarding the Service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>
                  If you have any questions, concerns, or legal inquiries regarding these Terms of Service, please
                  contact us:
                </p>
                <ul>
                  <li>
                    <strong>Email:</strong> legal@converthub.com
                  </li>
                  <li>
                    <strong>Response Time:</strong> We aim to respond within 48 hours
                  </li>
                  <li>
                    <strong>Legal Department:</strong> Available for formal legal matters
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
