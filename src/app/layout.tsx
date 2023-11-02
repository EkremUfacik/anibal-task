import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Providers } from "@/providers/Providers";
import HomeNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EuCoffee",
  description: "EuCoffee Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <HomeNavbar />
          <main className="min-h-screen max-w-8xl mx-auto ">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
