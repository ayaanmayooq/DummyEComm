import "./globals.css";
import type { Metadata } from "next";

import { fontMono, fontSans, inter } from "@/lib/fonts";
import {cn} from "@/lib/utils"
import { siteConfig } from "@/config/site";

import { SiteBG } from "@/components/site-background"
import { SiteFooter } from "@/components/site-footer"
import { Navbar } from "@/components/navbar"

import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico'
  }
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head/>
        <body className={cn("min-h-screen bg-background antialiased font-sans", fontSans.variable)}>
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              {/* <SiteBG/> */}
              <div className="flex-1">
                {children}
              </div>
              <SiteFooter/>
            </div>
          </Providers>
        </body>
      </html>
    </>
  );
}
