import Icon from '../components/Icon.jsx';
import { Check } from 'lucide-react';
const plans=[
  {icon:'shield',title:'Essential Care Plan',desc:'Best for patients who need basic hospital support.',tone:'pkg-essential',points:['Hospital & doctor recommendation','Second opinion coordination','Treatment estimate','Email & WhatsApp support']},
  {icon:'person',title:'Assist Care Plan',desc:'Travel, stay & appointment support included.',tone:'pkg-assist',points:['Everything in Essential Plan','Airport pickup','Hotel / stay assistance','Daily WhatsApp support']},
  {icon:'people',title:'Complete Care Plan',desc:'Full support from arrival to discharge.',tone:'pkg-complete pkg-popular',points:['Everything in Assist Plan','Dedicated patient coordinator','Billing & discharge coordination','Post-treatment follow-up'],popular:true},
  {icon:'crown',title:'Elite International Care',desc:'Premium end-to-end concierge support.',tone:'pkg-elite',points:['Everything in Complete Plan','24/7 helpline & expert coordination','Premium airport meet & assist','Interpreter & translation services']},
];
function PlanIcon({name}){if(name==='person')return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 11a4 4 0 1 0-8 0M4 20a8 8 0 0 1 16 0"/></svg>;return <Icon name={name}/>}
export default function Packages(){return <section className="section" id="packages"><div className="container">
  <div className="section-head reveal"><span className="eyebrow center-line">Pricing Plans</span><h2>Support Packages for <span className="title-accent">Every Need</span></h2><p>Transparent, flexible support packages to make your medical travel smooth and worry-free.</p></div>
  <div className="grid pkg-grid">{plans.map(({icon,title,desc,tone,points,popular})=><article className={`pkg ${tone} reveal d${plans.findIndex(p=>p.title===title)+1}`} key={title}>
    {popular&&<span className="ribbon">Popular</span>}<span className="pk-ic"><PlanIcon name={icon}/></span><h3>{title}</h3><p className="pk-desc">{desc}</p>
    <ul className="pk-feats">{points.map(point=><li key={point}><Check/>{point}</li>)}</ul>
    <a className={`btn ${icon==='person'?'btn-blue':'btn-primary'}`} href="#enquiry" style={icon==='people'?{background:'linear-gradient(135deg,#8b6cff,#6a45e6)',boxShadow:'0 16px 30px -14px rgba(124,92,255,.5)'}:icon==='crown'?{background:'linear-gradient(135deg,#e3c878,#c39a3c)',color:'#3a2c08',boxShadow:'0 16px 30px -14px rgba(195,154,60,.5)'}:undefined}>Enquire Now</a>
  </article>)}</div>
  <div className="center" style={{marginTop:36}}><a className="btn btn-outline btn-lg" href="#packages">Compare All Packages <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></a></div>
</div></section>}
