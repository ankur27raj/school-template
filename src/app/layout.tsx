import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.scss";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { schoolConfig } from "@/config/school";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${schoolConfig.name} | Leading Private Education`,
    template: `%s | ${schoolConfig.shortName}`,
  },
  description: schoolConfig.tagline,
  metadataBase: new URL("https://apexinternational.edu"),
  openGraph: {
    title: schoolConfig.name,
    description: schoolConfig.tagline,
    siteName: schoolConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: schoolConfig.name,
    description: schoolConfig.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
