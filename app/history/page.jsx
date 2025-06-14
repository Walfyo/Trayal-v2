"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function History() {
  const { t, i18n } = useTranslation()

  const timeline = [
    {
      year: "1970",
      title: i18n.language === "sr" ? "Osnivanje kompanije" : "Company Foundation",
      description:
        i18n.language === "sr"
          ? "Trayal je osnovan kao mala proizvodna kompanija u Kruševcu sa fokusom na gumene proizvode."
          : "Trayal was founded as a small manufacturing company in Kruševac with focus on rubber products.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "1980",
      title: i18n.language === "sr" ? "Prva ekspanzija" : "First Expansion",
      description:
        i18n.language === "sr"
          ? "Proširenje proizvodnih kapaciteta i uvođenje novih tehnologija u proizvodnju pneumatika."
          : "Expansion of production capacities and introduction of new technologies in tire manufacturing.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "1990",
      title: i18n.language === "sr" ? "Međunarodno tržište" : "International Market",
      description:
        i18n.language === "sr"
          ? "Prvi izvoz proizvoda na međunarodno tržište i uspostavljanje poslovnih partnerstava."
          : "First export of products to international market and establishment of business partnerships.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2000",
      title: i18n.language === "sr" ? "Modernizacija" : "Modernization",
      description:
        i18n.language === "sr"
          ? "Velika investicija u modernizaciju opreme i implementaciju ISO standarda kvaliteta."
          : "Major investment in equipment modernization and implementation of ISO quality standards.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2010",
      title: i18n.language === "sr" ? "Diverzifikacija" : "Diversification",
      description:
        i18n.language === "sr"
          ? "Proširenje asortimana na zaštitnu opremu i industrijske eksplozive."
          : "Expansion of product range to protective equipment and industrial explosives.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2020",
      title: i18n.language === "sr" ? "Digitalna transformacija" : "Digital Transformation",
      description:
        i18n.language === "sr"
          ? "Uvođenje digitalnih tehnologija u proizvodnju i lansiranje online prodaje."
          : "Introduction of digital technologies in production and launch of online sales.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("history.title")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("history.subtitle")}</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-trayal-red hidden lg:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-trayal-red rounded-full border-4 border-white shadow-lg hidden lg:block z-10"></div>

                  {/* Content */}
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                    <div className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <div className="bg-trayal-red text-white px-4 py-2 rounded-full font-bold text-lg">
                          {item.year}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("history.keyAchievements")}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("history.keyAchievementsDesc")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-trayal-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("history.firstISO")}</h3>
              <p className="text-gray-600">{t("history.in1995")}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-trayal-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("history.oneMillionProducts")}</h3>
              <p className="text-gray-600">{t("history.in2005")}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-trayal-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("history.globalPresence")}</h3>
              <p className="text-gray-600">{t("history.countries")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
