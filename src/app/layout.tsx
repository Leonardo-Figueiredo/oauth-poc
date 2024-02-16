import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Providers } from './providers';
import { getServerAuth } from './hooks/auth.hook';
import Script from 'next/script';
import Head from 'next/head';

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
  //Importe o iugu.js pela tag de script dentro do index.html
  //Typescript const newWindow = window as any; const Iugu = newWindow.Iugu;
  return (
    <html lang="en">
      {/* <Head>
      </Head> */}
      <body className={inter.className}>
        <Providers session={session!}>
          {children}
        </Providers>

        <Script strategy='beforeInteractive' src="https://js.iugu.com/v2"></Script>
      </body>
    </html>
  );
}
