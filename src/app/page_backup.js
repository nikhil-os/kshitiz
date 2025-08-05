import { Button } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-40"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-700 text-gray-300 text-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              PLATFORM SOLUTIONS
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight">
              The Modern
              <br />
              <span className="font-normal">Software Platform</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Streamline your team's workflow with our comprehensive platform
              that integrates project management, communication, and file
              sharing in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-8 py-4"
              >
                Start Free Trial
              </Button>
              <button className="flex items-center px-8 py-4 text-lg font-medium text-gray-300 hover:text-white transition-colors">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-sm text-gray-500">
                  Trusted by 10,000+ teams
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections... */}
      {/* (All the existing section code continues here) */}
    </div>
  );
}
