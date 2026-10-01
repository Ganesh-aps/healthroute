const shapes = {
  building: <><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01M10 21v-4h4v4"/></>,
  message: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/><path d="M9 10h6M9 13h4"/></>,
  plane: <path d="m2 16 20-7-9 13-2-5-9-1Z"/>,
  bed: <path d="M3 12h18M3 12V7a2 2 0 0 1 2-2h6v7M3 12v6m18-6v6m0-6a2 2 0 0 0-2-2h-6"/>,
  pulse: <path d="M3 12h4l2 5 4-12 2 7h6"/>,
  shield: <path d="M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6l-8-3Z"/>,
  'shield-check': <><path d="M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></>,
  'check-circle': <><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="9"/></>,
  people: <><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M16 8a3 3 0 0 1 0 6m5 6a6 6 0 0 0-4-5.6"/></>,
  person: <><circle cx="12" cy="7" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
  globe: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/></>,
  headset: <><path d="M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1v-7h3M3 19a2 2 0 0 0 2 2h1v-7H3"/></>,
  crown: <path d="m5 16-2-9 6 4 3-7 3 7 6-4-2 9Z"/>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>,
  star: <path d="m12 3 2.5 5 5.5.8-4 4 1 5.5L12 21l-5-2.7 1-5.5-4-4 5.5-.8Z"/>,
};
export default function Icon({name}){return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[name] || shapes.heart}</svg>}
