"use client"

import { useRouter } from "next/navigation"
import AboutSectionContainer from "@/app/components/abouts/AboutSection"
import SectionDivider from "@/app/components/ui/SectionDivider"
import ImageSlider from "@/app/components/ImageSlider/ImageSlider";
import LatestBlogs from "@/app/components/blogs/latest-blogs/latest-blogs";
import { aboutSliderImages, homeSliderImages } from "@/data/sliders";
import LatestSkills from "@/app/latestskills/LatestSkills";

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <div className="flex flex-col items-center justify-center px-6 py-20 text-center">

        {/* <h1 className="text-3xl md:text-5xl font-bold text-yellow-400">
          Welcome Home 👋
        </h1> */}

        <ImageSlider images={aboutSliderImages} />

      </div>

      {/* BLOG */}
     <LatestBlogs limit={3} />

      {/* SKILLS */}
      <LatestSkills />

      {/* ABOUT */}
      <SectionDivider title="About Me" />

      <AboutSectionContainer />

    </div>
  )
}