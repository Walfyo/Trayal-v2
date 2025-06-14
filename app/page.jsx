"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import BlogCard from "@/components/BlogCard"

export default function Home() {
  const { t, i18n } = useTranslation()

  const categories = [
    {
      title: t("categories.pneumatics"),
      description: t("categories.pneumaticsDesc"),
      image: "/placeholder.svg?height=300&width=400",
      href: "/products?category=pneumatici",
      icon: (
        <svg className="w-12 h-12 text-trayal-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      title: t("categories.protectiveEquipment"),
      description: t("categories.protectiveEquipmentDesc"),
      image: "/placeholder.svg?height=300&width=400",
      href: "/products?category=zastita",
      icon: (
        <svg className="w-12 h-12 text-trayal-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: t("categories.explosives"),
      description: t("categories.explosivesDesc"),
      image: "/placeholder.svg?height=300&width=400",
      href: "/products?category=eksplozivi",
      icon: (
        <svg className="w-12 h-12 text-trayal-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title:
        i18n.language === "sr"
          ? "Nova generacija pneumatika za teške uslove rada"
          : "New Generation Tires for Heavy-Duty Applications",
      excerpt:
        i18n.language === "sr"
          ? "Predstavljamo našu najnoviju liniju pneumatika dizajniranih za najzahtevnije industrijske uslove..."
          : "Introducing our latest tire line designed for the most demanding industrial conditions...",
      image: "/placeholder.svg?height=200&width=300",
      date: "15. decembar 2024",
      category: i18n.language === "sr" ? "Proizvodi" : "Products",
    },
    {
      id: 2,
      title: i18n.language === "sr" ? "Investicija u zelene tehnologije" : "Investment in Green Technologies",
      excerpt:
        i18n.language === "sr"
          ? "Trayal nastavlja sa investiranjem u održive i ekološki prihvatljive tehnologije proizvodnje..."
          : "Trayal continues investing in sustainable and environmentally friendly production technologies...",
      image: "/placeholder.svg?height=200&width=300",
      date: "10. decembar 2024",
      category: i18n.language === "sr" ? "Kompanija" : "Company",
    },
    {
      id: 3,
      title:
        i18n.language === "sr"
          ? "Partnerstvo sa vodećim evropskim kompanijama"
          : "Partnership with Leading European Companies",
      excerpt:
        i18n.language === "sr"
          ? "Potpisani novi ugovori o saradnji sa kompanijama iz Nemačke, Francuske i Italije..."
          : "New cooperation agreements signed with companies from Germany, France and Italy...",
      image: "/placeholder.svg?height=200&width=300",
      date: "5. decembar 2024",
      category: i18n.language === "sr" ? "Vesti" : "News",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{t("hero.title")}</h1>
              <p className="text-xl text-gray-300 leading-relaxed">{t("hero.subtitle")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="btn-primary text-center">
                  {t("hero.exploreProducts")}
                </Link>
                <Link href="/about" className="btn-secondary text-center">
                  {t("hero.learnMore")}
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Industrial facility"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("categories.ourProducts")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("categories.ourProductsDesc")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={index} href={category.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-trayal-red">
                  <div className="relative h-48">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-4">{category.icon}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-trayal-red transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{category.description}</p>
                    <div className="mt-4 flex items-center text-trayal-red font-semibold">
                      <span className="group-hover:mr-2 transition-all duration-300">{t("categories.learnMore")}</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Trayal facility"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-trayal-red text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-90">{t("stats.yearsExperience")}</div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("about.title")}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{t("about.text")}</p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-trayal-red">1000+</div>
                  <div className="text-sm text-gray-600">{t("stats.projectsCompleted")}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-trayal-red">25+</div>
                  <div className="text-sm text-gray-600">{t("stats.countriesServed")}</div>
                </div>
              </div>
              <Link href="/about" className="btn-primary inline-block">
                {t("hero.learnMore")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("blog.latestNews")}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("blog.latestNewsDesc")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="btn-secondary">
              {t("blog.allArticles")}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-trayal-red text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cta.readyToWork")}</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">{t("cta.readyToWorkDesc")}</p>
          <Link
            href="/contact"
            className="bg-white text-trayal-red font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            {t("cta.getInTouch")}
          </Link>
        </div>
      </section>
    </div>
  )
}
