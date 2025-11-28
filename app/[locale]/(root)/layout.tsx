import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { Inter } from "next/font/google"
import { Locale, routing } from "@/i18n/routing"

import "./globals.css"

import { LocaleSwitcherClient } from "@/components/locale-switcher-client"
import { UserButtonClient } from "@/components/user-button-client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AuthBase.AI",
  description: "AuthBase.AI",
}

export default async function AppLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={inter.className}>
          <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextIntlClientProvider messages={messages}>
              <div className="flex flex-col min-h-screen">
                <header className="w-full fixed z-10 top-0 bg-gray-100 dark:bg-gray-900 border-b border-gray-200">
                  <nav className="h-16 px-4 flex items-center">
                    <div className="ml-auto flex items-center space-x-4">
                      <LocaleSwitcherClient locale={locale} />
                      <UserButtonClient />
                    </div>
                  </nav>
                </header>
                <main className="flex-grow flex flex-col items-center justify-center">
                  <div className="h-full flex items-center justify-center">
                  {children}
                  </div>
                </main>
                <footer className="flex flex-col text-gray-500 text-sm mt-5 border-t border-gray-100">
                  <div className="flex flex-wrap justify-center max-sm:flex-col gap-10 px-6 py-10 sm:gap-20">
                  </div>
                </footer>
              </div>
            </NextIntlClientProvider>
          </NextThemesProvider>
      </body>
    </html>
  )
}