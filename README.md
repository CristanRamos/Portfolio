# Cristan Ramos - Portfolio Website

A modern, responsive portfolio website built with Next.js 14 and Tailwind CSS, showcasing my skills, projects, and professional experience in web and mobile development.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark Mode**: Built-in dark mode support
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Project Showcase**: Detailed project cards with modal views
- **Skills Section**: Organized technical skills by category
- **Contact Integration**: Easy-to-access contact information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: shadcn/ui (Radix UI + Tailwind CSS)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CristanRamos/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Main navigation bar
│   ├── Footer.tsx          # Footer component
│   └── sections/
│       ├── Hero.tsx        # Hero/landing section
│       ├── About.tsx       # About section
│       ├── Skills.tsx      # Skills section
│       └── Projects.tsx    # Projects showcase
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Colors
Modify the color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

### Content
Update personal information in:
- `components/sections/Hero.tsx` - Hero section
- `components/sections/About.tsx` - Education and certifications
- `components/sections/Skills.tsx` - Technical skills
- `components/sections/Projects.tsx` - Project details
- `components/Footer.tsx` - Contact information

## 📧 Contact

- **Email**: ramoscristan4@gmail.com
- **Phone**: 0929-621-8192
- **GitHub**: [CristanRamos](https://github.com/CristanRamos)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)

---

**Developed by Cristan Ramos** | BS Information Technology - Web and App Development Specialist
