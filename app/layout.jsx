import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { CartProvider } from "@/hooks/useCart"
import I18nProvider from "@/components/I18nProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Trayal - Industrial Excellence",
  description: "Leading industrial company focused on innovation, quality, and professional solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body className={inter.className}>
        <I18nProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </CartProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
