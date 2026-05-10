"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BookOpen, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Beranda" },
  { href: "#profile", label: "Profil" },
  { href: "/informasi", label: "Informasi" },
  { href: "#gallery", label: "Galeri" },
  { href: "#contact", label: "Kontak" },
]

const programs = [
  { href: "#", label: "Pendidikan Anak Usia Dini" },
  { href: "#", label: "Sekolah Dasar Islam" },
  { href: "#", label: "Program Tahfidz" },
  { href: "#", label: "Ekstrakurikuler" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="text-lg font-bold text-background block">YPI Adnani</span>
                <span className="text-xs text-background/60">Pendidikan Islam Berkualitas</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-4 max-w-xs">
              Membentuk generasi Qurani yang berilmu, berakhlak mulia, dan siap menghadapi tantangan masa depan.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-xl flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-base font-semibold text-background mb-4">Link Cepat</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-base font-semibold text-background mb-4">Program Kami</h4>
            <ul className="space-y-2.5">
              {programs.map((program) => (
                <li key={program.label}>
                  <Link
                    href={program.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-base font-semibold text-background mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Jl. Pendidikan No. 123, Kota Jakarta, Indonesia 12345</span>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@ypiadnani.sch.id</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-background/60 text-xs md:text-sm">
              © {new Date().getFullYear()} Yayasan Pendidikan Islam Adnani. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
