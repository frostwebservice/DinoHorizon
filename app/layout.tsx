import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/contexts/ToastContext";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tappy Dino 🦕",
  description: "Game by Dino Horizon Games"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This function defines the root layout of the application.
  // It includes the HTML structure, metadata, and a ToastProvider for toast notifications.
  return (
    <html lang="en">
      <head>
        <Script id="viewport-script" strategy="beforeInteractive">
          {`
            const viewport = document.createElement('meta');
            viewport.name = "viewport";
            viewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
            document.getElementsByTagName('head')[0].appendChild(viewport);
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
