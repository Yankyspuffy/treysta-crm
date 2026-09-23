import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import RootNavbar from "@/components/RootNavbar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Treysta AI Sales Operating System",
  description: "A live sales management and lead operating system enhanced by AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} antialiased h-full`}>
      <body className="min-h-full flex flex-col bg-warm-cream font-sans text-deep-charcoal">
        <RootNavbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
