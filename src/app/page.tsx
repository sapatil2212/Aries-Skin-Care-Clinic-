import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { InteractiveGallery } from "@/components/sections/interactive-gallery"
import { Benefits } from "@/components/sections/benefits"
import { Features } from "@/components/sections/features"
import { TreatmentsPreview } from "@/components/sections/treatments-preview"
import { TestimonialsPreview } from "@/components/sections/testimonials-preview"

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TreatmentsPreview />
      <InteractiveGallery />
      <Benefits />
      <Features />
      
      <TestimonialsPreview />
    </>
  )
}
