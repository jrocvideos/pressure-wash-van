import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pressure Washing Vancouver | Driveway & Awning Cleaning",
  description: "Local pressure washing in North Shore, Point Grey, Kerrisdale & Southlands. Driveways, patios, decks, and commercial awnings. Text for a free quote.",
  keywords: "pressure washing Vancouver, driveway cleaning Vancouver, awning cleaning, patio cleaning, boat cleaning Vancouver, power washing North Shore",
  openGraph: {
    title: "Pressure Washing Vancouver | We Wash Everything",
    description: "Driveways, patios, decks, awnings, boats. One text. Same-day quote. Serving Vancouver, Richmond, North Shore & White Rock.",
    url: "https://pressure-wash-van.vercel.app",
    siteName: "Pressure Wash Vancouver",
    type: "website",
  },
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
      <body className="antialiased" style={{ background: "#0a0a0a", margin: 0 }}>{children}</body>
    </html>
  );
}
