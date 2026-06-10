import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Impactism — A Citizen-Powered Movement for the Age of AI",
  description: "As artificial intelligence reshapes the world, humanity faces a choice. Impactism is a citizen-powered movement built to ensure technology serves humanity. Powered by Oulta.",
  metadataBase: new URL("https://impactism.oulta.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Impactism — A Citizen-Powered Movement for the Age of AI",
    description: "As artificial intelligence reshapes the world, humanity faces a choice. Impactism is a citizen-powered movement built to ensure technology serves humanity.",
    url: "https://impactism.oulta.in",
    siteName: "Impactism",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impactism — A Citizen-Powered Movement for the Age of AI",
    description: "As artificial intelligence reshapes the world, humanity faces a choice. Impactism is a citizen-powered movement built to ensure technology serves humanity.",
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
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground antialiased selection:bg-accent-purple/30 selection:text-accent-purple-light">
        {children}
      </body>
    </html>
  );
}
