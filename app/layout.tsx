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
  title: "Frankie’s Berwick | Burgers, Coffee & Takeaway",
  description:
    "Stacked burgers, café favourites and coffee at Frankie’s Berwick, Eden Rise Village. Call ahead for easy takeaway.",
  openGraph: {
    title: "Frankie’s Berwick",
    description: "Big bites. Good coffee. Zero fuss. Café, burgers and takeaway in Berwick.",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Frankie’s Berwick, big bites, good coffee, zero fuss",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frankie’s Berwick",
    description: "Big bites. Good coffee. Zero fuss.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
