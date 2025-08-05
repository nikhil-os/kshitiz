import { Button } from "@/components";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-40"></div>
      <div className="absolute top-60 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-50"></div>
      <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-pink-400 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 left-20 w-1 h-1 bg-yellow-400 rounded-full opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="space-y-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-gray-700 text-gray-300 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            PLATFORM SOLUTIONS
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white leading-tight">
            The Modern
            <br />
            <span className="font-normal">Software Platform</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Streamline your team's workflow with our comprehensive platform
            that integrates project management, communication, and file
            sharing in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-10 py-5 text-xl"
            >
              Start Free Trial
            </Button>
            <button className="flex items-center px-10 py-5 text-xl font-medium text-gray-300 hover:text-white transition-colors">
              <svg
                className="w-7 h-7 mr-3"
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
          <div className="pt-12">
            <div className="flex items-center justify-center space-x-3 opacity-50">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <span className="text-lg text-gray-500">
                Trusted by 10,000+ teams worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
