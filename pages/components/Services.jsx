import { BsWhatsapp, BsCheckCircleFill } from "react-icons/bs";

export default function Services({ waLink }) {
  return (
    <section id="layanan" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-teal-600 dark:text-teal-400 font-bold text-sm tracking-widest uppercase">03 / Pilihan Investasi</span>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Layanan & Paket Pembuatan Web App</h3>
        <p className="text-slate-600 dark:text-slate-400">Pilih paket sesuai skala kebutuhan instansi atau yayasan Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col justify-between shadow-sm relative">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-teal-600 uppercase">Starter</span>
              <h4 className="text-2xl font-bold mt-1">Paket Profil & SPMB Sederhana</h4>
              <p className="text-sm text-slate-500 mt-2">Cocok untuk TK/TPQ atau sekolah kecil yang baru memulai digitalisasi.</p>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Rp [ISI: X.XXX.000] <span className="text-xs font-normal text-slate-500">/ project</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2"><BsCheckCircleFill className="text-teal-600" /> Website Profil Sekolah Resmi</li>
              <li className="flex items-center gap-2"><BsCheckCircleFill className="text-teal-600" /> Formulir Pendaftaran (SPMB) Online</li>
              <li className="flex items-center gap-2"><BsCheckCircleFill className="text-teal-600" /> Rekap Data ke WhatsApp / Database</li>
              <li className="flex items-center gap-2"><BsCheckCircleFill className="text-teal-600" /> Desain Responsif Mobile</li>
            </ul>
          </div>
          <div className="pt-8">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <BsWhatsapp /> Pilih Paket Starter
            </a>
          </div>
        </div>

        {/* Standar (Featured) */}
        <div className="bg-white dark:bg-slate-900 border-2 border-teal-600 rounded-3xl p-8 flex flex-col justify-between shadow-xl relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
            Paling Diminati
          </div>
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-teal-600 uppercase">Standar</span>
              <h4 className="text-2xl font-bold mt-1">Sistem Sekolah Terpadu (SIMELA)</h4>
              <p className="text-sm text-slate-500 mt-2">Cocok untuk sekolah menengah / yayasan dengan multi-fitur akademik.</p>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Rp [ISI: X.XXX.000] <span className="text-xs font-normal text-slate-500">/ project</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2"><BsCheckCircleFill className="text-teal-600" /> Semua fitur Paket Starter</li>
              <li className="flex items-center gap-2"><BsCheckCircleFill className="text-teal-600" /> Manajemen Siswa & Guru (Multi-Role)</li>
              <li className="flex items-center gap-2"><BsCheckCircleFill className="text-teal-600" /> Absensi & Rekap Nilai Akademik</li>
              <li className="flex items-center gap-2"><BsCheckCircleFill className="text-teal-600" /> Dashboard Admin & Laporan Lengkap</li>
            </ul>
          </div>
          <div className="pt-8">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-teal-600/20 transition-all"
            >
              <BsWhatsapp /> Pilih Paket Standar
            </a>
          </div>
        </div>

        {/* Kustom */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col justify-between shadow-sm relative">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-teal-600 uppercase">Kustom</span>
              <h4 className="text-2xl font-bold mt-1">Enterprise / Yayasan Kompleks</h4>
              <p className="text-sm text-slate-500 mt-2">Solusi khusus untuk yayasan besar dengan banyak cabang atau integrasi khusus.</p>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Mulai Rp [ISI: X.XXX] <span className="text-xs font-normal text-slate-500">/ nego</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2"><BsCheckCircleFill className="text-teal-600" /> Arsitektur Sistem Sesuai Permintaan</li>
              <li className="flex items-center gap-2"><BsCheckCircleFill className="text-teal-600" /> Integrasi Pembayaran / Payment Gateway</li>
              <li className="flex items-center gap-2"><BsCheckCircleFill className="text-teal-600" /> Mobile App Pendukung (Opsional)</li>
              <li className="flex items-center gap-2"><BsCheckCircleFill className="text-teal-600" /> Pendampingan & Training Staff Lengkap</li>
            </ul>
          </div>
          <div className="pt-8">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <BsWhatsapp /> Konsultasikan Kustom
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
