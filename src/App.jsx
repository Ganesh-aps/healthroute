import Header from './components/Header.jsx';
import WhatsAppIcon from './components/WhatsAppIcon.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';
import Hero from './sections/Hero.jsx';
import Services from './sections/Services.jsx';
import Steps from './sections/Steps.jsx';
import Packages from './sections/Packages.jsx';
import Trust from './sections/Trust.jsx';
import Enquiry from './sections/Enquiry.jsx';
import Footer from './components/Footer.jsx';
import InnerPages from './pages/InnerPages.jsx';
import { BrowserRouter, Link, usePathname } from './components/Router.jsx';
import { useEffect } from 'react';

const knownRoutes=['/about','/services','/treatments','/packages','/hospitals','/patient-journey','/faqs','/contact'];

function HomePage(){return <main><Hero/><Services/><Steps/><Packages/><Trust/><Enquiry/></main>}
function NotFound(){return <main className="section"><div className="container tac"><h1>Page not found</h1><p className="mt-m">The page you’re looking for isn’t available.</p><Link className="btn btn-primary mt-m" to="/">Return Home</Link></div></main>}
function Site(){const pathname=usePathname();const route=pathname.replace(/\/$/,'')||'/';useEffect(()=>{const title=route==='/'?'HealRoute India — Your Trusted Partner for Medical Travel in India':route==='/hospitals'?'Partner Hospitals':route==='/contact'?'Contact Us':route==='/about'?'About Us':route==='/patient-journey'?'Patient Journey':route==='/faqs'?'FAQs':route.slice(1).replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());document.title=`${title} — HealRoute India`},[route]);return <><Header/><ScrollReveal key={route}/>{route==='/'?<HomePage/>:knownRoutes.includes(route)?<main><InnerPages pathname={route}/></main>:<NotFound/>}<Footer/><a className="fab-wa" href="https://wa.me/917292060190" aria-label="Chat on WhatsApp"><WhatsAppIcon/></a></>}

export default function App(){return <BrowserRouter><Site/></BrowserRouter>}
