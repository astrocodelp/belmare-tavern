# BelMare Tavern - Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp env.example .env.local
```

Then edit `.env.local` with your email configuration:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@belmare-tavern.com
CONTACT_EMAIL=belmaretavern@gmail.com
```

#### Gmail Configuration

For Gmail, you need to:
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password at: https://myaccount.google.com/apppasswords
3. Use the 16-character App Password in `SMTP_PASS`

#### Other Email Providers

For other SMTP providers, adjust `SMTP_HOST` and `SMTP_PORT`:
- **SendGrid**: `smtp.sendgrid.net:587`
- **Mailgun**: `smtp.mailgun.org:587`
- **AWS SES**: `email-smtp.us-east-1.amazonaws.com:587`

### 3. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site!

The site will automatically:
- Detect your browser language
- Redirect to Greek (`/`) or English (`/en`)
- Hot reload on file changes

## 📁 Project Structure

```
belmare-tavern/
├── messages/                # Translation files
│   ├── el.json             # Greek translations
│   └── en.json             # English translations
├── public/
│   ├── assets/             # Static assets from old site
│   │   ├── css/           # Stylesheets
│   │   ├── img/           # Images
│   │   ├── js/            # JavaScript files
│   │   └── fonts/         # Icon fonts
│   └── style.css          # Main stylesheet
├── src/
│   ├── app/
│   │   ├── [locale]/      # Locale-based routing
│   │   │   ├── layout.tsx # Root layout with metadata
│   │   │   └── page.tsx   # Home page
│   │   ├── actions/       # Server Actions
│   │   │   └── contact.ts # Contact form handler
│   │   └── globals.css    # Global styles
│   ├── components/        # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Features.tsx
│   │   ├── Menu.tsx
│   │   ├── Gallery.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Map.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── Scripts.tsx
│   ├── i18n/              # Internationalization config
│   │   ├── request.ts     # Request configuration
│   │   └── routing.ts     # Routing configuration
│   └── middleware.ts      # Locale detection middleware
├── .env.local             # Environment variables (create this!)
├── env.example            # Environment template
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Documentation
```

## 🌍 Internationalization

### Available Languages

- **Greek (el)** - Default language at `/` or `/el`
- **English (en)** - Available at `/en`

### Adding a New Language

1. Create a new translation file in `messages/`:
```bash
# For example, to add Italian
cp messages/en.json messages/it.json
```

2. Update `src/i18n/routing.ts`:
```typescript
export const routing = defineRouting({
  locales: ['el', 'en', 'it'], // Add 'it'
  defaultLocale: 'el',
  localePrefix: 'as-needed'
});
```

3. Update translations in `messages/it.json`

### Editing Translations

All translations are in JSON files under `messages/`:
- `messages/el.json` - Greek
- `messages/en.json` - English

Structure:
```json
{
  "nav": {
    "home": "HOME",
    "about": "ABOUT"
  },
  "hero": {
    "slide1": {
      "title": "Welcome"
    }
  }
}
```

## 📧 Contact Form

The contact form uses Next.js Server Actions for secure, server-side processing.

### Features:
- ✅ Client and server-side validation
- ✅ Email notifications via SMTP
- ✅ Loading states
- ✅ Success/error messages
- ✅ Accessible form design
- ✅ Spam protection ready

### Testing the Contact Form

1. Configure SMTP in `.env.local`
2. Run the dev server
3. Fill and submit the contact form
4. Check the recipient email inbox

### Customizing Email Templates

Edit `/src/app/actions/contact.ts`:

```typescript
const mailOptions = {
  from: process.env.SMTP_FROM,
  to: process.env.CONTACT_EMAIL,
  subject: `New contact from ${name}`,
  html: `
    <!-- Customize your HTML email template here -->
  `,
};
```

## 🎨 Styling

### CSS Structure

1. **Original Site CSS** - Loaded via `<link>` tags in `layout.tsx`
   - Bootstrap
   - Font Awesome
   - Slick Slider
   - Magnific Popup
   - Custom theme

2. **Global Styles** - `src/app/globals.css`
   - Modern enhancements
   - Accessibility improvements
   - Responsive fixes

### Customizing Colors

Edit `/public/assets/css/theme-color/blue-theme.css` or switch to another theme:

Available themes in `/public/assets/css/theme-color/`:
- `blue-theme.css` (default)
- `red-theme.css`
- `green-theme.css`
- `orange-theme.css`
- `purple-theme.css`
- `pink-theme.css`
- etc.

Change in `src/app/[locale]/layout.tsx`:
```tsx
<link rel="stylesheet" href="/assets/css/theme-color/red-theme.css" />
```

## 🖼️ Images & Assets

### Adding New Images

1. Place images in `/public/assets/img/`
2. Reference with `/assets/img/your-image.jpg`

### Gallery Images

Add to gallery in `/src/components/Gallery.tsx`:

```typescript
const images = [
  { src: '/assets/img/gallery/1.jpg', alt: 'Description' },
  { src: '/assets/img/gallery/2.jpg', alt: 'Description' },
  // Add more...
];
```

### Slider Images

Edit `/src/components/Hero.tsx` to change slider images.

## 🍽️ Menu Management

Menu items are in the translation files (`messages/el.json` and `messages/en.json`).

To add/edit menu items:

```json
{
  "menu": {
    "items": {
      "coldAppetizers": [
        "Τζατζίκι",
        "Your New Item"
      ]
    }
  }
}
```

## 🔍 SEO

### Metadata Configuration

Edit metadata in `/src/app/[locale]/layout.tsx`:

```typescript
export async function generateMetadata({ params }) {
  return {
    title: 'Your Title',
    description: 'Your Description',
    keywords: ['keyword1', 'keyword2'],
    // ... more SEO fields
  };
}
```

### Adding Structured Data

Add JSON-LD schema in the layout:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "BelMare Tavern",
      // ... more schema data
    })
  }}
/>
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Settings → Environment Variables
5. Deploy!

### Deploy to Other Platforms

#### Netlify
```bash
pnpm build
```
Deploy the `.next` folder

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## 🧪 Testing

### Run Linter
```bash
pnpm lint
```

### Format Code
```bash
pnpm format
```

### Build for Production
```bash
pnpm build
```

### Test Production Build Locally
```bash
pnpm build
pnpm start
```

## 🔧 Troubleshooting

### Contact Form Not Sending Emails

1. Check `.env.local` configuration
2. Verify SMTP credentials
3. Check spam folder
4. Enable "Less secure app access" for Gmail (or use App Password)
5. Check server logs for errors

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
pnpm install

# Try building again
pnpm build
```

### Translations Not Loading

1. Check file names match locale codes exactly
2. Verify JSON syntax is valid
3. Check locale configuration in `src/i18n/routing.ts`
4. Clear browser cache

### Images Not Loading

1. Verify images are in `/public/assets/img/`
2. Check file paths are correct
3. Ensure correct file extensions
4. Check browser console for 404 errors

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl.dev)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🆘 Support

For issues or questions:
- Email: belmaretavern@gmail.com
- Check `README.md` for more information

## 📝 License

Copyright © ormosagency.gr. All rights reserved.

---

Happy coding! 🎉

