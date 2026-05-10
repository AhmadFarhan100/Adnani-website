"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GraduationCap } from "lucide-react"

const teachers = [
  {
    name: "Ustadz Ahmad Fauzi, M.Pd",
    role: "Kepala Sekolah",
    subject: "Pendidikan Agama Islam",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&facepad=2",
  },
  {
    name: "Ustadzah Fatimah Az-Zahra, S.Pd",
    role: "Wakil Kepala Kurikulum",
    subject: "Tahfidz Al-Quran",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&facepad=2",
  },
  {
    name: "Ustadz Muhammad Rizki, S.Ag",
    role: "Koordinator Tahfidz",
    subject: "Fiqih & Aqidah",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&facepad=2",
  },
  {
    name: "Ustadzah Aisyah Putri, M.Pd",
    role: "Guru Senior",
    subject: "Bahasa Arab",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&facepad=2",
  },
]

export function Teachers() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Tim Pengajar
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Guru-Guru Terbaik Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tenaga pendidik profesional dan berpengalaman yang berdedikasi tinggi dalam mendidik generasi muslim berkualitas.
          </p>
        </motion.div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-background rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-all hover:-translate-y-1">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <div className="flex items-center gap-2 text-primary-foreground">
                      <GraduationCap className="w-4 h-4" />
                      <span className="text-xs md:text-sm font-medium">{teacher.subject}</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-3 md:p-4">
                  <h3 className="font-semibold text-foreground text-sm md:text-base line-clamp-1">
                    {teacher.name}
                  </h3>
                  <p className="text-xs md:text-sm text-primary mt-0.5">{teacher.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
