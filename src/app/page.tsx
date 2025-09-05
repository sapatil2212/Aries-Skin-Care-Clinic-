import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { InteractiveGallery } from "@/components/sections/interactive-gallery"
import { Benefits } from "@/components/sections/benefits"
import { TreatmentsPreview } from "@/components/sections/treatments-preview"
import { FAQ } from "@/components/sections/faq"
import Testimonials from "@/components/sections/testimonials-preview"
import { HowWeWork } from "@/components/sections/how-we-work"

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TreatmentsPreview />
      <HowWeWork/>
      <InteractiveGallery />
      <Benefits />
      <FAQ />
      <Testimonials />
    </>
  )
}
