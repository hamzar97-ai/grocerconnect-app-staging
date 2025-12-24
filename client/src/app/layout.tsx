import type { Metadata } from "next";
import "./globals.css";

import { Fredoka, Passion_One } from "next/font/google";

import ThemeRegistry from "@/components/ThemeRegistry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "../components/PageLoader";

export const metadata: Metadata = {
  title: "GrocerConnect",
  description: "GrocerConnect frontend application",
};

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-fredoka",
});

const passion = Passion_One({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-passion",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} ${passion.variable}`}>
        <ThemeRegistry>
          <PageLoader />

          <Header />

          <main>{children}</main>

          <Footer />
          <ScrollToTop />
        </ThemeRegistry>
      </body>
    </html>
  );
}
