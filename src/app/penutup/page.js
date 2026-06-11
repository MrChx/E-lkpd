"use client";

import Image from "next/image";
import Link from "next/link";

export default function PenutupPage() {
  const handleKirimWA = () => {
    const rawSiswa = sessionStorage.getItem("siswaData");
    const rawApersepsi = sessionStorage.getItem("apersepsiData");
    const rawAnalisis = sessionStorage.getItem("analisisData");
    const rawEvaluasi = sessionStorage.getItem("evaluasiData");
    const rawRefleksi = sessionStorage.getItem("refleksiData");

    const siswa = rawSiswa ? JSON.parse(rawSiswa) : { nama: "-", kelas: "-" };
    const apersepsi = rawApersepsi ? JSON.parse(rawApersepsi) : { q1: "-", q2: "-" };
    const analisis = rawAnalisis ? JSON.parse(rawAnalisis) : { q1: "-", q2: "-", q3: "-" };
    const evaluasi = rawEvaluasi ? JSON.parse(rawEvaluasi) : { score: 0 };
    const refleksi = rawRefleksi ? JSON.parse(rawRefleksi) : { q1: "-", q2: "-" };

    const text = `Halo Bapak/Ibu Guru, saya telah menyelesaikan kegiatan E-LKPD Interaktif Fotosintesis. Berikut adalah hasil rekap pekerjaan saya:

*DATA DIRI*
Nama: ${siswa.nama}
Kelas: ${siswa.kelas}

*1. APERSEPSI*
• Mengapa tumbuhan membutuhkan cahaya matahari?
Jawaban: ${apersepsi.q1}
• Dari mana tumbuhan mendapatkan makanannya?
Jawaban: ${apersepsi.q2}

*2. ANALISIS SIMULASI*
• Apa yang terjadi jika jumlah CO2 ditambah?
Jawaban: ${analisis.q1}
• Apa hasil yang dihasilkan pada Reaksi Terang?
Jawaban: ${analisis.q2}
• Apa fungsi cahaya matahari dalam fotosintesis?
Jawaban: ${analisis.q3}

*3. EVALUASI (KUIS)*
Skor Akhir: *${evaluasi.score}/100*

*4. REFLEKSI*
• Apa yang kamu pelajari hari ini?
Jawaban: ${refleksi.q1}
• Bagian mana yang paling sulit bagimu?
Jawaban: ${refleksi.q2}

Terima kasih Bapak/Ibu!`;

    const encodedText = encodeURIComponent(text);
    // WhatsApp URL with the teacher's phone number
    const waUrl = `https://wa.me/6285824035076?text=${encodedText}`;
    window.open(waUrl, "_blank");
  };

  return (
    <main className="relative w-full min-h-screen min-h-[100dvh] bg-green-50 overflow-x-hidden font-quicksand flex flex-col items-center justify-start md:justify-center p-4 pb-32">
      {/* Background Image */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Image
          src="/bg-nature.png"
          alt="Nature Background"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-3xl bg-white/95 backdrop-blur-sm border-2 border-green-200 shadow-2xl rounded-[2rem] p-6 md:p-12 pt-14 mt-12 mb-20 md:mb-12">

        {/* Title Badge */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-700 text-white font-fredoka font-bold tracking-wide text-xl md:text-3xl py-3 px-12 rounded-full shadow-lg border-4 border-white whitespace-nowrap">
          Kesimpulan
        </div>

        <div className="text-center text-slate-800 text-lg md:text-xl font-bold leading-relaxed mb-10 mt-4 space-y-2">
          <p>
            Fotosintesis adalah proses penting bagi kehidupan.
          </p>
          <p>
            Tumbuhan menghasilkan makanan sendiri dengan bantuan cahaya matahari, air, dan CO₂.
          </p>
          <p>
            Oksigen yang dihasilkan sangat dibutuhkan oleh makhluk hidup.
          </p>
        </div>

        {/* Illustration */}
        <div className="flex flex-col items-center justify-center mb-10 relative">
          <div className="text-[100px] md:text-[140px] drop-shadow-xl z-10 relative leading-none mb-[-20px] md:mb-[-30px]">
            🌱
          </div>
          <div className="w-48 md:w-64 h-12 md:h-16 bg-[#5D4037] rounded-[100%] shadow-[inset_0_-8px_0_rgba(0,0,0,0.2)] z-0"></div>
        </div>

      </div>

      {/* Bottom Navigation Buttons */}
      <div className="fixed bottom-6 w-full max-w-4xl px-6 flex justify-between z-20 pointer-events-none">

        {/* Left Button - KIRIM */}
        <button
          onClick={handleKirimWA}
          className="pointer-events-auto bg-green-600 hover:bg-green-500 text-white font-bold text-lg md:text-xl py-3 px-8 md:px-10 rounded-full border-4 border-white shadow-lg btn-3d tracking-wide transition-all flex items-center gap-2"
        >
          KIRIM
        </button>

        {/* Right Button - KELUAR */}
        <Link
          href="/"
          className="pointer-events-auto bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg md:text-xl py-3 px-8 md:px-10 rounded-full border-4 border-white shadow-lg btn-3d tracking-wide transition-all"
        >
          KELUAR
        </Link>

      </div>

    </main>
  );
}
