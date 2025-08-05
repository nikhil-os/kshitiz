export default function SolutionsSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-gray-700 text-gray-300 text-sm mb-12">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
            PLATFORM SOLUTIONS
          </div>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
            Solutions for your
            <br />
            <span className="font-normal">team management</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools designed to enhance collaboration and productivity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Check Together
                </h3>
                <span className="text-sm text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                  UNDERSTAND
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                Collaborate seamlessly with your team members and stay
                synchronized on all projects with real-time updates.
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  AI - Powered
                </h3>
                <span className="text-sm text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                  SMART
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                Leverage artificial intelligence to automate workflows and
                enhance productivity with intelligent insights.
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center">
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
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  All Round Supported
                </h3>
                <span className="text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                  SUPPORT
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                Get comprehensive support across all platforms and devices with
                24/7 assistance and dedicated help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
