import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Clock3 } from 'lucide-react';
import Brand from './Brand.jsx';
import { Link } from './Router.jsx';
const quick=[['Home','/'],['About Us','/about'],['Services','/services'],['Packages','/packages'],['Hospitals','/hospitals'],['Contact Us','/contact']];
const services=[['Hospital & Doctor Coordination','/services'],['Second Opinion','/services'],['Travel & Visa Support','/services'],['Accommodation','/services'],['Post-treatment Follow-up','/services'],['FAQs','/faqs']];
export default function Footer(){return <footer className="footer"><div className="container"><div className="footer-grid">
  <div><Brand footer/><p>Your trusted partner for medical travel in India. We make your healthcare journey safe, simple and stress-free.</p><div className="socials"><a href="#" aria-label="Facebook"><Facebook/></a><a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="LinkedIn"><Linkedin/></a><a href="#" aria-label="YouTube"><Youtube/></a></div></div>
  <div><h5>Quick Links</h5><div className="f-links">{quick.map(([text,href])=><Link key={text} to={href}>{text}</Link>)}</div></div>
  <div><h5>Our Services</h5><div className="f-links">{services.map(([text,href])=><Link key={text} to={href}>{text}</Link>)}</div></div>
  <div><h5>Contact Us</h5><ul className="f-contact"><li><Phone/>+91 7292060190</li><li><Mail/>info@healrouteindia.com</li><li><MapPin/>B-10, First Floor, Sector-2, Noida, Uttar Pradesh – 201301, India</li><li><Clock3/>Mon–Sat: 10:00 AM – 6:00 PM</li></ul></div>
</div><div className="footer-bottom"><span>© 2026 HealRoute India. All Rights Reserved.</span><div className="fb-links"><a href="#">Privacy Policy</a><a href="#">Terms &amp; Conditions</a><a href="#">Refund Policy</a></div></div></div></footer>}
