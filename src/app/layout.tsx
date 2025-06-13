import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Allen Tiempo",
  description: "A showcase of my work and skills",
  // openGraph: {
  //   title: "My Portfolio",
  //   description: "A showcase of my work and skills",
  //   url: "https://myportfolio.com",
  //   siteName: "My Portfolio",
  //   images: [
  //     {
  //       url: "https://myportfolio.com/og-image.png",
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
