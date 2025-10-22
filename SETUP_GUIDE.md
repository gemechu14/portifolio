# Portfolio Setup Guide

Follow these steps to get your portfolio up and running!

## 🚀 Quick Start

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- Next.js
- React
- Tailwind CSS
- Framer Motion
- React Three Fiber
- And all other dependencies

### 2. Start Development Server

```bash
npm run dev
```

Your portfolio will be available at: **http://localhost:3000**

## 🎨 Personalization Checklist

### Step 1: Update Contact Information

**File**: `components/Contact.tsx`

Update your email and social links (around line 12):

```tsx
{
  name: 'Email',
  href: 'mailto:YOUR-EMAIL@example.com', // ← Change this
  label: 'YOUR-EMAIL@example.com', // ← Change this
},
{
  name: 'LinkedIn',
  href: 'https://linkedin.com/in/YOUR-LINKEDIN', // ← Change this
  label: 'linkedin.com/in/YOUR-LINKEDIN', // ← Change this
},
{
  name: 'GitHub',
  href: 'https://github.com/YOUR-GITHUB', // ← Change this
  label: 'github.com/in/YOUR-GITHUB', // ← Change this
},
```

### Step 2: Add Your Projects

**File**: `data/projectsData.ts`

The projects are already set up with your information! But you can:

1. Update project links from `https://your-link-here.com` to actual URLs
2. Add GitHub repository links (optional):

```tsx
{
  title: "Your Project",
  // ... other fields
  github: "https://github.com/yourusername/repo", // Add this line
}
```

### Step 3: Add Project Images

Create images for your projects and add them to the `/public/images/` folder:

Required images:
- `coopayroll.png`
- `cedarsreet.png`
- `futureforward.png`
- `coopeng.png`
- `peaceinitiative.png`

**Recommended specs:**
- Dimensions: 1200x800px (or 16:9 ratio)
- Format: PNG or JPG
- Size: Under 500KB for optimal performance

**Don't have images yet?** The portfolio will show a colored placeholder with the first letter of each project.

### Step 4: Add Profile Picture (Optional)

**File**: `components/Hero.tsx`

Replace the placeholder (around line 48):

```tsx
// Current (shows letter "G")
<div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-5xl font-bold">
  G
</div>

// Replace with:
<img 
  src="/images/profile.jpg" 
  alt="Gemechu" 
  className="w-full h-full object-cover"
/>
```

Then add your profile image to `/public/images/profile.jpg`

### Step 5: Update About Section (Optional)

**File**: `components/About.tsx`

Customize your biography (around line 98):

```tsx
<p>
  Your personalized introduction here...
</p>
```

### Step 6: Update Metadata

**File**: `app/layout.tsx`

Update SEO information (line 6):

```tsx
export const metadata: Metadata = {
  title: 'Gemechu - Software Engineer',
  description: 'Your custom description...',
  keywords: ['Add', 'Your', 'Keywords'],
}
```

## 🎨 Theme Customization

### Change Accent Color

**File**: `tailwind.config.js`

The default color is cyan/teal. To change it:

```js
colors: {
  primary: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4', // ← Main color (change this)
    600: '#0891b2', // ← Darker shade
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },
}
```

**Popular alternatives:**
- **Blue**: `#3b82f6`
- **Purple**: `#a855f7`
- **Green**: `#10b981`
- **Orange**: `#f97316`

### Change Font

**File**: `tailwind.config.js`

Current fonts: Poppins & Manrope

To change, update the Google Fonts import in `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap');
```

## 🚀 Deployment

### Option 1: Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Done! Your site will be live in ~1 minute.

### Option 2: Netlify

1. Build your project:
   ```bash
   npm run build
   ```
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder
4. Your site is live!

## 🐛 Troubleshooting

### Port 3000 is already in use

```bash
# Kill the process using port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Images not showing

Make sure your images are in the `/public/images/` directory and the filenames match exactly (case-sensitive).

### Build errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)

## ✨ Tips for Best Results

1. **Images**: Use high-quality screenshots of your projects
2. **Content**: Keep descriptions concise and impactful
3. **Links**: Test all external links before deployment
4. **Mobile**: Check how it looks on mobile devices
5. **Performance**: Optimize images (use tools like TinyPNG)

## 🎉 You're All Set!

Your portfolio is ready to impress! If you need help, check the main README.md or open an issue on GitHub.

---

**Need more help?** Feel free to reach out or check the documentation for each technology used.


