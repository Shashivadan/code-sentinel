import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "@codesentinel/ui/globals.css";
import { Pacifico } from "next/font/google";
import { Footer } from "../components/landing";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code Sentinels",
  description:
    "AI code reviewer that helps developers improve their code quality and efficiency.",
  metadataBase: new URL("https://codesentinals.example.com"),
  applicationName: "Code Sentinels",
  authors: [{ name: "shashivadan" }],
  keywords: ["AI", "Code Review", "Developer Tools", "Coding Practice"],
  creator: "Code Sentinels Team",
  publisher: "Code Sentinels Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://codesentinals.example.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codesentinals.example.com",
    siteName: "Code Sentinels",
    title: "Code Sentinels",
    description:
      "AI code reviewer that helps developers improve their code quality and efficiency.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code Sentinels - AI Code Reviewer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shashivadan99",
    creator: "@shashivadan99",
    title: "Code Sentinels",
    description:
      "AI code reviewer that helps developers improve their code quality and efficiency.",
    images: [
      {
        url: "/og-image.png",
        alt: "Code Sentinels - AI Code Reviewer",
      },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "developer tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
