# Simple Portfolio

A sleek, modern, and fully responsive personal portfolio built with [Next.js](https://nextjs.org/) (App Router), React, and raw CSS.

Designed to showcase digital products, brands, and experiences with high-quality aesthetics inspired by premium UI/UX designs.

![Portfolio Preview](./public/iconedo.png)

## 🚀 Key Features

- **Modern Tech Stack**: Built with Next.js 16 and React 19.
- **Premium Typography**: Integrates the native Next.js `next/font/google` for elegant `Poppins` typography.
- **Responsive Layouts**: Designed to perfectly scale across desktop, tablet, and mobile devices using CSS Flexbox and Grid.
- **Aesthetic UI**:
  - Smooth hover animations and elevation utilities.
  - Symmetrical grid layouts for client logos.
  - Floating pill buttons and avatar drop-shadows.
- **Zero Configuration Icons**: Incorporates `lucide-react` and pure SVG assets.

## 📁 Project Structure

```text
├── public/                 # Static assets (images, SVGs, favicon)
├── src/
│   └── app/
│       ├── globals.css     # Global styles, UI utilities, CSS Variables, and responsive breakpoints
│       ├── layout.tsx      # Root layout (Metadata & Font Injection)
│       └── page.tsx        # Main Landing Page / Portfolio content
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## 🛠️ Getting Started

First, make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

Clone the repository or download the source code, then install the dependencies:

```bash
npm install
```

### Development Server

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

Then to start the production server:

```bash
npm run start
```

## 🎨 Customizing Styles

This project prefers standard, easily readable vanilla CSS over frameworks. To customize colors, spacing, or radiuses, check out the CSS variables defined at the top of `/src/app/globals.css`:

```css
:root {
  --bg-beige: #f6f4ef;
  --bg-white: #ffffff;
  --text-primary: #111111;
  --text-secondary: #555555;
  --accent: #ffd166;
}
```

## 📝 Environment Variables

The project utilizes several Environment Variables for contact details and social links. You can create a `.env.local` file at the root of the project to define the following variables:

```env
NEXT_PUBLIC_EMAIL=hi@example.com
NEXT_PUBLIC_CV_LINK=https://your-cv-link.com
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/yourusername
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
```

_Note: If environment variables are not provided, fallback placeholder links will be used instead._

---

**Developed by [Edo Priyatna]**
