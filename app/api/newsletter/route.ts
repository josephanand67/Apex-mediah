import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import crypto from 'crypto'

interface NewsletterSignupData {
  email: string
}

// Store for verification tokens (in production, use a database)
const verificationTokens = new Map<string, { email: string; createdAt: number }>()

export async function POST(request: NextRequest) {
  try {
    const body: NewsletterSignupData = await request.json()

    // Validate required fields
    if (!body.email) {
      return NextResponse.json(
        { error: 'Email is required' },
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
      console.error('[Newsletter API] Email configuration missing')
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString('hex')
    const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://josephanand.com'}/verify-newsletter?token=${verificationToken}`

    // Store token with timestamp
    verificationTokens.set(verificationToken, {
      email: body.email,
      createdAt: Date.now(),
    })

    // Clean up old tokens (older than 24 hours)
    for (const [token, data] of verificationTokens.entries()) {
      if (Date.now() - data.createdAt > 24 * 60 * 60 * 1000) {
        verificationTokens.delete(token)
      }
    }

    // Send confirmation email to subscriber
    const subscriberEmailHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 600px; margin: 0 auto; padding: 20px; }
      .header { background-color: #001a4d; color: #fff; padding: 20px; border-radius: 5px; margin-bottom: 20px; text-align: center; }
      .content { background-color: #f5f5f5; padding: 20px; border-radius: 5px; }
      .button { display: inline-block; padding: 12px 24px; background-color: #d4af37; color: #001a4d; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 20px; text-align: center; }
      .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999; text-align: center; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>Welcome to the Inner Circle</h2>
      </div>
      <div class="content">
        <p>Thank you for joining the Inner Circle!</p>
        <p>We&apos;re excited to share exclusive insights on emotional intelligence, leadership wisdom, and transformative practices with you.</p>
        <p>To confirm your subscription and start receiving our latest content, please click the button below:</p>
        <div style="text-align: center;">
          <a href="${verificationLink}" class="button">Confirm Your Subscription</a>
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #666;">If you didn&apos;t sign up for this newsletter, you can ignore this email. This link will expire in 24 hours.</p>
      </div>
      <div class="footer">
        <p>L.I.F.E. manifested LLP | Emotional Intelligence & Leadership Excellence</p>
      </div>
    </div>
  </body>
</html>
    `.trim()

    const subscriberPlainText = `
Welcome to the Inner Circle!

Thank you for joining us. We're excited to share exclusive insights on emotional intelligence, leadership wisdom, and transformative practices with you.

To confirm your subscription, please visit:
${verificationLink}

This link will expire in 24 hours.

If you didn't sign up for this newsletter, you can ignore this email.

---
L.I.F.E. manifested LLP | Emotional Intelligence & Leadership Excellence
    `.trim()

    // Send email to subscriber
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: body.email,
      subject: 'Confirm Your Subscription to the Inner Circle',
      html: subscriberEmailHtml,
      text: subscriberPlainText,
    })

    // Send notification email to admin
    const adminEmailHtml = `
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
        <h2>New Inner Circle Subscriber</h2>
      </div>
      <div class="content">
        <p>A new person has joined the Inner Circle newsletter!</p>
        <div class="field">
          <span class="label">Email Address:</span>
          <span class="value">${body.email}</span>
        </div>
        <div class="field">
          <span class="label">Signed Up:</span>
          <span class="value">${new Date().toLocaleString()}</span>
        </div>
        <div class="field">
          <span class="label">Status:</span>
          <span class="value">Pending Verification</span>
        </div>
      </div>
      <div class="footer">
        <p>This is an automated notification from josephanand.com</p>
      </div>
    </div>
  </body>
</html>
    `.trim()

    const adminPlainText = `
New Inner Circle Subscriber!

Email: ${body.email}
Signed Up: ${new Date().toLocaleString()}
Status: Pending Verification

---
Automated notification from josephanand.com
    `.trim()

    // Send notification to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'contact@josephanand.com',
      subject: 'New Inner Circle Newsletter Subscriber',
      html: adminEmailHtml,
      text: adminPlainText,
    })

    console.log('[Newsletter API] Verification email sent to', body.email)

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for joining! Please check your email to confirm your subscription.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Newsletter API Error]', error)
    return NextResponse.json(
      { error: 'Failed to process your subscription. Please try again.' },
      { status: 500 }
    )
  }
}
