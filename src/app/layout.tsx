import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Providers } from './providers';
import { getServerAuth } from './hooks/auth.hook';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tyche",
  description: "Tyche OAuth POC",
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerAuth()

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers session={session!}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
