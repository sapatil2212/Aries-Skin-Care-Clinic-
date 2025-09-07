export interface Treatment {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  procedure: string;
  duration: string;
  sessions: string;
  aftercare: string;
  price?: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
  category: 'skin' | 'hair' | 'cosmetic' | 'general';
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  review: string;
  date: string;
  image?: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
}

export interface AppointmentForm {
  // Personal Details
  name: string;
  email: string;
  phone: string;
  whatsapp?: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  
  // Appointment Details
  treatmentType: string;
  preferredDate: string;
  preferredTime: string;
  concerns: string;
  
  // Medical History
  currentMedications: string;
  previousTreatments: string;
  allergies: string;
  medicalConditions: string;
  
  // Additional Info
  howDidYouHear: string;
  agreeToTerms: boolean;
}

export interface Doctor {
  name: string;
  title: string;
  qualifications: string[];
  experience: string;
  specializations: string[];
  bio: string;
  image: string;
}

export interface ClinicInfo {
  name: string;
  phones: string[];
  email: string;
  address: string;
  googleMapsUrl: string;
  workingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}

export interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: Array<{ 
    id: string; 
    name: string; 
    description: string;
    hasSubDropdown?: boolean;
    subItems?: Array<{ id: string; name: string; href: string }>;
  }>;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  number: string;
  label: string;
  suffix?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
