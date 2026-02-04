import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quicksilver Labs",
  description: "Engineering AI systems that hold up under pressure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
