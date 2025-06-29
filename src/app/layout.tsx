import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minh Le - Software Engineer",
  description: "Computer Science student at NJIT with experience in full-stack development, machine learning, and high-performance computing. Passionate about building scalable solutions and innovative technologies.",
  keywords: ["Minh Le", "Software Engineer", "Computer Science", "NJIT", "Full Stack Developer", "React", "Node.js", "Python", "TypeScript"],
  authors: [{ name: "Minh Le" }],
  creator: "Minh Le",
  openGraph: {
    title: "Minh Le - Software Engineer",
    description: "Computer Science student at NJIT with experience in full-stack development, machine learning, and high-performance computing.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
