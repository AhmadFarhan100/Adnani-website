import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { VisionMission } from "@/components/vision-mission"
import { Statistics } from "@/components/statistics"
import { Teachers } from "@/components/teachers"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Statistics />
      <Teachers />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
