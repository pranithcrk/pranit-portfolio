import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Pranit Patil",
  description: "Risk Analytics Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex justify-center px-5 py-12 sm:py-16">
        <div className="w-full max-w-[520px]">
          <Header />
          <main>{children}</main>
          <footer className="mt-20 pt-5 border-t border-[var(--color-border)] text-[var(--color-text-muted)] text-[11px]">
            &copy; {new Date().getFullYear()}
          </footer>
        </div>
      </body>
    </html>
  );
}
