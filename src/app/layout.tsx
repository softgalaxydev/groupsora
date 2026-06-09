import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 
    "GroupSora - WhatsApp, Telegram & Instagram Group Directory",
  description:
    "Discover and join thousand of WhatsApp, Telegram, and Instagram groups. Find groups for trading, study, gaming, jobs, hobbies, and more on GroupSora.",

    // Keywords yha lgaye for best search result

  keywords: [
    "WhatsApp groups",
    "Telegram groups",
    "Instagram groups",
    "Group links",
    "Trading groups",
    "Study groups",
    "Gaming groups",
    "Jobs groups",
    "Business groups",
  ],

  authors: [{ name: "GroupSora",}],
  creator: "GroupSora",
  publisher: "GroupSora",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "GroupSora",
    description:
      "Discover and join thousand of WhatsApp, Telegram, and Instagram groups. Find groups for trading, study, gaming, jobs, hobbies, and more on GroupSora.",
    url: "https://groupsora.vercel.app",
    siteName: "GroupSora",
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="EEBEe2MypCHyqhMoTdnmeVCalmHD8yZjAy6wbKw30XQ" />
      </head>
      <body className="min-h-full flex flex-col">
        <Toaster/>
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
} 
