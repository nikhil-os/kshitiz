import { Button } from "@/components";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to Your
          <span className="text-blue-600 block">Next.js App</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A well-structured Next.js project with TypeScript, Tailwind CSS, and
          organized component architecture.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            View Components
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              🏗️ Well Structured
            </h3>
            <p className="text-gray-600">
              Organized folder structure with separate components and app
              directories for better maintainability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              ⚡ Next.js 15
            </h3>
            <p className="text-gray-600">
              Built with the latest Next.js App Router, TypeScript, and modern
              React patterns.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              🎨 Tailwind CSS
            </h3>
            <p className="text-gray-600">
              Styled with Tailwind CSS for rapid UI development and consistent
              design.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Project Structure
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg text-left max-w-md mx-auto">
            <pre className="text-sm text-gray-700">
              {`src/
├── app/              # App Router pages
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
└── components/       # Reusable components
    ├── ui/           # UI components
    ├── layout/       # Layout components
    └── index.ts      # Component exports`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
