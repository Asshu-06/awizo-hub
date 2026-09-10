# Deployment Instructions for Vercel

## Fix White Screen Issue

The white screen error typically occurs due to:
1. Missing environment variables
2. Build configuration issues
3. JavaScript errors during initialization

## Steps to Fix on Vercel:

### 1. Add Environment Variables in Vercel Dashboard

Go to your Vercel project settings → Environment Variables and add:

```
VITE_SUPABASE_URL=your_actual_supabase_url
VITE_SUPABASE_ANON_KEY=your_actual_supabase_anon_key
VITE_GOOGLE_ANALYTICS_ID=your_ga_id (optional)
VITE_META_PIXEL_ID=your_pixel_id (optional)
VITE_WHATSAPP_NUMBER=+917845787567
VITE_PHONE_NUMBER=+917845787567
VITE_EMAIL=info@awizohub.com
VITE_GOOGLE_MAPS_EMBED_URL=your_google_maps_url (optional)
```

### 2. Verify Build Settings in Vercel

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Redeploy

After adding environment variables:
1. Go to Deployments tab
2. Click on the three dots on the latest deployment
3. Select "Redeploy"

### 4. Check Browser Console

If still getting white screen:
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for JavaScript errors
4. Share the errors for further debugging

## Local Testing

Before deploying, test the production build locally:

```bash
npm run build
npm run preview
```

If it works locally but not on Vercel, the issue is likely with environment variables.

## Common Issues:

1. **Supabase not initialized**: Add proper Supabase credentials in Vercel environment variables
2. **Route not found**: Already handled by vercel.json rewrites
3. **Assets not loading**: Check if base path is correct in vite.config.js
