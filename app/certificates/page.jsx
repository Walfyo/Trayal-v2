"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function Certificates() {
  const { t, i18n } = useTranslation()

  const certificates = [
    {
      id: 1,
      name: "ISO 9001:2015",
      title: i18n.language === "sr" ? "Sistem upravljanja kvalitetom" : "Quality Management System",
      description:
        i18n.language === "sr"
          ? "Međunarodni standard koji specificira zahteve za sistem upravljanja kvalitetom"
          : "International standard that specifies requirements for a quality management system",
      issueDate: "2023",
      validUntil: "2026",
      image: "/placeholder.svg?height=300&width=400",
      category: i18n.language === "sr" ? "Kvalitet" : "Quality",
    },
    {
      id: 2,
      name: "ISO 14001:2015",
      title: i18n.language === "sr" ? "Sistem upravljanja životnom sredinom" : "Environmental Management System",
      description:
        i18n.language === "sr"
          ? "Standard koji pomaže organizacijama da poboljšaju svoje ekološke performanse"
          : "Standard that helps organizations improve their environmental performance",
      issueDate: "2023",
      validUntil: "2026",
      image: "/placeholder.svg?height=300&width=400",
      category: i18n.language === "sr" ? "Životna sredina" : "Environment",
    },
    {
      id: 3,
      name: "ISO 45001:2018",
      title: i18n.language === "sr" ? "Bezbednost i zdravlje na radu" : "Occupational Health and Safety",
      description:
        i18n.language === "sr"
          ? "Standard za sistem upravljanja bezbednošću i zdravljem na radu"
          : "Standard for occupational health and safety management system",
      issueDate: "2024",
      validUntil: "2027",
      image: "/placeholder.svg?height=300&width=400",
      category: i18n.language === "sr" ? "Bezbednost" : "Safety",
    },
    {
      id: 4,
      name: "CE Marking",
      title: i18n.language === "sr" ? "Evropska usaglašenost" : "European Conformity",
      description:
        i18n.language === "sr"
          ? "Označava da proizvod ispunjava EU zahteve za bezbednost, zdravlje i zaštitu životne sredine"
          : "Indicates that product meets EU requirements for safety, health and environmental protection",
      issueDate: "2023",
      validUntil: i18n.language === "sr" ? "Stalno" : "Permanent",
      image: "/placeholder.svg?height=300&width=400",
      category: i18n.language === "sr" ? "Usaglašenost" : "Compliance",
    },
    {
      id: 5,
      name: "IATF 16949:2016",
      title: i18n.language === "sr" ? "Automobilska industrija" : "Automotive Industry",
      description:
        i18n.language === "sr"
          ? "Standard kvaliteta specifičan za automobilsku industriju"
          : "Quality standard specific to the automotive industry",
      issueDate: "2022",
      validUntil: "2025",
      image: "/placeholder.svg?height=300&width=400",
      category: i18n.language === "sr" ? "Automobilska" : "Automotive",
    },
    {
      id: 6,
      name: "OHSAS 18001",
      title: i18n.language === "sr" ? "Bezbednost i zdravlje zaposlenih" : "Employee Health and Safety",
      description:
        i18n.language === "sr"
          ? "Standard za upravljanje bezbednošću i zdravljem zaposlenih na radnom mestu"
          : "Standard for managing employee health and safety in the workplace",
      issueDate: "2021",
      validUntil: "2024",
      image: "/placeholder.svg?height=300&width=400",
      category: i18n.language === "sr" ? "Bezbednost" : "Safety",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("certificates.title")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("certificates.subtitle")}</p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-trayal-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      {certificate.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{certificate.name}</h3>
                  <h4 className="text-lg font-semibold text-trayal-red mb-3">{certificate.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{certificate.description}</p>

                  <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
                    <div>
                      <span className="font-medium">{t("certificates.issued")}</span> {certificate.issueDate}
                    </div>
                    <div>
                      <span className="font-medium">{t("certificates.validUntil")}</span> {certificate.validUntil}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("certificates.qualityCommitment")}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("certificates.qualityCommitmentDesc")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow">
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
              <h3 className="font-semibold text-gray-900 mb-2">{t("certificates.qualityControl")}</h3>
              <p className="text-sm text-gray-600">{t("certificates.qualityControlDesc")}</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="w-16 h-16 bg-trayal-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t("certificates.employeeTraining")}</h3>
              <p className="text-sm text-gray-600">{t("certificates.employeeTrainingDesc")}</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="w-16 h-16 bg-trayal-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t("certificates.innovation")}</h3>
              <p className="text-sm text-gray-600">{t("certificates.innovationDesc")}</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="w-16 h-16 bg-trayal-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t("certificates.customerSatisfaction")}</h3>
              <p className="text-sm text-gray-600">{t("certificates.customerSatisfactionDesc")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
