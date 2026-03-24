
import type { Metadata } from "next";
import { Outfit, Kanit, JetBrains_Mono } from "next/font/google";
import FloatingDock from "./components/FloatingDock";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const kanit = Kanit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sankar Dev S | AI/ML Engineer",
  description: "Portfolio of Sankar Dev S — AI/ML Engineer specialising in LLMs, NLP, and multimodal AI. Open to opportunities in Germany.",
  keywords: ["Sankar Dev S", "AI Engineer", "ML Engineer", "NLP", "LangChain", "PyTorch", "Portfolio", "Germany"],
};

import CustomCursor from "./components/CustomCursor";

import NeuralCanvas from "./components/NeuralCanvas";


import DesktopAlert from "./components/DesktopAlert";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${kanit.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground selection:bg-primary/30 selection:text-white`}
      >
        <DesktopAlert />
        <NeuralCanvas />
        <CustomCursor />
        <FloatingDock />
        {children}
      </body>
    </html>
  );
}

