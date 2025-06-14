"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { useCart } from "@/hooks/useCart"

export default function Cart() {
  const { t } = useTranslation()
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container-max text-center">
          <div className="max-w-md mx-auto">
            <svg className="w-24 h-24 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
              />
            </svg>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{t("cart.empty")}</h1>
            <p className="text-gray-600 mb-8">{t("cart.emptyDesc")}</p>
            <Link href="/shop" className="btn-primary">
              {t("cart.goToShop")}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-max">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t("cart.title")}</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">{t("cart.itemsInCart")}</h2>
                  <button onClick={clearCart} className="text-sm text-gray-500 hover:text-trayal-red transition-colors">
                    {t("cart.clearAll")}
                  </button>
                </div>

                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 truncate">{item.name}</h3>
                        <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                        <p className="text-sm font-medium text-trayal-red">{item.price.toLocaleString()} RSD</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          {(item.price * item.quantity).toLocaleString()} RSD
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm text-red-600 hover:text-red-800 transition-colors mt-1"
                        >
                          {t("cart.remove")}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">{t("cart.orderSummary")}</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>{t("cart.subtotal")}</span>
                  <span>{getTotalPrice().toLocaleString()} RSD</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("cart.shipping")}</span>
                  <span className="text-green-600">{t("cart.free")}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("cart.vat")}</span>
                  <span>{Math.round(getTotalPrice() * 0.2).toLocaleString()} RSD</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>{t("cart.total")}</span>
                    <span className="text-trayal-red">{Math.round(getTotalPrice() * 1.2).toLocaleString()} RSD</span>
                  </div>
                </div>
              </div>

              <button className="w-full btn-primary mb-4">{t("cart.proceedToCheckout")}</button>

              <Link href="/shop" className="block w-full text-center btn-secondary">
                {t("cart.continueShopping")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
