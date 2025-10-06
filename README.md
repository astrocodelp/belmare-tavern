# BelMare Tavern Website

A modern, SEO-optimized Next.js website for BelMare Tavern in Dafni Beach, Zakynthos, featuring internationalization (Greek and English) and a contact form with Server Actions.

## Features

- ✨ **Next.js 15** with App Router
- 🌍 **Internationalization** with next-intl (Greek & English)
- 🎯 **SEO Optimized** with proper meta tags, OpenGraph, and structured data
- 📧 **Contact Form** with Server Actions and email notifications
- 📱 **Fully Responsive** design
- 🎨 **Modern UI** with smooth animations
- 🖼️ **Image Gallery** with lightbox
- 🍽️ **Restaurant Menu** with tabbed categories
- 🗺️ **Google Maps** integration
- ⚡ **Performance Optimized** with Next.js Image and Script components

## Getting Started

### Prerequisites

- Node.js 18+ or compatible runtime
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd belmare-tavern
```

2. Install dependencies:
```bash
pnpm install
```

3. Configure environment variables:
   - Copy `env.example` to `.env.local`
   - Update the SMTP settings with your email credentials

```bash
cp env.example .env.local
```

For Gmail, you need to:
- Enable 2-factor authentication
- Create an App Password: https://support.google.com/accounts/answer/185833
- Use the App Password in `SMTP_PASS`

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file with the following variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@belmare-tavern.com
CONTACT_EMAIL=belmaretavern@gmail.com
```

## Project Structure

```
├── messages/              # Translation files
│   ├── el.json           # Greek translations
│   └── en.json           # English translations
├── public/
│   └── assets/           # Static assets (images, CSS, JS)
├── src/
│   ├── app/
│   │   ├── [locale]/     # Locale-based routing
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── actions/      # Server Actions
│   │       └── contact.ts
│   ├── components/       # React components
│   ├── i18n/            # i18n configuration
│   │   ├── request.ts
│   │   └── routing.ts
│   └── middleware.ts     # Locale detection middleware
```

## Internationalization

The site supports two languages:
- Greek (el) - Default
- English (en)

### Adding Translations

Edit the JSON files in the `messages/` directory:
- `messages/el.json` - Greek translations
- `messages/en.json` - English translations

### Locale Routing

The site uses locale-based routing:
- `/` or `/el` - Greek version (default)
- `/en` - English version

The middleware automatically detects the user's preferred language based on:
1. URL locale parameter
2. Browser language preferences
3. Falls back to Greek as default

## Contact Form

The contact form uses Next.js Server Actions for secure, server-side email sending via Nodemailer.

### Features:
- Client-side validation
- Server-side validation
- Email notifications
- Loading states
- Success/error messages
- Accessible form fields

### Email Configuration

The contact form sends emails using SMTP. Configure your SMTP settings in `.env.local`:

For Gmail:
1. Enable 2FA on your Google account
2. Generate an App Password
3. Use the App Password in SMTP_PASS

For other providers, update SMTP_HOST and SMTP_PORT accordingly.

## SEO Features

- Dynamic meta tags per locale
- OpenGraph tags for social sharing
- Twitter Card tags
- Structured JSON-LD data
- Semantic HTML
- Alt tags on all images
- Proper heading hierarchy
- XML sitemap generation
- robots.txt
- Canonical URLs
- hreflang tags for language alternatives

## Performance Optimizations

- Next.js Image optimization
- Script component with strategic loading
- CSS optimization
- Lazy loading for images
- Preconnect to external resources
- Reduced motion support for accessibility

## Building for Production

```bash
pnpm build
```

This creates an optimized production build in the `.next` directory.

## Running in Production

```bash
pnpm start
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

You can deploy to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Docker container
- Traditional Node.js hosting

Make sure to:
1. Set all environment variables
2. Run `pnpm build` before deployment
3. Set the start command to `pnpm start`

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers

## License

Copyright © ormosagency.gr. All rights reserved.

## Support

For support, email belmaretavern@gmail.com

## Acknowledgments

- Original design and assets from the old site
- Next.js and React teams
- next-intl for internationalization
- All open-source contributors

---

Built with ❤️ using Next.js
