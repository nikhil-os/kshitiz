"use client";

import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function FeaturesSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center px-6 py-3 rounded-full border border-gray-700 text-gray-300 text-sm mb-12 animate-on-scroll ${
              isVisible ? "animate-slide-in-down" : ""
            }`}
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
            KEY FEATURES
          </div>
          <h2
            className={`text-3xl md:text-5xl font-light text-white mb-8 leading-tight animate-on-scroll ${
              isVisible ? "animate-fade-in-up animate-delay-200" : ""
            }`}
          >
            Everything you need
            <br />
            <span className="font-normal">in one place</span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-on-scroll ${
              isVisible ? "animate-fade-in-up animate-delay-300" : ""
            }`}
          >
            Powerful features designed to streamline your workflow and boost
            productivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div
              className={`flex items-start space-x-6 animate-on-scroll ${
                isVisible ? "animate-fade-in-left animate-delay-400" : ""
              }`}
            >
              <div className="flex-shrink-0 w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Lightning Fast Performance
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Experience blazing fast speeds with our optimized
                  infrastructure that delivers results in milliseconds, not
                  minutes.
                </p>
              </div>
            </div>

            <div
              className={`flex items-start space-x-6 animate-on-scroll ${
                isVisible ? "animate-fade-in-left animate-delay-500" : ""
              }`}
            >
              <div className="flex-shrink-0 w-14 h-14 bg-green-600/20 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Enterprise Security
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Bank-level security with end-to-end encryption ensuring your
                  data remains private and protected at all times.
                </p>
              </div>
            </div>

            <div
              className={`flex items-start space-x-6 animate-on-scroll ${
                isVisible ? "animate-fade-in-left animate-delay-600" : ""
              }`}
            >
              <div className="flex-shrink-0 w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Intuitive Design
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  User-friendly interface designed with simplicity in mind,
                  making complex tasks feel effortless and enjoyable.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`relative animate-on-scroll ${
              isVisible ? "animate-fade-in-right animate-delay-400" : ""
            }`}
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-12 border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-white">
                    Analytics Dashboard
                  </div>
                  <div className="text-sm text-gray-400">Real-time</div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Active Users</span>
                    <span className="text-green-400 font-semibold">+24.5%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full w-3/4"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Performance</span>
                    <span className="text-blue-400 font-semibold">98.7%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full w-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      2.4K
                    </div>
                    <div className="text-gray-400 text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      99.9%
                    </div>
                    <div className="text-gray-400 text-sm">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
