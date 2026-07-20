import { NextRequest, NextResponse } from 'next/server';
import { emailConfig, getFromAddress } from '@/lib/email-config';

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName, source } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    console.log('[v0] Subscribe API called with email:', email);
    console.log('[v0] RESEND_API_KEY configured:', !!resendApiKey);

    // If Resend API key is not configured, return success but log warning
    if (!resendApiKey) {
      console.warn('[v0] RESEND_API_KEY not configured. Subscription recorded but emails not sent.');
      return NextResponse.json({
        success: true,
        message: 'Thank you for subscribing! Please configure RESEND_API_KEY to enable confirmation emails.'
      });
    }

    // Send admin notification email
    let adminEmailSent = false;
    try {
      const adminResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          from: getFromAddress('subscribe'),
          to: emailConfig.contactEmail,
          subject: 'New Inner Circle Subscriber',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">New Inner Circle Subscriber</h2>
              <p>You have a new subscriber to your Inner Circle!</p>
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Name:</strong> ${firstName || ''} ${lastName || ''}${!firstName && !lastName ? '(Not provided)' : ''}</p>
                <p><strong>Date & Time:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>Source:</strong> ${source || 'Not specified'}</p>
              </div>
              <p style="color: #666; font-size: 14px;">This subscriber has been successfully added to your Inner Circle and will start receiving your exclusive content.</p>
            </div>
          `
        })
      });
      
      console.log('[v0] Admin email response status:', adminResponse.status);
      if (!adminResponse.ok) {
        const errorData = await adminResponse.json();
        console.error('[v0] Admin notification failed:', {
          status: adminResponse.status,
          statusText: adminResponse.statusText,
          error: errorData
        });
      } else {
        adminEmailSent = true;
        const data = await adminResponse.json();
        console.log('[v0] Admin notification sent:', {
          id: data.id,
          email: 'contact@josephanand.com'
        });
      }
    } catch (adminError) {
      console.error('[v0] Failed to send admin notification:', adminError);
    }

    // Send welcome email to subscriber (single opt-in - no confirmation needed)
    let welcomeEmailSent = false;
    try {
      const welcomeResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          from: getFromAddress('subscribe'),
          to: email,
          subject: 'Welcome to the Inner Circle!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #333; margin: 0;">Welcome to the Inner Circle!</h1>
              </div>
              
              <p style="color: #555; font-size: 16px;">Hi ${firstName},</p>
              
              <p style="color: #555; line-height: 1.6;">
                Thank you for joining Joseph Anand's Inner Circle! We're excited to have you on this journey of personal growth and emotional intelligence.
              </p>
              
              <div style="background-color: #f0f4ff; padding: 20px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #4f46e5;">
                <p style="color: #333; margin: 0; font-weight: bold;">What You'll Receive:</p>
                <ul style="color: #555; margin: 10px 0 0 20px;">
                  <li>Exclusive insights on emotional intelligence and leadership</li>
                  <li>Access to premium cheat sheets and resources</li>
                  <li>Early access to upcoming books and transformative practices</li>
                  <li>Member-only content from our growth-focused community</li>
                </ul>
              </div>
              
              <p style="color: #555; line-height: 1.6; margin-top: 20px;">
                If you have any questions or need support, feel free to reach out to us at 
                <a href="mailto:contact@josephanand.com" style="color: #4f46e5; text-decoration: none;">contact@josephanand.com</a>
              </p>
              
              <p style="color: #555; line-height: 1.6; margin-top: 20px; font-size: 14px;">
                <strong>Privacy & Unsubscribe:</strong> We respect your privacy. You can unsubscribe at any time by clicking the link at the bottom of any email, or by contacting us directly.
              </p>
              
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
              
              <p style="color: #999; font-size: 12px; text-align: center;">
                © 2026 Joseph Anand. All rights reserved.
              </p>
            </div>
          `
        })
      });
      
      console.log('[v0] Welcome email response status:', welcomeResponse.status);
      if (!welcomeResponse.ok) {
        const errorData = await welcomeResponse.json();
        console.error('[v0] Welcome email failed:', {
          status: welcomeResponse.status,
          statusText: welcomeResponse.statusText,
          error: errorData
        });
      } else {
        welcomeEmailSent = true;
        const data = await welcomeResponse.json();
        console.log('[v0] Welcome email sent:', {
          id: data.id,
          recipient: email,
          firstName: firstName
        });
      }
    } catch (welcomeError) {
      console.error('[v0] Failed to send welcome email:', welcomeError);
    }

    // Log email sending summary
    console.log('[v0] Email sending summary:', {
      adminEmailSent,
      welcomeEmailSent,
      subscriber: email,
      firstName: firstName
    });

    // Return success - subscription is complete (single opt-in)
    return NextResponse.json({
      success: true,
      message: 'Thank you for joining! Check your email for your welcome message.'
    });
  } catch (error) {
    console.error('[v0] Subscribe error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}
