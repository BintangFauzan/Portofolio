export default function FAQ() {
  return (
    <section id="faq" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-teal-600 dark:text-teal-400 font-bold text-sm tracking-widest uppercase">05 / Tanya Jawab</span>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Pertanyaan yang Sering Diajukan</h3>
        <p className="text-slate-600 dark:text-slate-400">Informasi seputar teknis pengerjaan, biaya, dan pemeliharaan sistem.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {[
          {
            q: "Berapa lama waktu pengerjaan sebuah web app sekolah?",
            a: "Tergantung kompleksitas paket. Paket Starter biasanya memakan waktu 1–2 minggu, sedangkan Paket Standar / SIMELA memakan waktu 2–4 minggu."
          },
          {
            q: "Bagaimana sistem pembayarannya?",
            a: "Pembayaran dibagi menjadi beberapa termin yang transparan (mis. DP di awal, lalu pelunasan setelah sistem selesai dan siap di-deploy)."
          },
          {
            q: "Apakah sekolah perlu menyiapkan hosting dan domain sendiri?",
            a: "Tidak harus. Saya bisa bantu mencarikan dan mengkonfigurasi domain serta hosting terbaik, atau menggunakan server milik sekolah jika sudah ada."
          },
          {
            q: "Bagaimana dengan maintenance atau perbaikan error setelah website rilis?",
            a: "Setiap paket sudah mencakup masa garansi dan dukungan teknis pemeliharaan agar sistem tetap berjalan aman dan lancar."
          },
          {
            q: "Apakah hak kepemilikan kode ada di pihak sekolah?",
            a: "Ya, seluruh source code dan aset sistem menjadi hak milik instansi/yayasan setelah proyek selesai."
          },
          {
            q: "Apakah disediakan revisi selama proses pembuatan?",
            a: "Tentu, setiap tahap memiliki kesempatan revisi agar hasil akhir benar-benar sesuai dengan SOP dan kebutuhan lembaga."
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-2">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white">{item.q}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
