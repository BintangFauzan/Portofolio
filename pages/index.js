import Head from "next/head";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import CaseStudies from "./components/CaseStudies";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const waMessage = encodeURIComponent("Halo Bintang, saya ingin berkonsultasi mengenai pembuatan sistem informasi / web app untuk sekolah/yayasan kami.");
  const waLink = `https://wa.me/62XXXXXXXXXX?text=${waMessage}`;

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Bintang Fauzan Dyan — Jasa Pembuatan Web App Sekolah & Yayasan</title>
        <meta name="description" content="Sistem informasi sekolah dan yayasan yang rapi, cepat, dan mudah dipakai di Pekanbaru." />
      </Head>
      <main className="bg-slate-50 text-slate-800 px-6 dark:bg-slate-950 dark:text-slate-100 md:px-20 lg:px-32 transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} waLink={waLink} />
        <Hero waLink={waLink} />
        <Problems />
        <CaseStudies />
        {/* <Services waLink={waLink} />*/}
        <Workflow />
        <FAQ />
        <ContactSection waLink={waLink} />
        <Footer />
      </main>
    </div>
  );
}
