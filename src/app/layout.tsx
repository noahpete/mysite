import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Noah Peters",
  description: "Noah Peters's personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={merriweather.className}>{children}</body>
    </html>
  );
}
