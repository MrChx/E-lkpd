"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Sprout, Activity } from "lucide-react";

export default function TujuanPage() {
  const objectives = [
    {
      icon: <BookOpen className="text-emerald-600 w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />,
      kko: "Menjelaskan",
      desc: "hubungan antara organel-organel sel dan fungsinya dalam proses fotosintesis.",
      bg: "from-emerald-50 to-teal-50 border-emerald-100"
    },
    {
      icon: <Sprout className="text-green-600 w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />,
      kko: "Mengidentifikasi",
      desc: "bahan, hasil, organel, serta faktor-faktor yang memengaruhi proses fotosintesis.",
      bg: "from-green-50 to-emerald-50 border-green-100"
    },
    {
      icon: <Activity className="text-cyan-600 w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />,
      kko: "Menganalisis",
      desc: "tahapan fotosintesis dan mengaitkannya dengan peran fotosintesis sebagai bioproses yang terjadi di dalam sel.",
      bg: "from-cyan-50 to-blue-50 border-cyan-100"
    }
  ];

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
          Tujuan Pembelajaran
        </div>

        {/* Subtitle */}
        <p className="text-left md:text-center text-slate-800 font-bold text-lg md:text-2xl mb-8 mt-2 pl-2 md:pl-0">
          Peserta didik mampu:
        </p>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {objectives.map((obj, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-6 rounded-3xl bg-gradient-to-br ${obj.bg} border-2 shadow-md hover:shadow-xl hover:scale-[1.03] active:scale-[0.99] transition-all duration-300 group`}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {obj.icon}
              </div>
              {/* Text */}
              <div className="flex-grow flex flex-col justify-start">
                <span className="font-bold text-slate-900 text-lg md:text-xl mb-2">
                  {index + 1}. {obj.kko}
                </span>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-6 left-6 z-20">
        <Link
          href="/capaian"
          className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white p-4 md:p-5 rounded-full border-4 border-white btn-3d-circle transition-all"
        >
          <ArrowLeft size={40} strokeWidth={3} />
        </Link>
      </div>

      <div className="fixed bottom-6 right-6 z-20">
        <Link
          href="/materi-fotosintesis"
          className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white p-4 md:p-5 rounded-full border-4 border-white btn-3d-circle transition-all animate-bounce"
        >
          <ArrowRight size={40} strokeWidth={3} />
        </Link>
      </div>
    </main>
  );
}
