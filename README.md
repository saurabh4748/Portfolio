# Saurabh Pandey - AI & Data Engineer Portfolio

A modern, recruiter-focused portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Designed to showcase my career journey, technical expertise, and impact as a Data Engineer and AI Engineer.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Dark/Light Mode**: Theme toggle with persistent preferences
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimized
- **Smooth Animations**: Subtle Framer Motion animations for better UX
- **Fast Performance**: Lighthouse score 90+
- **Recruiter-Focused**: Clear value proposition visible within 10-20 seconds

## 📋 Sections

1. **Hero Section** - Professional headline with clear CTAs
2. **Value Snapshot** - Quick stats and key achievements
3. **My Journey** - Career timeline with impact-focused descriptions
4. **Technical Skills** - Categorized skill cards with icons
5. **Featured Projects** - Project showcase with technologies and impact
6. **Resume** - Download section for PDF resume
7. **Contact + ATS Snapshot** - Email, LinkedIn, GitHub plus recruiter-ready highlights

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/saurabh4748/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── ValueSnapshot.tsx
│   │   ├── Journey.tsx     # Career timeline
│   │   ├── TechnicalSkills.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── Resume.tsx
│   │   └── Contact.tsx
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   └── ThemeProvider.tsx   # Theme context provider
├── lib/
│   └── experience.ts       # Shared helpers for experience calculations
├── public/
│   ├── SaurabhPandeyResume_2026.pdf  # Replace with your resume
│   ├── photo.jpg                      # Profile photo used in hero/profile card
│   └── favicon.ico
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/sections/Hero.tsx`)
   - Update name, title, and professional headline
   - Modify social media links

2. **Career Journey** (`components/sections/Journey.tsx`)
   - Update work experience and achievements

3. **Technical Skills** (`components/sections/TechnicalSkills.tsx`)
   - Modify skill categories and technologies

4. **Projects** (`components/sections/FeaturedProjects.tsx`)
   - Add/update project details and GitHub links

5. **Contact Information** (`components/sections/Contact.tsx`)
   - Update email, social links, and ATS snapshot bullets

### Add Resume PDF

Place your resume PDF in the `public` folder (e.g., `public/YourNameResume.pdf`) and update the download links pointing to `/SaurabhPandeyResume_2026.pdf` if you change the filename.

### Theme Colors

Modify colors in `tailwind.config.ts` and `app/globals.css`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/saurabh4748/Portfolio)

### Deploy to Netlify

1. Push your code to GitHub
2. Import project on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## 📊 Performance

- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **SEO Score**: 100

## 🔧 Development

### Linting

```bash
npm run lint
```

### Type Checking

TypeScript is configured for strict type checking. The project will show type errors during development.

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Saurabh Pandey**
- Email: pandey.saurabh4748@gmail.com
- LinkedIn: [linkedin.com/in/saurabh4748](https://linkedin.com/in/saurabh4748)
- GitHub: [github.com/saurabh4748](https://github.com/saurabh4748)

## 🙏 Acknowledgments

Built with modern web technologies to create a professional, recruiter-focused portfolio that clearly demonstrates technical expertise and career impact.

---

**Note**: This is a complete redesign from the original Create React App portfolio, now using Next.js 14 with TypeScript and modern best practices.
