import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  comment: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.comment) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD || !process.env.EMAIL_HOST) {
      console.error('[Contact API] Email configuration missing (EMAIL_USER, EMAIL_PASSWORD, EMAIL_HOST)')
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Create email content in HTML and plain text
    const emailHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 600px; margin: 0 auto; padding: 20px; }
      .header { background-color: #001a4d; color: #fff; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
      .content { background-color: #f5f5f5; padding: 20px; border-radius: 5px; }
      .field { margin-bottom: 15px; }
      .label { font-weight: bold; color: #001a4d; }
      .value { color: #666; }
      .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>New Contact Form Submission</h2>
      </div>
      <div class="content">
        <div class="field">
          <span class="label">Name:</span>
          <span class="value">${body.name}</span>
        </div>
        <div class="field">
          <span class="label">Email:</span>
          <span class="value"><a href="mailto:${body.email}">${body.email}</a></span>
        </div>
        <div class="field">
          <span class="label">Message:</span>
          <div class="value" style="white-space: pre-wrap;">${body.comment}</div>
        </div>
      </div>
      <div class="footer">
        <p>This message was sent from josephanand.com contact form</p>
      </div>
    </div>
  </body>
</html>
    `.trim()

    const plainText = `
Name: ${body.name}
Email: ${body.email}

Message:
${body.comment}

---
This message was sent from josephanand.com contact form
    `.trim()

    // Send email via Nodemailer
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'contact@josephanand.com',
      replyTo: body.email,
      subject: `New Contact from ${body.name}`,
      html: emailHtml,
      text: plainText,
    }

    const info = await transporter.sendMail(mailOptions)

    // Log successful submission
    console.log('[Contact Form] Email sent successfully', {
      messageId: info.messageId,
      timestamp: new Date().toISOString(),
      from: body.email,
      subject: `New Contact from ${body.name}`,
    })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We will get back to you shortly.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Contact API Error]', error)
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again.' },
      { status: 500 }
    )
  }
}
