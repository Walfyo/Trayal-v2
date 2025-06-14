"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function About() {
  const { t, i18n } = useTranslation()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("about.title")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {i18n.language === "sr"
              ? "Nasleđe industrijske izvrsnosti koje traje više od pet decenija, izgrađeno na inovacijama, kvalitetu i nepokolebljivoj posvećenosti našim klijentima."
              : "A legacy of industrial excellence spanning over five decades, built on innovation, quality, and unwavering commitment to our customers."}
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {i18n.language === "sr" ? "Naša priča" : "Our Story"}
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  {i18n.language === "sr"
                    ? "Osnovan 1970. godine, Trayal je izrastao iz male proizvodne kompanije u jedno od vodećih industrijskih preduzeća u regionu. Naš put je obeležen kontinuiranim inovacijama i ekspanzijom."
                    : "Founded in 1970, Trayal has grown from a small manufacturing company to become one of the leading industrial enterprises in the region. Our journey has been marked by continuous innovation and expansion."}
                </p>
                <p>
                  {i18n.language === "sr"
                    ? "Danas upravljamo najsavremenijim objektima i služimo klijentima u više od 25 zemalja, održavajući našu posvećenost kvalitetu i zadovoljstvu klijenata koja nas definiše od početka."
                    : "Today, we operate state-of-the-art facilities and serve customers across 25+ countries, maintaining our commitment to quality and customer satisfaction that has defined us from the beginning."}
                </p>
                <p>
                  {i18n.language === "sr"
                    ? "Naš uspeh je izgrađen na stručnosti našeg tima, najsavremenijoj tehnologiji i dubinom razumevanju potreba naših klijenata u različitim industrijskim sektorima."
                    : "Our success is built on the expertise of our team, cutting-edge technology, and a deep understanding of our customers' needs across various industrial sectors."}
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Trayal facility"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {i18n.language === "sr" ? "Naše vrednosti" : "Our Values"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {i18n.language === "sr"
                ? "Principi koji vode naš rad i definišu kulturu naše kompanije."
                : "The principles that guide our work and define our company culture."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-trayal-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{i18n.language === "sr" ? "Integritet" : "Integrity"}</h3>
              <p className="text-gray-600">
                {i18n.language === "sr"
                  ? "Poštena i transparentna poslovna praksa u svim našim odnosima."
                  : "Honest and transparent business practices in all our relationships."}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-trayal-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{i18n.language === "sr" ? "Inovacije" : "Innovation"}</h3>
              <p className="text-gray-600">
                {i18n.language === "sr"
                  ? "Kontinuirano poboljšanje i tehnološki napredak u našim rešenjima."
                  : "Continuous improvement and technological advancement in our solutions."}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-trayal-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{i18n.language === "sr" ? "Izvrsnost" : "Excellence"}</h3>
              <p className="text-gray-600">
                {i18n.language === "sr"
                  ? "Težnja ka najvišim standardima u svemu što radimo."
                  : "Striving for the highest standards in everything we do."}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-trayal-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{i18n.language === "sr" ? "Održivost" : "Sustainability"}</h3>
              <p className="text-gray-600">
                {i18n.language === "sr"
                  ? "Odgovorna proizvodna praksa za bolju budućnost."
                  : "Responsible manufacturing practices for a better future."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {i18n.language === "sr" ? "Rukovodstvo" : "Leadership Team"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {i18n.language === "sr"
                ? "Upoznajte iskusne profesionalce koji vode Trayal u budućnost."
                : "Meet the experienced professionals leading Trayal into the future."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="CEO"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{i18n.language === "sr" ? "Marko Petrović" : "John Smith"}</h3>
              <p className="text-trayal-red font-medium mb-2">
                {i18n.language === "sr" ? "Generalni direktor" : "Chief Executive Officer"}
              </p>
              <p className="text-gray-600 text-sm">
                {i18n.language === "sr"
                  ? "Vodi Trayal sa više od 20 godina iskustva u industriji."
                  : "Leading Trayal with over 20 years of industry experience."}
              </p>
            </div>

            <div className="text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="CTO"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">
                {i18n.language === "sr" ? "Ana Jovanović" : "Sarah Johnson"}
              </h3>
              <p className="text-trayal-red font-medium mb-2">
                {i18n.language === "sr" ? "Direktor tehnologije" : "Chief Technology Officer"}
              </p>
              <p className="text-gray-600 text-sm">
                {i18n.language === "sr"
                  ? "Pokreće inovacije i tehnološki napredak u svim divizijama."
                  : "Driving innovation and technological advancement across all divisions."}
              </p>
            </div>

            <div className="text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="COO"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">
                {i18n.language === "sr" ? "Milan Nikolić" : "Michael Brown"}
              </h3>
              <p className="text-trayal-red font-medium mb-2">
                {i18n.language === "sr" ? "Direktor operacija" : "Chief Operations Officer"}
              </p>
              <p className="text-gray-600 text-sm">
                {i18n.language === "sr"
                  ? "Obezbeđuje operativnu izvrsnost i kvalitet u svim objektima."
                  : "Ensuring operational excellence and quality across all facilities."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
