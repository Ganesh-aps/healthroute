import { useEffect } from 'react';
import Icon from '../components/Icon.jsx';
const stats=[['40','+','Countries Served'],['50','+','Partner Hospitals'],['24','/7','Dedicated Support'],['100','%','Confidential & Secure']];
const pillars=[
  ['shield-check','Trusted & Verified Hospitals','Partnered with leading hospitals in India',''],
  ['globe','Care for International Patients','We serve patients from 40+ countries','blue'],
  ['headset','Dedicated Support','Personalized assistance at every step',''],
  ['star','Patient First Approach','Your comfort, safety & satisfaction first','blue'],
];
export default function Trust(){
  useEffect(()=>{
    const counters=document.querySelectorAll('[data-count]');
    if(!('IntersectionObserver' in window)){counters.forEach(el=>el.textContent=el.dataset.count+el.dataset.suffix);return}
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      const el=entry.target,target=Number(el.dataset.count),suffix=el.dataset.suffix||'',start=performance.now(),duration=1400;
      const animate=now=>{const progress=Math.min((now-start)/duration,1),eased=1-Math.pow(1-progress,3);el.textContent=Math.round(target*eased)+suffix;if(progress<1)requestAnimationFrame(animate)};
      requestAnimationFrame(animate);observer.unobserve(el);
    }),{threshold:.5});
    counters.forEach(el=>observer.observe(el));
    return()=>observer.disconnect();
  },[]);
  return <>
    <section className="section-sm bg-navy"><div className="container"><div className="stats">{stats.map(([count,suffix,label],i)=><div className={`stat reveal d${i+1}`} key={label}><div className="num" style={{color:'#7fd9a0'}}><span data-count={count} data-suffix={suffix}>0</span></div><div className="lbl" style={{color:'#a9c0dd'}}>{label}</div></div>)}</div></div></section>
    <section className="section" id="hospitals"><span id="about"/><div className="container"><div className="feature-strip" style={{gridTemplateColumns:'repeat(4,1fr)'}}>{pillars.map(([icon,title,desc,tone],i)=><article className={`feature-mini card reveal d${i+1}`} style={{textAlign:'center'}} key={title}><span className="fm-ic" style={tone?{background:'var(--blue-soft)',color:'var(--blue-dark)'}:undefined}><Icon name={icon}/></span><b>{title}</b><p style={{fontSize:'.82rem',color:'var(--muted)',marginTop:6}}>{desc}</p></article>)}</div></div></section>
  </>;
}
