import type { Metadata } from "next";
import { Space_Grotesk, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Axiod Robotics — Autonomous Intelligence for Fragile Security Environments",
  description:
    "Axiod Robotics deploys AI-powered surveillance, threat prediction, and real-time community alert infrastructure into regions where conventional security has failed. Built for Zamfara. Built for Bauchi.",
  keywords: [
    "autonomous security",
    "AI surveillance",
    "drone fleet",
    "threat detection",
    "Nigeria security",
    "robotics",
  ],
  openGraph: {
    title: "Axiod Robotics — Intelligence Where It Matters Most",
    description:
      "AI-powered autonomous security infrastructure for fragile environments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning style={{ minHeight: "100vh", fontFamily: "var(--font-dm-sans), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
