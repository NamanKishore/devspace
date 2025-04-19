import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./context/Theme";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

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

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  => {
   const session = await auth() 
  return (
    <html lang="en" suppressHydrationWarning>
    <SessionProvider session={session}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider
       attribute= "class"
       defaultTheme="system"
       enableSystem 
       disableTransitionOnChange

      >
       
        {children}
      </ThemeProvider>
      <Toaster/>
      </body>
    </SessionProvider>
    </html>
  );
}

export default RootLayout
