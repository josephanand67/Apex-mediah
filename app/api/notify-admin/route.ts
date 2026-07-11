import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName } = await request.json();

    // Using Resend for email sending
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn('[v0] RESEND_API_KEY not configured. Skipping admin notification.');
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

    if (!response.ok) {
      console.error('[v0] Failed to send admin notification:', response.statusText);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[v0] Admin notification error:', error);
    return NextResponse.json({ success: true }); // Don't fail the main subscription
  }
}
