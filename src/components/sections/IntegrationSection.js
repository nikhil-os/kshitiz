"use client";

import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function IntegrationSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-gray-700 text-gray-300 text-sm mb-12">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
            SEAMLESS INTEGRATION
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-8 leading-tight">
            Connect with your
            <br />
            <span className="font-normal">favorite tools</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Integrate effortlessly with 100+ popular applications and streamline
            your workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Integration Cards */}
          <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-[#FF6B6B] rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium mb-1">Slack</h3>
              <p className="text-gray-400 text-sm">Messaging</p>
            </div>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-[#4285F4] rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium mb-1">Google</h3>
              <p className="text-gray-400 text-sm">Workspace</p>
            </div>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-[#0078D4] rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium mb-1">Microsoft</h3>
              <p className="text-gray-400 text-sm">Office 365</p>
            </div>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-[#FF9500] rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium mb-1">Notion</h3>
              <p className="text-gray-400 text-sm">Notes</p>
            </div>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-[#6B46C1] rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium mb-1">Figma</h3>
              <p className="text-gray-400 text-sm">Design</p>
            </div>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-[#0052CC] rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium mb-1">Jira</h3>
              <p className="text-gray-400 text-sm">Project Mgmt</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light text-white">
                One-click <span className="font-normal">integrations</span>
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Connect your existing tools in seconds with our pre-built
                integrations. No technical expertise required - just
                authenticate and start working.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-600/20 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Real-time Sync
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    Keep all your data synchronized across platforms with
                    instant updates and bi-directional communication.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Secure Authentication
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    Enterprise-grade OAuth security ensures your credentials
                    remain protected throughout the integration process.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
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
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Custom Workflows
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    Build custom automation workflows that trigger actions
                    across multiple platforms based on your specific needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-10 border border-gray-700">
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Integration Hub
                  </h4>
                  <p className="text-gray-400">Manage all your connections</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-white font-medium">
                        Slack Workspace
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">Connected</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-white font-medium">
                        Google Calendar
                      </span>
                    </div>
                    <span className="text-blue-400 text-sm">Connected</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl border border-gray-600">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-gray-300">Microsoft Teams</span>
                    </div>
                    <button className="text-cyan-400 text-sm hover:text-cyan-300">
                      Connect
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl border border-gray-600">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-gray-300">Notion Workspace</span>
                    </div>
                    <button className="text-cyan-400 text-sm hover:text-cyan-300">
                      Connect
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-700 text-center">
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium">
                    Browse all integrations →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
