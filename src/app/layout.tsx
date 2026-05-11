

import "./globals.css";
import { Header } from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollToTop from "@/app/components/ScrollToTop/ScrollToTop";

export const metadata = {
  title: "Masoud Nemati | Developer Portfolio",
  description: "Personal portfolio website built with Next.js",
  keywords: ["developer", "react", "nextjs", "portfolio"],
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Masoud Nemati",
    description: "Developer Portfolio Website",
    url: "https://your-domain.com",
    siteName: "Masoud Nemati Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/logo.svg",
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <Header />

        <main>{children}</main>

        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}