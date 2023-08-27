import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head"

export const metadata: Metadata = {
  title: "Wheelz",
  description: "Discover latest Cars ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" sizes="480x480" href="/static/favicon.ico" />
      </Head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
