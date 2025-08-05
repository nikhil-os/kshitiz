import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SaaSify - Grow Your Business with Our SaaS Platform",
  description:
    "Transform your workflow with our cutting-edge SaaS platform. Streamline operations, boost productivity, and scale your business effortlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header title="SaaSify" />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
