"use client"

import BreadCrumbs from "@/app/components/bread-crumbs/bread-crumbs"
import type { BreadCrumbItem } from "@/app/components/bread-crumbs/bread-crumbs.types"

import AboutHero from "../components/abouts/AboutHero"
import AboutJourney from "../components/abouts/AboutJourney"
import AboutImage from "../components/abouts/AboutImage"
import AboutSkills from "../components/abouts/AboutSkills"
import AboutNow from "../components/abouts/AboutNow"
import AboutComments from "../components/abouts/AboutComments"
import "@/app/styles/about-component.css"

const breadcrumbItems: BreadCrumbItem[] = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
]

export default function AboutPage() {
  return (
    <div className="bg-black text-white">

      <section className="p-4">
        <BreadCrumbs items={breadcrumbItems} />
      </section>

      <AboutHero />
      <AboutJourney />
      <AboutImage />
      <AboutSkills />
      <AboutNow />
      <AboutComments />

    </div>
  )
}