import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    status: "operational",
    version: "1.0.0",
    services: {
      upload: "operational",
      conversion: "operational",
      download: "operational",
    },
    uptime: "99.9%",
    timestamp: new Date().toISOString(),
  })
}
