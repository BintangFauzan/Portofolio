export default function Problems() {
  return (
    <section id="masalah" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-teal-600 dark:text-teal-400 font-bold text-sm tracking-widest uppercase">01 / Tantangan Operasional</span>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Masalah Sekolah & Yayasan yang Sering Dihadapi</h3>
        <p className="text-slate-600 dark:text-slate-300">Proses manual menghambat efisiensi administrasi dan menurunkan kepercayaan orang tua.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-rose-100 dark:bg-rose-950/50 text-rose-600 flex items-center justify-center font-bold text-lg">01</div>
          <h4 className="font-bold text-lg">Pendaftaran Manual</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Antrean panjang saat SPMB, rekap data formulir kertas yang berisiko hilang, dan konfirmasi pembayaran yang lambat.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-950/50 text-amber-600 flex items-center justify-center font-bold text-lg">02</div>
          <h4 className="font-bold text-lg">Rapor & Akademik Ribet</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Pengelolaan nilai, absensi, dan rekap data siswa yang masih terpisah-pisah antar wali kelas dan tata usaha.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950/50 text-blue-600 flex items-center justify-center font-bold text-lg">03</div>
          <h4 className="font-bold text-lg">Data Tersebar</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Arsip dokumen yayasan dan sekolah tersimpan di berbagai file Excel berbeda, menyulitkan pelaporan cepat.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-950/50 text-purple-600 flex items-center justify-center font-bold text-lg">04</div>
          <h4 className="font-bold text-lg">Donasi Tidak Transparan</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Kesulitan mengelola laporan donasi sosial atau infak yayasan secara real-time kepada para dermawan.</p>
        </div>
      </div>
    </section>
  );
}
