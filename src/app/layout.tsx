import type { Metadata } from "next";
import { Source_Sans_3, PT_Serif, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

// const sourceSerif = Source_Serif_4({
//   variable: "--font-source-serif",
//   subsets: ["latin"],
// });

const sourceSerif = Source_Serif_4({
    variable: "--font-source-serif",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Probook",
  description: "Dispatching, AI Supercharged",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif.variable} ${sourceSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
