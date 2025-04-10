import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from './components/ScrollToTop';
import FloatingContactIcons from './components/FloatingContactIcons';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Falcon Tyre Trading",
  description: "Your trusted partner in tire and wheel solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
        <FloatingContactIcons />
      </body>
    </html>
  );
}
