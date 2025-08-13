import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FolderOpen, Search, Tag, Clock, Users, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Digital Asset Management: Complete Guide for 2024 | ConvertHub",
  description:
    "Master digital asset management with our comprehensive guide. Learn organization strategies, file conversion workflows, and best practices for managing digital content.",
  keywords: "digital asset management, DAM, file organization, content management, digital workflow, asset conversion",
  openGraph: {
    title: "Digital Asset Management: Complete Guide for 2024",
    description: "Master digital asset management with organization strategies and conversion workflows.",
    type: "article",
    publishedTime: "2024-01-20T00:00:00.000Z",
  },
}

export default function DigitalAssetManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-purple-950 dark:to-pink-950">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Asset Management</Badge>
              <Badge variant="secondary">Workflow</Badge>
              <Badge variant="secondary">Organization</Badge>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Digital Asset Management: Complete Guide for 2024
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
              Transform your digital content chaos into an organized, efficient asset management system with proven
              strategies and tools.
            </p>
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              <span>Published on January 20, 2024</span>
              <span className="mx-2">•</span>
              <span>12 min read</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 dark:border-slate-800/20">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <FolderOpen className="w-6 h-6 mr-3 text-purple-600 dark:text-purple-400" />
                What is Digital Asset Management?
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Digital Asset Management (DAM) is the systematic organization, storage, and distribution of digital
                assets such as images, videos, documents, audio files, and other multimedia content. It encompasses the
                entire lifecycle of digital assets from creation to archival.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                In today's content-driven world, businesses and individuals generate massive amounts of digital assets
                daily. Without proper management, these valuable resources become scattered, duplicated, and ultimately
                lost in the digital chaos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-white/20 dark:border-slate-800/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-900 dark:text-white">
                    <Search className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                    Findability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">
                    Quickly locate any asset with powerful search and filtering capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-white/20 dark:border-slate-800/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-900 dark:text-white">
                    <Users className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
                    Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">
                    Enable seamless sharing and collaboration across teams and departments.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-white/20 dark:border-slate-800/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-900 dark:text-white">
                    <Shield className="w-5 h-5 mr-2 text-red-600 dark:text-red-400" />
                    Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">
                    Protect valuable assets with access controls and version management.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 dark:border-slate-800/20">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                <Tag className="w-6 h-6 mr-3 text-orange-600 dark:text-orange-400" />
                Essential DAM Components
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Metadata Management</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Comprehensive tagging and categorization system that makes assets discoverable and provides context.
                  </p>
                  <ul className="text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Descriptive tags and keywords</li>
                    <li>• Technical specifications</li>
                    <li>• Usage rights and licensing</li>
                    <li>• Creation and modification dates</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Version Control</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Track changes, maintain asset history, and prevent conflicts in collaborative environments.
                  </p>
                  <ul className="text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Automatic versioning</li>
                    <li>• Change tracking</li>
                    <li>• Rollback capabilities</li>
                    <li>• Approval workflows</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Format Management</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Handle multiple file formats and enable seamless conversion between different asset types.
                  </p>
                  <ul className="text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Multi-format support</li>
                    <li>• Automatic conversion</li>
                    <li>• Quality optimization</li>
                    <li>• Format standardization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 rounded-2xl p-8 mb-8 border border-purple-200/50 dark:border-purple-800/50">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-purple-600 dark:text-purple-400" />
                DAM Implementation Strategy
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Phase 1: Assessment</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Audit existing assets</li>
                    <li>• Identify stakeholders</li>
                    <li>• Define requirements</li>
                    <li>• Set success metrics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Phase 2: Planning</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Design taxonomy</li>
                    <li>• Create workflows</li>
                    <li>• Establish governance</li>
                    <li>• Plan migration</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Phase 3: Implementation</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Set up infrastructure</li>
                    <li>• Migrate assets</li>
                    <li>• Configure permissions</li>
                    <li>• Test workflows</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Phase 4: Optimization</h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Train users</li>
                    <li>• Monitor usage</li>
                    <li>• Gather feedback</li>
                    <li>• Continuous improvement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 dark:border-slate-800/20">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                File Conversion in DAM Workflows
              </h2>

              <p className="text-slate-700 dark:text-slate-300 mb-6">
                File conversion plays a crucial role in digital asset management, enabling format standardization,
                optimization, and accessibility across different platforms and use cases.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Common Conversion Scenarios</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Archive to Web</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Convert high-resolution assets to web-optimized formats
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Print to Digital</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Transform print materials for digital distribution
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Legacy Migration</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Update outdated formats to modern standards
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">ConvertHub Integration</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                    Streamline your DAM workflow with ConvertHub's conversion tools:
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/image-converter"
                      className="block p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-950/50 transition-colors"
                    >
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                        Image Format Converter
                      </span>
                    </Link>
                    <Link
                      href="/pdf-to-word"
                      className="block p-3 bg-green-50 dark:bg-green-950/30 rounded-lg hover:bg-green-100 dark:hover:bg-green-950/50 transition-colors"
                    >
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">
                        PDF to Word Converter
                      </span>
                    </Link>
                    <Link
                      href="/video-converter"
                      className="block p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-950/50 transition-colors"
                    >
                      <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                        Video Format Converter
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/50">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Start Your DAM Journey Today
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                Transform your digital asset chaos into an organized, efficient system. Begin with proper file
                conversion and organization using ConvertHub's professional tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/image-converter">Start Converting</Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 dark:border-slate-600 bg-transparent">
                  <Link href="/blog">Read More Guides</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
