"use client"

import { useState } from "react"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { useCart } from "@/hooks/useCart"

export default function Shop() {
  const { t, i18n } = useTranslation()
  const { addToCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState("all")

  const products = [
    // Pneumatici
    {
      id: 1,
      name: i18n.language === "sr" ? 'Biciklističke gume 26"' : 'Bicycle Tires 26"',
      price: 2500,
      originalPrice: 3000,
      image: "/placeholder.svg?height=300&width=300",
      category: "pneumatici",
      subcategory: "bicikli",
      description:
        i18n.language === "sr" ? "Visokokvalitetne gume za planinske bicikle" : "High-quality mountain bike tires",
      inStock: true,
    },
    {
      id: 2,
      name: i18n.language === "sr" ? "Automobilske gume 195/65R15" : "Car Tires 195/65R15",
      price: 8500,
      originalPrice: 9500,
      image: "/placeholder.svg?height=300&width=300",
      category: "pneumatici",
      subcategory: "automobili",
      description: i18n.language === "sr" ? "Letnje gume za putnička vozila" : "Summer tires for passenger cars",
      inStock: true,
    },
    {
      id: 3,
      name: i18n.language === "sr" ? "Kamionske gume 315/80R22.5" : "Truck Tires 315/80R22.5",
      price: 25000,
      originalPrice: 28000,
      image: "/placeholder.svg?height=300&width=300",
      category: "pneumatici",
      subcategory: "kamioni",
      description:
        i18n.language === "sr" ? "Teretne gume za kamione i autobuse" : "Heavy-duty tires for trucks and buses",
      inStock: true,
    },
    // Zaštitna sredstva
    {
      id: 4,
      name: i18n.language === "sr" ? "Zaštitne cipele S3" : "Safety Shoes S3",
      price: 4500,
      originalPrice: 5200,
      image: "/placeholder.svg?height=300&width=300",
      category: "zastita",
      subcategory: "obuća",
      description:
        i18n.language === "sr"
          ? "Vodootporne zaštitne cipele sa čeličnim vrhom"
          : "Waterproof safety shoes with steel toe",
      inStock: true,
    },
    {
      id: 5,
      name: i18n.language === "sr" ? "Zaštitni kombinezon" : "Protective Coverall",
      price: 3200,
      originalPrice: 3800,
      image: "/placeholder.svg?height=300&width=300",
      category: "zastita",
      subcategory: "odeća",
      description:
        i18n.language === "sr" ? "Hemijski otporan zaštitni kombinezon" : "Chemical resistant protective coverall",
      inStock: true,
    },
    {
      id: 6,
      name: i18n.language === "sr" ? "Zaštitna kaciga" : "Safety Helmet",
      price: 1800,
      originalPrice: 2200,
      image: "/placeholder.svg?height=300&width=300",
      category: "zastita",
      subcategory: "kacige",
      description: i18n.language === "sr" ? "Kaciga sa podesivim remenom" : "Helmet with adjustable strap",
      inStock: true,
    },
    // Eksplozivi
    {
      id: 7,
      name: i18n.language === "sr" ? "ANFO eksploziv 25kg" : "ANFO Explosive 25kg",
      price: 15000,
      originalPrice: 17000,
      image: "/placeholder.svg?height=300&width=300",
      category: "eksplozivi",
      subcategory: "miniranje",
      description:
        i18n.language === "sr" ? "Amonijum nitrat sa gorivom za miniranje" : "Ammonium nitrate fuel oil for mining",
      inStock: false,
    },
    {
      id: 8,
      name: i18n.language === "sr" ? "Električni detonatori" : "Electric Detonators",
      price: 850,
      originalPrice: 1000,
      image: "/placeholder.svg?height=300&width=300",
      category: "eksplozivi",
      subcategory: "detonatori",
      description: i18n.language === "sr" ? "Precizni električni detonatori" : "Precision electric detonators",
      inStock: false,
    },
  ]

  const categories = [
    { id: "all", name: t("products.allCategories") },
    { id: "pneumatici", name: t("categories.pneumatics") },
    { id: "zastita", name: t("categories.protectiveEquipment") },
    { id: "eksplozivi", name: t("categories.explosives") },
  ]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  const handleAddToCart = (product) => {
    if (!product.inStock) return

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })

    // Show success message
    alert(i18n.language === "sr" ? "Proizvod je dodat u korpu!" : "Product added to cart!")
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("shop.title")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("shop.subtitle")}</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
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

      {/* Products Grid */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  {product.originalPrice > product.price && (
                    <div className="absolute top-2 left-2 bg-trayal-red text-white px-2 py-1 rounded text-sm font-medium">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="bg-gray-800 text-white px-3 py-1 rounded text-sm font-medium">
                        {t("shop.outOfStock")}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-trayal-red">{product.price.toLocaleString()} RSD</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice.toLocaleString()} RSD
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                      product.inStock
                        ? "bg-trayal-red text-white hover:bg-red-800"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {product.inStock ? t("shop.addToCart") : t("shop.outOfStock")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Notice for Explosives */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mx-4 sm:mx-6 lg:mx-8 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>{t("shop.explosivesNotice")}</strong> {t("shop.explosivesNoticeText")}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
