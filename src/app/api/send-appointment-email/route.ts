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
    day: 'numeric',
    timeZone: 'Asia/Kolkata'
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
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.5; color: #374151; background-color: #f9fafb; }
          .container { max-width: 600px; margin: 0 auto; background: white; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; }
          .header { background: white; padding: 30px 20px; text-align: center; border-bottom: 1px solid #e5e7eb; }
          .success-icon { width: 60px; height: 60px; margin: 0 auto 15px; display: block; }
          .header h1 { color: #374151; font-size: 20px; font-weight: 600; margin-bottom: 8px; }
          .header p { color: #6b7280; font-size: 14px; }
          .content { padding: 30px 20px; }
          .greeting { font-size: 16px; color: #374151; margin-bottom: 15px; font-weight: 500; }
          .message { color: #6b7280; margin-bottom: 20px; font-size: 14px; line-height: 1.5; }
          .appointment-card { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 20px; margin: 20px 0; }
          .card-title { color: #374151; font-size: 14px; font-weight: 600; margin-bottom: 15px; }
          .detail-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #e5e7eb; }
          .detail-row:last-child { border-bottom: none; }
          .detail-label { font-weight: 600; color: #374151; font-size: 14px; min-width: 80px; }
          .detail-value { color: #6b7280; text-align: right; font-size: 14px; margin-left: 20px; }
          .clinic-info { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 20px; margin: 20px 0; }
          .clinic-title { color: #374151; font-size: 14px; font-weight: 600; margin-bottom: 12px; }
          .clinic-details { color: #6b7280; font-size: 14px; line-height: 1.5; }
          .notes-section { margin: 20px 0; }
          .notes-title { color: #374151; font-size: 14px; font-weight: 600; margin-bottom: 12px; }
          .notes-list { color: #6b7280; padding-left: 20px; font-size: 14px; }
          .notes-list li { margin-bottom: 8px; line-height: 1.5; }
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
            <h1>Appointment Confirmed!</h1>
            <p>Your appointment has been successfully scheduled</p>
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
                <span class="detail-value"><a href="tel:+91${appointmentData.phone}" style="color: #3b82f6; text-decoration: none;">${appointmentData.phone}</a></span>
              </div>
              ${appointmentData.whatsapp ? `
              <div class="detail-row">
                <span class="detail-label">WhatsApp</span>
                <span class="detail-value"><a href="https://wa.me/91${appointmentData.whatsapp}" style="color: #25d366; text-decoration: none;">${appointmentData.whatsapp}</a></span>
              </div>
              ` : ''}
              <div class="detail-row">
                <span class="detail-label">Email</span>
                <span class="detail-value">${appointmentData.email}</span>
              </div>
            </div>
            
            <div class="clinic-info">
              <div class="clinic-title">Clinic Information</div>
              <div class="clinic-details">
                <strong>Address:</strong> Shop No 1, Keystone Residency Apartment, Behind Sharad Pawar Fruit Market, Peth-Makhalamabad Link Road, Samarth Nagar, Panchavati, Nashik - 422001<br><br>
                <strong>Working Hours:</strong> Monday-Friday: 10 AM-2 PM, 5 PM-9 PM | Saturday: Closed | Sunday: 12 PM-5 PM
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
    day: 'numeric',
    timeZone: 'Asia/Kolkata'
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
          .detail-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #e5e7eb; }
          .detail-row:last-child { border-bottom: none; }
          .detail-label { font-weight: 600; color: #374151; font-size: 14px; min-width: 80px; }
          .detail-value { color: #6b7280; text-align: right; max-width: 60%; word-wrap: break-word; font-size: 14px; margin-left: 20px; }
          .medical-info { background: #fef3c7; border: 1px solid #f59e0b; border-radius: 6px; padding: 20px; margin: 20px 0; }
          .medical-details { color: #92400e; font-size: 14px; line-height: 1.5; }
          .medical-details p { margin-bottom: 8px; }
          .medical-details p:last-child { margin-bottom: 0; }
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
            <h1>New Appointment Booking</h1>
            <p>Website Enquiry</p>
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
                <span class="detail-value"><a href="tel:+91${appointmentData.phone}" style="color: #3b82f6; text-decoration: none;">${appointmentData.phone}</a></span>
              </div>
              ${appointmentData.whatsapp ? `
              <div class="detail-row">
                <span class="detail-label">WhatsApp</span>
                <span class="detail-value"><a href="https://wa.me/91${appointmentData.whatsapp}" style="color: #25d366; text-decoration: none;">${appointmentData.whatsapp}</a></span>
              </div>
              ` : ''}
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
              <div class="timestamp-text">Booking Time: ${new Date().toLocaleString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
              })}</div>
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
      text: `Dear ${appointmentData.name},\n\nYour appointment has been successfully scheduled with Aries Skin & General Clinic.\n\nAppointment Details:\nTreatment: ${appointmentData.treatmentType}\nDate: ${new Date(appointmentData.preferredDate).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })}\nTime: ${appointmentData.preferredTime}\n\nWe look forward to seeing you!\n\nBest regards,\nDr. Shweta Sonje\nAries Skin & General Clinic\n\nThis is an automated confirmation email. Please do not reply to this email.`
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
      text: `New Appointment Booking - ${appointmentData.name}\n\nPatient Information:\nName: ${appointmentData.name}\nEmail: ${appointmentData.email}\nPhone: ${appointmentData.phone}\nAge: ${appointmentData.age}\nGender: ${appointmentData.gender}\n\nAppointment Details:\nTreatment: ${appointmentData.treatmentType}\nDate: ${new Date(appointmentData.preferredDate).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })}\nTime: ${appointmentData.preferredTime}\n\nThis is an automated notification email from Aries Skin & General Clinic appointment system.`
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
