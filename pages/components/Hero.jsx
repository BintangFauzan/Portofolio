import Image from "next/image";
import { BsWhatsapp, BsArrowRight } from "react-icons/bs";
import deved from "../../public/Profil.jpg";

export default function Hero({ waLink }) {
  return (
    <section className="py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider border border-teal-200 dark:border-teal-800">
          <span>Pekanbaru, Riau</span> • <span>Fullstack Web Developer</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Rapikan pekerjaan manual Anda <span className="text-teal-600 dark:text-teal-400">jadi satu aplikasi</span>.
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          Pendaftaran, pencatatan, laporan, sampai pembayaran bisa dikerjakan lewat satu aplikasi yang dibuat sesuai cara kerja Anda.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
          >
            <BsWhatsapp className="text-xl" /> Chat WhatsApp Sekarang
          </a>
          <a
            href="#studi-kasus"
            className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 font-semibold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all"
          >
            Lihat Studi Kasus <BsArrowRight />
          </a>
        </div>

        {/* Trust numbers */}
        {/* <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div>
            <p className="text-3xl font-extrabold text-teal-600 dark:text-teal-400">4+</p>
            <p className="text-xs text-slate-500 mt-1">Aplikasi Sudah Dipakai</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-teal-600 dark:text-teal-400">3</p>
            <p className="text-xs text-slate-500 mt-1">Lembaga Memakai Aplikasi Saya</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-teal-600 dark:text-teal-400">Khusus</p>
            <p className="text-xs text-slate-500 mt-1">Dibuat Sesuai Cara Kerja Anda</p>
          </div>
        </div>*/}
      </div>

      <div className="lg:col-span-5 flex justify-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-teal-500">
          <Image src={deved} layout="fill" objectFit="cover" alt="Bintang Fauzan Dyan" />
        </div>
      </div>
    </section>
  );
}
