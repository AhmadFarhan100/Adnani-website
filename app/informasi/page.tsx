"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Bell, CalendarDays, ChevronRight, BookOpen } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const newsItems = [
  {
    id: 1,
    title: "Penerimaan Siswa Baru Tahun Ajaran 2025/2026",
    excerpt: "YPI Adnani membuka pendaftaran siswa baru untuk semua jenjang pendidikan. Daftarkan putra-putri Anda sekarang!",
    date: "10 Mei 2026",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    category: "Pendaftaran",
  },
  {
    id: 2,
    title: "Wisuda Tahfidz Al-Quran Angkatan ke-15",
    excerpt: "Alhamdulillah, 25 siswa berhasil menyelesaikan program hafalan Al-Quran 30 juz.",
    date: "5 Mei 2026",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop",
    category: "Prestasi",
  },
  {
    id: 3,
    title: "Juara Olimpiade Sains Tingkat Provinsi",
    excerpt: "Tim sains YPI Adnani berhasil meraih juara 1 dalam Olimpiade Sains tingkat provinsi.",
    date: "28 April 2026",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    category: "Prestasi",
  },
  {
    id: 4,
    title: "Pelatihan Guru Profesional 2026",
    excerpt: "Meningkatkan kualitas pengajaran melalui pelatihan intensif untuk seluruh guru.",
    date: "20 April 2026",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&h=400&fit=crop",
    category: "Kegiatan",
  },
]

const announcements = [
  {
    id: 1,
    title: "Libur Hari Raya Idul Adha 1447 H",
    date: "15 Mei 2026",
    description: "Sekolah libur mulai tanggal 15-20 Mei 2026 dalam rangka Hari Raya Idul Adha.",
  },
  {
    id: 2,
    title: "Jadwal Ujian Akhir Semester",
    date: "1 Juni 2026",
    description: "Ujian akhir semester akan dilaksanakan pada tanggal 1-7 Juni 2026.",
  },
  {
    id: 3,
    title: "Rapat Wali Murid",
    date: "25 Mei 2026",
    description: "Rapat wali murid akan diadakan pada Sabtu, 25 Mei 2026 pukul 08:00 WIB.",
  },
]

const events = [
  {
    id: 1,
    title: "Peringatan Isra Mi'raj",
    date: "27 Mei 2026",
    time: "08:00 - 12:00 WIB",
    location: "Aula Utama",
    description: "Ceramah dan dzikir bersama memperingati Isra Mi'raj Nabi Muhammad SAW.",
  },
  {
    id: 2,
    title: "Lomba Tahfidz Antar Kelas",
    date: "10 Juni 2026",
    time: "09:00 - 15:00 WIB",
    location: "Masjid Sekolah",
    description: "Kompetisi hafalan Al-Quran untuk seluruh siswa dari semua jenjang.",
  },
  {
    id: 3,
    title: "Festival Seni Islam",
    date: "20 Juni 2026",
    time: "08:00 - 17:00 WIB",
    location: "Lapangan Sekolah",
    description: "Pameran seni, pertunjukan nasyid, dan berbagai lomba kreatif.",
  },
]

export default function InformasiPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 bg-primary/5 islamic-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Informasi Terkini
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Berita & Informasi
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ikuti berita terbaru, pengumuman penting, dan kegiatan yang akan datang di YPI Adnani.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8 md:mb-12"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Berita Terbaru</h2>
              <p className="text-muted-foreground mt-1">Update terkini dari YPI Adnani</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {/* Featured News */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:row-span-2 group"
            >
              <div className="relative h-full bg-card rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-all">
                <div className="relative aspect-[16/10] md:aspect-auto md:h-1/2 overflow-hidden">
                  <Image
                    src={newsItems[0].image}
                    alt={newsItems[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {newsItems[0].category}
                    </span>
                  </div>
                </div>
                <div className="p-5 md:p-6 lg:p-8">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{newsItems[0].date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {newsItems[0].title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base mb-4">
                    {newsItems[0].excerpt}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>

            {/* Other News */}
            {newsItems.slice(1).map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 1) * 0.1 }}
                className="group"
              >
                <div className="flex flex-col sm:flex-row gap-4 bg-card rounded-2xl overflow-hidden shadow-md border border-border/50 hover:shadow-lg transition-all p-4">
                  <div className="relative w-full sm:w-32 md:w-40 aspect-[16/10] sm:aspect-square flex-shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {news.category}
                      </span>
                      <span className="text-muted-foreground text-xs flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {news.date}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm md:text-base">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm mt-1 line-clamp-2 flex-1">
                      {news.excerpt}
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1 text-primary font-medium text-xs md:text-sm mt-2 hover:gap-2 transition-all"
                    >
                      Baca
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements & Events */}
      <section className="py-12 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Announcements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Bell className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Pengumuman</h2>
                  <p className="text-muted-foreground text-sm">Informasi penting untuk diketahui</p>
                </div>
              </div>

              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <motion.div
                    key={announcement.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background rounded-2xl p-4 md:p-5 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-primary text-xs md:text-sm mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{announcement.date}</span>
                        </div>
                        <h3 className="font-semibold text-foreground text-sm md:text-base">
                          {announcement.title}
                        </h3>
                        <p className="text-muted-foreground text-xs md:text-sm mt-1">
                          {announcement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Events */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <CalendarDays className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Agenda Kegiatan</h2>
                  <p className="text-muted-foreground text-sm">Acara yang akan datang</p>
                </div>
              </div>

              <div className="space-y-4">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background rounded-2xl p-4 md:p-5 border border-border/50 hover:border-accent/30 transition-colors group"
                  >
                    <div className="flex gap-4">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <span className="text-lg md:text-xl font-bold text-primary group-hover:text-primary-foreground">
                          {event.date.split(" ")[0]}
                        </span>
                        <span className="text-xs text-primary group-hover:text-primary-foreground">
                          {event.date.split(" ")[1]}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-sm md:text-base line-clamp-1">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground mt-1">
                          <span>{event.time}</span>
                          <span>•</span>
                          <span>{event.location}</span>
                        </div>
                        <p className="text-muted-foreground text-xs md:text-sm mt-2 line-clamp-2">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
