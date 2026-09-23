import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanay — Web · AI · Automation",
  description:
    "Web development, AI integration and business automation for products and workflows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
