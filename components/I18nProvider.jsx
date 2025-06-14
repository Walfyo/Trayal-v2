"use client"

import { useEffect } from "react"
import "../src/i18n"

export default function I18nProvider({ children }) {
  useEffect(() => {
    // i18n is initialized when this component mounts
  }, [])

  return <>{children}</>
}
