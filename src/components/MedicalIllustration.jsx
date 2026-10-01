export default function MedicalIllustration({wide=false}){return <svg className="sky" preserveAspectRatio={wide?'none':'xMidYMid meet'} viewBox="0 0 520 420" role="img" aria-label="Medical care illustration">
  <defs>
    <linearGradient id="skyg" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#dff0fb"/><stop offset="1" stopColor="#eaf7f0"/></linearGradient>
    <linearGradient id="docg" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fff"/><stop offset="1" stopColor="#eef3f8"/></linearGradient>
    <linearGradient id="grnd" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#16a34a"/><stop offset="1" stopColor="#0f7a37"/></linearGradient>
  </defs>
  <rect width="520" height="420" rx="22" fill="url(#skyg)"/>
  <circle cx="430" cy="80" r="46" fill="#fce9b8" opacity=".7"/>
  <g opacity=".5" fill="#9fc6ab"><rect x="20" y="250" width="34" height="110"/><rect x="60" y="220" width="40" height="140"/><rect x="430" y="240" width="36" height="120"/><rect x="474" y="270" width="30" height="90"/></g>
  <g opacity=".55" fill="#7fb6e0"><path d="M250 250c0-22 14-40 30-40s30 18 30 40Z"/><rect x="252" y="250" width="56" height="60"/><path d="M280 196c4 6 4 10 0 16-4-6-4-10 0-16Z"/><rect x="236" y="262" width="10" height="48"/><rect x="314" y="262" width="10" height="48"/></g>
  <rect x="0" y="310" width="520" height="110" fill="#dff0e4"/>
  <path d="M60 120 Q 260 30 470 130" stroke="#1f6fd6" strokeWidth="2.5" strokeDasharray="2 9" strokeLinecap="round" fill="none" opacity=".7"/>
  <g transform="translate(456,118) rotate(28)"><path d="M0 0 18 4-2 12 0 4-8 6Z" fill="#1f6fd6"/></g>
  <rect x="120" y="330" width="280" height="14" rx="4" fill="#cdb89c"/>
  <g><rect x="170" y="250" width="56" height="84" rx="18" fill="url(#docg)" stroke="#dfe7ee"/><circle cx="198" cy="232" r="20" fill="#f1c9a5"/><path d="M178 230a20 20 0 0 1 40 0Z" fill="#3a3a3a"/><rect x="190" y="276" width="16" height="40" rx="4" fill="#16a34a"/><circle cx="198" cy="300" r="4" fill="#0f7a37"/></g>
  <g><rect x="300" y="258" width="52" height="76" rx="16" fill="#d9e6f5"/><circle cx="326" cy="240" r="18" fill="#e9b892"/><path d="M308 238a18 18 0 0 1 36 0Z" fill="#5a4632"/></g>
  <g transform="translate(372,196)"><rect width="46" height="46" rx="12" fill="url(#grnd)"/><path d="M23 12v22M12 23h22" stroke="#fff" strokeWidth="5" strokeLinecap="round"/></g>
  <g transform="translate(96,300)"><rect x="6" y="22" width="20" height="20" rx="3" fill="#c98a5a"/><path d="M16 22c-8-4-10-14-2-18 2 8-2 14 2 18Zm0 0c8-4 10-14 2-18-2 8 2 14-2 18Z" fill="#3fae6a"/></g>
</svg>}
