
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import FloatingDock from "./components/FloatingDock";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sankar Dev S | AI Researcher & Full-Stack Engineer",
  description: "Portfolio of Sankar Dev S, specializing in integrating LLMs, NLP frameworks, and scalable web applications.",
  keywords: ["Sankar Dev S", "AI Researcher", "Full Stack Engineer", "NLP", "React", "Next.js", "Portfolio"],
};

import CustomCursor from "./components/CustomCursor";

import ParticlesBackground from "./components/ParticlesBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground selection:bg-primary/30 selection:text-white`}
      >
        <ParticlesBackground />
        <CustomCursor />
        <FloatingDock />
        {children}
      </body>
    </html>
  );
}
