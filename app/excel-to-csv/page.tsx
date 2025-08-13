import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExcelToCsvConverter } from "@/components/excel-to-csv-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Excel to CSV Converter - Convert XLSX to CSV Online | ConvertHub",
  description:
    "Convert Excel files (XLSX, XLS) to CSV format online. Preserve data integrity, handle multiple sheets, and customize delimiter options for perfect CSV conversion.",
  keywords: "Excel to CSV, XLSX to CSV, XLS converter, spreadsheet converter, data export, CSV delimiter",
  openGraph: {
    title: "Excel to CSV Converter - Convert XLSX to CSV Online",
    description:
      "Convert Excel spreadsheets to CSV format with data integrity preservation and custom delimiter options.",
    type: "website",
  },
}

export default function ExcelToCsvPage() {
  const breadcrumbItems = [{ label: "Document Converters", href: "/#document-converters" }, { label: "Excel to CSV" }]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        <ExcelToCsvConverter />
      </main>
      <Footer />
    </div>
  )
}
