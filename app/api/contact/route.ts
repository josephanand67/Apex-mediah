import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, comment } = await request.json()

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

    // If RESEND_API_KEY is configured, send email via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'onboarding@resend.dev',
            to: 'contact@josephanand.com',
            reply_to: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${comment.replace(/\n/g, '<br>')}</p>
            `,
          }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          console.error('[v0] Resend API error:', response.status, errorData)
          // Continue anyway - form was received, just email didn't send
        }
      } catch (error) {
        console.error('[v0] Resend email error:', error)
        // Continue anyway - form was received, just email didn't send
      }
    }

    // Log submission for debugging
    console.log('[v0] Contact form submission:', { name, email, comment })

    return NextResponse.json(
      { message: 'Message received successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Contact API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
