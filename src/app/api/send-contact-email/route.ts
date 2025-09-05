import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration
const EMAIL_CONFIG = {
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || 'ariesskin25@gmail.com',
    pass: process.env.EMAIL_PASS || 'anfw zygk bgxm itpa'
  },
  // Additional settings to improve deliverability
  tls: {
    rejectUnauthorized: false
  },
  connectionTimeout: 60000,
  greetingTimeout: 30000,
  socketTimeout: 60000
}

// Create transporter
const transporter = nodemailer.createTransport(EMAIL_CONFIG)

// Email templates
const createUserConfirmationEmail = (contactData: any) => {
  return {
    subject: `Thank you for contacting Aries Skin & General Clinic`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Confirmation</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.5; color: #374151; background-color: #f9fafb; }
          .container { max-width: 600px; margin: 0 auto; background: white; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; }
          .header { background: white; padding: 30px 20px; text-align: center; border-bottom: 1px solid #e5e7eb; }
          .success-icon { width: 60px; height: 60px; margin: 0 auto 15px; display: block; }
          .header h1 { color: #374151; font-size: 20px; font-weight: 600; margin-bottom: 8px; }
          .header p { color: #6b7280; font-size: 14px; }
          .content { padding: 30px 20px; }
          .greeting { font-size: 16px; color: #374151; margin-bottom: 15px; font-weight: 500; }
          .message { color: #6b7280; margin-bottom: 20px; font-size: 14px; line-height: 1.5; }
          .message-card { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 20px; margin: 20px 0; }
          .card-title { color: #374151; font-size: 14px; font-weight: 600; margin-bottom: 12px; }
          .message-text { color: #6b7280; font-style: italic; line-height: 1.5; font-size: 14px; background: white; padding: 15px; border-radius: 4px; border: 1px solid #e5e7eb; }
          .signature { margin-top: 25px; color: #6b7280; font-size: 14px; }
          .signature strong { color: #374151; font-weight: 600; }
          .footer { background: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb; }
          .footer p { color: #9ca3af; font-size: 12px; margin-bottom: 4px; }
          .footer p:last-child { margin-bottom: 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://shreebalajilawnsandresorts.com/green-tick.png" alt="Success" class="success-icon" />
            <h1>Message Received!</h1>
            <p>Thank you for contacting Aries Skin & General Clinic</p>
          </div>
          
          <div class="content">
            <div class="greeting">Dear ${contactData.name},</div>
            <div class="message">Thank you for reaching out to us! We have received your message and will get back to you within 24 hours.</div>
            
            <div class="message-card">
              <div class="card-title">Your Message</div>
              <div class="message-text">"${contactData.message}"</div>
            </div>
            
            <div class="signature">
              We appreciate your interest in our services and look forward to assisting you!<br><br>
              Best regards,<br>
              <strong>Dr. Shweta Sonje</strong><br>
              Aries Skin & General Clinic
            </div>
          </div>
          
          <div class="footer">
            <p>This is an automated confirmation email. Please do not reply to this email.</p>
            <p>© 2025 Aries Skin & General Clinic. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
    `
  }
}

const createAdminNotificationEmail = (contactData: any) => {
  const subjectLabels: { [key: string]: string } = {
    'appointment': 'Book Appointment',
    'treatment-inquiry': 'Treatment Inquiry',
    'pricing': 'Pricing Information',
    'general': 'General Inquiry',
    'feedback': 'Feedback',
    'other': 'Other'
  }
  
  const subjectLabel = subjectLabels[contactData.subject] || contactData.subject
  
  return {
    subject: `New Contact Form Submission - ${contactData.name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.5; color: #374151; background-color: #f9fafb; }
          .container { max-width: 600px; margin: 0 auto; background: white; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; }
          .header { background: white; padding: 30px 20px; text-align: center; border-bottom: 1px solid #e5e7eb; }
          .notification-icon { width: 40px; height: 40px; margin: 0 auto 15px; font-size: 24px; }
          .header h1 { color: #374151; font-size: 20px; font-weight: 600; margin-bottom: 8px; }
          .header p { color: #6b7280; font-size: 14px; }
          .content { padding: 30px 20px; }
          .alert-banner { background: #fef3c7; border: 1px solid #f59e0b; border-radius: 6px; padding: 15px; margin-bottom: 20px; }
          .alert-text { color: #92400e; font-weight: 600; display: flex; align-items: center; font-size: 14px; }
          .alert-text::before { content: "⚠️"; margin-right: 8px; font-size: 16px; }
          .info-card { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 20px; margin: 20px 0; }
          .card-title { color: #374151; font-size: 14px; font-weight: 600; margin-bottom: 15px; }
          .detail-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
          .detail-row:last-child { border-bottom: none; }
          .detail-label { font-weight: 600; color: #374151; font-size: 14px; }
          .detail-value { color: #6b7280; text-align: right; max-width: 60%; word-wrap: break-word; font-size: 14px; }
          .message-text { color: #6b7280; font-style: italic; line-height: 1.5; font-size: 14px; background: white; padding: 15px; border-radius: 4px; border: 1px solid #e5e7eb; }
          .action-section { background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 20px; margin: 20px 0; }
          .action-title { color: #991b1b; font-size: 14px; font-weight: 600; margin-bottom: 12px; }
          .action-list { color: #7f1d1d; padding-left: 20px; font-size: 14px; }
          .action-list li { margin-bottom: 8px; line-height: 1.5; }
          .timestamp { background: #f3f4f6; border-radius: 6px; padding: 15px; margin-top: 20px; text-align: center; }
          .timestamp-text { color: #6b7280; font-size: 14px; font-weight: 600; }
          .footer { background: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb; }
          .footer p { color: #9ca3af; font-size: 12px; margin-bottom: 4px; }
          .footer p:last-child { margin-bottom: 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="notification-icon">🔔</div>
            <h1>New Contact Form Submission</h1>
            <p>Website Enquiry</p>
          </div>
          
          <div class="content">
            <div class="alert-banner">
              <div class="alert-text">Action Required: New contact form submission requires response</div>
            </div>
            
            <div class="info-card">
              <div class="card-title">Contact Information</div>
              <div class="detail-row">
                <span class="detail-label">Name</span>
                <span class="detail-value">${contactData.name}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Email</span>
                <span class="detail-value">${contactData.email}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Phone</span>
                <span class="detail-value">${contactData.phone}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Subject</span>
                <span class="detail-value">${subjectLabel}</span>
              </div>
            </div>
            
            <div class="info-card">
              <div class="card-title">Message</div>
              <div class="message-text">${contactData.message}</div>
            </div>
            
            <div class="action-section">
              <div class="action-title">Next Steps</div>
              <ol class="action-list">
                <li>Review the contact form submission</li>
                <li>Respond to the customer within 24 hours</li>
                <li>Follow up if additional information is needed</li>
                <li>Update customer records if applicable</li>
              </ol>
            </div>
            
            <div class="timestamp">
              <div class="timestamp-text">Submission Time: ${new Date().toLocaleString('en-IN')}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>This is an automated notification email from Aries Skin & General Clinic contact system.</p>
            <p>© 2025 Aries Skin & General Clinic. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
    `
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('Contact form API endpoint called')
    const contactData = await request.json()
    console.log('Received contact data:', contactData)
    
    // Validate required fields
    if (!contactData.name || !contactData.email || !contactData.phone || !contactData.message) {
      console.log('Missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Create email templates
    const userEmail = createUserConfirmationEmail(contactData)
    const adminEmail = createAdminNotificationEmail(contactData)
    
    // Send email to user
    const userMailOptions = {
      from: `"Aries Skin & General Clinic" <${process.env.EMAIL_USER || 'ariesskin25@gmail.com'}>`,
      to: contactData.email,
      subject: userEmail.subject,
      html: userEmail.html,
      headers: {
        'X-Mailer': 'Aries Skin Clinic Contact System',
        'X-Priority': '3',
        'X-MSMail-Priority': 'Normal',
        'Importance': 'Normal',
        'X-Report-Abuse': 'Please report abuse to ariesskin25@gmail.com',
        'List-Unsubscribe': '<mailto:ariesskin25@gmail.com?subject=unsubscribe>',
        'Return-Path': process.env.EMAIL_USER || 'ariesskin25@gmail.com',
        'Reply-To': process.env.EMAIL_USER || 'ariesskin25@gmail.com'
      },
      // Add text version for better deliverability
      text: `Dear ${contactData.name},\n\nThank you for contacting Aries Skin & General Clinic. We have received your message and will get back to you within 24 hours.\n\nYour Message: "${contactData.message}"\n\nBest regards,\nDr. Shweta Sonje\nAries Skin & General Clinic\n\nThis is an automated confirmation email. Please do not reply to this email.`
    }
    
    // Send email to admin
    const adminMailOptions = {
      from: `"Aries Skin & General Clinic" <${process.env.EMAIL_USER || 'ariesskin25@gmail.com'}>`,
      to: process.env.CLINIC_EMAIL || 'ariesskin25@gmail.com',
      subject: adminEmail.subject,
      html: adminEmail.html,
      headers: {
        'X-Mailer': 'Aries Skin Clinic Contact System',
        'X-Priority': '3',
        'X-MSMail-Priority': 'Normal',
        'Importance': 'Normal',
        'Return-Path': process.env.EMAIL_USER || 'ariesskin25@gmail.com',
        'Reply-To': process.env.EMAIL_USER || 'ariesskin25@gmail.com'
      },
      // Add text version for better deliverability
      text: `New Contact Form Submission - Website Enquiry\n\nContact Information:\nName: ${contactData.name}\nEmail: ${contactData.email}\nPhone: ${contactData.phone}\nSubject: ${contactData.subject}\n\nMessage: ${contactData.message}\n\nSubmission Time: ${new Date().toLocaleString('en-IN')}\n\nThis is an automated notification email from Aries Skin & General Clinic contact system.`
    }
    
    // Send both emails
    console.log('Sending emails...')
    const results = await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions)
    ])
    console.log('Emails sent successfully:', results)
    
    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send emails' },
      { status: 500 }
    )
  }
}
