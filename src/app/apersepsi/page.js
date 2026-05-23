"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, AlertCircle } from "lucide-react";

export default function ApersepsiPage() {
  const [jawaban1, setJawaban1] = useState("");
  const [jawaban2, setJawaban2] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (jawaban1.trim() && jawaban2.trim()) {
      sessionStorage.setItem("apersepsiData", JSON.stringify({ q1: jawaban1, q2: jawaban2 }));
      setIsSubmitted(true);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <main className="relative w-full min-h-screen min-h-[100dvh] bg-green-50 overflow-x-hidden font-quicksand flex flex-col items-center p-4 pb-32">
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
      <div className="relative z-10 w-full max-w-4xl bg-white/95 backdrop-blur-sm border-2 border-green-200 shadow-2xl rounded-[2rem] p-6 md:p-10 pt-12 mt-8 mb-24">
        
        {/* Title Badge */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-700 text-white font-fredoka font-bold tracking-wide text-xl md:text-3xl py-3 px-12 rounded-full shadow-lg border-4 border-white whitespace-nowrap">
          Apersepsi
        </div>

        <p className="text-center text-lg md:text-xl font-bold text-slate-700 mb-8 mt-2">
          Coba pikirkan dan jawab pertanyaan berikut!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* Question 1 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 pb-6 border-b-2 border-gray-100">
            <div className="text-5xl md:text-6xl flex-shrink-0 text-center">
              ☀️
            </div>
            <div className="flex-grow flex flex-col gap-3">
              <label className="font-bold text-lg md:text-xl text-slate-800">
                1. Mengapa tumbuhan membutuhkan cahaya matahari?
              </label>
              <textarea
                value={jawaban1}
                onChange={(e) => setJawaban1(e.target.value)}
                disabled={isSubmitted}
                placeholder="Tuliskan jawabanmu di sini..."
                className="w-full border-2 border-green-300 rounded-xl p-3 md:p-4 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all resize-none disabled:bg-gray-100"
                rows="2"
              ></textarea>
              
              {/* Answer Feedback 1 */}
              {isSubmitted && (
                <div className="mt-2 bg-green-100 border border-green-400 text-green-900 p-4 rounded-xl text-sm md:text-base leading-relaxed">
                  <span className="font-bold block mb-1">💡 Penjelasan:</span>
                  Energi matahari sangat penting bagi tumbuhan karena merupakan sumber utama untuk proses fotosintesis, yaitu mekanisme pembuatan makanan sendiri (glukosa) menggunakan cahaya, air, dan karbon dioksida. Tanpa cahaya matahari, tumbuhan tidak dapat memproduksi energi untuk tumbuh, berkembang biak, mengatur suhu, serta menghasilkan warna hijau daun.
                </div>
              )}
            </div>
          </div>

          {/* Question 2 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="text-5xl md:text-6xl flex-shrink-0 text-center">
              🍃
            </div>
            <div className="flex-grow flex flex-col gap-3">
              <label className="font-bold text-lg md:text-xl text-slate-800">
                2. Dari mana tumbuhan mendapatkan makanannya?
              </label>
              <textarea
                value={jawaban2}
                onChange={(e) => setJawaban2(e.target.value)}
                disabled={isSubmitted}
                placeholder="Tuliskan jawabanmu di sini..."
                className="w-full border-2 border-green-300 rounded-xl p-3 md:p-4 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all resize-none disabled:bg-gray-100"
                rows="2"
              ></textarea>

              {/* Answer Feedback 2 */}
              {isSubmitted && (
                <div className="mt-2 bg-green-100 border border-green-400 text-green-900 p-4 rounded-xl text-sm md:text-base leading-relaxed">
                  <span className="font-bold block mb-1">💡 Penjelasan:</span>
                  Tumbuhan mendapatkan makanan dengan cara membuatnya sendiri melalui proses yang disebut fotosintesis. Proses ini terjadi di daun dengan memanfaatkan cahaya matahari (energi), air dari tanah, dan karbondioksida dari udara, yang diolah oleh klorofil (zat hijau daun) menjadi gula (energi) dan oksigen.
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          {!isSubmitted && (
            <div className="flex justify-center mt-4">
              <button 
                type="submit"
                className="bg-green-600 hover:bg-green-500 text-white font-bold text-lg md:text-xl py-3 px-8 rounded-full border-2 border-white btn-3d tracking-wide transition-all"
              >
                Kirim Jawaban
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-6 left-6 z-20">
        <Link 
          href="/petunjuk" 
          className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white p-4 md:p-5 rounded-full border-4 border-white btn-3d-circle transition-all"
        >
          <ArrowLeft size={40} strokeWidth={3} />
        </Link>
      </div>

      <div className="fixed bottom-6 right-6 z-20">
        {isSubmitted ? (
          <Link 
            href="/simulasi" 
            className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white p-4 md:p-5 rounded-full border-4 border-white btn-3d-circle transition-all"
          >
            <ArrowRight size={40} strokeWidth={3} />
          </Link>
        ) : (
          <button 
            onClick={() => setShowWarning(true)}
            className="flex items-center justify-center bg-gray-400 text-white p-4 md:p-5 rounded-full border-4 border-white btn-3d-circle transition-all opacity-80"
          >
            <ArrowRight size={40} strokeWidth={3} />
          </button>
        )}
      </div>

      {/* Warning Modal */}
      {showWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full shadow-2xl flex flex-col items-center text-center transform transition-all scale-100">
            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
              <AlertCircle size={40} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 font-fredoka">Perhatian!</h3>
            <p className="text-slate-600 mb-6 font-medium text-sm md:text-base">
              Harap isi kedua jawaban terlebih dahulu sebelum melanjutkan ya!
            </p>
            <button 
              onClick={() => setShowWarning(false)}
              className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl border-2 border-green-700 shadow-[0_4px_0_0_#15803d] active:shadow-[0_0px_0_0_#15803d] active:translate-y-1 transition-all"
            >
              Baik, Mengerti
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
