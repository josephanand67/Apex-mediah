import { NextRequest, NextResponse } from 'next/server'
import { emailConfig, getFromAddress } from '@/lib/email-config'

export async function POST(request: NextRequest) {
  try {
    const { name, email, comment, subject } = await request.json()

    // Validate input
    if (!name || !email || !comment) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Get RESEND_API_KEY if configured
    const resendApiKey = process.env.RESEND_API_KEY
    console.log('[v0] Contact API called with email:', email);
    console.log('[v0] RESEND_API_KEY configured:', !!resendApiKey);
    if (!resendApiKey) {
      console.warn('[v0] RESEND_API_KEY is not configured - using fallback logging mode')
    }

    // Prepare email content
    const timestamp = new Date().toLocaleString()
    const contactEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">New Contact Form Submission</h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></p>
          ${subject ? `<p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>` : ''}
          <p style="margin: 10px 0;"><strong>Date & Time:</strong> ${timestamp}</p>
        </div>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #d4af37;">
          <h3 style="margin-top: 0; color: #333;">Message:</h3>
          <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${comment}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999;">
          <p style="margin: 5px 0;">This is an automated contact form submission from josephanand.com</p>
          <p style="margin: 5px 0;">To reply, use: ${email}</p>
        </div>
      </div>
    `

    // Send email via Resend if API key is configured
    if (resendApiKey) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: getFromAddress('contact'),
            to: emailConfig.contactEmail,
            reply_to: email,
            subject: `New Contact Form Submission${subject ? ` - ${subject}` : ''} from ${name}`,
            html: contactEmailHtml,
          }),
        })

        console.log('[v0] Resend API response status:', response.status);
        if (!response.ok) {
          let errorData;
          try {
            errorData = await response.json()
          } catch {
            errorData = await response.text()
          }
          console.error('[v0] Resend API error:', {
            status: response.status,
            statusText: response.statusText,
            error: errorData,
            recipient: 'contact@josephanand.com'
          })
          return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 503 }
          )
        }

        const successData = await response.json()
        console.log('[v0] Contact email sent successfully:', {
          id: successData.id,
          timestamp: new Date().toISOString(),
        })

        return NextResponse.json(
          { success: true, message: 'Message sent successfully! We will get back to you soon.' },
          { status: 200 }
        )
      } catch (emailError) {
        console.error('[v0] Error sending contact email:', emailError)
        return NextResponse.json(
          { error: 'Failed to send email. Please try again later.' },
          { status: 503 }
        )
      }
    } else {
      // Fallback: Log the submission and return success
      console.log('[v0] Contact form submission (fallback mode):', {
        name,
        email,
        subject,
        comment,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json(
        { success: true, message: 'Message received! We will get back to you soon.' },
        { status: 200 }
      )
    }
  } catch (error) {
    console.error('[v0] Contact API error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
