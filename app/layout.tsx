import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./context/Theme";
import Navbar from "@/components/navigation/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevSpace",
  description: "A community driven platform for answering programming questions. Get help,share knowledge, and collaborate with all the people around the world. Explore topics in web development, mobile app development, algorithms,data structures and more.",
icons:{
  icon: "/images/site-logo.svg"
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider
       attribute= "class"
       defaultTheme="system"
       enableSystem 
       disableTransitionOnChange

      >
        <Navbar/>
        {children}
      </ThemeProvider>
      
      </body>
    </html>
  );
}
