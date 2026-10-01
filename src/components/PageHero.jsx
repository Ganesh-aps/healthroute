import { ChevronRight } from 'lucide-react';
import Icon from './Icon.jsx';
import MedicalIllustration from './MedicalIllustration.jsx';
import { Link } from './Router.jsx';

export default function PageHero({ title, subtitle, intro, badges }) {
  return <section className="page-hero"><span className="blob b1"/><span className="blob b2"/><div className="container page-hero-grid">
    <div className="page-hero-copy hero-load l1">
      <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight/><span>{title}</span></div>
      <h1>{title}</h1>
      <p className="sub">{subtitle}</p>
      <p className="lead">{intro}</p>
      <div className="mini-trust">{badges.map(([icon, text]) => <span className="chip" key={text}><Icon name={icon}/>{text}</span>)}</div>
    </div>
    <div className="page-hero-visual hero-load l2"><div className="scene"><MedicalIllustration wide/>
      <div className="float-card fc1"><span className="ic" style={{background:'var(--green-soft)',color:'var(--green-dark)'}}><Icon name="shield-check"/></span><span><b>Trusted Care</b><small>You can rely on</small></span></div>
      <div className="float-card fc2"><span className="ic" style={{background:'var(--blue-soft)',color:'var(--blue-dark)'}}><Icon name="globe"/></span><span><b>Global Patients</b><small>40+ countries</small></span></div>
    </div></div>
  </div></section>;
}
