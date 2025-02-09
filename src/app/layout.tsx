import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const lato = Lato({
	variable: "--font-lato",
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "Noah Peters",
	description: "Noah's personal website.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(lato.variable, "antialiased max-w-3xl mx-auto p-4")}>
				{children}
			</body>
		</html>
	);
}
