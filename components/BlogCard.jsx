"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function BlogCard({ post }) {
  const { t } = useTranslation()

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-trayal-red text-white px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{post.date}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-trayal-red transition-colors">
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-trayal-red font-semibold hover:text-red-800 transition-colors duration-200"
        >
          {t("blog.readMore")}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
