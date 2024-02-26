import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TrpcProvider from "./_trpc/TrpcProvider";
import AuthProvider from "./_context/AuthProvider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <TrpcProvider>
            <header className="bg-gray-700 p-4 pl-20 mt-3">
              <h1 className="text-gray-100">Javier Bravo Zapico</h1>
              <h2 className="text-gray-100">Frontend Developer</h2> 
              <nav>
              <Link href='/'><li className="text-gray-100">Home -</li></Link>
                <Link href='/latest'><li className="text-gray-100">Latest Project -</li></Link>
                <li className="text-gray-100">Contact</li> 
              </nav> 
            </header>
            {children}
            </TrpcProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
