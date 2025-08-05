"use client";

import Button from "../ui/Button";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function HeroSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={ref}
    >
      {/* Decorative elements with float animation */}
      <div
        className={`absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full opacity-60 animate-float ${
          isVisible ? "animate-delay-100" : ""
        }`}
      ></div>
      <div
        className={`absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-float ${
          isVisible ? "animate-delay-200" : ""
        }`}
      ></div>
      <div
        className={`absolute top-60 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-50 animate-float ${
          isVisible ? "animate-delay-300" : ""
        }`}
      ></div>
      <div
        className={`absolute bottom-40 right-1/3 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-float ${
          isVisible ? "animate-delay-400" : ""
        }`}
      ></div>
      <div
        className={`absolute bottom-20 left-20 w-1 h-1 bg-yellow-400 rounded-full opacity-60 animate-float ${
          isVisible ? "animate-delay-500" : ""
        }`}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="space-y-12">
          <div
            className={`inline-flex items-center px-6 py-3 rounded-full border border-gray-700 text-gray-300 text-sm animate-on-scroll ${
              isVisible ? "animate-slide-in-down" : ""
            }`}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            PLATFORM SOLUTIONS
          </div>

          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight animate-on-scroll ${
              isVisible ? "animate-fade-in-up animate-delay-200" : ""
            }`}
          >
            The Modern
            <br />
            <span className="font-normal">Software Platform</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed animate-on-scroll ${
              isVisible ? "animate-fade-in-up animate-delay-400" : ""
            }`}
          >
            Streamline your team's workflow with our comprehensive platform that
            integrates project management, communication, and file sharing in
            one place.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-on-scroll ${
              isVisible ? "animate-fade-in-up animate-delay-500" : ""
            }`}
          >
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg transform transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
            </Button>
            <button className="flex items-center px-8 py-4 text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105">
              <svg
                className="w-6 h-6 mr-3"
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
          <div
            className={`pt-12 animate-on-scroll ${
              isVisible ? "animate-fade-in-up animate-delay-600" : ""
            }`}
          >
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
