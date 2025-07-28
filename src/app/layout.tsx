import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Food Delivery App",
  description: "Everthing deliverable in Minutes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="ovetflow-x-hidden">
        <Navbar />
        <div className="font-noto">
          <Suspense fallback="Loading...">{children}</Suspense>
        </div>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
