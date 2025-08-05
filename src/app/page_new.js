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

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-700 text-gray-300 text-sm mb-8">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              PLATFORM SOLUTIONS
            </div>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
              Solutions for your
              <br />
              <span className="font-normal">team management</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-purple-400"
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
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Check Together
                  </h3>
                  <span className="text-sm text-purple-400 bg-purple-400/10 px-2 py-1 rounded">
                    UNDERSTAND
                  </span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Collaborate seamlessly with your team members and stay
                synchronized on all projects.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-blue-400"
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
                  <h3 className="text-xl font-semibold text-white mb-2">
                    AI - Powered
                  </h3>
                  <span className="text-sm text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                    SMART
                  </span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Leverage artificial intelligence to automate workflows and
                enhance productivity.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-green-400"
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
                  <h3 className="text-xl font-semibold text-white mb-2">
                    All Round Supported
                  </h3>
                  <span className="text-sm text-green-400 bg-green-400/10 px-2 py-1 rounded">
                    SUPPORT
                  </span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Get comprehensive support across all platforms and devices with
                24/7 assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-700 text-gray-300 text-sm mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              EXPERIENCE THE DIFFERENCE
            </div>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
              Crafting web experience
              <br />
              <span className="font-normal">and visual assets</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Create stunning digital experiences with our comprehensive suite
              of design and development tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Task Management
                  </h3>
                </div>
                <p className="text-gray-400">
                  Organize and track your project tasks with intuitive
                  drag-and-drop interface.
                </p>
              </div>

              <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Chat Management
                  </h3>
                </div>
                <p className="text-gray-400">
                  Communicate effectively with built-in messaging and
                  collaboration tools.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    File Sharing: AI Feature
                  </h3>
                </div>
                <p className="text-gray-400">
                  Share and collaborate on files with AI-powered organization
                  and search.
                </p>
              </div>

              <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Team Management
                  </h3>
                </div>
                <p className="text-gray-400">
                  Manage team roles, permissions, and collaboration workflows
                  seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-700 text-gray-300 text-sm mb-8">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                SMART SCHEDULING
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                A nice & simple
                <br />
                <span className="font-normal">scheduling</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Streamline your team's schedule with our intelligent scheduling
                system that automatically coordinates meetings and deadlines.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Automatic conflict detection and resolution
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Smart time zone coordination
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Integration with calendar platforms
                </li>
              </ul>
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-black hover:bg-gray-100"
              >
                Schedule Meeting
              </Button>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-white">Morning Learning Things</span>
                  </div>
                  <span className="text-gray-400 text-sm">
                    09:00 - 10:30 AM
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-white">Team Standup</span>
                  </div>
                  <span className="text-gray-400 text-sm">
                    10:30 - 11:00 AM
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-white">Morning Learning Things</span>
                  </div>
                  <span className="text-gray-400 text-sm">
                    02:00 - 03:30 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-700 text-gray-300 text-sm mb-8">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              SEAMLESS INTEGRATION
            </div>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
              Integration with your
              <br />
              <span className="font-normal">trusted software</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Integration badges - simplified as colored pills */}
            <div className="bg-gray-800 px-6 py-3 rounded-full border border-gray-700">
              <span className="text-gray-300 font-medium">Slack</span>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-full border border-gray-700">
              <span className="text-gray-300 font-medium">Figma</span>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-full border border-gray-700">
              <span className="text-gray-300 font-medium">Notion</span>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-full border border-gray-700">
              <span className="text-gray-300 font-medium">GitHub</span>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-full border border-gray-700">
              <span className="text-gray-300 font-medium">Trello</span>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-full border border-gray-700">
              <span className="text-gray-300 font-medium">Asana</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-700 text-gray-300 text-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              CLIENT TESTIMONIALS
            </div>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
              What others are saying
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="text-white font-semibold">David Johnson</h4>
                  <p className="text-gray-400 text-sm">
                    Product Manager at TechCorp
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-lg italic leading-relaxed">
                "An easy-to-understand summary of your true course feeling above
                current thinking methods."
              </p>
              <div className="flex items-center mt-6">
                <span className="text-2xl font-bold text-white mr-2">96%</span>
                <span className="text-gray-400">satisfaction rate</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full mr-3"></div>
                  <div>
                    <h5 className="text-white font-medium">Sarah Chen</h5>
                    <p className="text-gray-400 text-xs">Designer</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  "The platform revolutionized our workflow and increased
                  productivity by 300%."
                </p>
              </div>

              <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full mr-3"></div>
                  <div>
                    <h5 className="text-white font-medium">Mike Rodriguez</h5>
                    <p className="text-gray-400 text-xs">Team Lead</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  "Seamless integration with our existing tools made the
                  transition effortless."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-700 text-gray-300 text-sm mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
            GET STARTED TODAY
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
            Ready to explore
            <br />
            <span className="font-normal">a new dimension?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join thousands of teams already using our platform to transform
            their workflow and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8 py-4"
            >
              Start Free Trial
            </Button>
            <button className="px-8 py-4 text-lg font-medium text-gray-300 hover:text-white transition-colors border border-gray-700 rounded-lg">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
