"use client";

import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function TestimonialsSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center px-6 py-3 rounded-full border border-gray-700 text-gray-300 text-sm mb-12 animate-on-scroll ${
              isVisible ? "animate-slide-in-down" : ""
            }`}
          >
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            CUSTOMER STORIES
          </div>
          <h2
            className={`text-3xl md:text-5xl font-light text-white mb-8 leading-tight animate-on-scroll ${
              isVisible ? "animate-fade-in-up animate-delay-200" : ""
            }`}
          >
            Trusted by teams
            <br />
            <span className="font-normal">worldwide</span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-on-scroll ${
              isVisible ? "animate-fade-in-up animate-delay-300" : ""
            }`}
          >
            See how industry leaders are transforming their workflows with our
            platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm p-10 rounded-3xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-lg text-gray-300 mb-8 leading-relaxed">
              "This platform completely transformed how our team collaborates.
              The scheduling features alone saved us 10+ hours per week. It's
              intuitive, powerful, and exactly what we needed."
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">S</span>
              </div>
              <div>
                <div className="font-semibold text-white">Sarah Chen</div>
                <div className="text-gray-400 text-sm">
                  VP of Operations, TechFlow
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm p-10 rounded-3xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-lg text-gray-300 mb-8 leading-relaxed">
              "The AI-powered features are game-changing. Our productivity
              increased by 40% in the first month. The integration with our
              existing tools was seamless and effortless."
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">M</span>
              </div>
              <div>
                <div className="font-semibold text-white">Marcus Rodriguez</div>
                <div className="text-gray-400 text-sm">CTO, InnovateLab</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm p-10 rounded-3xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-lg text-gray-300 mb-8 leading-relaxed">
              "Outstanding customer support and robust features. We've scaled
              from 50 to 500 team members seamlessly. The platform grows with us
              without any performance issues."
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">E</span>
              </div>
              <div>
                <div className="font-semibold text-white">Emily Watson</div>
                <div className="text-gray-400 text-sm">
                  Head of HR, ScaleUp Inc
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light text-white">
                Join <span className="font-normal">10,000+</span> happy
                customers
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Companies of all sizes trust our platform to streamline their
                operations and boost team productivity. From startups to Fortune
                500 companies, we deliver results that matter.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  10,000+
                </div>
                <div className="text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-green-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-300">30-day free trial</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-300">No setup fees</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-300">Cancel anytime</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-10 border border-gray-700">
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Customer Satisfaction
                  </h4>
                  <p className="text-gray-400">Real-time feedback metrics</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Ease of Use</span>
                    <span className="text-green-400 font-semibold">4.9/5</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full"
                      style={{ width: "98%" }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Feature Richness</span>
                    <span className="text-blue-400 font-semibold">4.8/5</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-cyan-500 h-3 rounded-full"
                      style={{ width: "96%" }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Customer Support</span>
                    <span className="text-purple-400 font-semibold">4.9/5</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-400 to-pink-500 h-3 rounded-full"
                      style={{ width: "98%" }}
                    ></div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-3xl font-bold text-white">4.9</div>
                    <div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-gray-400 text-sm">
                        Based on 2,847 reviews
                      </div>
                    </div>
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
