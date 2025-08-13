"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileUploadZone } from "@/components/file-upload-zone"
import { ConversionOptions } from "@/components/conversion-options"
import { ConversionProgress } from "@/components/conversion-progress"
import { DownloadSection } from "@/components/download-section"
import { HowToUseSection } from "@/components/how-to-use-section"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Badge } from "@/components/ui/badge"
import { Music, Volume2, Headphones, Radio } from "lucide-react"

export function AudioFormatConverter() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [conversionOptions, setConversionOptions] = useState({
    outputFormat: "mp3" as "mp3" | "wav" | "flac" | "aac" | "ogg" | "m4a",
    bitrate: "320" as "128" | "192" | "256" | "320" | "lossless",
    sampleRate: "44100" as "22050" | "44100" | "48000" | "96000",
    channels: "stereo" as "mono" | "stereo",
    normalizeVolume: false,
    preserveMetadata: true,
  })

  const handleFileUpload = (file: File) => {
    setUploadedFile(file)
    setDownloadUrl(null)
    setProgress(0)
  }

  const handleConvert = async () => {
    if (!uploadedFile) return

    setIsConverting(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsConverting(false)
          setDownloadUrl(`/api/download/audio-converted-${Date.now()}.${conversionOptions.outputFormat}`)
          return 100
        }
        return prev + Math.random() * 8
      })
    }, 200)
  }

  const features = [
    {
      icon: <Music className="w-5 h-5" />,
      title: "All Audio Formats",
      description: "Support for MP3, WAV, FLAC, AAC, OGG, and M4A",
    },
    {
      icon: <Volume2 className="w-5 h-5" />,
      title: "Quality Control",
      description: "Adjust bitrate, sample rate, and audio quality",
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: "Lossless Options",
      description: "Convert to lossless formats like FLAC and WAV",
    },
    {
      icon: <Radio className="w-5 h-5" />,
      title: "Metadata Preservation",
      description: "Keep artist, album, and track information",
    },
  ]

  const steps = [
    {
      title: "Upload Audio File",
      description:
        "Upload your audio file in any popular format (MP3, WAV, FLAC, AAC, OGG, M4A). Files up to 100MB are supported with fast processing.",
    },
    {
      title: "Select Format & Quality",
      description:
        "Choose your desired output format and quality settings. Configure bitrate (128-320 kbps or lossless), sample rate, and channel options.",
    },
    {
      title: "Configure Audio Options",
      description:
        "Fine-tune audio settings including volume normalization, metadata preservation, and channel configuration (mono/stereo) for optimal results.",
    },
    {
      title: "Convert & Download",
      description:
        "Start the conversion process and download your optimized audio file. Metadata like artist, album, and track information is preserved by default.",
    },
  ]

  return (
    <div className="space-y-8">
      <ScrollAnimation animation="fade-up">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="animate-pulse-glow">
            Media Converter
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">Audio Format Converter</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Convert audio files between all popular formats with professional quality control. Support for lossless
            formats and metadata preservation.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ScrollAnimation animation="fade-left">
            <Card className="glass hover-lift">
              <CardHeader>
                <CardTitle>Upload Audio</CardTitle>
                <CardDescription>Select an audio file to convert between formats</CardDescription>
              </CardHeader>
              <CardContent>
                <FileUploadZone
                  onFileUpload={handleFileUpload}
                  acceptedTypes={["audio/mpeg", "audio/wav", "audio/flac", "audio/aac", "audio/ogg", "audio/m4a"]}
                  maxSize={100 * 1024 * 1024} // 100MB
                  uploadedFile={uploadedFile}
                />
              </CardContent>
            </Card>
          </ScrollAnimation>

          {uploadedFile && (
            <ScrollAnimation animation="scale">
              <Card className="glass hover-lift">
                <CardHeader>
                  <CardTitle>Audio Settings</CardTitle>
                  <CardDescription>Configure output format and quality options</CardDescription>
                </CardHeader>
                <CardContent>
                  <ConversionOptions
                    type="audio-converter"
                    options={conversionOptions}
                    onChange={setConversionOptions}
                    onConvert={handleConvert}
                    isConverting={isConverting}
                  />
                </CardContent>
              </Card>
            </ScrollAnimation>
          )}

          {isConverting && (
            <ScrollAnimation animation="scale">
              <ConversionProgress
                progress={progress}
                status={progress < 100 ? "Converting audio..." : "Conversion complete!"}
              />
            </ScrollAnimation>
          )}

          {downloadUrl && (
            <ScrollAnimation animation="fade-up">
              <DownloadSection
                downloadUrl={downloadUrl}
                fileName={`converted-audio.${conversionOptions.outputFormat}`}
                fileSize="8.4 MB"
              />
            </ScrollAnimation>
          )}
        </div>

        <div className="space-y-6">
          <ScrollAnimation animation="fade-right">
            <Card className="glass hover-lift">
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className={`flex items-start space-x-3 stagger-${index + 1} animate-fade-in-up`}>
                    <div className="text-primary mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-right" delay={200}>
            <Card className="glass hover-lift">
              <CardHeader>
                <CardTitle>Supported Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Input:</span>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        MP3
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        WAV
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        FLAC
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Output:</span>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        MP3
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        AAC
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        OGG
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        M4A
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>

      <ScrollAnimation animation="fade-up">
        <HowToUseSection title="How to Convert Audio Formats" steps={steps} />
      </ScrollAnimation>
    </div>
  )
}
