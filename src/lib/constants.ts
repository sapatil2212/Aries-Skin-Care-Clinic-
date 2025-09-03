import { ClinicInfo, Doctor, Treatment, Testimonial, NavItem, Feature, Stat } from './types';

export const CLINIC_INFO: ClinicInfo = {
  name: "Aries Skin and General Clinic",
  phones: ["7588832221", "7972548001"],
  email: "ariesskin25@gmail.com",
  address: "Shop No 1, Keystone Residency Apartment, Behind Sharad Pawar Fruit Market, Peth-Makhalamabad Link Road, Samarth Nagar, Panchavati, Nashik - 422001",
  googleMapsUrl: "https://maps.app.goo.gl/41wjFQCukoUpB9m29?g_st=ipc",
  workingHours: {
    monday: "9:00 AM - 8:00 PM",
    tuesday: "9:00 AM - 8:00 PM",
    wednesday: "9:00 AM - 8:00 PM",
    thursday: "9:00 AM - 8:00 PM",
    friday: "9:00 AM - 8:00 PM",
    saturday: "9:00 AM - 6:00 PM",
    sunday: "10:00 AM - 4:00 PM"
  }
};

export const DOCTOR_INFO: Doctor = {
  name: "Dr. Shweta Sonje",
  title: "MBBS, Fellowship in Skin Aesthetics and Cosmetology",
  qualifications: [
    "MBBS - Bachelor of Medicine and Bachelor of Surgery",
    "Fellowship in Skin Aesthetics and Cosmetology from renowned Mumbai institution",
    "Government certified for advanced skin treatments",
    "15+ years experience in Gynecology and General Medicine"
  ],
  experience: "15+ years",
  specializations: [
    "Skin Aesthetics and Cosmetology",
    "Gynecology and Women's Health",
    "General Medicine",
    "Advanced Laser Treatments",
    "Cosmetic Dermatology"
  ],
  bio: "Dr. Shweta Sonje brings over 15 years of extensive experience in gynecology and general medicine to Aries Skin and General Clinic. After establishing herself as a trusted physician in general and gynecological care, Dr. Sonje pursued advanced training in skin aesthetics and cosmetology from a renowned institution in Mumbai. She is government certified for advanced skin treatments and has recently established her new state-of-the-art setup in Nashik. Dr. Sonje is committed to providing comprehensive healthcare solutions using the latest FDA and CE approved equipment, ensuring the highest standards of safety and efficacy for all her patients.",
  image: "/images/dr-shweta-sonje.jpg"
};

export const TREATMENT_CATEGORIES = [
  { 
    id: 'skin', 
    name: 'Skin Care & Treatments',
    description: 'Advanced skin care procedures and treatments',
    hasSubDropdown: true,
    subItems: [
      { id: 'medicated-hydrafacial', name: 'Medicated Hydrafacial', href: '/treatments/skin/medicated-hydrafacial' },
      { id: 'carbon-peel', name: 'Carbon Peel (Hollywood Facial)', href: '/treatments/skin/carbon-peel' },
      { id: 'chemical-peel', name: 'Chemical Peel', href: '/treatments/skin/chemical-peel' },
      { id: 'microneedling', name: 'Microneedling', href: '/treatments/skin/microneedling' },
      { id: 'rf-skin-tightening', name: 'RF Skin Tightening', href: '/treatments/skin/rf-skin-tightening' },
      { id: 'melasma-acne-freckles', name: 'Melasma, Acne, Freckles Treatment', href: '/treatments/skin/melasma-acne-freckles' },
      { id: 'skin-care', name: 'Skin Care', href: '/treatments/skin/skin-care' },
      { id: 'skin-fungal-disease', name: 'Skin Fungal Disease Treatment', href: '/treatments/skin/skin-fungal-disease' }
    ]
  },
  { 
    id: 'hair', 
    name: 'Hair Care & Treatments',
    description: 'Comprehensive hair care solutions',
    hasSubDropdown: true,
    subItems: [
      { id: 'prp-gfc-hair', name: 'PRP/GFC for Hair', href: '/treatments/hair/prp-gfc-hair' },
      { id: 'dandruff-removal', name: 'Dandruff Removal', href: '/treatments/hair/dandruff-removal' },
      { id: 'hair-fall-treatment', name: 'Hair Fall Treatment', href: '/treatments/hair/hair-fall-treatment' }
    ]
  },
  { 
    id: 'cosmetic', 
    name: 'Cosmetic Procedures',
    description: 'Beauty enhancement treatments',
    hasSubDropdown: true,
    subItems: [
      { id: 'laser-hair-reduction', name: 'Laser Hair Reduction', href: '/treatments/cosmetic/laser-hair-reduction' },
      { id: 'tattoo-removal', name: 'Tattoo Removal', href: '/treatments/cosmetic/tattoo-removal' },
      { id: 'skin-tag-removal', name: 'Skin Tag Removal', href: '/treatments/cosmetic/skin-tag-removal' },
      { id: 'iv-gluta-drip', name: 'IV Gluta Drip', href: '/treatments/cosmetic/iv-gluta-drip' },
      { id: 'earlobe-repair', name: 'Earlobe Repair (Permanent)', href: '/treatments/cosmetic/earlobe-repair' }
    ]
  },
  { 
    id: 'general', 
    name: 'General Medicine',
    description: 'General health and gynecological care',
    hasSubDropdown: true,
    subItems: [
      { id: 'gynecological-care', name: 'General Gynecological Care and Treatment', href: '/treatments/general/gynecological-care' }
    ]
  }
];

export const TREATMENTS_BY_CATEGORY = {
  skin: [
    'medicated-hydrafacial',
    'carbon-peel',
    'chemical-peel',
    'microneedling',
    'rf-skin-tightening',
    'melasma-acne-freckles',
    'skin-care',
    'skin-fungal-disease'
  ],
  hair: [
    'prp-gfc-hair',
    'dandruff-removal',
    'hair-fall-treatment'
  ],
  cosmetic: [
    'laser-hair-reduction',
    'tattoo-removal',
    'skin-tag-removal',
    'iv-gluta-drip',
    'earlobe-repair'
  ],
  general: [
    'gynecological-care'
  ]
};

export const NAVIGATION: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Treatments", 
    href: "/treatments",
    hasDropdown: true,
    dropdownItems: TREATMENT_CATEGORIES
  },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Our Clinic", href: "/our-clinic" },
  { name: "Contact", href: "/contact" }
];

export const FEATURES: Feature[] = [
  {
    icon: "Award",
    title: "15+ Years Experience",
    description: "Trusted expertise in gynecology, general medicine, and advanced skin treatments"
  },
  {
    icon: "Shield",
    title: "FDA & CE Approved Equipment",
    description: "State-of-the-art technology ensuring highest safety and efficacy standards"
  },
  {
    icon: "Users",
    title: "Trained Staff",
    description: "Skilled doctors and trained staff providing personalized care"
  },
  {
    icon: "MapPin",
    title: "Prime Location",
    description: "Conveniently located in Panchavati, Nashik with easy accessibility"
  }
];

export const STATS: Stat[] = [
  { number: "15", label: "Years Experience", suffix: "+" },
  { number: "1000", label: "Happy Patients", suffix: "+" },
  { number: "18", label: "Advanced Treatments", suffix: "" },
  { number: "24", label: "Hours Support", suffix: "/7" }
];

export const TREATMENTS: Treatment[] = [
  {
    id: "laser-hair-reduction",
    name: "Laser Hair Reduction",
    description: "Advanced laser technology for permanent hair reduction with minimal discomfort",
    benefits: [
      "Permanent hair reduction",
      "Minimal pain and discomfort",
      "Quick treatment sessions",
      "Suitable for all skin types",
      "No ingrown hairs"
    ],
    procedure: "FDA-approved laser targets hair follicles, destroying them at the root for long-lasting results",
    duration: "30-60 minutes per session",
    sessions: "6-8 sessions required",
    aftercare: "Avoid sun exposure and use recommended moisturizers",
    category: "cosmetic"
  },
  {
    id: "medicated-hydrafacial",
    name: "Medicated Hydrafacial",
    description: "Deep cleansing and hydrating facial treatment for glowing, healthy skin",
    benefits: [
      "Deep pore cleansing",
      "Improved skin texture",
      "Reduced fine lines",
      "Enhanced hydration",
      "Instant glow"
    ],
    procedure: "Multi-step treatment involving cleansing, exfoliation, extraction, and hydration",
    duration: "60-90 minutes",
    sessions: "Monthly sessions recommended",
    aftercare: "Use sunscreen and avoid harsh skincare products for 24 hours",
    category: "skin"
  },
  {
    id: "tattoo-removal",
    name: "Tattoo Removal",
    description: "Safe and effective laser tattoo removal with minimal scarring",
    benefits: [
      "Complete tattoo removal",
      "Minimal scarring",
      "Safe for all skin types",
      "FDA-approved technology",
      "Professional expertise"
    ],
    procedure: "Q-switched laser breaks down tattoo pigments which are naturally eliminated by the body",
    duration: "15-45 minutes per session",
    sessions: "6-12 sessions depending on tattoo size and color",
    aftercare: "Keep area clean and dry, avoid sun exposure",
    category: "cosmetic"
  },
  {
    id: "carbon-peel",
    name: "Carbon Peel (Hollywood Facial)",
    description: "Innovative laser treatment for skin rejuvenation and pore tightening",
    benefits: [
      "Reduced pore size",
      "Improved skin texture",
      "Reduced acne and blackheads",
      "Brighter complexion",
      "No downtime"
    ],
    procedure: "Carbon mask applied and removed with laser for deep cleansing and rejuvenation",
    duration: "45-60 minutes",
    sessions: "4-6 sessions for optimal results",
    aftercare: "Use sunscreen and gentle skincare products",
    category: "skin"
  },
  {
    id: "prp-gfc-hair",
    name: "PRP/GFC for Hair",
    description: "Platelet-rich plasma therapy for natural hair regrowth and strengthening",
    benefits: [
      "Natural hair regrowth",
      "Strengthened hair follicles",
      "Reduced hair fall",
      "Improved hair density",
      "No side effects"
    ],
    procedure: "Your own blood is processed to extract growth factors, then injected into the scalp",
    duration: "60-90 minutes",
    sessions: "3-4 sessions spaced 4-6 weeks apart",
    aftercare: "Avoid washing hair for 6 hours, no vigorous exercise for 24 hours",
    category: "hair"
  },
  {
    id: "skin-tag-removal",
    name: "Skin Tag Removal",
    description: "Quick and painless removal of skin tags using advanced techniques",
    benefits: [
      "Immediate removal",
      "Minimal pain",
      "No scarring",
      "Quick procedure",
      "Permanent results"
    ],
    procedure: "Precise removal using radiofrequency or laser technology",
    duration: "10-30 minutes",
    sessions: "Single session usually sufficient",
    aftercare: "Keep area clean and dry, apply prescribed ointment",
    category: "cosmetic"
  },
  {
    id: "chemical-peel",
    name: "Chemical Peel",
    description: "Professional chemical exfoliation for skin renewal and rejuvenation",
    benefits: [
      "Improved skin texture",
      "Reduced pigmentation",
      "Minimized fine lines",
      "Even skin tone",
      "Refreshed appearance"
    ],
    procedure: "Controlled application of chemical solution to remove damaged skin layers",
    duration: "30-45 minutes",
    sessions: "3-6 sessions depending on skin condition",
    aftercare: "Avoid sun exposure, use gentle skincare products",
    category: "skin"
  },
  {
    id: "microneedling",
    name: "Microneedling",
    description: "Collagen induction therapy for skin rejuvenation and scar reduction",
    benefits: [
      "Stimulated collagen production",
      "Reduced acne scars",
      "Improved skin texture",
      "Enhanced product absorption",
      "Natural skin renewal"
    ],
    procedure: "Fine needles create controlled micro-injuries to stimulate healing response",
    duration: "45-60 minutes",
    sessions: "3-6 sessions spaced 4-6 weeks apart",
    aftercare: "Avoid sun exposure and use gentle skincare for 48 hours",
    category: "skin"
  },
  {
    id: "rf-skin-tightening",
    name: "RF Skin Tightening",
    description: "Non-invasive radiofrequency treatment for skin tightening and lifting",
    benefits: [
      "Firmer, tighter skin",
      "Reduced sagging",
      "Improved elasticity",
      "No downtime",
      "Gradual, natural results"
    ],
    procedure: "Radiofrequency energy heats deep skin layers to stimulate collagen production",
    duration: "30-60 minutes",
    sessions: "4-6 sessions for optimal results",
    aftercare: "Use sunscreen and maintain hydration",
    category: "skin"
  },
  {
    id: "dandruff-removal",
    name: "Dandruff Removal",
    description: "Medical treatment for persistent dandruff and scalp conditions",
    benefits: [
      "Complete dandruff elimination",
      "Healthy scalp",
      "Reduced itching",
      "Improved hair health",
      "Long-lasting results"
    ],
    procedure: "Medical assessment followed by targeted treatment with medicated solutions",
    duration: "30-45 minutes",
    sessions: "2-4 sessions depending on severity",
    aftercare: "Use prescribed shampoo and avoid harsh hair products",
    category: "hair"
  },
  {
    id: "melasma-acne-freckles",
    name: "Melasma, Acne, Freckles Treatment",
    description: "Comprehensive treatment for various skin pigmentation and acne issues",
    benefits: [
      "Reduced pigmentation",
      "Clear, acne-free skin",
      "Even skin tone",
      "Improved confidence",
      "Preventive care"
    ],
    procedure: "Customized treatment plan using lasers, peels, and medical-grade skincare",
    duration: "45-90 minutes",
    sessions: "4-8 sessions depending on condition",
    aftercare: "Strict sun protection and prescribed skincare regimen",
    category: "skin"
  },
  {
    id: "skin-care",
    name: "Skin Care",
    description: "Personalized skincare consultation and treatment plans",
    benefits: [
      "Customized skincare routine",
      "Professional guidance",
      "Improved skin health",
      "Preventive care",
      "Long-term results"
    ],
    procedure: "Comprehensive skin analysis followed by personalized treatment recommendations",
    duration: "60-90 minutes",
    sessions: "Ongoing as per treatment plan",
    aftercare: "Follow prescribed skincare routine and regular follow-ups",
    category: "skin"
  },
  {
    id: "iv-gluta-drip",
    name: "IV Gluta Drip",
    description: "Intravenous glutathione therapy for skin brightening and detoxification",
    benefits: [
      "Skin brightening",
      "Antioxidant boost",
      "Detoxification",
      "Improved immunity",
      "Anti-aging effects"
    ],
    procedure: "Intravenous administration of glutathione and vitamins in a clinical setting",
    duration: "30-45 minutes",
    sessions: "6-10 sessions for optimal results",
    aftercare: "Stay hydrated and maintain healthy lifestyle",
    category: "cosmetic"
  },
  {
    id: "gynecological-care",
    name: "General Gynecological Care and Treatment",
    description: "Comprehensive women's health services and gynecological treatments",
    benefits: [
      "Complete women's health care",
      "Expert gynecological consultation",
      "Preventive care",
      "Treatment of conditions",
      "Confidential care"
    ],
    procedure: "Thorough examination and personalized treatment based on individual needs",
    duration: "30-60 minutes",
    sessions: "As per medical requirement",
    aftercare: "Follow medical advice and prescribed medications",
    category: "general"
  },
  {
    id: "hair-fall-treatment",
    name: "Hair Fall Treatment",
    description: "Comprehensive treatment for various types of hair loss and thinning",
    benefits: [
      "Reduced hair fall",
      "Stronger hair follicles",
      "Improved hair density",
      "Healthy scalp",
      "Boosted confidence"
    ],
    procedure: "Medical evaluation followed by targeted treatment including PRP, medications, and scalp care",
    duration: "45-90 minutes",
    sessions: "4-8 sessions depending on condition",
    aftercare: "Use prescribed medications and follow hair care routine",
    category: "hair"
  },
  {
    id: "skin-fungal-disease",
    name: "Skin Fungal Disease Treatment",
    description: "Medical treatment for various fungal skin infections and conditions",
    benefits: [
      "Complete infection elimination",
      "Symptom relief",
      "Prevented recurrence",
      "Healthy skin restoration",
      "Expert medical care"
    ],
    procedure: "Diagnosis through examination and tests, followed by targeted antifungal treatment",
    duration: "30-45 minutes",
    sessions: "2-6 sessions depending on severity",
    aftercare: "Complete medication course and maintain hygiene",
    category: "skin"
  },
  {
    id: "earlobe-repair",
    name: "Earlobe Repair (Permanent)",
    description: "Surgical repair of torn or stretched earlobes with permanent results",
    benefits: [
      "Permanent repair",
      "Restored earlobe shape",
      "Minimal scarring",
      "Can wear earrings again",
      "Quick procedure"
    ],
    procedure: "Minor surgical procedure to repair torn or damaged earlobes under local anesthesia",
    duration: "30-45 minutes",
    sessions: "Single session",
    aftercare: "Keep area clean and dry, avoid earrings for 6-8 weeks",
    category: "cosmetic"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    treatment: "Laser Hair Reduction",
    rating: 5,
    review: "Excellent results with laser hair reduction. Dr. Shweta is very professional and the clinic maintains high hygiene standards. Highly recommended!",
    date: "2024-01-15"
  },
  {
    id: "2",
    name: "Anjali Patel",
    treatment: "Hydrafacial",
    rating: 5,
    review: "Amazing experience with the medicated hydrafacial. My skin feels so much better and looks radiant. The staff is very caring and knowledgeable.",
    date: "2024-02-03"
  },
  {
    id: "3",
    name: "Meera Joshi",
    treatment: "PRP Hair Treatment",
    rating: 5,
    review: "Great results with PRP treatment for hair fall. I can see visible improvement in hair density. Dr. Shweta explained everything clearly.",
    date: "2024-02-20"
  },
  {
    id: "4",
    name: "Sunita Desai",
    treatment: "Chemical Peel",
    rating: 4,
    review: "Very satisfied with the chemical peel treatment. My skin pigmentation has reduced significantly. Professional service and clean environment.",
    date: "2024-03-01"
  }
];

export const HOW_DID_YOU_HEAR_OPTIONS = [
  "Google Search",
  "Social Media",
  "Friend/Family Referral",
  "Doctor Referral",
  "Advertisement",
  "Walk-in",
  "Other"
];

export const TREATMENT_OPTIONS = TREATMENTS.map(treatment => ({
  value: treatment.id,
  label: treatment.name
}));

export const WHATSAPP_MESSAGE = `Hello! I would like to book an appointment at Aries Skin and General Clinic. Please let me know your availability.`;

export const SOCIAL_LINKS = [
  {
    name: "WhatsApp",
    url: `https://wa.me/917588832221?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    icon: "MessageCircle"
  },
  {
    name: "Call",
    url: "tel:+917588832221",
    icon: "Phone"
  },
  {
    name: "Email",
    url: `mailto:${CLINIC_INFO.email}`,
    icon: "Mail"
  },
  {
    name: "Location",
    url: CLINIC_INFO.googleMapsUrl,
    icon: "MapPin"
  }
];
