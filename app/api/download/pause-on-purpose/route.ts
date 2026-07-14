import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET(request: NextRequest) {
  try {
    const pdfPath = join(process.cwd(), 'public', 'pdfs', 'pause-on-purpose-cheatsheet.pdf')
    
    const fileBuffer = await readFile(pdfPath)
    
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="pause-on-purpose-cheatsheet.pdf"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    })
  } catch (error) {
    console.error('PDF download error:', error)
    return new NextResponse('PDF not found', { status: 404 })
  }
}
