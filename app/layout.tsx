// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Hack Rebels | Smart India Hackathon",
  description: "Official page for our Smart India Hackathon shortlisted team.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`
          ${grotesk.variable}
          ${jetbrains.variable}
          bg-black
          text-gray-200
          antialiased
          min-h-screen
        `}
      >
        {children}
      </body>
    </html>
  );
}
