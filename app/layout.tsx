import type { Metadata } from "next";
import { Lilita_One, Nunito_Sans } from "next/font/google";
import "./globals.css";

const display = Lilita_One({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const body = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frankies-berwick.thanhphucdangdo.chatgpt.site"),
  title: "Frankie’s Berwick | Cafe, Burgers & Takeaway",
  description:
    "Coffee, stacked burgers, loaded fries and easy takeaway at Frankie’s Berwick, Eden Rise Village.",
  openGraph: {
    title: "Frankie’s Berwick",
    description: "Big flavour. Good mood. Cafe, burgers and takeaway in Berwick.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
