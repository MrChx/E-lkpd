"use client";

export default function TerangScreen({ active, onBack }) {
  return (
    <div className={`sim-screen sim-detail sim-detail-terang ${active ? "active" : ""}`}>
      <div className="sim-detail-header">
        <button className="sim-back-btn" onClick={onBack}>← Kembali</button>
        <span>☀️ REAKSI TERANG</span>
        <span style={{width:'80px'}}></span>
      </div>

      {/* Infografis Reaksi Terang */}
      <div className="w-full max-w-5xl mx-auto px-4 py-2 flex justify-center items-center">
        <div className="bg-white border-2 border-amber-300 shadow-xl rounded-3xl p-3 md:p-5 w-full">
          <img
            src="/infografis-reaksi-terang.png?v=2"
            alt="Infografis Reaksi Terang"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>
      </div>

      <div className="sim-badges">
        <span className="sim-badge sim-badge-sun">☀️ Serap Cahaya</span>
        <span className="sim-badge sim-badge-water">💧 Fotolisis Air</span>
        <span className="sim-badge sim-badge-o2">🌿 O₂ Dilepas</span>
        <span className="sim-badge sim-badge-atp">⚡ ATP Terbentuk</span>
        <span className="sim-badge sim-badge-atp">🔋 NADPH Terbentuk</span>
      </div>

      <div className="sim-explain">
        <strong>🔬 Reaksi Terang</strong> merupakan tahap awal fotosintesis yang berlangsung di <em>membran tilakoid</em> dan memerlukan energi cahaya. Pada tahap ini terjadi penyerapan energi cahaya oleh klorofil, pemecahan molekul air (fotolisis), serta pembentukan <strong>ATP</strong> dan <strong>NADPH</strong> melalui proses rantai transpor elektron dan fotofosforilasi. Selain itu, <strong>oksigen</strong> dihasilkan sebagai produk samping dan dilepaskan ke lingkungan.
      </div>
    </div>
  );
}
