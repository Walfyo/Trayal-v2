"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "sr", name: "Srpski" },
    { code: "en", name: "English" },
  ]

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-trayal-red transition-colors duration-200 border border-gray-300 rounded-md hover:border-trayal-red"
      >
        <span>{i18n.language}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                i18n.language === language.code ? "text-trayal-red font-medium bg-red-50" : "text-gray-700"
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
