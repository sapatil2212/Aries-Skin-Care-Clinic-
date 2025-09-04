import type { Metadata } from "next"
import { CLINIC_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Aries Skin and General Clinic - Read our terms and conditions for medical services and clinic policies.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="text-sm text-gray-600 mb-8">
              <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
              <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Aries Skin and General Clinic. These Terms of Service ("Terms") govern your use of our 
                medical services, clinic facilities, and website. By accessing our services, scheduling appointments, 
                or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, 
                please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Medical Services</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Scope of Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Aries Skin and General Clinic provides comprehensive medical services including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Advanced skin and hair treatments</li>
                <li>Cosmetic procedures and aesthetic treatments</li>
                <li>General medical consultations</li>
                <li>Gynecological care and treatment</li>
                <li>Diagnostic services and laboratory tests</li>
                <li>Emergency medical care during clinic hours</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">2.2 Medical Professional Qualifications</h3>
              <p className="text-gray-700 leading-relaxed">
                All medical services are provided by qualified and licensed healthcare professionals. 
                Dr. Shweta Sonje is a licensed medical practitioner with MBBS degree and Fellowship in 
                Skin Aesthetics and Cosmetology, with over 15 years of experience in gynecology and general medicine.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">2.3 Treatment Results</h3>
              <p className="text-gray-700 leading-relaxed">
                While we strive to provide the best possible care and treatment outcomes, individual results may vary. 
                We cannot guarantee specific results for any treatment or procedure. All treatments are performed 
                using FDA and CE approved equipment with the highest safety standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Appointments and Scheduling</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">3.1 Appointment Booking</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Appointments must be scheduled in advance through phone, website, or in-person</li>
                <li>Walk-in appointments are subject to availability</li>
                <li>Emergency cases will be prioritized and accommodated as possible</li>
                <li>Appointment confirmation will be provided via phone or SMS</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">3.2 Cancellation and Rescheduling</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>24-hour advance notice required for appointment cancellations</li>
                <li>Late cancellations (less than 24 hours) may incur a cancellation fee</li>
                <li>No-show appointments may result in a no-show fee</li>
                <li>Multiple no-shows may require advance payment for future appointments</li>
                <li>Rescheduling is allowed up to 2 hours before the appointment time</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">3.3 Late Arrivals</h3>
              <p className="text-gray-700 leading-relaxed">
                Patients arriving more than 15 minutes late may need to reschedule their appointment 
                to avoid delays for other patients. We will make every effort to accommodate late arrivals 
                when possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">4.1 Payment Methods</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Cash payments</li>
                <li>Credit and debit cards</li>
                <li>Digital payments (UPI, net banking)</li>
                <li>Insurance claims (where applicable)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">4.2 Payment Schedule</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Payment is due at the time of service unless prior arrangements are made</li>
                <li>Package deals and treatment plans require advance payment</li>
                <li>Insurance claims are the patient's responsibility to process</li>
                <li>Outstanding balances must be settled before additional services</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">4.3 Refund Policy</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Individual treatment fees are non-refundable after service completion</li>
                <li>Package deals are non-refundable but may be transferable under certain conditions</li>
                <li>Refunds for cancelled appointments will be processed within 5-7 business days</li>
                <li>Refund requests must be made within 30 days of payment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Patient Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Provide accurate and complete medical history and information</li>
                <li>Follow pre-treatment and post-treatment care instructions</li>
                <li>Attend scheduled follow-up appointments</li>
                <li>Inform the clinic of any changes in health status or medications</li>
                <li>Respect clinic policies and other patients' privacy</li>
                <li>Maintain appropriate behavior and conduct during visits</li>
                <li>Pay for services as agreed upon</li>
                <li>Provide valid identification and insurance information when required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Clinic Policies</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">6.1 Operating Hours</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-1 text-gray-700">
                  <li><strong>Monday - Friday:</strong> 9:00 AM - 8:00 PM</li>
                  <li><strong>Saturday:</strong> 9:00 AM - 6:00 PM</li>
                  <li><strong>Sunday:</strong> 10:00 AM - 4:00 PM</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">6.2 Safety and Hygiene</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>All equipment is sterilized and maintained according to medical standards</li>
                <li>Single-use disposable items are used wherever applicable</li>
                <li>Staff follows strict hygiene protocols</li>
                <li>Patients are required to maintain personal hygiene during visits</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">6.3 Privacy and Confidentiality</h3>
              <p className="text-gray-700 leading-relaxed">
                We maintain strict confidentiality of all patient information in accordance with medical 
                privacy laws and professional ethics. Patient information is never shared without explicit consent, 
                except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Liability and Disclaimers</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">7.1 Medical Disclaimer</h3>
              <p className="text-gray-700 leading-relaxed">
                The information provided on our website and during consultations is for educational purposes only 
                and should not be considered as medical advice. All medical decisions should be made in consultation 
                with qualified healthcare professionals.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">7.2 Limitation of Liability</h3>
              <p className="text-gray-700 leading-relaxed">
                While we maintain the highest standards of care, Aries Skin and General Clinic's liability is 
                limited to the cost of the specific treatment provided. We are not liable for indirect, 
                consequential, or punitive damages.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">7.3 Emergency Situations</h3>
              <p className="text-gray-700 leading-relaxed">
                In case of medical emergencies, patients should contact emergency services (108) immediately. 
                Our clinic provides emergency care during operating hours only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content on our website, including text, images, logos, and treatment information, 
                is the intellectual property of Aries Skin and General Clinic and is protected by copyright laws. 
                Unauthorized use or reproduction is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be posted on our website 
                and will become effective immediately upon posting. Continued use of our services after changes 
                constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by the laws of India. Any disputes arising from these Terms or our 
                services will be subject to the jurisdiction of the courts in Nashik, Maharashtra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about these Terms of Service or our services, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-3">
                  <div>
                    <strong className="text-gray-900">Aries Skin and General Clinic</strong>
                  </div>
                  <div>
                    <strong className="text-gray-700">Address:</strong><br />
                    <a 
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {CLINIC_INFO.address}
                    </a>
                  </div>
                  <div>
                    <strong className="text-gray-700">Phone:</strong><br />
                    <a 
                      href={`tel:+91${CLINIC_INFO.phones[0]}`}
                      className="text-primary hover:underline"
                    >
                      +91 {CLINIC_INFO.phones[0]}
                    </a>
                    <br />
                    <a 
                      href={`tel:+91${CLINIC_INFO.phones[1]}`}
                      className="text-primary hover:underline"
                    >
                      +91 {CLINIC_INFO.phones[1]}
                    </a>
                  </div>
                  <div>
                    <strong className="text-gray-700">Email:</strong><br />
                    <a 
                      href={`mailto:${CLINIC_INFO.email}`}
                      className="text-primary hover:underline"
                    >
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                These Terms of Service are effective as of {new Date().toLocaleDateString()} and apply to all 
                services provided by Aries Skin and General Clinic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
