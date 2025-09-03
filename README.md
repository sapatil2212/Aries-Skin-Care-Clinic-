# Aries Skin and General Clinic Website

A modern, responsive website for Aries Skin and General Clinic built with Next.js 14, TypeScript, and Tailwind CSS.

## 🏥 About the Clinic

**Aries Skin and General Clinic** offers advanced skin and hair treatments in Nashik under the expert care of **Dr. Shweta Sonje**, who brings 15+ years of experience in gynecology, general medicine, and specialized cosmetic treatments.

## ✨ Features

### 🎨 Modern Design
- Clean, professional medical website aesthetic
- Responsive design optimized for all devices
- Smooth animations and micro-interactions using Framer Motion
- Custom color scheme with primary green (#24544B) and warm off-white (#FAF6F3)

### 📱 Interactive Components
- **Comprehensive Appointment Booking Modal** with multi-step form
- **Floating WhatsApp and Call Widgets** for instant communication
- **Responsive Navigation** with mobile hamburger menu
- **Animated Scroll Indicators** and smooth scrolling
- **Toast Notifications** for user feedback

### 🏥 Complete Pages
1. **Home Page** - Hero section, features, treatment previews, testimonials
2. **About Page** - Doctor information, qualifications, clinic mission
3. **Treatments Page** - All 18 treatments with detailed information and filtering
4. **Testimonials Page** - Patient reviews and success stories
5. **Our Clinic Page** - Facilities, equipment, safety protocols
6. **Contact Page** - Contact form, clinic information, location details

### 🔧 Technical Features
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Hook Form** with Zod validation
- **SEO Optimized** with meta tags and structured data
- **Performance Optimized** with lazy loading and code splitting

## 🏥 Treatments Offered

### Skin Treatments
- Laser Hair Reduction
- Medicated Hydrafacial
- Chemical Peel
- Microneedling
- RF Skin Tightening
- Carbon Peel (Hollywood Facial)
- Melasma, Acne, Freckles Treatment
- Skin Tag Removal
- Skin Fungal Disease Treatment

### Hair Treatments
- PRP/GFC for Hair
- Hair Fall Treatment
- Dandruff Removal

### Cosmetic Procedures
- Tattoo Removal
- IV Gluta Drip
- Earlobe Repair (Permanent)

### General Medicine
- General Gynecological Care and Treatment
- Comprehensive Skin Care Consultation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd aries-skin-clinic
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── treatments/        # Treatments page
│   ├── testimonials/      # Testimonials page
│   ├── our-clinic/        # Our Clinic page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   ├── modal.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── toast.tsx
│   ├── layout/            # Layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── floating-widgets.tsx
│   ├── sections/          # Page sections
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   └── treatments-preview.tsx
│   └── appointment-modal.tsx
└── lib/
    ├── constants.ts       # App constants and data
    ├── types.ts           # TypeScript types
    └── utils.ts           # Utility functions
\`\`\`

## 🎨 Design System

### Colors
- **Primary**: #24544B (Dark Green)
- **Secondary**: #FAF6F3 (Warm Off-white)
- **Accent**: #FFFFFF (White)
- **Primary Dark**: #1a3d36
- **Primary Light**: #2f6b5e

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights with gradient text effects
- **Body**: Regular and medium weights for readability

### Components
- **Buttons**: Multiple variants with hover effects and loading states
- **Cards**: Subtle shadows with hover animations
- **Forms**: Comprehensive validation with error states
- **Modals**: Smooth animations with backdrop blur

## 📞 Clinic Information

- **Address**: Shop No 1, Keystone Residency Apartment, Behind Sharad Pawar Fruit Market, Peth-Makhalamabad Link Road, Samarth Nagar, Panchavati, Nashik - 422001
- **Phone**: 7588832221 (WhatsApp), 7972548001
- **Email**: ariesskin25@gmail.com
- **Working Hours**: 
  - Mon-Fri: 9:00 AM - 8:00 PM
  - Saturday: 9:00 AM - 6:00 PM
  - Sunday: 10:00 AM - 4:00 PM

## 🔧 Customization

### Adding New Treatments
1. Add treatment data to `src/lib/constants.ts` in the `TREATMENTS` array
2. Include all required fields: name, description, benefits, procedure, etc.
3. The treatment will automatically appear on the treatments page

### Modifying Clinic Information
Update the `CLINIC_INFO` object in `src/lib/constants.ts` to change:
- Contact details
- Address
- Working hours
- Google Maps URL

### Customizing Colors
Modify the color scheme in `tailwind.config.ts`:
\`\`\`typescript
colors: {
  primary: '#24544B',
  secondary: '#FAF6F3',
  // Add your custom colors
}
\`\`\`

## 🌐 SEO & Performance

- **Meta Tags**: Comprehensive meta tags for each page
- **Structured Data**: JSON-LD for medical business
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Proper crawling instructions
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js App Router

## 📱 Mobile Optimization

- **Mobile-first** responsive design
- **Touch-friendly** interactive elements
- **Optimized forms** for mobile input
- **Fast loading** on mobile networks
- **Accessible** design following WCAG guidelines

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📈 Analytics & Monitoring

Ready for integration with:
- Google Analytics 4
- Facebook Pixel
- Google Tag Manager
- Microsoft Clarity

## 🔒 Security

- **Form Validation**: Client-side and server-side validation
- **XSS Protection**: Input sanitization
- **CSRF Protection**: Built-in Next.js protection
- **HTTPS Ready**: Secure by default

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for Aries Skin and General Clinic.

## 🆘 Support

For technical support or questions about the website, please contact the development team.

---

**Built with ❤️ for Aries Skin and General Clinic**
