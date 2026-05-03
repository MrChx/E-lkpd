"use client";

export default function TerangScreen({ active, onBack }) {
  return (
    <div className={`sim-screen sim-detail sim-detail-terang ${active ? "active" : ""}`}>
      <div className="sim-detail-header">
        <button className="sim-back-btn" onClick={onBack}>← Kembali</button>
        <span>☀️ REAKSI TERANG</span>
        <span style={{width:'80px'}}></span>
      </div>

      {/* Desktop: SVG Diagram */}
      <div className="sim-detail-canvas">
        <svg viewBox="0 0 760 260">
          <defs>
            <linearGradient id="tBg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFDE7"/><stop offset="50%" stopColor="#FFF9C4"/><stop offset="100%" stopColor="#B3E5FC"/>
            </linearGradient>
            <radialGradient id="sg2"><stop offset="0%" stopColor="#FFFDE7"/><stop offset="100%" stopColor="#FFD700"/></radialGradient>
            <filter id="gl2"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <marker id="aY" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 Z" fill="#FFD700"/></marker>
            <marker id="aB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 Z" fill="#42a5f5"/></marker>
            <marker id="aP" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 Z" fill="#AB47BC"/></marker>
            <marker id="aG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 Z" fill="#66BB6A"/></marker>
          </defs>

          <rect width="760" height="260" fill="url(#tBg)"/>
          <ellipse cx="380" cy="200" rx="370" ry="50" fill="#C8E6C9" opacity="0.5"/>
          <text x="380" y="238" textAnchor="middle" fontSize="10" fill="#2E7D32" fontWeight="700" opacity="0.6">MEMBRAN TILAKOID</text>

          {/* Sun */}
          <g style={{animation:'sim-sunray 2s ease-in-out infinite',transformOrigin:'80px 65px'}}>
            <circle cx="80" cy="65" r="40" fill="#FFD700" opacity="0.2"/>
            <circle cx="80" cy="65" r="28" fill="url(#sg2)" filter="url(#gl2)"/>
            <g stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round">
              <line x1="80" y1="28" x2="80" y2="20"/><line x1="80" y1="102" x2="80" y2="110"/>
              <line x1="43" y1="65" x2="35" y2="65"/><line x1="117" y1="65" x2="125" y2="65"/>
              <line x1="55" y1="40" x2="49" y2="34"/><line x1="105" y1="90" x2="111" y2="96"/>
              <line x1="105" y1="40" x2="111" y2="34"/><line x1="55" y1="90" x2="49" y2="96"/>
            </g>
            <circle cx="73" cy="61" r="3.5" fill="#795548"/><circle cx="87" cy="61" r="3.5" fill="#795548"/>
            <path d="M73,74 Q80,80 87,74" stroke="#795548" strokeWidth="2.5" fill="none"/>
            <text x="80" y="120" textAnchor="middle" fontSize="10" fontWeight="800" fill="#F57F17">Cahaya</text>
            <text x="80" y="132" textAnchor="middle" fontSize="10" fontWeight="800" fill="#F57F17">Matahari</text>
          </g>

          <path d="M120,65 L185,65" stroke="#FFD700" strokeWidth="3" markerEnd="url(#aY)">
            <animate attributeName="stroke-dasharray" values="0,80;80,0" dur="1s" repeatCount="indefinite"/>
          </path>

          {/* Klorofil */}
          <rect x="190" y="40" width="90" height="52" rx="12" fill="#43a047" stroke="#1b5e20" strokeWidth="2"/>
          <text x="235" y="62" textAnchor="middle" fontSize="10" fontWeight="800" fill="white">Klorofil</text>
          <text x="235" y="76" textAnchor="middle" fontSize="8.5" fill="#c8e6c9">(Fotosistem)</text>
          <circle cx="215" cy="62" r="4" fill="#FFD700">
            <animate attributeName="r" values="3;6;3" dur="0.8s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="indefinite"/>
          </circle>

          <path d="M280,66 L345,66" stroke="#FFD700" strokeWidth="2.5" markerEnd="url(#aY)"/>

          {/* Water split */}
          <rect x="350" y="32" width="100" height="68" rx="12" fill="#E3F2FD" stroke="#42a5f5" strokeWidth="2"/>
          <text x="400" y="52" textAnchor="middle" fontSize="9" fontWeight="800" fill="#0277BD">H₂O</text>
          <text x="400" y="65" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#01579B">Dipecah</text>
          <text x="400" y="77" textAnchor="middle" fontSize="8" fill="#039BE5">(Fotolisis)</text>
          <circle cx="380" cy="85" r="6" fill="#42a5f5" opacity="0.8"><animate attributeName="opacity" values="0.8;0;0.8" dur="1.2s" repeatCount="indefinite"/></circle>
          <circle cx="400" cy="85" r="6" fill="#42a5f5" opacity="0.6"><animate attributeName="opacity" values="0.6;0;0.6" dur="1.2s" begin="0.4s" repeatCount="indefinite"/></circle>
          <circle cx="420" cy="85" r="6" fill="#42a5f5" opacity="0.7"><animate attributeName="opacity" values="0.7;0;0.7" dur="1.2s" begin="0.8s" repeatCount="indefinite"/></circle>

          {/* O₂ */}
          <path d="M400,32 L400,8" stroke="#42a5f5" strokeWidth="2.5" markerEnd="url(#aB)"/>
          <g style={{animation:'sim-moveUp 2s ease-in-out infinite'}}>
            <circle cx="400" cy="20" r="14" fill="#42a5f5" opacity="0.9" filter="url(#gl2)"/>
            <text x="400" y="24" textAnchor="middle" fontSize="9" fontWeight="800" fill="white">O₂</text>
          </g>
          <text x="420" y="16" fontSize="8" fontWeight="700" fill="#0277BD">Dilepas ke</text>
          <text x="420" y="26" fontSize="8" fontWeight="700" fill="#0277BD">lingkungan</text>

          {/* ETC */}
          <path d="M450,66 L510,66" stroke="#FF7043" strokeWidth="2.5" strokeDasharray="5,3">
            <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="0.8s" repeatCount="indefinite"/>
          </path>
          <polygon points="510,66 502,62 502,70" fill="#FF7043"/>
          <rect x="515" y="33" width="105" height="66" rx="12" fill="#FFF3E0" stroke="#FF7043" strokeWidth="2"/>
          <text x="567" y="52" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#E64A19">Rantai Transpor</text>
          <text x="567" y="64" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#E64A19">Elektron</text>
          <text x="567" y="76" textAnchor="middle" fontSize="7.5" fill="#FF7043">+ Fotofosforilasi</text>
          <circle cx="535" cy="85" r="5" fill="#FF7043"><animateTransform attributeName="transform" type="translate" values="0,0;30,0;0,0" dur="1s" repeatCount="indefinite"/></circle>

          <path d="M620,66 L670,66" stroke="#AB47BC" strokeWidth="3" markerEnd="url(#aP)"/>

          {/* ATP/NADPH */}
          <rect x="675" y="28" width="78" height="76" rx="12" fill="#F3E5F5" stroke="#AB47BC" strokeWidth="2.5"/>
          <circle cx="714" cy="42" r="10" fill="#AB47BC"><animate attributeName="r" values="10;13;10" dur="1s" repeatCount="indefinite"/></circle>
          <text x="714" y="46" textAnchor="middle" fontSize="8" fontWeight="900" fill="white">ATP</text>
          <text x="714" y="60" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#6A1B9A">+</text>
          <circle cx="714" cy="74" r="10" fill="#7B1FA2"><animate attributeName="r" values="10;13;10" dur="1s" begin="0.5s" repeatCount="indefinite"/></circle>
          <text x="714" y="78" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="white">NADPH</text>
          <text x="714" y="95" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#AB47BC">Terbentuk!</text>

          <path d="M714,104 L714,155" stroke="#66BB6A" strokeWidth="2.5" strokeDasharray="6,3" markerEnd="url(#aG)"/>
          <text x="730" y="130" fontSize="8" fontWeight="700" fill="#2E7D32">ke Reaksi</text>
          <text x="730" y="141" fontSize="8" fontWeight="700" fill="#2E7D32">Gelap →</text>

          <rect x="160" y="155" width="430" height="42" rx="10" fill="rgba(255,255,255,0.7)" stroke="#FFD700" strokeWidth="1.5"/>
          <text x="375" y="172" textAnchor="middle" fontSize="9" fontWeight="800" fill="#E65100">Cahaya → Klorofil → H₂O dipecah → e⁻ → ETC → ATP + NADPH terbentuk + O₂ dilepas</text>
          <text x="375" y="188" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#37474F">Berlangsung di: Membran Tilakoid Kloroplas</text>
        </svg>
      </div>

      {/* Mobile: Card-Based Flow */}
      <div className="sim-flow">
        <div className="sim-flow-card">
          <div className="sim-flow-icon">☀️</div>
          <div className="sim-flow-body">
            <div className="sim-flow-title">1. Cahaya Matahari Diserap</div>
            <div className="sim-flow-desc">Energi cahaya ditangkap oleh klorofil di dalam fotosistem pada membran tilakoid.</div>
          </div>
        </div>
        <div className="sim-flow-arrow">⬇️</div>

        <div className="sim-flow-card">
          <div className="sim-flow-icon">💧</div>
          <div className="sim-flow-body">
            <div className="sim-flow-title">2. Air Dipecah (Fotolisis)</div>
            <div className="sim-flow-desc">Molekul H₂O dipecah menjadi ion hidrogen (H⁺), elektron (e⁻), dan oksigen (O₂).</div>
          </div>
        </div>
        <div className="sim-flow-arrow">⬇️</div>

        <div className="sim-flow-card">
          <div className="sim-flow-icon">💨</div>
          <div className="sim-flow-body">
            <div className="sim-flow-title">3. Oksigen Dilepaskan</div>
            <div className="sim-flow-desc">O₂ dihasilkan sebagai produk samping dan dilepaskan ke lingkungan melalui stomata.</div>
          </div>
        </div>
        <div className="sim-flow-arrow">⬇️</div>

        <div className="sim-flow-card">
          <div className="sim-flow-icon">⚡</div>
          <div className="sim-flow-body">
            <div className="sim-flow-title">4. Rantai Transpor Elektron</div>
            <div className="sim-flow-desc">Elektron melewati rantai transpor elektron dan fotofosforilasi menghasilkan energi.</div>
          </div>
        </div>
        <div className="sim-flow-arrow">⬇️</div>

        <div className="sim-flow-card">
          <div className="sim-flow-icon">🔋</div>
          <div className="sim-flow-body">
            <div className="sim-flow-title">5. ATP & NADPH Terbentuk</div>
            <div className="sim-flow-desc">Energi disimpan dalam bentuk ATP dan NADPH, yang akan digunakan pada Reaksi Gelap (Siklus Calvin).</div>
          </div>
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
