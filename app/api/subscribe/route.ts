import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    // If Resend API key is not configured, return success but log warning
    if (!resendApiKey) {
      console.warn('[v0] RESEND_API_KEY not configured. Subscription recorded but emails not sent.');
      return NextResponse.json({
        success: true,
        message: 'Thank you for subscribing! Please configure RESEND_API_KEY to enable confirmation emails.'
      });
    }

    // Send admin notification email
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          from: 'noreply@josephanand.com',
          to: 'contact@josephanand.com',
          subject: 'New Inner Circle Subscriber',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">New Inner Circle Subscriber</h2>
              <p>You have a new subscriber to your Inner Circle!</p>
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Name:</strong> ${firstName || ''} ${lastName || ''}${!firstName && !lastName ? '(Not provided)' : ''}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
              </div>
              <p style="color: #666; font-size: 14px;">This subscriber will receive a confirmation email to verify their subscription.</p>
            </div>
          `
        })
      });
    } catch (adminError) {
      console.error('[v0] Failed to send admin notification:', adminError);
    }

    // Send confirmation email to subscriber
    try {
      await fetch('https://api.resend.com/emails', {
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
    } catch (confirmError) {
      console.error('[v0] Failed to send confirmation email:', confirmError);
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully joined the inner circle! Check your email to confirm.'
    });
  } catch (error) {
    console.error('[v0] Subscribe error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}
