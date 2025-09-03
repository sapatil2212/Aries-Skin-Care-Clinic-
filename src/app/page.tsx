import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { TreatmentsPreview } from "@/components/sections/treatments-preview"
import { TestimonialsPreview } from "@/components/sections/testimonials-preview"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <TreatmentsPreview />
      <TestimonialsPreview />
    </>
  )
}
