import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pressure Washing Vancouver | Driveway & Awning Cleaning",
  description: "Local pressure washing in North Shore, Point Grey, Kerrisdale & Southlands. Driveways, patios, decks, and commercial awnings. Text for a free quote.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
