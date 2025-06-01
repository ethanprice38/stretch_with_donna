import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stretch with Donna",
  description: "Stretch with Donna: In-Home Maryland Stretchologist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-background antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
