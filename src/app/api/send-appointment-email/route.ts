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
const createUserConfirmationEmail = (appointmentData: any) => {
  const treatmentName = appointmentData.treatmentType
  const date = new Date(appointmentData.preferredDate).toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  return {
    subject: `Appointment Confirmation - Aries Skin & General Clinic`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Appointment Confirmation</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; background-color: #f9fafb; }
          .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
          .header { background: #ffffff; padding: 40px 30px; text-align: center; border-bottom: 1px solid #e5e7eb; }
          .logo { width: 80px; height: 80px; margin: 0 auto 20px; background: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; position: relative; }
          .success-icon { font-size: 40px; color: white; line-height: 1; display: flex; align-items: center; justify-content: center; }
          .header h1 { color: #10b981; font-size: 28px; font-weight: 700; margin-bottom: 8px; }
          .header p { color: #6b7280; font-size: 16px; }
          .content { padding: 40px 30px; }
          .greeting { font-size: 18px; color: #1f2937; margin-bottom: 20px; }
          .message { color: #4b5563; margin-bottom: 30px; font-size: 16px; }
          .appointment-card { background: #f8fafc; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin: 24px 0; }
          .card-title { color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 20px; display: flex; align-items: center; }
          .card-title::before { content: "📅"; margin-right: 8px; }
          .detail-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #e5e7eb; }
          .detail-row:last-child { border-bottom: none; }
          .detail-label { font-weight: 600; color: #374151; }
          .detail-value { color: #6b7280; text-align: right; }
          .clinic-info { background: #ecfdf5; border: 1px solid #d1fae5; border-radius: 8px; padding: 20px; margin: 24px 0; }
          .clinic-title { color: #065f46; font-size: 16px; font-weight: 600; margin-bottom: 12px; display: flex; align-items: center; }
          .clinic-title::before { content: "📍"; margin-right: 8px; }
          .clinic-details { color: #047857; font-size: 14px; line-height: 1.5; }
          .notes-section { margin: 24px 0; }
          .notes-title { color: #1f2937; font-size: 16px; font-weight: 600; margin-bottom: 12px; display: flex; align-items: center; }
          .notes-title::before { content: "📋"; margin-right: 8px; }
          .notes-list { color: #4b5563; padding-left: 20px; }
          .notes-list li { margin-bottom: 8px; }
          .signature { margin-top: 30px; color: #4b5563; }
          .signature strong { color: #1f2937; }
          .footer { background: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb; }
          .footer p { color: #6b7280; font-size: 14px; margin-bottom: 8px; }
          .footer p:last-child { margin-bottom: 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">
              <div class="success-icon">✓</div>
            </div>
            <h1>Appointment Confirmed!</h1>
            <p>Thank you for choosing Aries Skin & General Clinic</p>
          </div>
          
          <div class="content">
            <div class="greeting">Dear ${appointmentData.name},</div>
            <div class="message">Your appointment has been successfully booked! We're excited to help you with your skin and hair care needs.</div>
            
            <div class="appointment-card">
              <div class="card-title">Appointment Details</div>
              <div class="detail-row">
                <span class="detail-label">Name</span>
                <span class="detail-value">${appointmentData.name}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Treatment</span>
                <span class="detail-value">${treatmentName}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Date</span>
                <span class="detail-value">${date}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Time</span>
                <span class="detail-value">${appointmentData.preferredTime}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Phone</span>
                <span class="detail-value">${appointmentData.phone}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Email</span>
                <span class="detail-value">${appointmentData.email}</span>
              </div>
            </div>
            
            <div class="clinic-info">
              <div class="clinic-title">Clinic Information</div>
              <div class="clinic-details">
                <strong>Address:</strong> Shop No 1, Keystone Residency Apartment, Behind Sharad Pawar Fruit Market, Peth-Makhalamabad Link Road, Samarth Nagar, Panchavati, Nashik - 422001<br><br>
                <strong>Working Hours:</strong> Monday-Saturday: 10 AM-2 PM, 5 PM-9 PM | Sunday: Closed
              </div>
            </div>
            
            <div class="notes-section">
              <div class="notes-title">Important Notes</div>
              <ul class="notes-list">
                <li>Please arrive 10 minutes before your scheduled appointment time</li>
                <li>Bring a valid ID proof for verification</li>
                <li>If you need to reschedule, please contact us at least 24 hours in advance</li>
                <li>For any queries, feel free to reach out to us</li>
              </ul>
            </div>
            
            <div class="signature">
              We look forward to seeing you soon!<br><br>
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

const createClinicNotificationEmail = (appointmentData: any) => {
  const treatmentName = appointmentData.treatmentType
  const date = new Date(appointmentData.preferredDate).toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  return {
    subject: `New Appointment Booking - ${appointmentData.name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Appointment Booking</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; background-color: #f9fafb; }
          .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
          .header { background: #ffffff; padding: 40px 30px; text-align: center; border-bottom: 1px solid #e5e7eb; }
          .logo { width: 80px; height: 80px; margin: 0 auto 20px; background: #3b82f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; position: relative; }
          .notification-icon { font-size: 40px; color: white; line-height: 1; display: flex; align-items: center; justify-content: center; }
          .header h1 { color: #3b82f6; font-size: 28px; font-weight: 700; margin-bottom: 8px; }
          .header p { color: #6b7280; font-size: 16px; }
          .content { padding: 40px 30px; }
          .alert-banner { background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 16px; margin-bottom: 24px; }
          .alert-text { color: #92400e; font-weight: 600; display: flex; align-items: center; }
          .alert-text::before { content: "⚠️"; margin-right: 8px; }
          .info-card { background: #f8fafc; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin: 24px 0; }
          .card-title { color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 20px; display: flex; align-items: center; }
          .card-title.patient::before { content: "👤"; margin-right: 8px; }
          .card-title.appointment::before { content: "📅"; margin-right: 8px; }
          .card-title.medical::before { content: "🏥"; margin-right: 8px; }
          .detail-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #e5e7eb; }
          .detail-row:last-child { border-bottom: none; }
          .detail-label { font-weight: 600; color: #374151; }
          .detail-value { color: #6b7280; text-align: right; max-width: 60%; word-wrap: break-word; }
          .medical-info { background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 24px 0; }
          .medical-details { color: #92400e; font-size: 14px; line-height: 1.5; }
          .medical-details p { margin-bottom: 8px; }
          .medical-details p:last-child { margin-bottom: 0; }
          .action-section { background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 20px; margin: 24px 0; }
          .action-title { color: #991b1b; font-size: 16px; font-weight: 600; margin-bottom: 12px; display: flex; align-items: center; }
          .action-title::before { content: "📞"; margin-right: 8px; }
          .action-list { color: #7f1d1d; padding-left: 20px; }
          .action-list li { margin-bottom: 8px; }
          .timestamp { background: #f3f4f6; border-radius: 6px; padding: 12px; margin-top: 24px; text-align: center; }
          .timestamp-text { color: #6b7280; font-size: 14px; font-weight: 600; }
          .footer { background: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb; }
          .footer p { color: #6b7280; font-size: 14px; margin-bottom: 8px; }
          .footer p:last-child { margin-bottom: 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">
              <div class="notification-icon">🔔</div>
            </div>
            <h1>New Appointment Booking</h1>
            <p>Patient: ${appointmentData.name}</p>
          </div>
          
          <div class="content">
            <div class="alert-banner">
              <div class="alert-text">Action Required: New appointment booking requires confirmation</div>
            </div>
            
            <div class="info-card">
              <div class="card-title patient">Patient Information</div>
              <div class="detail-row">
                <span class="detail-label">Name</span>
                <span class="detail-value">${appointmentData.name}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Email</span>
                <span class="detail-value">${appointmentData.email}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Phone</span>
                <span class="detail-value">${appointmentData.phone}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Age</span>
                <span class="detail-value">${appointmentData.age} years</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Gender</span>
                <span class="detail-value">${appointmentData.gender}</span>
              </div>
            </div>
            
            <div class="info-card">
              <div class="card-title appointment">Appointment Details</div>
              <div class="detail-row">
                <span class="detail-label">Treatment</span>
                <span class="detail-value">${treatmentName}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Date</span>
                <span class="detail-value">${date}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Time</span>
                <span class="detail-value">${appointmentData.preferredTime}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Concerns</span>
                <span class="detail-value">${appointmentData.concerns}</span>
              </div>
            </div>
            
            ${appointmentData.currentMedications || appointmentData.previousTreatments || appointmentData.allergies || appointmentData.medicalConditions ? `
            <div class="medical-info">
              <div class="card-title medical">Medical History</div>
              <div class="medical-details">
                ${appointmentData.currentMedications ? `<p><strong>Current Medications:</strong> ${appointmentData.currentMedications}</p>` : ''}
                ${appointmentData.previousTreatments ? `<p><strong>Previous Treatments:</strong> ${appointmentData.previousTreatments}</p>` : ''}
                ${appointmentData.allergies ? `<p><strong>Allergies:</strong> ${appointmentData.allergies}</p>` : ''}
                ${appointmentData.medicalConditions ? `<p><strong>Medical Conditions:</strong> ${appointmentData.medicalConditions}</p>` : ''}
              </div>
            </div>
            ` : ''}
            
            <div class="action-section">
              <div class="action-title">Next Steps</div>
              <ol class="action-list">
                <li>Review the appointment details</li>
                <li>Confirm availability for the requested time slot</li>
                <li>Contact the patient if any changes are needed</li>
                <li>Prepare treatment plan based on patient concerns</li>
              </ol>
            </div>
            
            <div class="timestamp">
              <div class="timestamp-text">Booking Time: ${new Date().toLocaleString('en-IN')}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>This is an automated notification email from Aries Skin & General Clinic booking system.</p>
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
    console.log('API endpoint called')
    const appointmentData = await request.json()
    console.log('Received appointment data:', appointmentData)
    
    // Validate required fields
    if (!appointmentData.name || !appointmentData.email || !appointmentData.phone) {
      console.log('Missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Create email templates
    const userEmail = createUserConfirmationEmail(appointmentData)
    const clinicEmail = createClinicNotificationEmail(appointmentData)
    
    // Send email to user
    const userMailOptions = {
      from: `"Aries Skin & General Clinic" <${process.env.EMAIL_USER || 'ariesskin25@gmail.com'}>`,
      to: appointmentData.email,
      subject: userEmail.subject,
      html: userEmail.html,
      headers: {
        'X-Mailer': 'Aries Skin Clinic Appointment System',
        'X-Priority': '3',
        'X-MSMail-Priority': 'Normal',
        'Importance': 'Normal',
        'X-Report-Abuse': 'Please report abuse to ariesskin25@gmail.com',
        'List-Unsubscribe': '<mailto:ariesskin25@gmail.com?subject=unsubscribe>',
        'Return-Path': process.env.EMAIL_USER || 'ariesskin25@gmail.com',
        'Reply-To': process.env.EMAIL_USER || 'ariesskin25@gmail.com'
      },
      // Add text version for better deliverability
      text: `Dear ${appointmentData.name},\n\nYour appointment has been successfully scheduled with Aries Skin & General Clinic.\n\nAppointment Details:\nTreatment: ${appointmentData.treatmentType}\nDate: ${new Date(appointmentData.preferredDate).toLocaleDateString('en-IN')}\nTime: ${appointmentData.preferredTime}\n\nWe look forward to seeing you!\n\nBest regards,\nDr. Shweta Sonje\nAries Skin & General Clinic\n\nThis is an automated confirmation email. Please do not reply to this email.`
    }
    
    // Send email to clinic
    const clinicMailOptions = {
      from: `"Aries Skin & General Clinic" <${process.env.EMAIL_USER || 'ariesskin25@gmail.com'}>`,
      to: process.env.CLINIC_EMAIL || 'ariesskin25@gmail.com', // Clinic email
      subject: clinicEmail.subject,
      html: clinicEmail.html,
      headers: {
        'X-Mailer': 'Aries Skin Clinic Appointment System',
        'X-Priority': '3',
        'X-MSMail-Priority': 'Normal',
        'Importance': 'Normal',
        'Return-Path': process.env.EMAIL_USER || 'ariesskin25@gmail.com',
        'Reply-To': process.env.EMAIL_USER || 'ariesskin25@gmail.com'
      },
      // Add text version for better deliverability
      text: `New Appointment Booking - ${appointmentData.name}\n\nPatient Information:\nName: ${appointmentData.name}\nEmail: ${appointmentData.email}\nPhone: ${appointmentData.phone}\nAge: ${appointmentData.age}\nGender: ${appointmentData.gender}\n\nAppointment Details:\nTreatment: ${appointmentData.treatmentType}\nDate: ${new Date(appointmentData.preferredDate).toLocaleDateString('en-IN')}\nTime: ${appointmentData.preferredTime}\n\nThis is an automated notification email from Aries Skin & General Clinic appointment system.`
    }
    
    // Send both emails
    console.log('Sending emails...')
    const results = await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(clinicMailOptions)
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
