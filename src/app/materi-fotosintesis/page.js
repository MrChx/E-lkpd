"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, X, ZoomIn } from "lucide-react";

export default function MateriFotosintesisPage() {
  const [showInfografis, setShowInfografis] = useState(false);

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
          Materi Fotosintesis
        </div>

        {/* Text Content */}
        <div className="text-base md:text-lg leading-relaxed text-slate-700 text-justify mb-6">
          <p>
            Fotosintesis adalah proses pembentukan makanan pada tumbuhan hijau
            dengan bantuan cahaya matahari. Tumbuhan menggunakan air (H₂O) yang
            diserap oleh akar dan karbon dioksida (CO₂) dari udara untuk
            menghasilkan glukosa dan oksigen. Proses ini terjadi di dalam
            kloroplas yang mengandung klorofil, yaitu zat hijau daun yang
            berfungsi menangkap energi cahaya matahari.
          </p>
        </div>

        {/* Plant Image - Clickable */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={() => setShowInfografis(true)}
            className="group relative cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
            aria-label="Klik untuk melihat infografis fotosintesis"
          >
            <div className="relative w-40 h-48 md:w-52 md:h-60">
              <Image
                src="/plant-fotosintesis.png"
                alt="Tanaman Fotosintesis"
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>

            {/* Hover overlay hint */}
            <div className="absolute inset-0 flex items-center justify-center bg-green-600/0 group-hover:bg-green-600/20 rounded-2xl transition-all duration-300">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-green-700 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                <ZoomIn size={16} />
                Klik untuk detail
              </div>
            </div>
          </button>

          {/* Instruction text */}
          <p className="text-sm md:text-base text-green-700 font-bold animate-pulse flex items-center gap-2">
            👆 Klik tanaman untuk melihat infografis
          </p>
        </div>
      </div>

      {/* Infografis Modal */}
      {showInfografis && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowInfografis(false)}
        >
          <div
            className="relative bg-white rounded-3xl p-3 md:p-6 w-full max-w-5xl max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowInfografis(false)}
              className="absolute top-3 right-3 z-10 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-colors"
            >
              <X size={24} strokeWidth={3} />
            </button>

            {/* Infografis Image */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10]">
              <img
                src="/infografis-fotosintesis.jpeg?v=2"
                alt="Infografis Fotosintesis"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="fixed bottom-6 left-6 z-20">
        <Link
          href="/tujuan"
          className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white p-4 md:p-5 rounded-full border-4 border-white btn-3d-circle transition-all"
        >
          <ArrowLeft size={40} strokeWidth={3} />
        </Link>
      </div>

      <div className="fixed bottom-6 right-6 z-20">
        <Link
          href="/petunjuk"
          className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white p-4 md:p-5 rounded-full border-4 border-white btn-3d-circle transition-all animate-bounce"
        >
          <ArrowRight size={40} strokeWidth={3} />
        </Link>
      </div>
    </main>
  );
}
