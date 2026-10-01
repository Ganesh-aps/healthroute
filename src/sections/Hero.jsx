import Icon from '../components/Icon.jsx';
import MedicalIllustration from '../components/MedicalIllustration.jsx';
import WhatsAppIcon from '../components/WhatsAppIcon.jsx';

const badges = [
  ['shield', 'Trusted Hospitals', 'NABH & JCI Accredited'],
  ['pulse', 'End-to-End Support', 'From Planning to Recovery'],
  ['people', 'Personalised Care', 'For You and Your Family'],
];

export default function Hero(){return <section className="hero" id="home">
  <span className="blob b1"/><span className="blob b2"/>
  <div className="container hero-grid">
    <div className="hero-copy">
      <span className="eyebrow hero-load l1">International Patient Facilitation</span>
      <h1 className="hero-load l1">Your Trusted Partner for<br/><span className="grad">Medical Travel in India</span></h1>
      <p className="lead hero-load l2">World-class treatment, personalized care and complete support for international patients — before, during and after your journey to India.</p>
      <div className="hero-badges hero-load l3">{badges.map(([icon,title,detail])=><div className="hero-badge" key={title}><span className="ic"><Icon name={icon}/></span><span><b>{title}</b><small>{detail}</small></span></div>)}</div>
      <div className="hero-actions hero-load l4">
        <a className="btn btn-primary btn-lg" href="#enquiry">Get Free Consultation <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></a>
        <a className="btn btn-outline btn-lg" href="#packages">Explore Packages</a>
        <a href="https://wa.me/917292060190" className="btn btn-whatsapp btn-lg"><WhatsAppIcon/>Chat on WhatsApp</a>
      </div>
    </div>
    <div className="hero-visual hero-load l3">
      <div className="scene"><MedicalIllustration/>
        <div className="float-card fc1"><span className="ic" style={{background:'var(--green-soft)',color:'var(--green-dark)'}}><Icon name="check-circle"/></span><span><b>24/7 Support</b><small>We're always here</small></span></div>
        <div className="float-card fc2"><span className="ic" style={{background:'var(--blue-soft)',color:'var(--blue-dark)'}}><Icon name="shield"/></span><span><b>NABH & JCI</b><small>Accredited hospitals</small></span></div>
        <div className="float-card fc3"><span className="ic" style={{background:'#eef9f1',color:'#0f7a37'}}><Icon name="globe"/></span><span><b>40+ Countries</b><small>Patients served</small></span></div>
      </div>
    </div>
  </div>
</section>}
