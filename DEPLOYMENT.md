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

3. **Environment Variables** (Optional)
   ```
   NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
   ```

4. **Deploy**
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
