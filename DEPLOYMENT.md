# 🚀 Deployment Guide

## Deploy to Vercel (Recommended - Easiest)

Vercel is the company behind Next.js and offers the best integration.

### Steps:

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Visit Vercel**:
   - Go to https://vercel.com
   - Sign in with your GitHub account
   - Click "New Project"

3. **Import Repository**:
   - Select your Portfolio repository
   - Click "Import"

4. **Configure & Deploy**:
   - Vercel auto-detects Next.js settings
   - Click "Deploy"
   - Wait ~2 minutes

5. **Done!** 🎉
   - You'll get a URL like: `cristan-ramos-portfolio.vercel.app`
   - Automatic deployments on every git push

---

## Deploy to Netlify

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Visit Netlify**:
   - Go to https://netlify.com
   - Sign in with GitHub
   - Click "Add new site" → "Import an existing project"

3. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Deploy!

---

## Deploy to GitHub Pages

Your project is already configured for static export!

1. **Add to package.json scripts**:
   ```json
   "export": "next build && next export"
   ```

2. **Build**:
   ```bash
   npm run build
   ```

3. **The `out` folder** contains your static site

4. **Deploy to GitHub Pages**:
   ```bash
   # Create gh-pages branch
   git checkout -b gh-pages
   git add out -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix out origin gh-pages
   ```

5. **Enable GitHub Pages**:
   - Go to Repository Settings → Pages
   - Source: gh-pages branch
   - Save

6. **Access at**: `https://CristanRamos.github.io/Portfolio`

---

## Custom Domain Setup

### On Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate auto-provisioned

### On Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS
4. SSL auto-enabled

---

## Environment Variables

If you add backend features later (API keys, database URLs):

### Vercel:
1. Project Settings → Environment Variables
2. Add variables
3. Redeploy

### Netlify:
1. Site Settings → Environment variables
2. Add variables
3. Redeploy

---

## Performance Optimization

Already included:
- ✅ Static site generation
- ✅ Image optimization configured
- ✅ Code splitting
- ✅ CSS optimization
- ✅ Minification

---

## Post-Deployment Checklist

- [ ] Test all sections load correctly
- [ ] Verify mobile responsiveness
- [ ] Check all links work (GitHub, email, phone)
- [ ] Test project modals
- [ ] Verify dark mode works
- [ ] Check SEO meta tags (view page source)
- [ ] Test contact information
- [ ] Share with friends/recruiters!

---

## Updating Your Live Site

### Vercel/Netlify (Auto-deploy):
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```
Your site automatically updates!

### Manual Deploy:
```bash
npm run build
# Upload the 'out' folder to your hosting
```

---

## Analytics (Optional)

Add Google Analytics or Vercel Analytics:

**Vercel Analytics**:
1. Install: `npm install @vercel/analytics`
2. Add to `app/layout.tsx`:
   ```tsx
   import { Analytics } from '@vercel/analytics/react'
   
   // In return statement:
   <Analytics />
   ```

**Google Analytics**:
Add to `app/layout.tsx` in the `<head>` section

---

## Monitoring

**Vercel**: Built-in analytics and error tracking
**Netlify**: Analytics available in dashboard
**Both**: Automatic SSL, CDN, and performance monitoring

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Next.js Docs: https://nextjs.org/docs

---

**Pro Tip**: Use Vercel for the easiest experience. One-click deploy with automatic HTTPS, CDN, and continuous deployment!
