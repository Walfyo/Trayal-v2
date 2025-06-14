"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "./LanguageSwitcher"
import { useCart } from "@/hooks/useCart"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation()
  const { items } = useCart()

  const mainNavigation = [
    { name: "nav.home", href: "/" },
    { name: "nav.products", href: "/products" },
    { name: "nav.shop", href: "/shop" },
    { name: "nav.about", href: "/about" },
    { name: "nav.blog", href: "/blog" },
    { name: "nav.contact", href: "/contact" },
  ]

  const secondaryNavigation = [
    { name: "nav.history", href: "/history" },
    { name: "nav.certificates", href: "/certificates" },
  ]

  const isActive = (href) => {
    return pathname === href
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-trayal-red rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Trayal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-trayal-red border-b-2 border-trayal-red pb-1"
                    : "text-gray-700 hover:text-trayal-red"
                }`}
              >
                {t(item.name)}
              </Link>
            ))}

            {/* Secondary Navigation */}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-300">
              {secondaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href) ? "text-trayal-red" : "text-gray-600 hover:text-trayal-red"
                  }`}
                >
                  {t(item.name)}
                </Link>
              ))}
            </div>
          </nav>

          {/* Cart & Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart */}
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-trayal-red transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-trayal-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <LanguageSwitcher />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-trayal-red focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-trayal-red bg-red-50"
                      : "text-gray-700 hover:text-trayal-red hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.name)}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-2 mt-2">
                {secondaryNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-trayal-red bg-red-50"
                        : "text-gray-600 hover:text-trayal-red hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.name)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
