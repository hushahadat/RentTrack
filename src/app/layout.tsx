"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppDataProvider } from "@/context/ApplicationContext";
import NavBar from "@/components/Navbar/NavBar";
import { useEffect, useMemo, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authuser = useMemo(() => {
    if (typeof window !== "undefined") {
      const t = localStorage.getItem("__user__");
      if (t && t != undefined) {
        return JSON.parse(t);
      }
    }
    return null;
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppDataProvider auth={authuser}>
          <NavBar />
          {children}
        </AppDataProvider>
      </body>
    </html>
  );
}
