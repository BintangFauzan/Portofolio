export default function Workflow() {
  return (
    <section id="cara-kerja" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-teal-600 dark:text-teal-400 font-bold text-sm tracking-widest uppercase">04 / Alur Kolaborasi</span>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Bagaimana Kita Bekerja Sama?</h3>
        <p className="text-slate-600 dark:text-slate-400">Proses terstruktur dari awal konsultasi hingga sistem siap digunakan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-950/50 text-teal-600 flex items-center justify-center font-bold text-lg">1</div>
          <h4 className="font-bold text-base">Konsultasi Kebutuhan</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Diskusi via WhatsApp atau pertemuan untuk memahami alur kerja dan kendala di sekolah/yayasan Anda.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-950/50 text-teal-600 flex items-center justify-center font-bold text-lg">2</div>
          <h4 className="font-bold text-base">Desain & Pengembangan</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Penyusunan purwarupa (prototype) dan pembuatan sistem dengan teknologi web app pilihan yang responsif.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-950/50 text-teal-600 flex items-center justify-center font-bold text-lg">3</div>
          <h4 className="font-bold text-base">Uji Coba & Revisi</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Instansi mencoba sistem secara langsung, memastikan seluruh fitur berjalan lancar sesuai harapan.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-950/50 text-teal-600 flex items-center justify-center font-bold text-lg">4</div>
          <h4 className="font-bold text-base">Serah Terima & Dukungan</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Peluncuran live sistem, pelatihan singkat untuk admin/operator, serta dukungan maintenance berkelanjutan.</p>
        </div>
      </div>
    </section>
  );
}
