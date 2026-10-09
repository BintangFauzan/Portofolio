import { useState } from "react";
import Image from "next/image";
import spmbImg from "../../public/spmb.png";
import simelaImg from "../../public/simela.png";
import rospaImg from "../../public/rospa.png";
import surveyImg from "../../public/survey_360.png";

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("spmb");

  return (
    <section id="studi-kasus" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-teal-600 dark:text-teal-400 font-bold text-sm tracking-widest uppercase">02 / Portofolio Teruji</span>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Studi Kasus Proyek Nyata</h3>
        <p className="text-slate-600 dark:text-slate-400">Implementasi sistem yang telah teruji di sekolah, yayasan, dan lembaga sosial.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {[
          { id: "spmb", label: "SPMB (Pendaftaran Siswa)" },
          { id: "simela", label: "SIMELA (Sistem Sekolah)" },
          { id: "rospa", label: "Rospa (Donasi Yayasan)" },
          { id: "survey", label: "Survey 360" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              activeTab === tab.id
                ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-teal-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm">
        {activeTab === "spmb" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded bg-teal-50 dark:bg-teal-950 text-teal-600 font-bold text-xs">LIVE SYSTEM</div>
              <h4 className="text-2xl md:text-3xl font-bold">SPMB — Sistem Penerimaan Siswa Baru</h4>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                <p><strong className="text-slate-900 dark:text-white">Tantangan:</strong> Calon pendaftar membludak saat tahun ajaran baru, panitia kewalahan memeriksa berkas fisik satu per satu secara manual.</p>
                <p><strong className="text-slate-900 dark:text-white">Solusi:</strong> Membangun platform web pendaftaran online terpusat dengan upload berkas mandiri, verifikasi status kelulusan otomatis, dan dashboard panitia.</p>
                <p><strong className="text-slate-900 dark:text-white">Dampak:</strong> Proses pendaftaran 70% lebih cepat, zero antrean fisik di loket sekolah, dan rekap data calon siswa langsung tersusun rapi di database.</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {["CodeIgniter 3", "MySQL", "Tailwind CSS", "JavaScript"].map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">{tech}</span>
                ))}
              </div>
              <div>
                <a href="https://www.ppdb.khoiruummah.sch.id/LandingPage/tampil" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold text-sm">
                  Kunjungi Live Site →
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 bg-slate-100 dark:bg-slate-800 rounded-2xl p-4 overflow-hidden shadow-inner flex justify-center">
              <Image src={spmbImg} alt="SPMB Screenshot" className="rounded-xl object-cover max-h-72" />
            </div>
          </div>
        )}

        {activeTab === "simela" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded bg-teal-50 dark:bg-teal-950 text-teal-600 font-bold text-xs">TERPASANG DI 3 SEKOLAH</div>
              <h4 className="text-2xl md:text-3xl font-bold">SIMELA — Sistem Manajemen Sekolah</h4>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                <p><strong className="text-slate-900 dark:text-white">Tantangan:</strong> Pengelolaan data akademik, absensi siswa, dan rekapitulasi nilai masih menggunakan Excel terpisah antar guru.</p>
                <p><strong className="text-slate-900 dark:text-white">Solusi:</strong> Mengembangkan SIMELA sebagai sistem informasi manajemen terpadu yang menghubungkan admin sekolah, guru, dan rekapitulasi nilai dalam satu platform.</p>
                <p><strong className="text-slate-900 dark:text-white">Dampak:</strong> Telah diandalkan di 3 sekolah berbeda, memangkas waktu rekap rapor hingga 80%, dan transparansi data akademik meningkat drastis.</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {["CodeIgniter 3", "MySQL", "Bootstrap"].map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">{tech}</span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 bg-slate-100 dark:bg-slate-800 rounded-2xl p-4 overflow-hidden shadow-inner flex justify-center">
              <Image src={simelaImg} alt="SIMELA Screenshot" className="rounded-xl object-cover max-h-72" />
            </div>
          </div>
        )}

        {activeTab === "rospa" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded bg-teal-50 dark:bg-teal-950 text-teal-600 font-bold text-xs">LEMBAGA SOSIAL</div>
              <h4 className="text-2xl md:text-3xl font-bold">Rospa — Platform Donasi & Infak Yayasan</h4>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                <p><strong className="text-slate-900 dark:text-white">Tantangan:</strong> Pencatatan donatur manual via pesan WhatsApp membuat pengurus kesulitan memantau aliran dana secara transparan.</p>
                <p><strong className="text-slate-900 dark:text-white">Solusi:</strong> Membangun web portal donasi dengan sistem konfirmasi otomatis, kalkulasi total dana terkumpul, dan laporan publik yang transparan.</p>
                <p><strong className="text-slate-900 dark:text-white">Dampak:</strong> Kepercayaan donatur meningkat karena pelaporan real-time, admin yayasan menghemat waktu rekap harian.</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {["CodeIgniter 3", "MySQL", "Real-time Updates"].map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">{tech}</span>
                ))}
              </div>
              <div>
                <a href="https://rospa.donasirumahtahfizh.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold text-sm">
                  Kunjungi Live Site →
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 bg-slate-100 dark:bg-slate-800 rounded-2xl p-4 overflow-hidden shadow-inner flex justify-center">
              <Image src={rospaImg} alt="Rospa Screenshot" className="rounded-xl object-cover max-h-72" />
            </div>
          </div>
        )}

        {activeTab === "survey" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded bg-teal-50 dark:bg-teal-950 text-teal-600 font-bold text-xs">ANALISIS INSTITUSI</div>
              <h4 className="text-2xl md:text-3xl font-bold">Survey 360 — Evaluasi Kinerja & Kepuasan</h4>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                <p><strong className="text-slate-900 dark:text-white">Tantangan:</strong> Evaluasi kepuasan orang tua murid dan kinerja guru masih menggunakan kuesioner kertas yang lama direkap.</p>
                <p><strong className="text-slate-900 dark:text-white">Solusi:</strong> Mengembangkan platform Survey 360 berbasis web untuk pengumpulan feedback multi-arah dengan grafik analitik otomatis.</p>
                <p><strong className="text-slate-900 dark:text-white">Dampak:</strong> Hasil survei langsung ter-generate dalam bentuk laporan visual yang siap dievaluasi oleh kepala yayasan.</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Laravel 11", "React", "MySQL", "Chart.js"].map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">{tech}</span>
                ))}
              </div>
              <div>
                <a href="https://survey360.generasiumatterbaik.com/login" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold text-sm">
                  Kunjungi Live Site →
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 bg-slate-100 dark:bg-slate-800 rounded-2xl p-4 overflow-hidden shadow-inner flex justify-center">
              <Image src={surveyImg} alt="Survey 360 Screenshot" className="rounded-xl object-cover max-h-72" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
