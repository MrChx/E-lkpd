"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, AlertCircle, CheckCircle, XCircle } from "lucide-react";

export default function EvaluasiPage() {
  const questions = [
    {
      id: 1,
      text: "1. Fotosintesis adalah proses tumbuhan untuk…",
      options: ["A. Menghirup oksigen", "B. Membuat makanan sendiri", "C. Menyerap air"],
      answer: "B",
      explanation: "Fotosintesis berasal dari kata foto (cahaya) dan sintesis (pembuatan). Ini adalah cara tumbuhan membuat makanannya sendiri (glukosa)."
    },
    {
      id: 2,
      text: "2. Zat yang dibutuhkan dalam fotosintesis adalah…",
      options: ["A. Karbondioksida (CO₂)", "B. Oksigen (O₂)", "C. Glukosa"],
      answer: "A",
      explanation: "Bahan baku utama untuk fotosintesis adalah Karbondioksida (dari udara), Air (dari tanah), dan energi cahaya matahari."
    },
    {
      id: 3,
      text: "3. Hasil utama dari fotosintesis adalah…",
      options: ["A. Air", "B. Karbondioksida", "C. Glukosa"],
      answer: "C",
      explanation: "Proses fotosintesis menghasilkan makanan berupa Glukosa yang digunakan tumbuhan untuk tumbuh, serta Oksigen sebagai produk sampingan."
    },
    {
      id: 4,
      text: "4. Reaksi terang terjadi di bagian…",
      options: ["A. Stroma", "B. Tilakoid", "C. Akar"],
      answer: "B",
      explanation: "Reaksi terang yang membutuhkan cahaya matahari langsung terjadi pada membran tilakoid kloroplas."
    },
    {
      id: 5,
      text: "5. Yang dibutuhkan dalam reaksi terang adalah…",
      options: ["A. Cahaya matahari", "B. Glukosa", "C. Oksigen"],
      answer: "A",
      explanation: "Pada tahap reaksi terang, cahaya matahari adalah komponen mutlak yang digunakan untuk memecah molekul air (fotolisis)."
    }
  ];

  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [score, setScore] = useState(0);
  const [showHasil, setShowHasil] = useState(false);
  const [showPembahasan, setShowPembahasan] = useState(false);

  const handleSelect = (qId, optionText) => {
    if (isSubmitted) return;
    const letter = optionText.charAt(0);
    setAnswers({ ...answers, [qId]: letter });
  };

  const handleCekJawaban = () => {
    if (Object.keys(answers).length < questions.length) {
      setShowWarning(true);
      return;
    }

    let newScore = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.answer) {
        newScore += 20;
      }
    });

    setScore(newScore);
    sessionStorage.setItem("evaluasiData", JSON.stringify({ score: newScore }));
    setIsSubmitted(true);
    setShowHasil(true);
  };

  const handleUlangi = () => {
    setAnswers({});
    setIsSubmitted(false);
    setShowHasil(false);
    setShowPembahasan(false);
    setScore(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLihatPembahasan = () => {
    setShowHasil(false);
    setShowPembahasan(true);
  };

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

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-4xl bg-white/95 backdrop-blur-sm border-2 border-green-200 shadow-2xl rounded-[2rem] p-6 md:p-10 pt-12 mt-12 md:mt-8">

        {/* HEADER: Dynamic based on state */}
        <div className="flex justify-between items-start mb-8 relative">
          <div className="absolute -top-16 md:-top-14 left-1/2 transform -translate-x-1/2 bg-green-700 text-white font-fredoka font-bold tracking-wide text-xl md:text-3xl py-3 px-12 rounded-full shadow-lg border-4 border-white whitespace-nowrap">
            {showHasil ? "Hasil Kuis" : showPembahasan ? "Pembahasan Kuis" : "Kuis"}
          </div>

          {!showHasil && (
            <div className="ml-auto bg-white border-2 border-slate-200 text-slate-800 font-bold text-lg md:text-xl py-2 px-6 rounded-full shadow-sm mt-[-10px] md:mt-[-20px] relative z-20">
              Skor: <span className={isSubmitted ? "text-green-600 font-black" : "text-slate-800"}>{score}</span>
            </div>
          )}
        </div>

        {/* VIEW 1: HASIL KUIS */}
        {showHasil && (
          <div className="flex flex-col items-center justify-center py-6 animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-center gap-10 md:gap-20 mb-8 border-b-2 border-gray-100 pb-10 w-full">
              <div className="text-[100px] md:text-[140px] drop-shadow-2xl">🏆</div>
              <div className="flex flex-col items-center">
                <span className="text-xl md:text-2xl font-bold text-slate-800 mb-2">Skor Kamu</span>
                <span className="text-6xl md:text-8xl font-black text-green-700">{score}</span>
              </div>
            </div>

            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-2 font-fredoka">
                {score >= 80 ? "Sangat Baik!" : score >= 60 ? "Cukup Baik!" : "Tetap Semangat!"}
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                {score >= 80
                  ? "Kamu sudah memahami materi fotosintesis dengan sangat baik."
                  : "Kamu bisa mengulangi materi untuk lebih memahami proses fotosintesis."}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center mt-4">
              <button onClick={handleUlangi} className="flex-1 w-full max-w-[200px] bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-2xl border-b-4 border-green-800 active:border-b-0 active:mt-1 transition-all">
                ULANGI
              </button>
              <button onClick={handleLihatPembahasan} className="flex-1 w-full max-w-[200px] bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-2xl border-b-4 border-blue-800 active:border-b-0 active:mt-1 transition-all">
                PEMBAHASAN
              </button>
              <Link href="/refleksi" className="flex-1 w-full max-w-[200px] bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-2xl border-b-4 border-green-800 active:border-b-0 active:mt-1 transition-all text-center block">
                LANJUT
              </Link>
            </div>
          </div>
        )}

        {/* VIEW 2: KUIS & PEMBAHASAN */}
        {!showHasil && (
          <>
            <div className="flex flex-col gap-8">
              {questions.map((q) => (
                <div key={q.id} className="bg-white border-2 border-green-100 rounded-2xl p-5 md:p-6 shadow-sm">
                  <h3 className="font-bold text-lg md:text-xl text-slate-800 mb-4">{q.text}</h3>

                  <div className="flex flex-col gap-3">
                    {q.options.map((opt, i) => {
                      const letter = opt.charAt(0);
                      const isSelected = answers[q.id] === letter;
                      const isCorrectAnswer = q.answer === letter;
                      const isWrongAnswerSelected = isSelected && !isCorrectAnswer;

                      let btnClass = "text-left px-5 py-3 rounded-xl border-2 font-medium transition-all text-sm md:text-base ";

                      if (!isSubmitted) {
                        btnClass += isSelected
                          ? "bg-green-100 border-green-500 text-green-900 shadow-sm font-bold"
                          : "bg-white border-gray-200 text-slate-600 hover:border-green-300 hover:bg-green-50";
                      } else {
                        if (isCorrectAnswer) {
                          btnClass += "bg-green-100 border-green-500 text-green-900 font-bold";
                        } else if (isWrongAnswerSelected) {
                          btnClass += "bg-red-100 border-red-500 text-red-900";
                        } else {
                          btnClass += "bg-white border-gray-200 text-gray-400 opacity-60";
                        }
                      }

                      return (
                        <button
                          key={i}
                          onClick={() => handleSelect(q.id, opt)}
                          disabled={isSubmitted}
                          className={btnClass + " flex items-center justify-between"}
                        >
                          <span>{opt}</span>
                          {isSubmitted && isCorrectAnswer && <CheckCircle className="text-green-600" size={20} />}
                          {isSubmitted && isWrongAnswerSelected && <XCircle className="text-red-500" size={20} />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Penjelasan hanya muncul saat Pembahasan */}
                  {showPembahasan && (
                    <div className="mt-4 bg-green-50 border border-green-200 text-green-900 p-4 rounded-xl text-sm md:text-base leading-relaxed animate-in fade-in">
                      <span className="font-bold block mb-1 text-green-700">💡 Penjelasan:</span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CEK JAWABAN / KEMBALI Button */}
            <div className="flex justify-center mt-10">
              {!isSubmitted ? (
                <button
                  onClick={handleCekJawaban}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xl md:text-2xl py-4 px-10 rounded-full border-4 border-blue-300 btn-3d tracking-wide transition-all shadow-lg font-fredoka"
                >
                  CEK JAWABAN
                </button>
              ) : showPembahasan && (
                <button
                  onClick={() => {
                    setShowPembahasan(false);
                    setShowHasil(true);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-green-600 hover:bg-green-500 text-white font-bold text-xl md:text-2xl py-4 px-10 rounded-full border-4 border-white btn-3d tracking-wide transition-all shadow-lg font-fredoka"
                >
                  KEMBALI KE HASIL
                </button>
              )}
            </div>
          </>
        )}

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
        {isSubmitted ? (
          <Link
            href="/refleksi"
            className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white p-4 md:p-5 rounded-full border-4 border-white btn-3d-circle transition-all animate-bounce"
            title="Lanjut ke Refleksi"
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
              Harap jawab semua soal terlebih dahulu sebelum mengecek jawaban!
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
