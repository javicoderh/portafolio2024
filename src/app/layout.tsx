import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import TrpcProvider from "./_trpc/TrpcProvider";
import AuthProvider from "./_context/AuthProvider";
import goku from '../../public/goku.png';
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Javier Bravo · Fullstack Developer",
  description:
    "Personal portfolio — Next.js, React, Rust, PostgreSQL and the T3 stack. Built by Javier Bravo Zapico from Chile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>
        <AuthProvider>
          <TrpcProvider>
            <header className="hidden md:block site-header">
              <div className="site-header__inner">
                <div>
                  <h1 className="site-title">Javier Bravo Zapico</h1>
                  <h2 className="site-subtitle">Fullstack Developer</h2>
                </div>
                <nav className="site-nav">
                  <Link href="/"><li>Home</li></Link>
                  <Link href="/latest"><li>Latest Project</li></Link>
                  <Link href="/contact"><li>Contact</li></Link>
                </nav>
              </div>
            </header>
            <header className="block md:hidden site-header site-header--mobile">
              <div className="site-header__inner">
                <div>
                  <h1 className="site-title">Javier Bravo Zapico</h1>
                  <h2 className="site-subtitle">Fullstack Developer</h2>
                </div>
                <nav className="site-nav site-nav--mobile">
                  <Link href="/"><li>Home</li></Link>
                  <Link href="/latest"><li>Latest</li></Link>
                  <Link href="/contact"><li>Contact</li></Link>
                </nav>
              </div>
            </header>
            {children}
            <div className="goku-fixed" aria-hidden="true">
              <Image className="goku" src={goku} width={260} height={260} alt="" priority />
            </div>
            <footer className="site-footer">
              <h3 className="footer-text">Sleep, code, eat…</h3>
            </footer>
          </TrpcProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
