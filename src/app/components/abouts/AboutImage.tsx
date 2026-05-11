import ImageComponent from "@/app/components/image/ImageComponent"
import "@/app/styles/about-component.css"
export default function AboutImage() {
  return (
    <section className="flex justify-center py-10">
      <ImageComponent
        src="/images/imagslider/aboutimg1.jpg"
        alt="About me"
        maxWidth={600}
        ratio="4 / 3"
      />
    </section>
  )
}