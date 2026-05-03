"use client";

import { useState } from "react";
import { Volume2, Info, X, User, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ nama: "", kelas: "" });
  const [error, setError] = useState("");

  const handleMulai = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nama.trim() || !formData.kelas.trim()) {
      setError("Harap isi nama dan kelasmu terlebih dahulu!");
      return;
    }
    // Save to session storage just in case we need it later
    sessionStorage.setItem("siswaData", JSON.stringify(formData));
    router.push("/petunjuk");
  };
  return (
    <main className="relative w-full h-screen bg-green-50 overflow-hidden font-fredoka flex flex-col items-center justify-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bg-nature.png" 
          alt="Nature Background" 
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center">
        
        {/* Title Area */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 tracking-wider mb-[-10px] text-stroke-sm drop-shadow-md z-20">
            E-LKPD INTERAKTIF
          </h2>
          <h1 className="text-6xl md:text-8xl font-black text-green-700 tracking-wide text-stroke-white drop-shadow-xl">
            FOTOSINTESIS
          </h1>
        </div>

        {/* Text Box */}
        <div className="bg-white/95 backdrop-blur-sm border-2 border-green-200 shadow-xl rounded-3xl py-6 px-8 max-w-lg text-center mb-10 transform hover:scale-105 transition-transform duration-300">
          <p className="text-xl md:text-2xl font-quicksand font-bold text-slate-700 leading-relaxed">
            Belajar fotosintesis lebih mudah dan menyenangkan dengan simulasi interaktif!
          </p>
        </div>

        {/* Play Button */}
        <button onClick={handleMulai} className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 text-white font-black text-3xl md:text-4xl py-4 px-16 rounded-full border-4 border-white btn-3d tracking-wider transform transition-all inline-block">
          MULAI
        </button>
      </div>

      {/* Bottom Floating Buttons */}
      <div className="absolute bottom-6 left-6 z-20">
        <button className="bg-green-900/60 hover:bg-green-800/80 backdrop-blur-sm text-white p-4 rounded-full border-2 border-white/70 btn-3d-circle transition-all">
          <Volume2 size={32} />
        </button>
      </div>

      <div className="absolute bottom-6 right-6 z-20">
        <button className="bg-green-900/60 hover:bg-green-800/80 backdrop-blur-sm text-white p-4 rounded-full border-2 border-white/70 btn-3d-circle transition-all">
          <Info size={32} />
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-md shadow-2xl relative transform transition-all scale-100">
            
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors bg-gray-100 hover:bg-red-50 p-2 rounded-full"
            >
              <X size={24} strokeWidth={3} />
            </button>

            <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center">Isi Data Diri</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5 font-quicksand">
              
              {/* Input Nama */}
              <div className="space-y-2">
                <label className="block text-slate-700 font-bold ml-1">Nama Lengkap</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-600">
                    <User size={20} />
                  </div>
                  <input 
                    type="text" 
                    value={formData.nama}
                    onChange={(e) => setFormData({...formData, nama: e.target.value})}
                    placeholder="Masukkan namamu..."
                    className="w-full bg-slate-50 border-2 border-green-200 focus:border-green-500 rounded-xl py-3 pl-12 pr-4 outline-none transition-colors font-medium text-slate-700"
                  />
                </div>
              </div>

              {/* Input Kelas */}
              <div className="space-y-2">
                <label className="block text-slate-700 font-bold ml-1">Kelas</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-600">
                    <GraduationCap size={20} />
                  </div>
                  <input 
                    type="text" 
                    value={formData.kelas}
                    onChange={(e) => setFormData({...formData, kelas: e.target.value})}
                    placeholder="Contoh: XII IPA 1"
                    className="w-full bg-slate-50 border-2 border-green-200 focus:border-green-500 rounded-xl py-3 pl-12 pr-4 outline-none transition-colors font-medium text-slate-700"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-red-500 text-sm font-bold text-center bg-red-50 py-2 rounded-lg border border-red-200">
                  {error}
                </p>
              )}

              <button 
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold text-xl py-4 rounded-xl border-b-4 border-green-800 active:border-b-0 active:mt-1 transition-all mt-4"
              >
                MASUK
              </button>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}
