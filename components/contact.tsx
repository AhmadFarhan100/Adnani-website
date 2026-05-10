"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "Jl. Bakti Abri No.81, Panyabungan II, Kec. Panyabungan, Kabupaten Mandailing Natal",
    subContent: "Sumatera Utara 22976",
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "+62 812-7441-1106",
    subContent: "+62 812 7441-1106",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@ypiadnani.sch.id",
    subContent: "pendaftaran@ypiadnani.sch.id",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Kamis: 07:00 - 16:00",
    subContent: "Jumat: 07:00 - 11:30",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  const whatsappMessage = `
Nama: ${formData.name}
Email: ${formData.email}
Telepon: ${formData.phone}
Pesan: ${formData.message}
  `

  window.open(
    `https://wa.me/6281274411106?text=${encodeURIComponent(whatsappMessage)}`,
    "_blank"
  )

  setFormData({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
}

  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Hubungi Kami
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Tertarik Mendaftarkan Putra/Putri Anda?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hubungi kami untuk informasi lebih lanjut tentang pendaftaran dan program pendidikan di YPI Adnani.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 md:p-5 bg-background rounded-2xl border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <info.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base">{info.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm mt-1">{info.content}</p>
                  <p className="text-muted-foreground text-xs md:text-sm">{info.subContent}</p>
                </motion.div>
              ))}
            </div>

            {/* Map Embed */}
            <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.3428827068986!2d99.55799772119035!3d0.8574654099408423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302bbfc4b3d678fd%3A0x1933dc7f779eb9e9!2sYAYASAN%20PENDIDIKAN%20ISLAM%20ADNANI!5e0!3m2!1sid!2sid!4v1778423580655!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-background rounded-3xl p-6 md:p-8 shadow-xl border border-border/50"
            >
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                Kirim Pesan
              </h3>

              <div className="space-y-4 md:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="email@contoh.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      No. Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="+62 xxx xxxx xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Tuliskan pesan Anda..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Kirim Pesan
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}