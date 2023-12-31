import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Providers } from "@/components/providers"
import { SiteBlob } from "@/components/site-blob"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SiteFooterMenu } from "@/components/site-footer-menu"
import { UserProvider } from '@auth0/nextjs-auth0/client';


export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description1,
  icons: {
    icon: '/favicon.ico'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <UserProvider>
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
            )}
          >
            <Providers>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <SiteBlob />
                <div className="flex-1">{children}</div>
                <SiteFooter />
                <SiteFooterMenu />
              </div>
            </Providers>
          </body>
        </UserProvider>
      </html>
    </>
  )
}
