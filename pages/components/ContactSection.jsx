import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

export default function ContactSection({ waLink }) {
  return (
    <section id="kontak" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-teal-600 dark:text-teal-400 font-bold text-sm tracking-widest uppercase">Kontak Utama</span>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Mari Diskusikan Kebutuhan Digital Instansi Anda</h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Hubungi saya melalui WhatsApp untuk respon cepat, atau kirimkan pesan lewat formulir di samping. Berbasis di Pekanbaru, siap berkolaborasi untuk sekolah dan yayasan di seluruh Indonesia.
          </p>
          <div className="pt-4 space-y-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all text-lg"
            >
              <BsWhatsapp className="text-2xl" /> Chat WhatsApp Langsung
            </a>
            <div className="flex gap-4 pt-2 text-2xl text-slate-600 dark:text-slate-400">
              <a href="https://instagram.com/[ISI: username]" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600"><AiFillInstagram /></a>
              <a href="https://linkedin.com/in/[ISI: username]" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600"><AiFillLinkedin /></a>
              <a href="https://github.com/[ISI: username]" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600"><AiFillGithub /></a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
          <form onSubmit={(e) => { e.preventDefault(); alert("Formulir terkirim! (Placeholder - silakan hubungi via WhatsApp untuk respon instan)."); }} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Nama / Perwakilan Instansi</label>
              <input type="text" placeholder="Contoh: Bpk. Ahmad (Yayasan Al-Huda)" required className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Nomor WhatsApp / Email</label>
              <input type="text" placeholder="Contoh: 0812XXXXXXXX" required className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Pesan / Kebutuhan Sistem</label>
              <textarea rows="4" placeholder="Ceritakan kebutuhan sistem sekolah/yayasan Anda..." required className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 rounded-xl shadow-md transition-all">
              Kirim Pesan Kolaborasi
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
