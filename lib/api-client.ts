export interface UploadResponse {
  fileId: string
  filename: string
  size: number
  type: string
  uploadedAt: string
}

export interface ConversionResponse {
  jobId: string
  outputFilename: string
  status: string
  downloadUrl: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export class ApiClient {
  private static baseUrl = "/api"

  static async uploadFile(file: File, conversionType: string): Promise<UploadResponse> {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("conversionType", conversionType)

    const response = await fetch(`${this.baseUrl}/upload`, {
      method: "POST",
      body: formData,
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || "Upload failed")
    }

    return response.json()
  }

  static async convertFile(fileId: string, conversionType: string, options: any): Promise<ConversionResponse> {
    const response = await fetch(`${this.baseUrl}/convert`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileId,
        conversionType,
        options,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || "Conversion failed")
    }

    return response.json()
  }

  static async downloadFile(jobId: string): Promise<Blob> {
    const response = await fetch(`${this.baseUrl}/download/${jobId}`)

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || "Download failed")
    }

    return response.blob()
  }

  static async submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    const response = await fetch(`${this.baseUrl}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || "Failed to send message")
    }

    return response.json()
  }
}
