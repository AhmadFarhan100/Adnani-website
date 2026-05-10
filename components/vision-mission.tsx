"use client"

import { motion } from "framer-motion"
import { Eye, Target, CheckCircle2 } from "lucide-react"

const missionPoints = [
  "Menyelenggarakan pendidikan Islam yang berkualitas dan terjangkau",
  "Membentuk karakter siswa berdasarkan Al-Quran dan Sunnah",
  "Mengembangkan potensi akademik dan non-akademik siswa",
  "Menciptakan lingkungan belajar yang islami dan menyenangkan",
  "Membangun kerjasama yang baik dengan orang tua dan masyarakat",
]

export function VisionMission() {
  return (
    <section className="py-16 md:py-24 bg-background islamic-pattern relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-transparent to-card" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Visi & Misi
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            Komitmen Kami untuk Pendidikan
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-1 group-hover:rotate-2 transition-transform" />
            <div className="relative bg-card rounded-3xl p-6 md:p-8 shadow-xl border border-border/50">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Eye className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Visi</h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-pretty">
                Menjadi lembaga pendidikan Islam terdepan yang melahirkan generasi 
                <span className="text-primary font-semibold"> Qurani</span>, 
                <span className="text-primary font-semibold"> berilmu</span>, 
                <span className="text-primary font-semibold"> berakhlak mulia</span>, dan 
                <span className="text-primary font-semibold"> berdaya saing global</span>.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-accent/10 rounded-3xl -rotate-1 group-hover:-rotate-2 transition-transform" />
            <div className="relative bg-card rounded-3xl p-6 md:p-8 shadow-xl border border-border/50">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-7 h-7 md:w-8 md:h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Misi</h3>
              <ul className="space-y-3">
                {missionPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-muted-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
