import { BsWhatsapp } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar({ darkMode, setDarkMode, waLink }) {
  return (
    <nav className="py-6 mb-8 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold bg-teal-600 text-white px-2.5 py-1 rounded">BFD</span>
        <h1 className="font-bold tracking-tight text-lg">Bintang Fauzan</h1>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
        <a href="#masalah" className="hover:text-teal-600">01 Masalah</a>
        <a href="#studi-kasus" className="hover:text-teal-600">02 Studi Kasus</a>
        <a href="#layanan" className="hover:text-teal-600">03 Layanan</a>
        <a href="#cara-kerja" className="hover:text-teal-600">04 Cara Kerja</a>
        <a href="#faq" className="hover:text-teal-600">05 FAQ</a>
      </div>
      <ul className="flex items-center gap-4">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-xl text-slate-600 dark:text-slate-300"
          />
        </li>
        <li>
          <a
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm transition-all"
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp /> WhatsApp
          </a>
        </li>
      </ul>
    </nav>
  );
}
