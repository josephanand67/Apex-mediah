import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, firstName } = await request.json();

    // Using Resend for email sending
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn('[v0] RESEND_API_KEY not configured. Skipping confirmation email.');
      return NextResponse.json({ success: true });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: 'noreply@josephanand.com',
        to: email,
        subject: 'Welcome to the Inner Circle - Confirm Your Email',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #333; margin: 0;">Welcome to the Inner Circle!</h1>
            </div>
            
            <p style="color: #555; font-size: 16px;">Hi ${firstName || 'there'},</p>
            
            <p style="color: #555; line-height: 1.6;">
              Thank you for joining Joseph Anand's Inner Circle! We're excited to have you on this journey of personal growth and emotional intelligence.
            </p>
            
            <div style="background-color: #f0f4ff; padding: 20px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #4f46e5;">
              <p style="color: #333; margin: 0; font-weight: bold;">What's Next?</p>
              <ul style="color: #555; margin: 10px 0 0 20px;">
                <li>Access exclusive content and cheat sheets</li>
                <li>Get early insights on upcoming books and resources</li>
                <li>Join our community of growth-focused individuals</li>
              </ul>
            </div>
            
            <p style="color: #555; line-height: 1.6;">
              If you have any questions or need support, feel free to reach out to us at 
              <a href="mailto:contact@josephanand.com" style="color: #4f46e5; text-decoration: none;">contact@josephanand.com</a>
            </p>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            
            <p style="color: #999; font-size: 12px; text-align: center;">
              © 2026 Joseph Anand. All rights reserved.
            </p>
          </div>
        `
      })
    });

    if (!response.ok) {
      console.error('[v0] Failed to send confirmation email:', response.statusText);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[v0] Confirmation email error:', error);
    return NextResponse.json({ success: true }); // Don't fail the main subscription
  }
}
