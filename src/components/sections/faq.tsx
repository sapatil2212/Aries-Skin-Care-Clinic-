'use client';

import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What types of treatments do you offer?",
    answer: "We offer a wide range of dermatology treatments, including acne care, psoriasis management, skin cancer screening, cosmetic procedures like Botox, laser hair reduction, hydrafacial, chemical peels, PRP therapy, and general gynecological care. Our clinic specializes in both medical and cosmetic dermatology."
  },
  {
    question: "Do I need a consultation before getting treatment?",
    answer: "Yes, we recommend a consultation before any treatment to assess your skin condition, discuss your goals, and create a personalized treatment plan. This ensures the best results and safety for your specific needs."
  },
  {
    question: "Are your treatments suitable for all skin types?",
    answer: "Our treatments are designed to work with various skin types. During your consultation, Dr. Shweta Sonje will assess your skin type and recommend the most suitable treatments. We use FDA and CE approved equipment to ensure safety across different skin types."
  },
  {
    question: "Do you offer cosmetic dermatology services?",
    answer: "Yes, we offer comprehensive cosmetic dermatology services including laser hair reduction, tattoo removal, skin tag removal, chemical peels, microneedling, RF skin tightening, and IV glutathione therapy. All procedures are performed by our experienced doctor."
  },
  {
    question: "What should I expect during my first visit?",
    answer: "During your first visit, you'll have a thorough consultation with Dr. Shweta Sonje. She will examine your skin, discuss your concerns and goals, explain treatment options, and create a personalized plan. The consultation typically takes 30-45 minutes."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const router = useRouter();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleConsultationClick = () => {
    router.push('/contact');
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          
          {/* Decorative leaf elements */}
          <div className="absolute top-4 left-4 opacity-20">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75S7 14 17 8z"/>
            </svg>
          </div>
          <div className="absolute bottom-4 right-4 opacity-20">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75S7 14 17 8z"/>
            </svg>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left Column - Introduction */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                  <h3 className="text-white font-medium text-sm">Frequently Asked Questions</h3>
                </div>
                <h2 className="text-2xl md:text-3xl text-white mb-4 leading-tight font-bold">
                  Frequently asked question find out more
                </h2>
                <p className="text-white/90 text-sm leading-relaxed">
                  Have questions about our dermatology services? Our 'Frequently Asked Questions' section provides answers to common queries about treatments, procedures, and clinic policies.
                </p>
              </div>
              
              <button 
                onClick={handleConsultationClick}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Need consultation?</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Column - FAQ Accordion */}
            <div className="space-y-1">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-white/20 last:border-b-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left py-3 flex items-center justify-between text-white hover:text-white/80 transition-colors duration-200"
                  >
                    <span className="font-medium text-sm pr-4">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="w-4 h-4 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openIndex === index && (
                    <div className="pb-3">
                      <p className="text-white/80 text-xs leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
