"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CapaianPage() {
  return (
    <main className="relative w-full min-h-screen min-h-[100dvh] bg-green-50 font-quicksand flex flex-col items-center p-4 pb-32 md:pt-10">
      {/* Background Image */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Image
          src="/bg-nature.png"
          alt="Nature Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-4xl bg-white/95 backdrop-blur-sm border-2 border-green-200 shadow-2xl rounded-[2rem] p-6 md:p-10 pt-14 md:pt-16 mt-12 md:mt-8">

        {/* Title Badge */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-700 text-white font-fredoka font-bold tracking-wide text-lg md:text-3xl py-3 px-8 rounded-full shadow-lg border-4 border-white whitespace-nowrap">
          Capaian Pembelajaran
        </div>

        {/* Content Text */}
        <div className="text-base md:text-lg leading-relaxed text-slate-700 text-justify space-y-4">
          <p>
            Mengaitkan hubungan antara struktur dan fungsi organel
            di dalam sel; menerapkan prinsip-prinsip bioproses yang
            terjadi di dalam sel; menganalisis keterkaitan antar sistem
            organ dalam tubuh untuk merespons stimulus internal dan
            eksternal
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-6 left-6 z-20">
        <Link
          href="/"
          className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white p-4 md:p-5 rounded-full border-4 border-white btn-3d-circle transition-all"
        >
          <ArrowLeft size={40} strokeWidth={3} />
        </Link>
      </div>

      <div className="fixed bottom-6 right-6 z-20">
        <Link
          href="/tujuan"
          className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white p-4 md:p-5 rounded-full border-4 border-white btn-3d-circle transition-all animate-bounce"
        >
          <ArrowRight size={40} strokeWidth={3} />
        </Link>
      </div>
    </main>
  );
}
