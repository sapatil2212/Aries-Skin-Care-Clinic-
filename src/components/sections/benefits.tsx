'use client';

import { 
  Shield, 
  Stethoscope, 
  Settings, 
  Heart, 
  CheckSquare, 
  Home
} from 'lucide-react';
import Image from 'next/image';
import HomeAboutImage from "../../../public/home-modal.png";

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    title: "Expert Dermatologists",
    description: "Board-certified dermatologists with extensive experience.",
    icon: <Stethoscope className="w-4 h-4" />
  },
  {
    title: "Advanced Technology",
    description: "Cutting-edge equipment and innovative techniques.",
    icon: <Settings className="w-4 h-4" />
  },
  {
    title: "Personalized Care",
    description: "Treatment plans tailored to your unique needs.",
    icon: <Heart className="w-4 h-4" />
  },
  {
    title: "Comprehensive Services",
    description: "Complete medical and cosmetic dermatology treatments.",
    icon: <CheckSquare className="w-4 h-4" />
  },
  {
    title: "High Safety Standards",
    description: "Strict hygiene and safety protocols for your protection.",
    icon: <Shield className="w-4 h-4" />
  },
  {
    title: "Comfortable Environment",
    description: "Welcoming and stress-free atmosphere for your care.",
    icon: <Home className="w-4 h-4" />
  }
];

export function Benefits() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-2xl p-6 lg:p-8 relative overflow-hidden">
          
          {/* Decorative flower icons */}
          <div className="absolute top-4 right-4 opacity-20">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm5-3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-10 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm5 9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm10 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
            </svg>
          </div>
          <div className="absolute bottom-4 left-4 opacity-20">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm5-3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-10 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm5 9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm10 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
            </svg>
          </div>
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-3">
              <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
              <h3 className="text-white font-medium text-sm">Our Benefits</h3>
            </div>
            <h2 className="text-2xl md:text-3xl  text-white mb-4 leading-tight font-bold">
              Exceptional dermatology, every step of the way
            </h2>
            <p className="text-white/90 text-sm max-w-2xl mx-auto leading-relaxed">
              Experience personalized care, advanced treatments, and visible results with our expert dermatology services.
            </p>
          </div>

          {/* Main content with image and benefits */}
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            {/* Left benefits */}
            <div className="lg:col-span-4 space-y-4">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="text-white">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white mt-0.5">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-white/80 text-xs leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-48 h-80 rounded-xl overflow-hidden">
                <Image
                  src={HomeAboutImage}
                  alt="Professional dermatology care"
                  width={192}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right benefits */}
            <div className="lg:col-span-4 space-y-4">
              {benefits.slice(3, 6).map((benefit, index) => (
                <div key={index + 3} className="text-white">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white mt-0.5">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-white/80 text-xs leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
