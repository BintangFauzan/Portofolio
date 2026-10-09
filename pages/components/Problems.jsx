export default function Problems() {
  return (
    <section id="masalah" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-teal-600 dark:text-teal-400 font-bold text-sm tracking-widest uppercase">01 / Masalah yang Saya Selesaikan</span>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Masalah yang Sering Dihadapi Bisnis dan Organisasi</h3>
        <p className="text-slate-600 dark:text-slate-300">Proses manual memperlambat kerja tim dan membuat pelanggan atau anggota menunggu lebih lama.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-rose-100 dark:bg-rose-950/50 text-rose-600 flex items-center justify-center font-bold text-lg">01</div>
          <h4 className="font-bold text-lg">Pencatatan Manual</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Data dicatat di kertas atau tersebar di chat, mudah hilang, dan lama direkap saat dibutuhkan.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-950/50 text-amber-600 flex items-center justify-center font-bold text-lg">02</div>
          <h4 className="font-bold text-lg">Data Tersebar di Banyak File</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Informasi tersimpan di berbagai file Excel yang berbeda-beda, sehingga laporan cepat sulit dibuat dan datanya sering tidak sinkron.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950/50 text-blue-600 flex items-center justify-center font-bold text-lg">03</div>
          <h4 className="font-bold text-lg">Pendaftaran, Booking, dan Antrean Ribet</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Pelanggan atau anggota harus menunggu lama dan admin kewalahan menangani pendaftaran, pemesanan, atau antrean secara manual.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-950/50 text-purple-600 flex items-center justify-center font-bold text-lg">04</div>
          <h4 className="font-bold text-lg">Laporan Tidak Real-Time</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Pemilik atau pengelola tidak bisa memantau kondisi usaha atau lembaga kapan saja karena laporan baru ada setelah direkap manual.</p>
        </div>
      </div>
    </section>
  );
}
