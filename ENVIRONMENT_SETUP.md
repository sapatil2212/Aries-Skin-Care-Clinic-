# Environment Variables Setup

## For Local Development

Create a `.env.local` file in the root directory with the following content:

```env
# Email Configuration for Aries Skin Clinic
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=ariesskin25@gmail.com
EMAIL_PASS=anfw zygk bgxm itpa
CLINIC_EMAIL=ariesskin25@gmail.com

# Environment
NODE_ENV=development
```

## For Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add the following variables:

| Variable Name | Value | Environment |
|---------------|-------|-------------|
| `EMAIL_HOST` | `smtp.gmail.com` | Production, Preview, Development |
| `EMAIL_PORT` | `587` | Production, Preview, Development |
| `EMAIL_SECURE` | `false` | Production, Preview, Development |
| `EMAIL_USER` | `ariesskin25@gmail.com` | Production, Preview, Development |
| `EMAIL_PASS` | `anfw zygk bgxm itpa` | Production, Preview, Development |
| `CLINIC_EMAIL` | `ariesskin25@gmail.com` | Production, Preview, Development |

## Important Notes

- The `EMAIL_PASS` is a Gmail App Password, not your regular Gmail password
- Make sure 2-Factor Authentication is enabled on the Gmail account
- App passwords are generated in Google Account settings under "Security" → "App passwords"
- Never commit the `.env.local` file to version control

## Testing Email Functionality

After setting up the environment variables:

1. Start the development server: `npm run dev`
2. Navigate to the appointment booking form
3. Fill out and submit the form
4. Check both the user's email and the clinic email for confirmation emails
