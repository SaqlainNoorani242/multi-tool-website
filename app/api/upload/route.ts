import { type NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"
import crypto from "crypto"

const UPLOAD_DIR = path.join(process.cwd(), "uploads")
const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50MB

// Ensure upload directory exists
async function ensureUploadDir() {
  if (!existsSync(UPLOAD_DIR)) {
    await mkdir(UPLOAD_DIR, { recursive: true })
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureUploadDir()

    const formData = await request.formData()
    const file = formData.get("file") as File
    const conversionType = formData.get("conversionType") as string

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "File too large" }, { status: 400 })
    }

    // Validate file type based on conversion type
    const allowedTypes = {
      "svg-to-embroidery": ["image/svg+xml"],
      "handwriting-to-vector": ["image/jpeg", "image/png", "image/webp"],
      "3d-model-converter": ["model/gltf-binary", "application/octet-stream", ".glb", ".fbx", ".obj", ".stl", ".usdz"],
    }

    const allowed = allowedTypes[conversionType as keyof typeof allowedTypes]
    if (!allowed || (!allowed.includes(file.type) && !allowed.some((ext) => file.name.endsWith(ext)))) {
      return NextResponse.json({ error: "Invalid file type for this conversion" }, { status: 400 })
    }

    // Generate unique filename
    const fileId = crypto.randomUUID()
    const extension = path.extname(file.name)
    const filename = `${fileId}${extension}`
    const filepath = path.join(UPLOAD_DIR, filename)

    // Save file
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await writeFile(filepath, buffer)

    // Return file info
    return NextResponse.json({
      fileId,
      filename: file.name,
      size: file.size,
      type: file.type,
      uploadedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
