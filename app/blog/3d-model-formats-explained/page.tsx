import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Box, Gamepad2, Printer, Globe, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "3D Model File Formats Explained: GLB vs FBX vs OBJ | ConvertHub",
  description:
    "Understanding the differences between popular 3D model formats including GLB, FBX, OBJ, STL, and USDZ. Learn when to use each format.",
  keywords: "3D model formats, GLB, FBX, OBJ, STL, USDZ, 3D file conversion",
  openGraph: {
    title: "3D Model File Formats Explained: GLB vs FBX vs OBJ",
    description: "Complete guide to 3D model formats and their use cases",
    type: "article",
    publishedTime: "2024-01-08T00:00:00.000Z",
  },
}

export default function ModelFormatsGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-blue-950 dark:to-cyan-950">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">3D Modeling</Badge>
              <Badge variant="secondary">File Formats</Badge>
              <Badge variant="secondary">Conversion</Badge>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              3D Model File Formats Explained: GLB vs FBX vs OBJ
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
              Understanding the differences between popular 3D model formats and when to use each one for your projects.
            </p>
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              <span>Published on January 8, 2024</span>
              <span className="mx-2">•</span>
              <span>7 min read</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 dark:border-slate-800/20">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <Box className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                Understanding 3D Model Formats
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                3D model formats serve different purposes in the digital content creation pipeline. From game
                development to 3D printing, choosing the right format can significantly impact your workflow efficiency
                and final output quality.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Each format has unique strengths, limitations, and ideal use cases. Understanding these differences is
                crucial for optimizing your 3D workflow and ensuring compatibility across different platforms and
                applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-white/20 dark:border-slate-800/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-900 dark:text-white">
                    <Globe className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
                    Web & AR Ready
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">
                    Modern formats optimized for web browsers and augmented reality applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-white/20 dark:border-slate-800/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-900 dark:text-white">
                    <Gamepad2 className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                    Game Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">
                    Professional formats with animation support for game engines and interactive media.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-white/20 dark:border-slate-800/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-900 dark:text-white">
                    <Printer className="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                    3D Printing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">
                    Mesh-focused formats designed for additive manufacturing and rapid prototyping.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-white/20 dark:border-slate-800/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-900 dark:text-white">
                    <Smartphone className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                    Mobile AR
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300">
                    Specialized formats optimized for mobile augmented reality experiences.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 dark:border-slate-800/20">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Popular 3D Model Formats</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    GLB (GL Transmission Format Binary)
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Best for:</strong> Web applications, AR/VR, real-time rendering
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white mb-2">Advantages:</p>
                      <ul className="text-slate-600 dark:text-slate-400 space-y-1 text-sm">
                        <li>• Optimized for web and mobile platforms</li>
                        <li>• Includes textures, materials, and animations</li>
                        <li>• Fast loading and rendering</li>
                        <li>• Industry standard for web 3D content</li>
                        <li>• Supports PBR materials</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white mb-2">Limitations:</p>
                      <ul className="text-slate-600 dark:text-slate-400 space-y-1 text-sm">
                        <li>• Limited editing capabilities</li>
                        <li>• Not suitable for high-poly models</li>
                        <li>• Newer format with less universal support</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">FBX (Filmbox)</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Best for:</strong> Game development, animation, professional 3D workflows
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white mb-2">Advantages:</p>
                      <ul className="text-slate-600 dark:text-slate-400 space-y-1 text-sm">
                        <li>• Excellent animation and rigging support</li>
                        <li>• Wide software compatibility</li>
                        <li>• Preserves complex material setups</li>
                        <li>• Supports cameras, lights, and scene hierarchy</li>
                        <li>• Industry standard for game engines</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white mb-2">Limitations:</p>
                      <ul className="text-slate-600 dark:text-slate-400 space-y-1 text-sm">
                        <li>• Proprietary format (Autodesk)</li>
                        <li>• Large file sizes</li>
                        <li>• Version compatibility issues</li>
                        <li>• Not optimized for web use</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">OBJ (Wavefront OBJ)</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Best for:</strong> Simple models, 3D printing, universal compatibility
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white mb-2">Advantages:</p>
                      <ul className="text-slate-600 dark:text-slate-400 space-y-1 text-sm">
                        <li>• Universal compatibility across all 3D software</li>
                        <li>• Simple, human-readable format</li>
                        <li>• Excellent for static geometry</li>
                        <li>• Small file sizes for simple models</li>
                        <li>• Open standard format</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white mb-2">Limitations:</p>
                      <ul className="text-slate-600 dark:text-slate-400 space-y-1 text-sm">
                        <li>• No animation support</li>
                        <li>• Limited material information</li>
                        <li>• No scene hierarchy</li>
                        <li>• Separate files for textures (MTL)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">STL (Stereolithography)</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Best for:</strong> 3D printing, rapid prototyping
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white mb-2">Advantages:</p>
                      <ul className="text-slate-600 dark:text-slate-400 space-y-1 text-sm">
                        <li>• Standard format for 3D printing</li>
                        <li>• Simple mesh-only format</li>
                        <li>• Universal 3D printer support</li>
                        <li>• Small file sizes</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white mb-2">Limitations:</p>
                      <ul className="text-slate-600 dark:text-slate-400 space-y-1 text-sm">
                        <li>• No color or material information</li>
                        <li>• No animation support</li>
                        <li>• Mesh-only (no curves or NURBS)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    USDZ (Universal Scene Description)
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Best for:</strong> Apple AR applications, iOS development
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white mb-2">Advantages:</p>
                      <ul className="text-slate-600 dark:text-slate-400 space-y-1 text-sm">
                        <li>• Native iOS AR support</li>
                        <li>• Optimized for mobile AR</li>
                        <li>• Includes materials and textures</li>
                        <li>• Animation support</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white mb-2">Limitations:</p>
                      <ul className="text-slate-600 dark:text-slate-400 space-y-1 text-sm">
                        <li>• Limited to Apple ecosystem</li>
                        <li>• Newer format with limited tool support</li>
                        <li>• Specific use case (AR)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 rounded-2xl p-8 mb-8 border border-blue-200/50 dark:border-blue-800/50">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Format Selection Guide</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">By Use Case</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Web/AR Applications</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">GLB or USDZ</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Game Development</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">FBX or GLB</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">3D Printing</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">STL or OBJ</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Animation/VFX</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">FBX or Alembic</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">By Platform</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Unity</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">FBX, OBJ, 3DS</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Unreal Engine</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">FBX, OBJ</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Three.js</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">GLB, GLTF, OBJ</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Blender</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">All formats supported</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/50 dark:to-blue-950/50 rounded-2xl p-8 border border-cyan-200/50 dark:border-cyan-800/50">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Convert Your 3D Models Today
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                Transform your 3D models between different formats with ConvertHub's professional 3D converter.
                Supporting GLB, FBX, OBJ, STL, and USDZ with quality preservation and optimization options.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/3d-model-converter">Convert 3D Models</Link>
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
