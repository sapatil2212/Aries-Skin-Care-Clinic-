const fs = require('fs');
const path = require('path');

// Treatment page template
const treatmentPageTemplate = (treatment) => `import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Clock, 
  Calendar, 
  Shield, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Award,
  Users,
  ${getIconForCategory(treatment.category)}
} from 'lucide-react';
import { TREATMENTS } from '@/lib/constants';
import Link from 'next/link';

const treatment = TREATMENTS.find(t => t.id === '${treatment.id}');

export default function ${treatment.name.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  if (!treatment) return <div>Treatment not found</div>;

  const handleAppointmentClick = () => {
    window.open(\`https://wa.me/917588832221?text=\${encodeURIComponent(\`Hello! I would like to book an appointment for \${treatment.name} at Aries Skin and General Clinic. Please let me know your availability.\`)}\`, '_blank');
  };

  const handleCallClick = () => {
    window.open(\`tel:+917588832221\`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-purple-100/50 py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <${getIconForCategory(treatment.category)} className="h-4 w-4 mr-2" />
                ${getCategoryLabel(treatment.category)} Treatment
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {treatment.name}
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                {treatment.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleAppointmentClick}
                  size="lg"
                  className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  onClick={handleCallClick}
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {treatment.duration}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {treatment.sessions}
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  FDA Approved
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <${getIconForCategory(treatment.category)} className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Expert Doctor
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Advanced Equipment
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Safe & Effective
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Affordable Pricing
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the transformative benefits of our advanced ${treatment.category} treatment technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatment.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Achieve long-lasting results with our proven treatment approach
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Treatment Process
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
                      <p className="text-gray-600">Comprehensive skin analysis and treatment planning</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Treatment Session</h3>
                      <p className="text-gray-600">{treatment.procedure}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Aftercare</h3>
                      <p className="text-gray-600">{treatment.aftercare}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Treatment Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{treatment.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sessions:</span>
                    <span className="font-medium">{treatment.sessions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Recovery:</span>
                    <span className="font-medium">Minimal downtime</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Results:</span>
                    <span className="font-medium">Long-lasting</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-purple-100/50 border-0 shadow-xl">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Why Aries Skin Clinic?</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">15+ Years of Medical Experience</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">FDA & CE Approved Equipment</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Government Certified Expert</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Prime Location in Nashik</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white border-0 shadow-lg">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Ready to Start?</h3>
                  <p className="text-gray-600 text-sm">
                    Book your consultation today and take the first step towards your goals
                  </p>
                  <Button
                    onClick={handleAppointmentClick}
                    className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your ${getCategoryLabel(treatment.category)}?
            </h2>
            <p className="text-xl text-primary-100">
              Join thousands of satisfied patients who have achieved their goals with us
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleAppointmentClick}
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Book Free Consultation
              </Button>
              
              <Button
                onClick={handleCallClick}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full"
              >
                <Phone className="mr-2 h-6 w-6" />
                Call Now
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                1000+ Happy Patients
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                5.0 Rating
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2" />
                15+ Years Experience
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link 
              href="/treatments/${treatment.category}"
              className="text-primary hover:text-primary-dark font-medium transition-colors"
            >
              ← Back to ${getCategoryLabel(treatment.category)}
            </Link>
            
            <Link 
              href="/treatments"
              className="text-primary hover:text-primary-dark font-medium transition-colors"
            >
              View All Treatments →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}`;

// Helper functions
function getIconForCategory(category) {
  const icons = {
    'skin': 'Droplets',
    'hair': 'Scissors',
    'cosmetic': 'Zap',
    'general': 'Stethoscope'
  };
  return icons[category] || 'Zap';
}

function getCategoryLabel(category) {
  const labels = {
    'skin': 'Skin Care & Treatments',
    'hair': 'Hair Care & Treatments',
    'cosmetic': 'Cosmetic Procedures',
    'general': 'General Medicine'
  };
  return labels[category] || 'Treatment';
}

// Treatments data (you can import this from your constants file)
const TREATMENTS = [
  {
    id: "tattoo-removal",
    name: "Tattoo Removal",
    category: "cosmetic"
  },
  {
    id: "carbon-peel",
    name: "Carbon Peel (Hollywood Facial)",
    category: "skin"
  },
  {
    id: "prp-gfc-hair",
    name: "PRP/GFC for Hair",
    category: "hair"
  },
  {
    id: "skin-tag-removal",
    name: "Skin Tag Removal",
    category: "cosmetic"
  },
  {
    id: "chemical-peel",
    name: "Chemical Peel",
    category: "skin"
  },
  {
    id: "microneedling",
    name: "Microneedling",
    category: "skin"
  },
  {
    id: "rf-skin-tightening",
    name: "RF Skin Tightening",
    category: "skin"
  },
  {
    id: "dandruff-removal",
    name: "Dandruff Removal",
    category: "hair"
  },
  {
    id: "melasma-acne-freckles",
    name: "Melasma, Acne, Freckles Treatment",
    category: "skin"
  },
  {
    id: "skin-care",
    name: "Skin Care",
    category: "skin"
  },
  {
    id: "iv-gluta-drip",
    name: "IV Gluta Drip",
    category: "cosmetic"
  },
  {
    id: "gynecological-care",
    name: "General Gynecological Care and Treatment",
    category: "general"
  },
  {
    id: "hair-fall-treatment",
    name: "Hair Fall Treatment",
    category: "hair"
  },
  {
    id: "skin-fungal-disease",
    name: "Skin Fungal Disease Treatment",
    category: "skin"
  },
  {
    id: "earlobe-repair",
    name: "Earlobe Repair (Permanent)",
    category: "cosmetic"
  }
];

// Generate pages
function generateTreatmentPages() {
  TREATMENTS.forEach(treatment => {
    const pageContent = treatmentPageTemplate(treatment);
    const pageName = treatment.name.replace(/[^a-zA-Z0-9]/g, '');
    const fileName = `${treatment.id}.tsx`;
    const filePath = path.join(__dirname, '..', 'src', 'app', 'treatments', treatment.category, fileName);
    
    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write file
    fs.writeFileSync(filePath, pageContent);
    console.log(`Generated: ${filePath}`);
  });
}

// Run the generator
generateTreatmentPages();
console.log('All treatment pages generated successfully!');
