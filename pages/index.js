import Head from 'next/head';
import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import IconChrome from "./components/PartComponents/IconChrome";
import MyProject from "./components/MyProject";
import deved from '../public/Profil.jpg';
import Image from 'next/image';
import web1 from '../public/Perpustakaan.png';
import web2 from '../public/TTS.jpeg';
import web3 from '../public/Letter.png';
import webInventori from '../public/Web Invetori.png';
import webCuaca from '../public/Vite + React - Google Chrome 5_8_2025 4_38_31 PM.png'
import webInventoriBarangReact from '../public/Web Inventori Barang React.png'
import IconGithub from "./components/PartComponents/IconGithub";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">BintangFauzan</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl" />
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8" href="https://drive.google.com/file/d/1tIBrScUWI50wm2DfmUAQYfZ52L3ljIyt/view?usp=sharing">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">Bintang Fauzan Dyan</h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Developer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Seorang lulusan dengan gelar Sarjana dalam Ilmu Komputer yang antusias dan siap memulai karir di bidang teknologi informasi. Memiliki pemahaman dasar tentang pengembangan, pemrograman, dan pengembangan perangkat lunak, serta
              analisis sistem. Mampu bekerja dalam tim dan memiliki kemampuan belajar yang cepat. Berkomitmen untuk mengembangkan keterampilan dan berkontribusi pada proyek-proyek yang menantang.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.instagram.com/bintang_fauzan14?igsh=NGpxb3JieW50ODFt">
                <AiFillInstagram />
              </a>
              <a href="https://www.linkedin.com/in/bintang-fauzan-62a760203" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
              {/* <AiFillYoutube /> */}
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Project</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Sebagai lulusan Teknik Informatika, saya sangat antusias untuk memulai perjalanan profesional saya di dunia teknologi. Meskipun saya belum memiliki pengalaman kerja formal, saya telah terlibat dalam berbagai proyek akademis
              dan pribadi yang memungkinkan saya untuk mengembangkan keterampilan dalam pengembangan perangkat lunak, pemrograman, dan analisis sistem. Saya berkomitmen untuk terus belajar dan beradaptasi dengan teknologi terbaru, serta
              siap untuk berkontribusi dalam proyek-proyek yang menantang. Saya percaya bahwa dengan semangat dan dedikasi, saya dapat memberikan nilai tambah bagi tim dan perusahaan yang saya bergabung.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <MyProject
                src={web1}
                h2={'Perpustakaan Digital'}
                p={'Membuat sistem perpustakaan dengan Vue sebagai front end dan php sebagai backend nya'}
            >
              <IconGithub href={'https://github.com/BintangFauzan/UAS_PEMWEB_02'}/>
            </MyProject>
            <MyProject
                src={web2}
                h2={'Text To Speech Bahasa Minang'}
                p={'Membuat Sistem Text To Speech Bahasa Minang Dengan Menggunakan Metode VITS'}
                hrefGithub={'https://colab.research.google.com/drive/1VrueknvZBkWUxxGbbLEdcZ8yZZjkCEg7#scrollTo=TSkVk0MpUGpi'}
            >
              <IconChrome href={'https://colab.research.google.com/drive/1w1lDT_ATJM7PbIguZyUb-k1RBzJa8X3u?usp=sharing'}/>
              <IconGithub href={"https://colab.research.google.com/drive/1VrueknvZBkWUxxGbbLEdcZ8yZZjkCEg7#scrollTo=TSkVk0MpUGpi"}/>

            </MyProject>
            <MyProject
                src={web3}
                h2={'Making A Game'}
                p={'Membuat Game RPG 2D Dengan Menggunakan RPG Maker MV'}
                hrefGithub={'https://github.com/BintangFauzan/Inventori'}
            >
              <IconChrome href={'https://bintangfauzan.github.io/The-Letter/'}/>
              <IconGithub href={'https://github.com/BintangFauzan/The-Letter'}/>
            </MyProject>
            <MyProject
                src={webInventori}
                h2={'Web inventori'}
                href={'https://github.com/BintangFauzan/The-Letter'}
                p={'\'Membuat web inventori barang dengan menggunakna laravel 11, \' +\n' +
                    '                    \'web sudah memiliki fungsi login serta logika untuk perhitungan penambahan barang'}
            >
             <IconGithub src={'https://github.com/BintangFauzan/Inventori'}/>
            </MyProject>
            <MyProject
                src={webCuaca}
                h2={'Web Perkiraan Cuaca Dengan React'}
                p={'Membuat Web Perkiraan Cuaca Dengan React dimana sudah terhubung dengan API dari https://www.weatherapi.com/' +
                    'API akan berakhir pada 9 mei 2025'}
            >
              <IconGithub href={'https://github.com/BintangFauzan/React-Weather'}/>
              <IconChrome href={'https://perkiraan-cuaca-by-bintang.netlify.app/'}/>
            </MyProject>
            <MyProject
                src={webInventoriBarangReact}
                h2={'Web inventori Barang React dengan laravel 11 sebagai backend'}
                p={'Membuat Web inventori barang menggunakan react di frontend dan backend menggunakan laravel 11,' +
                    'Dimana API sudah bisa untuk tambah, edit, hapus'}
            >
              <IconGithub src={'https://github.com/BintangFauzan/Inventori-Barang-React'}/>
            </MyProject>
          </div>
        </section>
      </main>
    </div>
  );
}
