"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, AlertCircle, Brain, Star, CheckCircle } from "lucide-react";

export default function RefleksiPage() {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answers.q1.trim() && answers.q2.trim()) {
      sessionStorage.setItem("refleksiData", JSON.stringify(answers));
      setIsSubmitted(true);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <main className="relative w-full min-h-screen bg-green-50 overflow-x-hidden font-quicksand flex flex-col items-center p-4 md:p-8 pb-32 md:pt-10">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
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
        
        {/* Title Badge */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-700 text-white font-fredoka font-bold tracking-wide text-xl md:text-3xl py-3 px-12 rounded-full shadow-lg border-4 border-white whitespace-nowrap">
          Refleksi
        </div>

        <p className="text-center text-lg md:text-xl font-bold text-slate-700 mb-8 mt-2">
          Jawablah pertanyaan berikut dengan jujur!
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          
          {/* Q1 */}
          <div className="bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-2xl p-4 md:p-5 flex items-start gap-4 shadow-xl hover:shadow-2xl transition-shadow group">
            <div className="flex-shrink-0 text-4xl md:text-5xl group-hover:scale-110 transition-transform">
              🧠
            </div>
            <div className="flex-1 w-full flex flex-col gap-3">
              <label htmlFor="q1" className="block font-bold text-slate-800 text-sm md:text-base">
                1. Apa yang kamu pelajari hari ini?
              </label>
              <textarea
                id="q1"
                name="q1"
                value={answers.q1}
                onChange={handleChange}
                disabled={isSubmitted}
                rows={3}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-green-500 outline-none resize-none px-4 py-3 text-slate-700 text-sm md:text-base font-medium transition-colors rounded-xl disabled:bg-gray-100 disabled:text-gray-500 shadow-inner"
                placeholder="Tuliskan pendapatmu..."
              />
            </div>
          </div>

          {/* Q2 */}
          <div className="bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-2xl p-4 md:p-5 flex items-start gap-4 shadow-xl hover:shadow-2xl transition-shadow group">
            <div className="flex-shrink-0 text-4xl md:text-5xl group-hover:scale-110 transition-transform">
              ⭐
            </div>
            <div className="flex-1 w-full flex flex-col gap-3">
              <label htmlFor="q2" className="block font-bold text-slate-800 text-sm md:text-base">
                2. Bagian mana yang paling sulit bagimu?
              </label>
              <textarea
                id="q2"
                name="q2"
                value={answers.q2}
                onChange={handleChange}
                disabled={isSubmitted}
                rows={3}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-green-500 outline-none resize-none px-4 py-3 text-slate-700 text-sm md:text-base font-medium transition-colors rounded-xl disabled:bg-gray-100 disabled:text-gray-500 shadow-inner"
                placeholder="Tuliskan kesulitanmu..."
              />
            </div>
          </div>

          {/* Submit Button */}
          {!isSubmitted && (
            <div className="flex justify-center mt-6">
              <button 
                type="submit"
                className="bg-green-600 hover:bg-green-500 text-white font-bold text-lg md:text-xl py-3 px-10 rounded-full border-4 border-white btn-3d tracking-wide transition-all shadow-lg font-fredoka"
              >
                Kirim Refleksi
              </button>
            </div>
          )}
          {isSubmitted && (
            <div className="flex justify-center mt-6">
              <div className="bg-green-100 text-green-700 font-bold text-lg md:text-xl py-3 px-10 rounded-full border-4 border-white tracking-wide shadow-sm flex items-center gap-2">
                <CheckCircle size={24} /> Terimakasih atas refleksimu!
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Floating Navigation Buttons */}
      <div className="fixed bottom-6 left-6 z-20">
        <Link 
          href="/evaluasi" 
          className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white p-4 md:p-5 rounded-full border-4 border-white btn-3d-circle transition-all"
        >
          <ArrowLeft size={40} strokeWidth={3} />
        </Link>
      </div>

      <div className="fixed bottom-6 right-6 z-20">
        {isSubmitted ? (
          <Link 
            href="/penutup" 
            className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white p-4 md:p-5 rounded-full border-4 border-white btn-3d-circle transition-all animate-bounce"
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
              Harap isi semua kolom refleksi terlebih dahulu ya!
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
