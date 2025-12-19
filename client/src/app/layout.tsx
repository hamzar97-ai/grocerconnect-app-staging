import type { Metadata } from "next";
import "./globals.css";

import { Fredoka } from "next/font/google";

import ThemeRegistry from "@/components/ThemeRegistry";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "GrocerConnect",
  description: "GrocerConnect frontend application",
};

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-fredoka",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fredoka.variable}>
        <ThemeRegistry>
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
