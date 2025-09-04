import type { Metadata } from "next"
import { CLINIC_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Aries Skin and General Clinic - Learn how we protect your personal information and medical data.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="text-sm text-gray-600 mb-8">
              <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
              <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Aries Skin and General Clinic ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our clinic, 
                use our services, or interact with our website. Please read this privacy policy carefully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Full name, date of birth, and gender</li>
                <li>Contact information (phone numbers, email address, postal address)</li>
                <li>Emergency contact information</li>
                <li>Government identification numbers (for billing and insurance purposes)</li>
                <li>Insurance information and policy details</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">2.2 Medical Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Medical history and current health conditions</li>
                <li>Treatment records and procedures performed</li>
                <li>Medications and allergies</li>
                <li>Laboratory results and diagnostic reports</li>
                <li>Photographs (for medical documentation purposes)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">2.3 Payment Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Billing address and payment method details</li>
                <li>Insurance claim information</li>
                <li>Transaction history and receipts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your personal and medical information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Providing medical services, treatments, and consultations</li>
                <li>Scheduling and managing appointments</li>
                <li>Maintaining accurate medical records</li>
                <li>Processing payments and insurance claims</li>
                <li>Communicating with you about appointments, treatments, and follow-up care</li>
                <li>Sending appointment reminders and health-related information</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Improving our services and patient care</li>
                <li>Conducting quality assurance and medical research (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>With your consent:</strong> When you explicitly authorize us to share your information</li>
                <li><strong>Healthcare providers:</strong> With other medical professionals involved in your care</li>
                <li><strong>Insurance companies:</strong> For billing and claim processing purposes</li>
                <li><strong>Legal requirements:</strong> When required by law, court order, or regulatory authority</li>
                <li><strong>Emergency situations:</strong> To protect your health and safety in medical emergencies</li>
                <li><strong>Business operations:</strong> With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement comprehensive security measures to protect your personal and medical information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Secure electronic medical records system with encryption</li>
                <li>Restricted access to patient information on a need-to-know basis</li>
                <li>Regular security audits and staff training</li>
                <li>Physical security measures for paper records</li>
                <li>Secure data backup and disaster recovery procedures</li>
                <li>Compliance with healthcare data protection standards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request copies of your medical records and personal information</li>
                <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete information</li>
                <li><strong>Restriction:</strong> Request limitations on how we use your information</li>
                <li><strong>Portability:</strong> Request transfer of your information to another healthcare provider</li>
                <li><strong>Withdrawal of consent:</strong> Withdraw consent for non-essential uses of your information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your medical records and personal information for the minimum period required by law, 
                typically 7 years after your last visit or treatment. Some records may be retained longer for 
                legal, regulatory, or medical research purposes. After the retention period, we securely dispose 
                of your information in accordance with applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies and Website Tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience, 
                analyze website traffic, and improve our services. You can control cookie settings through your 
                browser preferences. Please note that disabling cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                technology, or legal requirements. We will notify you of any material changes by posting 
                the updated policy on our website and updating the "Last Updated" date. We encourage you 
                to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our 
                data practices, please contact us:
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
                This Privacy Policy is effective as of {new Date().toLocaleDateString()} and applies to all 
                information collected by Aries Skin and General Clinic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
