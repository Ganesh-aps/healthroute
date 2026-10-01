import Icon from '../components/Icon.jsx';
const services=[
  ['building','Hospital Coordination','Access to top hospitals and specialists.',''],
  ['message','Second Opinion','Expert medical review for informed decisions.','blue-ic'],
  ['plane','Travel Support','Airport pickup & travel assistance.',''],
  ['bed','Accommodation','Comfortable stay near hospitals.','blue-ic'],
  ['pulse','Follow-up Care','Post-treatment support and recovery guidance.',''],
];
export default function Services(){return <section className="section" id="services"><div className="container">
  <div className="section-head reveal"><span className="eyebrow center-line">What We Do</span><h2>Comprehensive Care, <span className="title-accent">Every Step of the Way</span></h2><p>From your first enquiry to a safe return home, we coordinate every detail so you can focus on healing.</p></div>
  <div className="grid cards-5">{services.map(([icon,title,desc,tone],i)=><article className={`card center reveal d${i+1} ${tone}`} key={title}><span className="c-ic"><Icon name={icon}/></span><h3>{title}</h3><p>{desc}</p></article>)}</div>
</div></section>}
