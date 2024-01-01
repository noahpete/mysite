import type { Metadata } from "next";
import { ubuntuMono, merriweather } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noah Peters",
  description: "Noah's personal website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
