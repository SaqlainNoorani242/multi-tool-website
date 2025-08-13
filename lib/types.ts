export interface ConversionJob {
  id: string
  type: "svg-to-embroidery" | "handwriting-to-vector" | "3d-model-converter"
  status: "pending" | "processing" | "completed" | "failed"
  inputFile: File
  outputFile?: string
  progress: number
  createdAt: Date
  completedAt?: Date
  error?: string
}

export interface SvgToEmbroideryOptions {
  format: "pes" | "dst" | "exp"
  density: number
  scale: number
}

export interface HandwritingToVectorOptions {
  outputFormat: "svg" | "pdf"
  smoothing: number
  threshold: number
}

export interface ModelConverterOptions {
  inputFormat: "glb" | "fbx" | "obj" | "stl" | "usdz"
  outputFormat: "glb" | "fbx" | "obj" | "stl" | "usdz"
  scale: number
  optimize: boolean
}
