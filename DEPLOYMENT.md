# Vercel Deployment Guide

## Prerequisites
- GitHub repository connected to Vercel
- Node.js 18+ installed locally for testing

## Quick Deploy to Vercel

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `Aries-Skin-Care-Clinic-` repository

2. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

3. **Environment Variables** (Required for Email Functionality)
   ```
   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=ariesskin25@gmail.com
   EMAIL_PASS=anfw zygk bgxm itpa
   CLINIC_EMAIL=ariesskin25@gmail.com
   
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
   ```

4. **Set Environment Variables in Vercel**
   - After importing the project, go to "Settings" → "Environment Variables"
   - Add each environment variable from the list above
   - Make sure to set them for "Production", "Preview", and "Development" environments
   - Click "Save" after adding all variables

5. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

## Local Testing

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Build Optimization

The project is configured with:
- ✅ Standalone output for better Vercel compatibility
- ✅ Image optimization enabled
- ✅ CSS optimization
- ✅ Compression enabled
- ✅ Proper caching headers

## Custom Domain

After deployment:
1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Domains"
3. Add your custom domain (e.g., ariesskin.com)
4. Update DNS records as instructed

## Performance Monitoring

Vercel provides:
- Real-time performance metrics
- Core Web Vitals tracking
- Automatic deployments on Git push
- Preview deployments for pull requests

## Support

For deployment issues:
- Check Vercel build logs
- Verify environment variables
- Ensure all dependencies are in package.json
