import { Link } from './Router.jsx';

export default function Brand({ footer = false, compact = false }) {
  const gradientId=footer?'lgf':compact?'lgmenu':'lgmark';
  return <Link className={`logo${footer ? ' f-logo' : ''}`} to="/" aria-label="HealRoute India home">
    <svg className="mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect width="48" height="48" rx="13" fill={`url(#${gradientId})`}/>
      <path d="M24 35c-1-.7-9-6-9-12.2A5.3 5.3 0 0 1 24 19a5.3 5.3 0 0 1 9 3.8C33 29 25 34.3 24 35Z" fill="#fff"/>
      <path d="M16 24h3l2-4 3 7 2.2-4H32" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <defs><linearGradient id={gradientId} x1="0" y1="0" x2="48" y2="48"><stop stopColor="#1eb85a"/><stop offset="1" stopColor="#0f7a37"/></linearGradient></defs>
    </svg>
    <span className="word"><b>Heal<span>Route</span></b><small style={footer?{color:'#7fd9a0'}:undefined}>India</small>{!compact && !footer && <em>Your Health. Our Route. Your Peace.</em>}</span>
  </Link>;
}
