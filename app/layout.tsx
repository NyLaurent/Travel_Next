import type { Metadata } from "next";
import Navbar from '../components/Navbar'
import Footer from "@/components/Footer";

import "./globals.css";


export const metadata: Metadata = {
  title: "Travel app",
  description: "Travel UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
