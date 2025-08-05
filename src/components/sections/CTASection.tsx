import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-16">
          <div className="space-y-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full border border-gray-700 text-gray-300 text-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2"></span>
              GET STARTED TODAY
            </div>

            <div className="space-y-8">
              <h2 className="text-5xl md:text-8xl font-light text-white leading-tight">
                Ready to transform
                <br />
                <span className="font-normal bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  your workflow?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Join thousands of teams already using our platform to streamline
                operations, boost productivity, and achieve their goals faster
                than ever before.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-12 py-4 text-lg font-semibold shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 px-12 py-4 text-lg font-semibold"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-12 pt-16">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  30-Day Free Trial
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Experience all premium features with no credit card required.
                  Cancel anytime during the trial period.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  24/7 Expert Support
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Get help whenever you need it with our dedicated support team
                  available around the clock.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-purple-400"
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
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Instant Setup
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Get up and running in minutes with our streamlined onboarding
                  process and intuitive interface.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
