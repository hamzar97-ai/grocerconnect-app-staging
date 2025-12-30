import type { Metadata } from "next";
import "./globals.css";

import { Fredoka, Passion_One, Plus_Jakarta_Sans } from "next/font/google";
import ThemeRegistry from "@/components/ThemeRegistry";
import PageLoader from "@/components/PageLoader";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ScrollToTop from "@/components/ScrollToTop";

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

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${passion.variable} ${jakarta.variable}`}
        style={{ overflowX: "hidden" }}
      >
        <ThemeRegistry>
          <SmoothScrollProvider>
            <PageLoader />
            <ScrollToTop />

            {/* 🔑 SINGLE LENIS SCROLL FLOW */}
            <div id="lenis-scroll-content">
              {children}

              {/* 🔑 SCROLL BUFFER (INSIDE FLOW) */}
              <div
                aria-hidden
                style={{
                  height: "0vh",
                  pointerEvents: "none",
                }}
              />
            </div>
          </SmoothScrollProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
