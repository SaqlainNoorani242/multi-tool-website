import { type NextRequest, NextResponse } from "next/server"
import { readFile } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

const OUTPUT_DIR = path.join(process.cwd(), "outputs")

export async function GET(request: NextRequest, { params }: { params: { jobId: string } }) {
  try {
    const { jobId } = params

    if (!jobId) {
      return NextResponse.json({ error: "Job ID required" }, { status: 400 })
    }

    // Find output file
    const outputFiles = await require("fs").readdirSync(OUTPUT_DIR)
    const outputFile = outputFiles.find((f: string) => f.startsWith(jobId))

    if (!outputFile) {
      return NextResponse.json({ error: "File not found or expired" }, { status: 404 })
    }

    const filePath = path.join(OUTPUT_DIR, outputFile)

    if (!existsSync(filePath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 })
    }

    // Read file
    const fileBuffer = await readFile(filePath)
    const extension = path.extname(outputFile)

    // Determine content type
    const contentTypes: { [key: string]: string } = {
      ".pes": "application/octet-stream",
      ".dst": "application/octet-stream",
      ".exp": "application/octet-stream",
      ".svg": "image/svg+xml",
      ".pdf": "application/pdf",
      ".glb": "model/gltf-binary",
      ".fbx": "application/octet-stream",
      ".obj": "text/plain",
      ".stl": "application/octet-stream",
      ".usdz": "application/octet-stream",
    }

    const contentType = contentTypes[extension] || "application/octet-stream"

    // Return file with appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${outputFile}"`,
        "Content-Length": fileBuffer.length.toString(),
      },
    })
  } catch (error) {
    console.error("Download error:", error)
    return NextResponse.json({ error: "Download failed" }, { status: 500 })
  }
}
