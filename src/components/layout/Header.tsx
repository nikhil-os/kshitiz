import React from "react";
import Link from "next/link";
import Button from "../ui/Button";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "SaaSify" }) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
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
              <span className="text-xl font-bold text-white">{title}</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Sign In
            </Link>
            <Button
              variant="primary"
              size="sm"
              className="bg-white text-black hover:bg-gray-100"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
