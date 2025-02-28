/* eslint-disable import/no-extraneous-dependencies */
import "@/globals.css";
import type { Metadata, Viewport } from "next";

import { siteConfig } from "@/config/site";

import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";

import ReactQueryProvider from "@/lib/providers/react-query-providers";
import { NextAuthProvider } from "@/lib/providers/session-providers";
import Script from "next/script";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

import {
  fontSans,
  fontMontserrat,
  fontComfortaa,
  fontEuropa,
} from "@/lib/fonts";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  robots:
    process.env.NEXT_PUBLIC_ENVIRONMENT === "production"
      ? "index, follow"
      : "noindex, nofollow",
  keywords: [
    "Science for kids",
    "Little School",
    "Kids Science",
    "Online learning tools for students",
  ],
  icons: {
    icon: "https://littleschool.s3.us-west-2.amazonaws.com/icon.ico",
    shortcut: "https://littleschool.s3.us-west-2.amazonaws.com/icon.ico",
    apple: "https://littleschool.s3.us-west-2.amazonaws.com/icon.ico",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://littleschooltv.com",
    images: [
      {
        url: "https://littleschool.s3.us-west-2.amazonaws.com/previewhome.png",
        width: 1200,
        height: 630,
        alt: "Preview Image",
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <Script
        id="analytics"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JEQ0W9KH6L"
      />
      <Script
        id="analytics2"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-JEQ0W9KH6L');
              `,
        }}
      />
      {/* <meta
        name="viewport"
        content="width=device-width,initial-scale=1, maximum-scale=1.0,user-scalable=0"
      /> */}
      {/* {process.env.NEXT_PUBLIC_ENVIRONMENT !== "production" ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )} */}

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontEuropa.variable,
          fontMontserrat.variable,
          fontComfortaa.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
        >
          <ReactQueryProvider>
            <NextAuthProvider>
              <Toaster position="bottom-center" reverseOrder={false} />
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex-1">{children}</div>
              </div>
            </NextAuthProvider>
          </ReactQueryProvider>
          <TailwindIndicator />
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
