import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pressure Washing Vancouver | Driveway & Awning Cleaning",
  description: "Local pressure washing in North Shore, Point Grey, Kerrisdale & Southlands. Driveways, patios, decks, and commercial awnings. Text for a free quote.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-99WWZX9EYZ"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-99WWZX9EYZ');
        `}} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
