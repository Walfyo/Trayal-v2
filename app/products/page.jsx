"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function Products() {
  const { t, i18n } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    {
      id: "pneumatici",
      name: t("categories.pneumatics"),
      description: t("categories.pneumaticsDesc"),
      image: "/placeholder.svg?height=300&width=400",
      subcategories: [
        { id: "bicikli", name: t("products.bicycleTires") },
        { id: "automobili", name: t("products.carTires") },
        { id: "kamioni", name: t("products.truckTires") },
        { id: "industrijski", name: t("products.industrialTires") },
      ],
    },
    {
      id: "zastita",
      name: t("categories.protectiveEquipment"),
      description: t("categories.protectiveEquipmentDesc"),
      image: "/placeholder.svg?height=300&width=400",
      subcategories: [
        { id: "obuća", name: t("products.safetyFootwear") },
        { id: "odeća", name: t("products.protectiveClothing") },
        { id: "kacige", name: t("products.safetyHelmets") },
        { id: "rukavice", name: t("products.safetyGloves") },
      ],
    },
    {
      id: "eksplozivi",
      name: t("categories.explosives"),
      description: t("categories.explosivesDesc"),
      image: "/placeholder.svg?height=300&width=400",
      subcategories: [
        { id: "miniranje", name: t("products.miningExplosives") },
        { id: "gradnja", name: t("products.constructionExplosives") },
        { id: "detonatori", name: t("products.detonators") },
        { id: "fitilji", name: t("products.safetyFuses") },
      ],
    },
  ]

  const filteredCategories =
    selectedCategory === "all" ? categories : categories.filter((cat) => cat.id === selectedCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("products.title")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("products.subtitle")}</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                selectedCategory === "all" ? "bg-trayal-red text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t("products.allCategories")}
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? "bg-trayal-red text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="space-y-16">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
                    <p className="text-lg text-gray-600 mb-6">{category.description}</p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t("products.subcategories")}</h3>
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {category.subcategories.map((subcategory) => (
                        <Link
                          key={subcategory.id}
                          href={`/products/${category.id}/${subcategory.id}`}
                          className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-trayal-red hover:text-white transition-colors duration-200 group"
                        >
                          <svg
                            className="w-5 h-5 mr-3 text-trayal-red group-hover:text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="font-medium">{subcategory.name}</span>
                        </Link>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <Link href={`/products/${category.id}`} className="btn-primary">
                        {t("products.viewAll")}
                      </Link>
                      <Link href={`/shop?category=${category.id}`} className="btn-secondary">
                        {t("products.shopNow")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("products.customSolution")}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{t("products.customSolutionDesc")}</p>
          <Link href="/contact" className="btn-primary">
            {t("products.requestQuote")}
          </Link>
        </div>
      </section>
    </div>
  )
}
