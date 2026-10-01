import { useEffect, useState } from 'react';
import { ChevronDown, Clock3, Mail, MapPin, Phone, X } from 'lucide-react';
import Brand from './Brand.jsx';
import { Link, usePathname } from './Router.jsx';

const links = [['Home','/'],['About Us','/about'],['Services','/services'],['Treatments','/treatments'],['Packages','/packages'],['Hospitals','/hospitals'],['Patient Journey','/patient-journey'],['FAQs','/faqs'],['Contact Us','/contact']];
const serviceLinks = [['Hospital Coordination','/services'],['Second Opinion','/services'],['Travel & Visa Support','/services'],['Accommodation','/services'],['Post-Treatment Follow-up','/services']];

function NavLinks({ mobile = false, onSelect = () => {}, pathname }) {
  if (mobile) return <nav>{links.map(([label,href])=><Link to={href} key={label} onClick={onSelect}>{label}</Link>)}</nav>;
  return <ul className="nav-links">{links.map(([label,href])=>label==='Services'?
    <li className="has-drop" key={label}><Link to={href} className={pathname===href?'active':''}>{label}<ChevronDown className="chev"/></Link>
      <div className="dropdown">{serviceLinks.map(([name,target],i)=><Link to={target} key={name}>{i===0?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01"/></svg>:i===1?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/></svg>:i===2?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m2 16 20-7-9 13-2-5-9-1Z"/></svg>:i===3?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 12v6m18-6v6M5 12V8a2 2 0 0 1 2-2h4v6"/></svg>:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h4l2 5 4-12 2 7h6"/></svg>}{name}</Link>)}</div>
    </li>:<li key={label}><Link className={pathname===href?'active':''} to={href}>{label}</Link></li>)}</ul>;
}

export default function Header(){
  const [open,setOpen]=useState(false);const pathname=usePathname();
  useEffect(()=>{const update=()=>document.querySelector('.site-header')?.classList.toggle('scrolled',window.scrollY>24);const onKey=e=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('scroll',update,{passive:true});window.addEventListener('keydown',onKey);update();return()=>{window.removeEventListener('scroll',update);window.removeEventListener('keydown',onKey);document.body.classList.remove('menu-open')}},[]);
  useEffect(()=>{document.body.classList.toggle('menu-open',open)},[open]);
  const close=()=>setOpen(false);
  return <><div className="topbar"><div className="container"><div className="tb-left" style={{display:'flex',gap:22}}><a href="mailto:info@healrouteindia.com"><Mail/>info@healrouteindia.com</a><a href="#"><MapPin/>Noida, Uttar Pradesh, India</a></div><div className="tb-right"><a href="#"><Clock3/>Mon–Sat: 10 AM – 6 PM</a><a href="tel:+917292060190"><Phone/>+91 7292060190</a></div></div></div>
  <header className="site-header"><div className="container nav"><Brand/><NavLinks pathname={pathname}/><div className="nav-cta"><a href="tel:+917292060190" className="nav-phone"><Phone/>+91 7292060190</a><button className="burger" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(v=>!v)}><span/><span/><span/></button></div></div></header>
  <button className="menu-overlay" aria-label="Close navigation" onClick={close}/><aside className="mobile-menu" aria-label="Mobile navigation"><div className="mm-head"><Brand compact/><button className="mm-close" aria-label="Close menu" onClick={close}><X/></button></div><NavLinks mobile onSelect={close} pathname={pathname}/><div className="mm-cta"><Link className="btn btn-primary" to="/contact" onClick={close}>Get Free Consultation</Link><a href="tel:+917292060190" className="btn btn-outline">Call +91 7292060190</a></div></aside></>;
}
