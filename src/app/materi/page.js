"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function MateriRingkasPage() {
  return (
    <main className="relative w-full min-h-screen min-h-[100dvh] bg-green-50 overflow-x-hidden font-quicksand flex flex-col items-center p-4 md:p-8 pb-32 md:pt-10">
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

      <div className="relative z-10 w-full max-w-5xl bg-white/95 backdrop-blur-sm border-2 border-green-200 shadow-2xl rounded-[2rem] p-6 md:p-10 pt-12 mt-8">
        
        {/* Header Badge */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-700 text-white font-fredoka font-bold tracking-wide text-xl md:text-3xl py-3 px-10 rounded-full shadow-lg border-4 border-white whitespace-nowrap">
          Materi Ringkas
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          
          {/* REAKSI TERANG CARD */}
          <div className="flex-1 bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <h2 className="text-2xl font-bold text-green-700 text-center mb-4">Reaksi Terang</h2>
            
            <ul className="list-disc pl-5 text-slate-700 font-medium space-y-2 mb-8 text-base md:text-lg">
              <li>Terjadi di <span className="font-bold">tilakoid</span></li>
              <li>Memerlukan cahaya</li>
              <li>Menghasilkan <span className="font-bold">O₂</span>, <span className="font-bold">ATP</span>, dan <span className="font-bold">NADPH</span></li>
            </ul>

            {/* Illustration */}
            <div className="relative w-full h-48 md:h-56 flex items-center justify-center mt-4">
              <Image 
                src="/materi-terang.png" 
                alt="Ilustrasi Reaksi Terang" 
                fill
                className="object-contain"
              />
            </div>
          </div>


          {/* REAKSI GELAP CARD */}
          <div className="flex-1 bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <h2 className="text-2xl font-bold text-green-700 text-center mb-4">Reaksi Gelap</h2>
            
            <ul className="list-disc pl-5 text-slate-700 font-medium space-y-2 mb-8 text-base md:text-lg">
              <li>Terjadi di <span className="font-bold">stroma</span></li>
              <li>Tidak memerlukan cahaya</li>
              <li>Menghasilkan <span className="font-bold">glukosa</span> (C₆H₁₂O₆)</li>
            </ul>

            {/* Illustration */}
            <div className="relative w-full h-48 md:h-56 flex items-center justify-center mt-4">
              <Image 
                src="/materi-gelap.png" 
                alt="Ilustrasi Reaksi Gelap" 
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Floating Navigation Buttons */}
      <div className="fixed bottom-6 left-6 z-20">
        <Link 
          href="/analisis" 
          className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white p-4 md:p-5 rounded-full border-4 border-white btn-3d-circle transition-all"
        >
          <ArrowLeft size={40} strokeWidth={3} />
        </Link>
      </div>

      <div className="fixed bottom-6 right-6 z-20">
        <Link 
          href="/evaluasi" 
          className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white p-4 md:p-5 rounded-full border-4 border-white btn-3d-circle transition-all animate-bounce"
        >
          <ArrowRight size={40} strokeWidth={3} />
        </Link>
      </div>

    </main>
  );
}
