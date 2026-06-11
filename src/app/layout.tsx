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
    "Groupsora - Joining Groups Made Easy",
  description:
    "Discover and join thousand of WhatsApp, Telegram, and Instagram groups. Find groups for trading, earning, study, gaming, jobs, hobbies, and more on Groupsora.",

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

  authors: [{ name: "Groupsora",}],
  creator: "Groupsora",
  publisher: "Groupsora",
  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title:
      "Groupsora",
    description:
      "Discover and join thousand of WhatsApp, Telegram, and Instagram groups. Find groups for trading, earning, study, gaming, jobs, hobbies, and more on Groupsora.",
    url: "https://groupsora.vercel.app",
    siteName: "Groupsora",
    locale: "en-US",
    type: "website",
    images: {
      url: "/icon.png",
      width: 512,
      height: 512,
      alt: "Groupsora Logo",
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Groupsora",
              url: "https://groupsora.vercel.app",
              logo: "https://groupsora.vercel.app/icon.png",
              description: "Discover and join thousand of WhatsApp, Telegram, and Instagram groups. Find groups for trading, earning, study, gaming, jobs, hobbies, and more on Groupsora.",
              sameAs: [
                "https://groupsora.vercel.app"
              ]
            })
          }}
        />
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

