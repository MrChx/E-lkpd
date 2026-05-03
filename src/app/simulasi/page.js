"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./simulasi.css";

// Sub-components for detail screens
import TerangScreen from "./TerangScreen";
import GelapScreen from "./GelapScreen";

export default function SimulasiPage() {
  const [screen, setScreen] = useState("main");
  const [co2, setCo2] = useState(2);
  const [h2o, setH2o] = useState(2);
  const [lightOn, setLightOn] = useState(true);

  const changeCO2 = (d) => { if (!lightOn) return; setCo2(Math.max(1, Math.min(3, co2 + d))); };
  const changeH2O = (d) => { if (!lightOn) return; setH2o(Math.max(1, Math.min(3, h2o + d))); };

  return (
    <div className="sim-root">
      {/* ===== MAIN SCREEN ===== */}
      <div className={`sim-screen sim-main ${screen === "main" ? "active" : ""}`}>
        {/* Nav removed in favor of absolute bottom buttons */}

        {/* Left Panel */}
        <div className="sim-left">
          <div className="sim-panel">
            <div className="sim-panel-title">🔬 Pilih Proses</div>
            <button className="sim-btn sim-btn-terang" onClick={() => setScreen("terang")}>☀️ Reaksi Terang</button>
            <button className="sim-btn sim-btn-gelap" onClick={() => setScreen("gelap")}>🌙 Reaksi Gelap</button>
          </div>
          <div className="sim-panel">
            <div className="sim-panel-title">⚗️ Atur Bahan</div>
            <div className="sim-bahan-row">
              <span className="sim-bahan-label">CO₂</span>
              <div className="sim-bahan-ctrls">
                <button className="sim-cnt-btn sim-cnt-minus" onClick={() => changeCO2(-1)}>−</button>
                <span className="sim-cnt-val">{co2}</span>
                <button className="sim-cnt-btn sim-cnt-plus" onClick={() => changeCO2(1)}>+</button>
              </div>
            </div>
            <div className="sim-bahan-row">
              <span className="sim-bahan-label">H₂O</span>
              <div className="sim-bahan-ctrls">
                <button className="sim-cnt-btn sim-cnt-minus" onClick={() => changeH2O(-1)}>−</button>
                <span className="sim-cnt-val">{h2o}</span>
                <button className="sim-cnt-btn sim-cnt-plus" onClick={() => changeH2O(1)}>+</button>
              </div>
            </div>
            <div className="sim-light-row">
              <span className="sim-light-label">☀️ Cahaya</span>
              <label className="sim-toggle">
                <input type="checkbox" checked={lightOn} onChange={(e) => setLightOn(e.target.checked)} />
                <span className="sim-toggle-slider"></span>
              </label>
            </div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: lightOn ? '#2ecc71' : '#e74c3c', marginTop: 5, textAlign: 'center' }}>
              {lightOn ? '✅ Aktif' : '⚠️ Berhenti!'}
            </div>
          </div>
          <div className="sim-panel sim-hasil">
            <div className="sim-panel-title sim-hasil-title">📊 Hasil</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#e0e0e0', lineHeight: 1.8 }}>
              <div>🍬 Glukosa: <span style={{ color: '#f39c12', fontWeight: 900 }}>{co2}</span></div>
              <div>💨 O₂: <span style={{ color: '#3498db', fontWeight: 900 }}>{h2o}</span></div>
            </div>
          </div>
        </div>

        {/* Scene Area */}
        <div className={`sim-scene ${!lightOn ? "sim-paused" : ""}`}>
          <svg viewBox="0 0 580 400" style={{ width: '100%', height: '100%' }}>
            <defs>
              <radialGradient id="sg"><stop offset="0%" stopColor="#FFFDE7" /><stop offset="100%" stopColor="#FFD700" /></radialGradient>
              <radialGradient id="sgw"><stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" /><stop offset="100%" stopColor="#FFD700" stopOpacity="0" /></radialGradient>
              <linearGradient id="soil" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#8D6E63" /><stop offset="100%" stopColor="#4E342E" /></linearGradient>
              <filter id="gl"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>

            {/* Decorative clouds */}
            <g opacity="0.5">
              <ellipse cx="60" cy="35" rx="35" ry="18" fill="#b0bec5" />
              <ellipse cx="85" cy="28" rx="25" ry="15" fill="#cfd8dc" />
              <ellipse cx="40" cy="30" rx="20" ry="13" fill="#b0bec5" />
            </g>
            <g opacity="0.4">
              <ellipse cx="450" cy="25" rx="30" ry="16" fill="#b3e5fc" />
              <ellipse cx="475" cy="18" rx="22" ry="14" fill="#e1f5fe" />
            </g>

            {/* Sun with cute face */}
            <g className="sim-sun-anim" style={{ transformOrigin: '340px 55px' }}>
              <circle cx="340" cy="55" r="42" fill="url(#sgw)" />
              <circle cx="340" cy="55" r="30" fill="url(#sg)" filter="url(#gl)" />
              <g stroke="#FFD700" strokeWidth="3" strokeLinecap="round" opacity="0.8">
                <line x1="340" y1="14" x2="340" y2="5" /><line x1="340" y1="96" x2="340" y2="105" />
                <line x1="299" y1="55" x2="290" y2="55" /><line x1="381" y1="55" x2="390" y2="55" />
                <line x1="311" y1="26" x2="305" y2="20" /><line x1="369" y1="84" x2="375" y2="90" />
                <line x1="369" y1="26" x2="375" y2="20" /><line x1="311" y1="84" x2="305" y2="90" />
              </g>
              <circle cx="332" cy="51" r="3.5" fill="#795548" /><circle cx="348" cy="51" r="3.5" fill="#795548" />
              <path d="M332,62 Q340,69 348,62" stroke="#795548" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </g>
            <text x="340" y="115" textAnchor="middle" fontSize="11" fontWeight="800" fill="#FFF9C4" style={{ fontFamily: 'Quicksand' }}>Cahaya</text>
            <text x="340" y="128" textAnchor="middle" fontSize="11" fontWeight="800" fill="#FFF9C4" style={{ fontFamily: 'Quicksand' }}>Matahari</text>

            {/* Photon arrow to tree */}
            <line x1="320" y1="100" x2="290" y2="165" stroke="#FFD700" strokeWidth="2.5" strokeDasharray="6,4" opacity="0.8">
              <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="0.8s" repeatCount="indefinite" />
            </line>
            <polygon points="290,165 298,156 284,156" fill="#FFD700" opacity="0.8" />

            {/* TREE (center) */}
            <g className="sim-tree-anim" style={{ transformOrigin: '270px 340px' }}>
              {/* Trunk */}
              <path d="M258 340 Q262 270 270 240 Q278 270 282 340 Z" fill="#5c2b0b" />
              <path d="M262 340 Q266 290 270 260 Q274 290 278 340 Z" fill="#78350f" />
              {/* Canopy */}
              <circle cx="270" cy="195" r="70" fill="#14532d" />
              <circle cx="230" cy="215" r="45" fill="#166534" />
              <circle cx="310" cy="215" r="45" fill="#166534" />
              <circle cx="270" cy="155" r="55" fill="#166534" />
              <circle cx="240" cy="185" r="40" fill="#22c55e" />
              <circle cx="300" cy="185" r="40" fill="#22c55e" />
              <circle cx="270" cy="145" r="48" fill="#4ade80" />
            </g>

            {/* Roots */}
            <g stroke="#5d4037" strokeWidth="3" fill="none" strokeLinecap="round">
              <path d="M270,340 Q248,358 235,370" /><path d="M270,348 Q270,365 262,378" />
              <path d="M270,340 Q292,358 305,370" /><path d="M270,350 Q290,368 298,380" />
            </g>

            {/* Soil */}
            <ellipse cx="290" cy="340" rx="290" ry="12" fill="#6d4c41" />
            <rect x="0" y="345" width="580" height="60" fill="url(#soil)" />

            {/* CO₂ icon — grey cloud */}
            <g>
              <g style={{ display: co2 >= 1 ? '' : 'none', animation: 'sim-moveRight 2.5s ease-in-out infinite' }}>
                <ellipse cx="95" cy="150" rx="22" ry="14" fill="#90a4ae" opacity="0.9" />
                <ellipse cx="108" cy="143" rx="16" ry="11" fill="#b0bec5" opacity="0.9" />
                <ellipse cx="82" cy="146" rx="14" ry="10" fill="#90a4ae" opacity="0.85" />
                <text x="95" y="155" textAnchor="middle" className="sim-mol-label" fontSize="9" fill="white">CO₂</text>
              </g>
              <g style={{ display: co2 >= 2 ? '' : 'none', animation: 'sim-moveRight 2.5s ease-in-out infinite 1.2s' }}>
                <ellipse cx="70" cy="185" rx="18" ry="12" fill="#90a4ae" opacity="0.85" />
                <ellipse cx="82" cy="179" rx="13" ry="9" fill="#b0bec5" opacity="0.85" />
                <text x="73" y="189" textAnchor="middle" className="sim-mol-label" fontSize="8" fill="white">CO₂</text>
              </g>
              <g style={{ display: co2 >= 3 ? '' : 'none', animation: 'sim-moveRight 2.5s ease-in-out infinite 0.6s' }}>
                <ellipse cx="80" cy="165" rx="19" ry="13" fill="#90a4ae" opacity="0.87" />
                <ellipse cx="92" cy="158" rx="14" ry="10" fill="#b0bec5" opacity="0.87" />
                <text x="83" y="170" textAnchor="middle" className="sim-mol-label" fontSize="8" fill="white">CO₂</text>
              </g>
            </g>
            {/* CO₂ label */}
            <text x="90" y="130" textAnchor="middle" fontSize="12" fontWeight="800" fill="#cfd8dc" style={{ fontFamily: 'Quicksand' }}>CO₂</text>

            {/* H₂O icon — water droplets */}
            <g>
              <g style={{ display: h2o >= 1 ? '' : 'none', animation: 'sim-moveUp 2.8s ease-in-out infinite 0.4s' }}>
                <path d="M220 310 Q220 295 230 285 Q240 295 240 310 Q240 320 230 323 Q220 320 220 310 Z" fill="#42a5f5" opacity="0.9" />
                <text x="230" y="312" textAnchor="middle" className="sim-mol-label" fontSize="8" fill="white">H₂O</text>
              </g>
              <g style={{ display: h2o >= 2 ? '' : 'none', animation: 'sim-moveUp 2.8s ease-in-out infinite 1.5s' }}>
                <path d="M250 318 Q250 306 258 298 Q266 306 266 318 Q266 326 258 328 Q250 326 250 318 Z" fill="#64b5f6" opacity="0.85" />
                <text x="258" y="318" textAnchor="middle" className="sim-mol-label" fontSize="7" fill="white">H₂O</text>
              </g>
              <g style={{ display: h2o >= 3 ? '' : 'none', animation: 'sim-moveUp 2.8s ease-in-out infinite 0.8s' }}>
                <path d="M195 315 Q195 303 203 295 Q211 303 211 315 Q211 323 203 325 Q195 323 195 315 Z" fill="#42a5f5" opacity="0.87" />
                <text x="203" y="315" textAnchor="middle" className="sim-mol-label" fontSize="7" fill="white">H₂O</text>
              </g>
            </g>
            <text x="235" y="338" textAnchor="middle" fontSize="11" fontWeight="800" fill="#64b5f6" style={{ fontFamily: 'Quicksand' }}>H₂O (Air)</text>

            {/* O₂ output — cloud shape (top right) */}
            <g>
              <g style={{ display: h2o >= 1 ? '' : 'none', animation: 'sim-moveUp 3s ease-in-out infinite 0.8s' }}>
                <ellipse cx="465" cy="120" rx="28" ry="17" fill="#81d4fa" opacity="0.9" />
                <ellipse cx="480" cy="112" rx="20" ry="13" fill="#b3e5fc" opacity="0.9" />
                <ellipse cx="450" cy="115" rx="18" ry="12" fill="#81d4fa" opacity="0.85" />
                <text x="465" y="120" textAnchor="middle" className="sim-mol-label" fontSize="9" fill="white">O₂</text>
              </g>
              <g style={{ display: h2o >= 2 ? '' : 'none', animation: 'sim-moveUp 3s ease-in-out infinite 2s' }}>
                <ellipse cx="505" cy="100" rx="22" ry="14" fill="#81d4fa" opacity="0.85" />
                <ellipse cx="518" cy="93" rx="16" ry="11" fill="#b3e5fc" opacity="0.85" />
                <text x="508" y="102" textAnchor="middle" className="sim-mol-label" fontSize="8" fill="white">O₂</text>
              </g>
              <g style={{ display: h2o >= 3 ? '' : 'none', animation: 'sim-moveUp 3s ease-in-out infinite 1.2s' }}>
                <ellipse cx="485" cy="140" rx="24" ry="15" fill="#81d4fa" opacity="0.87" />
                <ellipse cx="498" cy="133" rx="17" ry="12" fill="#b3e5fc" opacity="0.87" />
                <text x="488" y="142" textAnchor="middle" className="sim-mol-label" fontSize="8" fill="white">O₂</text>
              </g>
            </g>
            <text x="475" y="85" textAnchor="middle" fontSize="11" fontWeight="800" fill="#b3e5fc" style={{ fontFamily: 'Quicksand' }}>O₂</text>
            <text x="475" y="98" textAnchor="middle" fontSize="9" fontWeight="700" fill="#81d4fa" style={{ fontFamily: 'Quicksand' }}>(Oksigen)</text>

            {/* Glukosa output — hexagon-ish circles (bottom right) */}
            <g>
              <g style={{ display: co2 >= 1 ? '' : 'none', animation: 'sim-floatDown 3s ease-in-out infinite 0.6s' }}>
                <circle cx="470" cy="240" r="24" fill="#FF8F00" opacity="0.92" />
                <text x="470" y="237" textAnchor="middle" className="sim-mol-label" fontSize="9" fill="white">Glukosa</text>
                <text x="470" y="249" textAnchor="middle" className="sim-mol-label" fontSize="7" fill="#FFF9C4">C₆H₁₂O₆</text>
              </g>
              <g style={{ display: co2 >= 2 ? '' : 'none', animation: 'sim-floatDown 3s ease-in-out infinite 1.5s' }}>
                <circle cx="500" cy="270" r="20" fill="#FFA000" opacity="0.85" />
                <text x="500" y="268" textAnchor="middle" className="sim-mol-label" fontSize="8" fill="white">Glukosa</text>
                <text x="500" y="278" textAnchor="middle" className="sim-mol-label" fontSize="6" fill="#FFF9C4">C₆H₁₂O₆</text>
              </g>
              <g style={{ display: co2 >= 3 ? '' : 'none', animation: 'sim-floatDown 3s ease-in-out infinite 2.2s' }}>
                <circle cx="445" cy="275" r="18" fill="#FF8F00" opacity="0.88" />
                <text x="445" y="273" textAnchor="middle" className="sim-mol-label" fontSize="7" fill="white">Glukosa</text>
                <text x="445" y="282" textAnchor="middle" className="sim-mol-label" fontSize="5.5" fill="#FFF9C4">C₆H₁₂O₆</text>
              </g>
            </g>

            {/* Arrows (guide lines) */}
            <g opacity="0.75">
              {/* CO₂ → tree */}
              <line x1="130" y1="150" x2="195" y2="185" stroke="#78909C" strokeWidth="2.5" strokeDasharray="5,3" />
              <polygon points="195,185 186,179 189,189" fill="#78909C" />
              {/* H₂O → tree */}
              <line x1="250" y1="295" x2="265" y2="265" stroke="#1565c0" strokeWidth="2.5" strokeDasharray="5,3" />
              <polygon points="265,265 260,274 270,274" fill="#1565c0" />
              {/* tree → O₂ */}
              <line x1="340" y1="165" x2="430" y2="130" stroke="#1976d2" strokeWidth="2.5" strokeDasharray="5,3" />
              <polygon points="430,130 420,133 423,123" fill="#1976d2" />
              {/* tree → Glukosa */}
              <line x1="340" y1="210" x2="440" y2="238" stroke="#e65100" strokeWidth="2.5" strokeDasharray="5,3" />
              <polygon points="440,238 430,235 434,245" fill="#e65100" />
            </g>
          </svg>

          {/* Dark overlay when light off */}
          <div className={`sim-dark-overlay ${!lightOn ? "show" : ""}`}>
            <span style={{ fontSize: '2.5rem' }}>🌑</span>
            <span>Cahaya Mati — Fotosintesis Berhenti!</span>
            <span style={{ fontSize: '0.82rem', opacity: 0.7 }}>Nyalakan cahaya untuk melanjutkan.</span>
          </div>
        </div>

        {/* Bottom hint */}
        <div className="sim-hint">
          Klik bahan (CO₂, H₂O, Cahaya) untuk menambahkannya ke dalam fotosintesis. klik tombol proses untuk melihat penjelasan
        </div>
      </div>

      {screen === "main" && (
        <div className="sim-route-nav">
          <Link href="/apersepsi" aria-label="Kembali ke Apersepsi" className="sim-route-link">
            <ArrowLeft size={28} strokeWidth={3} />
          </Link>
          <Link href="/analisis" aria-label="Lanjut ke Analisis" className="sim-route-link sim-route-link-next">
            <ArrowRight size={28} strokeWidth={3} />
          </Link>
        </div>
      )}

      {/* ===== DETAIL SCREENS ===== */}
      <TerangScreen active={screen === "terang"} onBack={() => setScreen("main")} />
      <GelapScreen active={screen === "gelap"} onBack={() => setScreen("main")} />
    </div>
  );
}
