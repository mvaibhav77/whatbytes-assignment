import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidenav from "@/components/Sidenav";
import { FormProvider } from "@/context/FormContext";

const roboto = Roboto({
  weight: ["300", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WhatBytes Assignment",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <FormProvider>
        <body
          className={`${roboto.className} antialiased h-[100dvh] overflow-hidden`}
        >
          <Header />
          <main className="flex flex-row md:gap-10 gap-4">
            <Sidenav />
            {children}
          </main>
        </body>
      </FormProvider>
    </html>
  );
}
