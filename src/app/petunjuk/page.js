"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PetunjukPage() {
  const instructions = [
    {
      icon: "☀️ 🌙",
      title: "Pilih proses",
      desc: "Reaksi Terang atau Reaksi Gelap.",
    },
    {
      icon: "☁️ 💧",
      title: "Klik tombol + atau -",
      desc: "untuk menambah atau mengurangi bahan (CO₂ dan H₂O).",
    },
    {
      icon: "🍃",
      title: "Amati perubahan pada animasi",
      desc: "dan hasil yang dihasilkan.",
    },
    {
      icon: "📝",
      title: "Kerjakan kuis di akhir kegiatan",
      desc: "untuk menguji pemahamanmu.",
    },
  ];

  return (
    <main className="relative w-full min-h-screen bg-green-50 overflow-x-hidden font-quicksand flex flex-col items-center p-4 pb-32 md:pt-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bg-nature.png" 
          alt="Nature Background" 
          fill
          priority
          className="object-cover object-center opacity-60"
        />
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-4xl bg-white/95 backdrop-blur-sm border-2 border-green-200 shadow-2xl rounded-[2rem] p-6 md:p-10 pt-12 mt-12 md:mt-8">
        
        {/* Title Badge (Overlapping top) */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-700 text-white font-fredoka font-bold tracking-wide text-xl md:text-3xl py-3 px-8 rounded-full shadow-lg border-4 border-white whitespace-nowrap">
          Petunjuk Penggunaan
        </div>

        {/* Instructions List */}
        <div className="flex flex-col gap-6 md:gap-8 mt-4">
          {instructions.map((item, index) => (
            <div key={index} className="flex items-start md:items-center gap-4 md:gap-6 pb-6 border-b-2 border-gray-100 last:border-0 last:pb-0">
              {/* Icon Container */}
              <div className="text-4xl md:text-5xl flex-shrink-0 w-16 md:w-24 text-center">
                {item.icon}
              </div>
              
              {/* Text Container */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg md:text-2xl text-slate-800">
                    {index + 1}. {item.title}
                  </span>
                </div>
                <span className="text-base md:text-xl text-slate-600 font-medium md:pl-6">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Page Button */}
      <div className="fixed bottom-6 right-6 z-20">
        <Link 
          href="/apersepsi" 
          className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white p-4 md:p-5 rounded-full border-4 border-white btn-3d-circle transition-all animate-bounce"
        >
          <ArrowRight size={40} strokeWidth={3} />
        </Link>
      </div>
    </main>
  );
}
