"use client";

import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function SchedulingSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full border border-gray-700 text-gray-300 text-sm">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
              SMART SCHEDULING
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
                Intelligent
                <br />
                <span className="font-normal">scheduling</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Automate your calendar management with AI-powered scheduling
                that adapts to your preferences and optimizes your day.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Auto-scheduling
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Let AI find the perfect time slots for your meetings based
                    on everyone's availability and preferences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Team coordination
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Seamlessly coordinate with team members across different
                    time zones and working schedules.
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
                      d="M15 17h5l-5 5v-5zM4 19V5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H9l-5 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Smart reminders
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Get intelligent notifications and reminders that help you
                    stay on top of your schedule and commitments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-10 border border-gray-700">
              <div className="space-y-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white">
                    Schedule Overview
                  </h3>
                  <div className="text-sm text-gray-400">Today, Dec 15</div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20">
                    <div className="w-3 h-12 bg-purple-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-white font-medium">Team Standup</div>
                      <div className="text-gray-400 text-sm">
                        9:00 AM - 9:30 AM
                      </div>
                    </div>
                    <div className="text-purple-400 text-sm">30m</div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                    <div className="w-3 h-12 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-white font-medium">
                        Product Review
                      </div>
                      <div className="text-gray-400 text-sm">
                        11:00 AM - 12:00 PM
                      </div>
                    </div>
                    <div className="text-blue-400 text-sm">1h</div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-green-500/10 rounded-2xl border border-green-500/20">
                    <div className="w-3 h-12 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-white font-medium">
                        Client Meeting
                      </div>
                      <div className="text-gray-400 text-sm">
                        2:00 PM - 3:00 PM
                      </div>
                    </div>
                    <div className="text-green-400 text-sm">1h</div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20">
                    <div className="w-3 h-12 bg-orange-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-white font-medium">
                        Strategy Session
                      </div>
                      <div className="text-gray-400 text-sm">
                        4:00 PM - 5:30 PM
                      </div>
                    </div>
                    <div className="text-orange-400 text-sm">1.5h</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      5.5h
                    </div>
                    <div className="text-gray-400 text-sm">
                      Total scheduled time
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
