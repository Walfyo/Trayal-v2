"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function ProductCard({ product }) {
  const { t } = useTranslation()

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-trayal-red text-white px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-trayal-red transition-colors">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>

        <div className="flex justify-between items-center">
          <Link
            href={`/products/${product.id}`}
            className="text-trayal-red font-medium hover:text-red-800 transition-colors duration-200"
          >
            {t("categories.learnMore")} →
          </Link>
          <Link
            href={`/shop?product=${product.id}`}
            className="bg-trayal-red text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors duration-200"
          >
            {t("shop.addToCart")}
          </Link>
        </div>
      </div>
    </div>
  )
}
