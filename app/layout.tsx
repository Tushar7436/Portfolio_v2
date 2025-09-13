import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/navigation/header"
import Footer from "@/components/navigation/footer"
import { Toaster } from "@/components/ui/toaster"
// import PreloaderWrapper from "@/components/preloader-wrapper"
import ViewportFix from "@/components/viewport-fix"
import Script from "next/script"
import ResumeDownloadHandler from "@/components/resume-download-handler"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} overflow-x-hidden w-full max-w-[100vw]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ViewportFix />
          <ResumeDownloadHandler />
          {/* <PreloaderWrapper /> */}
          <Header />
          <div className="overflow-x-hidden w-full">{children}</div>
          <Footer />
          <Toaster />
        </ThemeProvider>

        {/* Script to handle navigation events and prevent preloader from showing */}
        <Script id="navigation-handler" strategy="afterInteractive">
          {`
            // Mark internal navigation events
            document.addEventListener('click', function(e) {
              // Check if the clicked element is an internal link
              const link = e.target.closest('a');
              if (link && link.href && link.href.startsWith(window.location.origin)) {
                // This is an internal navigation, ensure preloader doesn't show
                sessionStorage.setItem('hasVisitedBefore', 'true');
              }
            });
            
            // Fix for mobile viewport width issues
            function preventOverflow() {
              document.body.style.width = '100%';
              document.body.style.maxWidth = '100vw';
              document.body.style.overflowX = 'hidden';
            }
            
            window.addEventListener('resize', preventOverflow);
            window.addEventListener('orientationchange', preventOverflow);
            preventOverflow();
          `}
        </Script>

        <Script id="animation-handler" strategy="afterInteractive">
          {`
            // Add a class to the body when the page is fully loaded
            document.addEventListener('DOMContentLoaded', function() {
              document.body.classList.add('animations-ready');
            });
            
            // Backup in case DOMContentLoaded already fired
            if (document.readyState === 'complete') {
              document.body.classList.add('animations-ready');
            }
          `}
        </Script>
      </body>
    </html>
  )
}



import './globals.css'