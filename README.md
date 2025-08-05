# My Next.js App

A well-structured Next.js 15 project with TypeScript and Tailwind CSS, featuring organized component architecture and modern development practices.

## 🚀 Features

- **Next.js 15** - Latest version with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting
- **Well-organized structure** - Separate components and app directories

## 📁 Project Structure

```
src/
├── app/                 # App Router pages and layouts
│   ├── layout.tsx       # Root layout with Header/Footer
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles
│   └── favicon.ico      # Favicon
├── components/          # Reusable React components
│   ├── ui/              # UI components (buttons, inputs, etc.)
│   │   └── Button.tsx   # Reusable button component
│   ├── layout/          # Layout components
│   │   ├── Header.tsx   # Site header with navigation
│   │   └── Footer.tsx   # Site footer
│   └── index.ts         # Component exports
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Development Guidelines

- Use TypeScript for all components and pages
- Follow Next.js 15 App Router conventions
- Use Tailwind CSS for styling
- Place reusable components in `src/components/`
- Use the component index file for clean imports
- Follow the established folder structure

## 🎨 Component Usage

Import components from the main components index:

```tsx
import { Button, Header, Footer } from "@/components";

// Use in your JSX
<Button variant="primary" size="lg">
  Click me
</Button>;
```

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - TypeScript handbook
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Tailwind CSS utility classes

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
