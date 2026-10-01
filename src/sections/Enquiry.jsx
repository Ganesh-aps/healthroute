import { useState } from 'react';
import { Check, Lock, Send } from 'lucide-react';

const countries=['United States','United Kingdom','UAE','Nigeria','Kenya','Bangladesh','Other'];
const treatments=['Cardiology & Heart Care','Cancer Care & Oncology','Orthopaedics & Joint Replacement','Neurology & Spine Care','IVF & Fertility','Other'];
export default function Enquiry(){
  const [sent,setSent]=useState(false);
  const submit=e=>{e.preventDefault();setSent(true);requestAnimationFrame(()=>document.querySelector('.form-success')?.scrollIntoView({behavior:'smooth',block:'center'}));};
  return <section className="section bg-mesh" id="enquiry"><div className="container"><div className="split">
    <div className="reveal"><span className="eyebrow">Start Your Medical Journey Today</span><h2 style={{fontSize:'clamp(1.8rem,3.4vw,2.5rem)',margin:'14px 0 16px'}}>Fill in the details and our care team will get in touch within 24 hours.</h2>
      <ul className="check-list mt-m"><li><Check/><span><b>100% Confidential</b> — your information stays private.</span></li><li><Check/><span><b>No Obligation</b> — free, friendly guidance.</span></li><li><Check/><span><b>Best Treatment Options</b> — matched to your needs.</span></li></ul>
    </div>
    <div className="reveal d2"><div className="form-card">
      <form data-enquiry onSubmit={submit} style={{display:sent?'none':undefined}}>
        <div className="form-grid">
          <div className="field"><label htmlFor="full-name">Full Name <span className="req">*</span></label><input id="full-name" required placeholder="Enter your full name"/></div>
          <div className="field"><label htmlFor="country">Country of Residence <span className="req">*</span></label><select id="country" required defaultValue=""><option value="">Select Country</option>{countries.map(v=><option key={v}>{v}</option>)}</select></div>
          <div className="field"><label htmlFor="phone">Phone / WhatsApp <span className="req">*</span></label><input id="phone" type="tel" required placeholder="+91"/></div>
          <div className="field"><label htmlFor="email">Email Address <span className="req">*</span></label><input id="email" type="email" required placeholder="you@email.com"/></div>
          <div className="field"><label htmlFor="treatment">Treatment Required <span className="req">*</span></label><select id="treatment" required defaultValue=""><option value="">Select Treatment</option>{treatments.map(v=><option key={v}>{v}</option>)}</select></div>
          <div className="field"><label htmlFor="travellers">Number of Travellers</label><select id="travellers" defaultValue=""><option value="">Select</option>{['1','2','3','4+'].map(v=><option key={v}>{v}</option>)}</select></div>
          <div className="field full"><label htmlFor="needs">Tell us more about your needs</label><textarea id="needs" placeholder="Medical condition, surgery, reports or any other details…"/></div>
        </div>
        <div className="center" style={{marginTop:24}}><button type="submit" className="btn btn-primary btn-lg" style={{width:'100%'}}>Send Enquiry <Send/></button></div>
        <div className="form-note"><Lock/>Our team will contact you within 24 hours.</div>
      </form>
      <div className={`form-success${sent?' show':''}`} aria-live="polite"><span className="c-ic" style={{width:64,height:64,margin:'0 auto 16px',background:'var(--green-soft)',color:'var(--green-dark)',borderRadius:'50%',display:'grid',placeItems:'center'}}><Check/></span><h3>Enquiry Received!</h3><p style={{color:'var(--muted)',marginTop:8}}>Thank you. Our care team will contact you within 24 hours to guide your medical journey.</p></div>
    </div></div>
  </div></div></section>
}
