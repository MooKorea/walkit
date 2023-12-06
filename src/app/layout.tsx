import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Navigation from "@/components/navigation/Navigation";

export const metadata: Metadata = {
  title: "Walkit",
  description: "Walkit — Your personal tour guide app!",
  applicationName: "Walkit",
  appleWebApp: true,
  formatDetection: {telephone: false},
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="fixed w-full flex justify-center z-20">
          <div className="relative w-[23.438rem] h-[2.75rem]">
            <Image priority fill sizes="23.438rem" src="/Status-Bar.png" alt="phone status bar" />
          </div>
        </div>
        {children}
        <Navigation />
      </body>
    </html>
  );
}
