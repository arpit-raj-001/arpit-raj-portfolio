import type { Metadata } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arpit Raj | Portfolio",
  description:
    "Full Stack Developer & Interaction Designer. Architecting high-performance ecosystems where precision engineering meets cinematic user experience.",
  keywords: ["Arpit Raj", "Portfolio", "Full Stack Developer", "React", "Next.js", "Python"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${spaceGrotesk.variable} dark antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
