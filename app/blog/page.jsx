"use client"

import { useTranslation } from "react-i18next"
import BlogCard from "@/components/BlogCard"

export default function Blog() {
  const { t, i18n } = useTranslation()

  const blogPosts = [
    {
      id: 1,
      title:
        i18n.language === "sr"
          ? "Nova generacija pneumatika za teške uslove rada"
          : "New Generation Tires for Heavy-Duty Applications",
      excerpt:
        i18n.language === "sr"
          ? "Predstavljamo našu najnoviju liniju pneumatika dizajniranih za najzahtevnije industrijske uslove. Ovi pneumatici pružaju izuzetnu izdržljivost i performanse."
          : "Introducing our latest tire line designed for the most demanding industrial conditions. These tires provide exceptional durability and performance.",
      image: "/placeholder.svg?height=200&width=300",
      date: "15. decembar 2024",
      category: i18n.language === "sr" ? "Proizvodi" : "Products",
    },
    {
      id: 2,
      title: i18n.language === "sr" ? "Investicija u zelene tehnologije" : "Investment in Green Technologies",
      excerpt:
        i18n.language === "sr"
          ? "Trayal nastavlja sa investiranjem u održive i ekološki prihvatljive tehnologije proizvodnje. Naš cilj je smanjenje ugljenog otiska za 50% do 2030."
          : "Trayal continues investing in sustainable and environmentally friendly production technologies. Our goal is to reduce carbon footprint by 50% by 2030.",
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
          ? "Potpisani novi ugovori o saradnji sa kompanijama iz Nemačke, Francuske i Italije. Ova partnerstva će omogućiti proširenje na nova tržišta."
          : "New cooperation agreements signed with companies from Germany, France and Italy. These partnerships will enable expansion to new markets.",
      image: "/placeholder.svg?height=200&width=300",
      date: "5. decembar 2024",
      category: i18n.language === "sr" ? "Vesti" : "News",
    },
    {
      id: 4,
      title: i18n.language === "sr" ? "Otvaranje novog istraživačko-razvojnog centra" : "Opening of New R&D Center",
      excerpt:
        i18n.language === "sr"
          ? "Svečano otvaranje našeg novog istraživačko-razvojnog centra u Kruševcu. Centar će se fokusirati na razvoj inovativnih rešenja."
          : "Grand opening of our new research and development center in Kruševac. The center will focus on developing innovative solutions.",
      image: "/placeholder.svg?height=200&width=300",
      date: "1. decembar 2024",
      category: i18n.language === "sr" ? "Kompanija" : "Company",
    },
    {
      id: 5,
      title: i18n.language === "sr" ? "Sertifikacija prema ISO 45001 standardu" : "ISO 45001 Standard Certification",
      excerpt:
        i18n.language === "sr"
          ? "Trayal je uspešno sertifikovana prema ISO 45001 standardu za bezbednost i zdravlje na radu, potvrđujući našu posvećenost sigurnosti zaposlenih."
          : "Trayal has been successfully certified according to ISO 45001 standard for occupational health and safety, confirming our commitment to employee safety.",
      image: "/placeholder.svg?height=200&width=300",
      date: "25. novembar 2024",
      category: i18n.language === "sr" ? "Sertifikati" : "Certificates",
    },
    {
      id: 6,
      title: i18n.language === "sr" ? "Novo radno mesto - 200 novih zaposlenih" : "New Workplace - 200 New Employees",
      excerpt:
        i18n.language === "sr"
          ? "Zbog ekspanzije poslovanja, Trayal otpočinje proces zapošljavanja 200 novih radnika u različitim sektorima kompanije."
          : "Due to business expansion, Trayal is starting the process of hiring 200 new workers in various company sectors.",
      image: "/placeholder.svg?height=200&width=300",
      date: "20. novembar 2024",
      category: i18n.language === "sr" ? "Zapošljavanje" : "Employment",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("nav.blog")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {i18n.language === "sr"
              ? "Pratite najnovije vesti, inovacije i dostignuća kompanije Trayal"
              : "Follow the latest news, innovations and achievements of Trayal company"}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
