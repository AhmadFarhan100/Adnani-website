"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { GraduationCap, Users, Trophy, BookOpen } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Siswa Aktif",
    description: "Siswa dari berbagai jenjang pendidikan",
  },
  {
    icon: GraduationCap,
    value: 50,
    suffix: "+",
    label: "Guru Profesional",
    description: "Tenaga pendidik berkualifikasi",
  },
  {
    icon: Trophy,
    value: 100,
    suffix: "+",
    label: "Prestasi",
    description: "Penghargaan tingkat regional & nasional",
  },
  {
    icon: BookOpen,
    value: 15,
    suffix: "+",
    label: "Tahun Pengalaman",
    description: "Mengabdi dalam pendidikan Islam",
  },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground">
      {count}{suffix}
    </span>
  )
}

export function Statistics() {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-primary-foreground text-sm font-medium mb-4">
            Statistik Kami
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Pencapaian YPI Adnani
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 text-center border border-white/20 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                </div>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <h3 className="text-base md:text-lg font-semibold text-primary-foreground mt-2">
                  {stat.label}
                </h3>
                <p className="text-xs md:text-sm text-primary-foreground/70 mt-1 hidden sm:block">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
