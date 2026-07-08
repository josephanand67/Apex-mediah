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

    // Send notification email to admin
    const adminEmailResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/notify-admin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, firstName, lastName })
    });

    if (!adminEmailResponse.ok) {
      console.error('[v0] Failed to send admin notification');
    }

    // Send confirmation email to subscriber
    const confirmEmailResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/send-confirmation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, firstName })
    });

    if (!confirmEmailResponse.ok) {
      console.error('[v0] Failed to send confirmation email');
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
