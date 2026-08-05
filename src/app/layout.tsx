import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "MindLens Pro - Hypnotherapy & Mentalism Mastery",
  description: "Complete professional training in hypnotherapy, mentalism, body language, Ericksonian techniques, and psychological mastery. Become a skilled hypnotherapist and mentalist.",
  icons: {
    icon: "/images/icon-192.png",
    apple: "/images/icon-180.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0f0f14] text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}
