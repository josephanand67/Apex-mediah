// Email configuration
// Update these values based on your verified email domains in Resend

export const emailConfig = {
  // Your contact email address - update after verifying your domain in Resend
  contactEmail: process.env.CONTACT_EMAIL || 'delivered@resend.dev',
  
  // From address - update after verifying your domain
  // For production: change to 'noreply@yourdomain.com'
  // Current: using Resend's sandbox domain
  fromAddress: process.env.FROM_ADDRESS || 'onboarding@resend.dev',
}

export function getFromAddress(type: 'contact' | 'newsletter' | 'subscribe' = 'contact'): string {
  const names: Record<string, string> = {
    contact: 'Contact Form',
    newsletter: 'Newsletter',
    subscribe: 'Inner Circle',
  }
  return `${names[type]} <${emailConfig.fromAddress}>`
}
