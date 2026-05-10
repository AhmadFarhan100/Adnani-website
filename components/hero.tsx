"use client"

import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, Users, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background */}
      <div className="absolute inset-0 islamic-pattern" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 right-10 w-32 h-32 md:w-64 md:h-64 bg-primary rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-20 left-10 w-40 h-40 md:w-72 md:h-72 bg-accent rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Pendidikan Islam Terpadu</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
            >
              Membentuk Generasi{" "}
              <span className="text-primary">Qurani</span>{" "}
              yang Berakhlak Mulia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty"
            >
              Yayasan Pendidikan Islam Adnani berkomitmen memberikan pendidikan berkualitas 
              yang memadukan ilmu pengetahuan modern dengan nilai-nilai Islam yang luhur.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Daftar Sekarang
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#profile"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-secondary-foreground font-medium rounded-xl hover:bg-secondary/80 transition-all"
              >
                Pelajari Lebih Lanjut
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 md:mt-12 grid grid-cols-3 gap-4 md:gap-8"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-1">
                  <Users className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xl md:text-2xl font-bold">500+</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">Siswa Aktif</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-1">
                  <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xl md:text-2xl font-bold">50+</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">Guru Profesional</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-1">
                  <Award className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xl md:text-2xl font-bold">15+</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">Tahun Pengalaman</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl rotate-3 scale-105" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop"
                  alt="Siswa sedang belajar"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 glass rounded-2xl p-3 md:p-4 shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-foreground">Akreditasi A</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground">Terakreditasi Nasional</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
