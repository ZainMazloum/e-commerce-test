import type { Metadata } from "next";
import "./index.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "LUMINA",
  description: "Curated essentials for the modern minimalist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 p-0 min-h-screen font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}