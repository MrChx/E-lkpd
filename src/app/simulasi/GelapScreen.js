"use client";

export default function GelapScreen({ active, onBack }) {
  return (
    <div className={`sim-screen sim-detail sim-detail-gelap ${active ? "active" : ""}`}>
      <div className="sim-detail-header">
        <button className="sim-back-btn" onClick={onBack}>← Kembali</button>
        <span>🌙 REAKSI GELAP (Siklus Calvin)</span>
        <span style={{ width: '80px' }}></span>
      </div>

      {/* Desktop: SVG Diagram */}
      <div className="sim-detail-canvas">
        <svg viewBox="0 0 760 260">
          <defs>
            <radialGradient id="dBg" cx="50%" cy="50%" r="70%"><stop offset="0%" stopColor="#283593" /><stop offset="100%" stopColor="#1a237e" /></radialGradient>
            <radialGradient id="cBg" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#303f9f" stopOpacity="0.4" /><stop offset="100%" stopColor="#1a237e" stopOpacity="0" /></radialGradient>
            <filter id="gl3"><feGaussianBlur stdDeviation="5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            <marker id="aC" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 Z" fill="#7986CB" /></marker>
            <marker id="aGD" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 Z" fill="#81C784" /></marker>
          </defs>

          <rect width="760" height="260" fill="url(#dBg)" />

          {/* Stars */}
          <g fill="white" opacity="0.3">
            <circle cx="20" cy="20" r="1.5" /><circle cx="50" cy="8" r="1" /><circle cx="700" cy="15" r="1.5" />
            <circle cx="730" cy="35" r="1" /><circle cx="10" cy="100" r="1" /><circle cx="740" cy="80" r="1.5" />
            <circle cx="680" cy="5" r="1" /><circle cx="30" cy="200" r="1" /><circle cx="750" cy="180" r="1" />
          </g>

          <text x="380" y="245" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7986CB" opacity="0.7">STROMA KLOROPLAS</text>

          {/* CO₂ */}
          <g style={{ animation: 'sim-co2Enter 2s ease-in-out infinite' }}>
            <circle cx="70" cy="90" r="28" fill="#90a4ae" opacity="0.95" filter="url(#gl3)" />
            <text x="70" y="87" textAnchor="middle" fontSize="11" fontWeight="900" fill="white">CO₂</text>
            <text x="70" y="100" textAnchor="middle" fontSize="8" fill="#e0e0e0">masuk</text>
          </g>
          <path d="M100,90 L220,130" stroke="#90a4ae" strokeWidth="2.5" strokeDasharray="6,3" markerEnd="url(#aC)">
            <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="0.8s" repeatCount="indefinite" />
          </path>
          <text x="150" y="90" fontSize="8.5" fontWeight="800" fill="#90a4ae" textAnchor="middle">Fiksasi CO₂</text>
          <text x="150" y="101" fontSize="8" fill="#7986cb" textAnchor="middle">(Rubisco)</text>

          {/* ATP */}
          <circle cx="320" cy="22" r="18" fill="#AB47BC" opacity="0.9" filter="url(#gl3)">
            <animate attributeName="r" values="18;22;18" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <text x="320" y="18" textAnchor="middle" fontSize="9" fontWeight="900" fill="white">ATP</text>
          <text x="320" y="30" textAnchor="middle" fontSize="7.5" fill="#F3E5F5">energi</text>

          {/* NADPH */}
          <circle cx="430" cy="22" r="18" fill="#7B1FA2" opacity="0.9" filter="url(#gl3)">
            <animate attributeName="r" values="18;22;18" dur="1.2s" begin="0.6s" repeatCount="indefinite" />
          </circle>
          <text x="430" y="18" textAnchor="middle" fontSize="9" fontWeight="900" fill="white">NADPH</text>
          <text x="430" y="30" textAnchor="middle" fontSize="7.5" fill="#F3E5F5">reduktan</text>

          <path d="M320,40 L340,110" stroke="#AB47BC" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#aC)" />
          <path d="M430,40 L410,110" stroke="#7B1FA2" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#aC)" />


          {/* Calvin Cycle */}
          <g transform="translate(375,145)">
            <circle cx="0" cy="0" r="80" fill="url(#cBg)" />
            <circle cx="0" cy="0" r="65" fill="none" stroke="#7986CB" strokeWidth="3" strokeDasharray="20,8" opacity="0.8">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="0" r="40" fill="#283593" stroke="#5c6bc0" strokeWidth="2" />
            <text x="0" y="-6" textAnchor="middle" fontSize="9" fontWeight="900" fill="#c5cae9">Siklus</text>
            <text x="0" y="8" textAnchor="middle" fontSize="9" fontWeight="900" fill="#c5cae9">Calvin</text>

            {/* Nodes and Labels (labels placed clearly outside pulsating nodes) */}
            <circle cx="0" cy="-65" r="10" fill="#4DB6AC"><animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite" /></circle>
            <text x="0" y="-80" textAnchor="middle" fontSize="8" fill="white" fontWeight="800">RuBP</text>

            <circle cx="65" cy="0" r="10" fill="#4FC3F7"><animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" repeatCount="indefinite" /></circle>
            <text x="82" y="3" textAnchor="start" fontSize="8" fill="white" fontWeight="800">3-PGA</text>

            <circle cx="0" cy="65" r="10" fill="#81C784"><animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" begin="0.4s" repeatCount="indefinite" /></circle>
            <text x="0" y="85" textAnchor="middle" fontSize="8" fill="white" fontWeight="800">PGAL</text>

            <circle cx="-65" cy="0" r="10" fill="#FFB74D"><animate attributeName="opacity" values="1;0.4;1" dur="1.2s" begin="0.8s" repeatCount="indefinite" /></circle>
            <text x="-82" y="3" textAnchor="end" fontSize="8" fill="white" fontWeight="800">G3P</text>

            {/* Proses Names (placed outside the rotating circle path) */}
            <text x="56" y="-56" textAnchor="start" fontSize="7.5" fontWeight="800" fill="#FFF176">Carboxylation</text>
            <text x="56" y="56" textAnchor="start" fontSize="7.5" fontWeight="800" fill="#81C784">Reduction</text>
            <text x="-56" y="56" textAnchor="end" fontSize="7.5" fontWeight="800" fill="#81C784">Reduction</text>
            <text x="-56" y="-56" textAnchor="end" fontSize="7.5" fontWeight="800" fill="#FFB74D">Regeneration</text>
          </g>

          {/* Glucose */}
          <g style={{ animation: 'sim-floatDown 2.5s ease-in-out infinite 0.5s' }}>
            <circle cx="660" cy="145" r="35" fill="#FF8F00" opacity="0.95" filter="url(#gl3)" />
            <text x="660" y="138" textAnchor="middle" fontSize="10" fontWeight="900" fill="white">Glukosa</text>
            <text x="660" y="151" textAnchor="middle" fontSize="8" fill="#FFF9C4">C₆H₁₂O₆</text>
            <text x="660" y="163" textAnchor="middle" fontSize="8" fill="#FFE082">terbentuk!</text>
          </g>
          <path d="M440,145 L618,145" stroke="#81C784" strokeWidth="3" strokeDasharray="7,4" markerEnd="url(#aGD)">
            <animate attributeName="stroke-dashoffset" from="0" to="-22" dur="0.8s" repeatCount="indefinite" />
          </path>
          <text x="530" y="135" textAnchor="middle" fontSize="8" fontWeight="700" fill="#81C784">sintesis</text>
          <text x="530" y="156" textAnchor="middle" fontSize="8" fill="#7986cb">PGAL → Glukosa</text>

          {/* RuBP regeneration */}
          <path d="M375,215 Q375,235 340,235 Q290,235 290,190 Q290,155 310,145" stroke="#7986CB" strokeWidth="2" fill="none" strokeDasharray="6,3" opacity="0.7">
            <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
          </path>
          <text x="290" y="250" textAnchor="middle" fontSize="7.5" fill="#9FA8DA" opacity="0.8">Regenerasi RuBP</text>
        </svg>
      </div>

      {/* Mobile: Card-Based Flow */}
      <div className="sim-flow">
        <div className="sim-flow-card">
          <div className="sim-flow-icon">☁️</div>
          <div className="sim-flow-body">
            <div className="sim-flow-title">1. Fiksasi CO₂</div>
            <div className="sim-flow-title" style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#9fa8da', marginBottom: '4px' }}>Dibantu oleh Enzim Rubisco</div>
            <div className="sim-flow-desc">Gas Karbondioksida (CO₂) dari udara masuk ke dalam daun dan diikat (difiksasi) oleh molekul RuBP.</div>
          </div>
        </div>
        <div className="sim-flow-arrow">⬇️</div>

        <div className="sim-flow-card">
          <div className="sim-flow-icon">⚡</div>
          <div className="sim-flow-body">
            <div className="sim-flow-title">2. Menggunakan Energi</div>
            <div className="sim-flow-desc">Reaksi ini memakai energi dari ATP dan elektron dari NADPH (yang dihasilkan pada Reaksi Terang).</div>
          </div>
        </div>
        <div className="sim-flow-arrow">⬇️</div>

        <div className="sim-flow-card">
          <div className="sim-flow-icon">🔄</div>
          <div className="sim-flow-body">
            <div className="sim-flow-title">3. Siklus Calvin Berjalan</div>
            <div className="sim-flow-desc">Terjadi proses perubahan molekul yang kompleks hingga menghasilkan molekul antara (PGAL/G3P).</div>
          </div>
        </div>
        <div className="sim-flow-arrow">⬇️</div>

        <div className="sim-flow-card">
          <div className="sim-flow-icon">🍬</div>
          <div className="sim-flow-body">
            <div className="sim-flow-title">4. Sintesis Glukosa</div>
            <div className="sim-flow-desc">Sebagian molekul PGAL dikeluarkan dari siklus dan digunakan untuk membentuk gula (Glukosa).</div>
          </div>
        </div>
        <div className="sim-flow-arrow">⬇️</div>

        <div className="sim-flow-card">
          <div className="sim-flow-icon">♻️</div>
          <div className="sim-flow-body">
            <div className="sim-flow-title">5. Regenerasi RuBP</div>
            <div className="sim-flow-desc">Sisa molekul di dalam siklus disusun kembali menjadi RuBP agar siklus bisa menangkap CO₂ lagi.</div>
          </div>
        </div>
      </div>

      <div className="sim-badges">
        <span className="sim-badge sim-badge-co2">💨 CO₂ Fiksasi</span>
        <span className="sim-badge sim-badge-atp">⚡ ATP & NADPH</span>
        <span className="sim-badge sim-badge-cycle">🔄 Siklus Calvin</span>
        <span className="sim-badge sim-badge-gluc">🍬 Glukosa Terbentuk</span>
        <span className="sim-badge sim-badge-cycle">♻️ RuBP Regenerasi</span>
      </div>

      <div className="sim-explain">
        <strong>🌙 Reaksi Gelap (Siklus Calvin)</strong> merupakan tahap fotosintesis yang berlangsung di <em>stroma kloroplas</em> dan tidak memerlukan cahaya secara langsung. Pada tahap ini, karbon dioksida difiksasi dengan bantuan enzim <strong>Rubisco</strong>, kemudian melalui serangkaian reaksi yang menggunakan <strong>ATP</strong> dan <strong>NADPH</strong> dari reaksi terang, dihasilkan senyawa <strong>PGAL</strong> yang selanjutnya disintesis menjadi <strong>glukosa</strong>. Sebagian senyawa juga digunakan untuk regenerasi <strong>RuBP</strong> sehingga siklus dapat berlangsung kembali.
      </div>
    </div>
  );
}
