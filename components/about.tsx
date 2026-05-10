"use client"

import { motion } from "framer-motion"
import { BookOpen, Heart, Star, Shield } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: BookOpen,
    title: "Kurikulum Terpadu",
    description: "Memadukan kurikulum nasional dengan pendidikan Islam yang komprehensif",
  },
  {
    icon: Heart,
    title: "Pembinaan Karakter",
    description: "Fokus pada pembentukan akhlak mulia dan kepribadian Islami",
  },
  {
    icon: Star,
    title: "Program Tahfidz",
    description: "Program hafalan Al-Quran dengan metode pembelajaran modern",
  },
  {
    icon: Shield,
    title: "Lingkungan Aman",
    description: "Lingkungan belajar yang aman, nyaman, dan kondusif",
  },
]

export function About() {
  return (
    <section id="profile" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/20 rounded-3xl -rotate-3 scale-105" />
            <div className="relative grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-3 md:space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=533&fit=crop"
                    alt="Kegiatan belajar"
                    width={400}
                    height={533}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=400&fit=crop"
                    alt="Kegiatan outdoor"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-3 md:space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop"
                    alt="Pembelajaran di kelas"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=533&fit=crop"
                    alt="Kegiatan siswa"
                    width={400}
                    height={533}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Tentang Kami
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 text-balance">
              Yayasan Pendidikan Islam Adnani
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 md:mb-8 text-pretty">
              Didirikan dengan visi menciptakan generasi muslim yang berilmu dan berakhlak mulia, 
              YPI Adnani telah menjadi institusi pendidikan Islam terkemuka yang menggabungkan 
              keunggulan akademis dengan nilai-nilai spiritual Islam. Kami berkomitmen untuk 
              membentuk karakter siswa yang kuat, mandiri, dan siap menghadapi tantangan masa depan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm md:text-base">{feature.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mt-0.5">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
