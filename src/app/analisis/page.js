"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Leaf, Sprout, Sun, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function AnalisisPage() {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answers.q1.trim() && answers.q2.trim() && answers.q3.trim()) {
      sessionStorage.setItem("analisisData", JSON.stringify(answers));
      setIsSubmitted(true);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <main className="relative w-full min-h-screen min-h-[100dvh] bg-green-50 overflow-x-hidden font-quicksand flex flex-col items-center p-4 md:p-8 pb-32">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image 
          src="/bg-nature.png" 
          alt="Nature Background" 
          fill
          priority
          className="object-cover object-center opacity-60"
        />
      </div>

      <div className="relative z-10 w-full max-w-3xl bg-white/95 backdrop-blur-sm border-2 border-green-200 shadow-2xl rounded-[2rem] p-6 md:p-10 pt-12 mt-8">
        
        {/* Header Badge */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-700 text-white font-fredoka font-bold tracking-wide text-xl md:text-3xl py-3 px-8 rounded-full shadow-lg border-4 border-white whitespace-nowrap">
          Analisis Hasil Simulasi
        </div>

        <p className="text-base md:text-xl font-bold text-slate-700 mt-4 mb-8 text-center">
          Jawablah pertanyaan berikut berdasarkan hasil simulasi!
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          
          {/* Q1 */}
          <div className="bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-2xl p-4 md:p-5 flex items-start gap-4 shadow-xl hover:shadow-2xl transition-shadow group">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center border-4 border-white shadow-inner group-hover:scale-110 transition-transform">
              <Leaf className="text-white w-6 h-6" strokeWidth={3} />
            </div>
            <div className="flex-1 w-full flex flex-col gap-3">
              <label htmlFor="q1" className="block font-bold text-slate-800 text-sm md:text-base">
                1. Apa yang terjadi jika jumlah CO₂ ditambah?
              </label>
              <textarea
                id="q1"
                name="q1"
                value={answers.q1}
                onChange={handleChange}
                disabled={isSubmitted}
                rows={2}
                className="w-full bg-slate-50 border-b-2 border-slate-300 focus:border-green-500 outline-none resize-none px-2 py-1 text-slate-700 text-sm md:text-base font-medium transition-colors rounded-t-md disabled:bg-gray-100"
                placeholder="Tulis jawabanmu di sini..."
              />
              {isSubmitted && (
                <div className="mt-2 bg-green-100 border border-green-400 text-green-900 p-3 rounded-xl text-sm md:text-base leading-relaxed">
                  <span className="font-bold block mb-1">💡 Kunci Jawaban:</span>
                  Semakin banyak CO₂ yang diserap oleh tumbuhan (bersama air dan cahaya), maka proses fotosintesis akan berjalan lebih cepat sehingga menghasilkan lebih banyak Glukosa dan Oksigen.
                </div>
              )}
            </div>
          </div>

          {/* Q2 */}
          <div className="bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-2xl p-4 md:p-5 flex items-start gap-4 shadow-xl hover:shadow-2xl transition-shadow group">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center border-4 border-white shadow-inner group-hover:scale-110 transition-transform">
              <Sprout className="text-white w-6 h-6" strokeWidth={3} />
            </div>
            <div className="flex-1 w-full flex flex-col gap-3">
              <label htmlFor="q2" className="block font-bold text-slate-800 text-sm md:text-base">
                2. Apa hasil yang dihasilkan pada Reaksi Terang?
              </label>
              <textarea
                id="q2"
                name="q2"
                value={answers.q2}
                onChange={handleChange}
                disabled={isSubmitted}
                rows={2}
                className="w-full bg-slate-50 border-b-2 border-slate-300 focus:border-green-500 outline-none resize-none px-2 py-1 text-slate-700 text-sm md:text-base font-medium transition-colors rounded-t-md disabled:bg-gray-100"
                placeholder="Tulis jawabanmu di sini..."
              />
              {isSubmitted && (
                <div className="mt-2 bg-green-100 border border-green-400 text-green-900 p-3 rounded-xl text-sm md:text-base leading-relaxed">
                  <span className="font-bold block mb-1">💡 Kunci Jawaban:</span>
                  Reaksi terang menghasilkan ATP dan NADPH (yang akan digunakan sebagai sumber energi pada Reaksi Gelap) serta menghasilkan gas Oksigen (O₂) yang dilepaskan ke udara.
                </div>
              )}
            </div>
          </div>

          {/* Q3 */}
          <div className="bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-2xl p-4 md:p-5 flex items-start gap-4 shadow-xl hover:shadow-2xl transition-shadow group">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center border-4 border-white shadow-inner group-hover:scale-110 transition-transform">
              <Sun className="text-white w-6 h-6" strokeWidth={3} />
            </div>
            <div className="flex-1 w-full flex flex-col gap-3">
              <label htmlFor="q3" className="block font-bold text-slate-800 text-sm md:text-base">
                3. Apa fungsi cahaya matahari dalam fotosintesis?
              </label>
              <textarea
                id="q3"
                name="q3"
                value={answers.q3}
                onChange={handleChange}
                disabled={isSubmitted}
                rows={2}
                className="w-full bg-slate-50 border-b-2 border-slate-300 focus:border-green-500 outline-none resize-none px-2 py-1 text-slate-700 text-sm md:text-base font-medium transition-colors rounded-t-md disabled:bg-gray-100"
                placeholder="Tulis jawabanmu di sini..."
              />
              {isSubmitted && (
                <div className="mt-2 bg-green-100 border border-green-400 text-green-900 p-3 rounded-xl text-sm md:text-base leading-relaxed">
                  <span className="font-bold block mb-1">💡 Kunci Jawaban:</span>
                  Cahaya matahari diserap oleh klorofil dan digunakan sebagai sumber energi utama untuk memecah molekul air (H₂O) melalui proses fotolisis pada tahap awal fotosintesis. Tanpa cahaya, reaksi keseluruhan fotosintesis tidak dapat terjadi.
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          {!isSubmitted && (
            <div className="flex justify-center mt-6">
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

      {/* Floating Navigation Buttons (Bottom Corners) */}
      <div className="fixed bottom-6 left-6 z-20">
        <Link 
          href="/simulasi" 
          className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white p-4 md:p-5 rounded-full border-4 border-white btn-3d-circle transition-all"
        >
          <ArrowLeft size={40} strokeWidth={3} />
        </Link>
      </div>

      <div className="fixed bottom-6 right-6 z-20">
        {isSubmitted ? (
          <Link 
            href="/materi" 
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
              Harap isi semua jawaban terlebih dahulu sebelum melanjutkan ya!
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
