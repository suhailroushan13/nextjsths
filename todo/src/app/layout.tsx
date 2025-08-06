import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My App",
  description:
    "A simple TODO app built with Next.js, TypeScript, and Tailwind CSS",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "My App",
    description: "A simple TODO app built with Next.js",
    url: "https://suhailroushan.com",
    siteName: "My App",
    images: [
      {
        url: "https://ghibli.pics/uploads/0xsuhailroushan-1743099846947-733025794.png",
        width: 1200,
        height: 630,
        alt: "My App OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My App",
    description: "A simple TODO app built with Next.js",
    images: [
      "https://ghibli.pics/uploads/0xsuhailroushan-1743099846947-733025794.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
