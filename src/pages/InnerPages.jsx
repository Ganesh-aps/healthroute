import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, HeartPulse, Mail, MapPin, Phone, ShieldCheck, Send, Stethoscope, Plane, BedDouble, Eye, Bone, Brain, Baby, Smile, Sparkles, Activity, Leaf, Globe2, UsersRound, MessageCircle, ClipboardList, CalendarCheck, Headset, Heart, Building2, FileText, CarFront, CircleHelp } from 'lucide-react';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import { Link } from '../components/Router.jsx';
import WhatsAppIcon from '../components/WhatsAppIcon.jsx';

const pageData = {
  '/about': ['About Us','Your Trusted Partner for Medical Travel in India','At HealRoute India, we help international patients access trusted healthcare services in India with comfort, clarity, and care.','Trusted Hospitals','Personalized Support','Care You Can Rely On'],
  '/services': ['Services','Complete Medical Travel Support in India','HealRoute India provides end-to-end coordination and personalized assistance for international patients, ensuring a smooth, safe, and comfortable treatment journey in India.','Trusted Hospitals','Personalized Support','Care You Can Trust'],
  '/treatments': ['Treatments','World-Class Treatment. Trusted Care in India.','HealRoute India helps international patients connect with the best hospitals and specialists across India for a wide range of treatments.','Trusted Hospitals & Specialists','Personalized Support','Care You Can Rely On'],
  '/packages': ['Packages','Choose the Right Support Package for Your Medical Journey','At HealRoute India, we provide transparent and flexible support packages to make your medical travel in India smooth, comfortable and worry-free.','Your Health, Our Priority','Personalized Support','Care You Can Rely On'],
  '/hospitals': ['Partner Hospitals','Leading Hospitals Across Delhi NCR','We connect international patients with India’s most trusted, accredited hospitals — known for advanced technology, expert specialists and world-class outcomes.','NABH & JCI Accredited','Top Specialists','International Patient Desks'],
  '/patient-journey': ['Patient Journey','A Smooth Step-by-Step Medical Travel Experience in India.','At HealRoute India, we support international patients at every step of their medical journey — from the first enquiry to post-treatment follow-up. Our care coordinators are with you every step of the way.','Trusted Hospitals','Personalized Support','International Patient Care'],
  '/faqs': ['FAQs','Frequently Asked Questions','At HealRoute India, we help international patients understand every step of their medical journey — from hospital coordination to local travel, stay assistance, and follow-up support. We’re with you, always.','Trusted Hospitals','Personalized Support','International Patient Care'],
  '/contact': ['Contact Us','We’re Here to Guide Your Medical Journey','HealRoute India is here to make your medical journey in India smooth, safe and stress-free. From hospital coordination and treatment support to local travel, stay assistance and follow-up care — we’re with you at every step.','Trusted Hospitals','Personalized Support','Quick Response'],
};

const benefits = [
  ['people','Patient-First Coordination'],['shield-check','Trusted Hospital Connections'],['message','Clear Communication'],['heart','Personalized Assistance'],['pulse','End-to-End Support'],['globe','Comfort for Families'],
];

const treatments = [
  [HeartPulse,'Cardiology & Heart Care','Advanced heart care for a healthier tomorrow.'],
  [Activity,'Cancer Care & Oncology','Comprehensive cancer care with advanced technology.'],
  [Bone,'Orthopaedics & Joint Replacement','Restoring mobility and improving quality of life.'],
  [Brain,'Neurology & Spine Care','Expert care for brain, spine and nervous system.'],
  [Baby,'IVF & Fertility Treatment','Compassionate care for your parenthood journey.'],
  [Eye,'Eye Care','Advanced treatments for better vision.'],
  [Smile,'Dental Care','Complete dental solutions for a healthy smile.'],
  [Sparkles,'Cosmetic & Plastic Surgery','Enhancing confidence with safe & advanced care.'],
  [Heart,'Kidney & Liver Care','Specialized care for kidney, liver and related disorders.'],
  [Activity,'Rehabilitation & Physiotherapy','Recovery and rehabilitation for a better life.'],
  [Stethoscope,'Others On Demand','Additional specialists available based on patient needs.'],
  [Leaf,'Ayurveda & Wellness','Holistic healing and wellness therapies for mind, body and soul.'],
];

const plans = [
  { icon:'shield', title:'Essential Care Plan', desc:'Best for patients who need basic hospital and post-treatment support.', included:['Hospital & doctor recommendation','Medical registration assistance','Airport pickup coordination','Appointment booking','Email & WhatsApp support','Basic treatment journey guidance'], suitable:['Patients seeking low-fee consultations','Patients comparing hospitals before travel','Patients who want basic appointment help'], cta:'Enquire for Essential', theme:'pkg-essential' },
  { icon:'person', title:'Assist Care Plan', desc:'Best for patients who need meaningful support with travel and stay assistance.', included:['Everything in Essential Care Plan','Airport pickup & drop support','Local language assistance','Hotel & accommodation assistance','Daily WhatsApp support','Follow-up appointment coordination'], suitable:['Patients needing travel help in India','Patients visiting India for family','Patients who need basic travel and stay support'], cta:'Enquire for Assist', theme:'pkg-assist' },
  { icon:'people', title:'Complete Care Plan', desc:'Best for patients who want full support from arrival to discharge.', included:['Everything in Assist Care Plan','Dedicated patient coordinator','Priority hospital appointments','Billing & discharge coordination','Post-treatment follow-up','Emergency consultation support during stay'], suitable:['Patients coming for surgery or major treatment','Elderly patients needing extensive support','Patients who want end-to-end care'], cta:'Enquire for Complete', theme:'pkg-complete pkg-popular', popular:true },
  { icon:'crown', title:'Elite International Care', desc:'Best for patients who need premium end-to-end medical travel support.', included:['Everything in Complete Care Plan','24/7 helpline with expert coordination','Dedicated senior staff & elite support','Premium airport meet & assist','Visa & travel itinerary planning','Interpreter & translation services'], suitable:['Patients looking for VIP & premium treatment','Patients travelling from abroad with family','Patients requiring high-end medical care'], cta:'Enquire for Elite Care', theme:'pkg-elite' },
];

const hospitals = [
  ['Medanta','Gurugram',['Multi-Speciality','Cardiac','Transplant']],['Fortis Healthcare','Delhi NCR',['Multi-Speciality','Oncology','Neuro']],['Apollo Hospitals','Delhi',['Multi-Speciality','Cardiac','Transplant']],
  ['Max Healthcare','Delhi NCR',['Multi-Speciality','Oncology','Ortho']],['Artemis Hospitals','Gurugram',['Multi-Speciality','Neuro','Cardiac']],['Amrita Hospital','Faridabad',['Multi-Speciality','Transplant','Robotics']],
  ['Rajiv Gandhi Cancer Institute','Delhi',['Oncology','Cancer Care']],['Nova IVF Fertility','Delhi NCR',['IVF','Fertility']],['Apollo AyurVAID','New Delhi',['Ayurveda','Wellness']],
];

const journeySteps = [
  ['Share Your Medical Reports','Send us your reports securely online.'],['Get Hospital & Specialist Options','We shortlist the best hospitals and doctors for you.'],['Receive Treatment Estimate','Get a clear treatment plan and cost estimate.'],['Confirm Travel & Appointments','We plan your travel and fix appointments with ease.'],['Arrive in India & Local Support','Airport pickup and a warm welcome on arrival.'],['Treatment & On-Ground Assistance','Complete support throughout your treatment.'],['Recovery & Post-Treatment Follow-Up','We stay connected for your smooth recovery.'],
];

const journeySupport = [
  [Building2,'Hospital Coordination','Connecting you with the right hospitals and specialists.'],[CalendarCheck,'Appointment Booking','Hassle-free scheduling of consultations and treatments.'],[CarFront,'Local Travel Support','Airport transfers, local travel and city assistance.'],[BedDouble,'Stay Assistance','Comfortable and safe stay options near hospitals.'],[Headset,'Follow-Up Support','Post-treatment guidance and continuous care coordination.'],
];

const faqItems = [
  ['What is HealRoute India?','HealRoute India is a medical travel facilitation service that helps international patients plan and manage their treatment journey in India with ease.'],
  ['Do you help with hotel or accommodation booking?','Yes. We help you find safe, clean, and comfortable accommodation near the hospital as per your budget and preferences.'],
  ['Does HealRoute India provide medical treatment directly?','No. We do not provide medical treatment. We connect you with the best hospitals and specialists in India. Treatment is provided only by licensed hospitals and doctors.'],
  ['Do you provide support during hospital visits?','Yes. Our care coordinators assist you with appointments, documentation, translation, and guidance throughout your hospital visits.'],
  ['How does the process work?','You share your medical reports → we understand your needs → suggest the best options → assist with travel, stay, and appointments → support you throughout and after treatment.'],
  ['Can you help with second opinions?','Yes. We can help you get a second opinion from top specialists in India based on your reports.'],
  ['Can I get a treatment estimate before travelling to India?','Yes. We provide a clear treatment plan and estimate, including hospital charges, stay, and other costs, before you travel.'],
  ['What kind of treatments do you help coordinate?','We help coordinate a wide range of treatments including cancer care, cardiac surgery, organ transplants, orthopedics, neurology, IVF, and more.'],
  ['Can you help me choose the right hospital or doctor?','Absolutely. Based on your condition and preferences, we recommend the most suitable hospitals and experienced specialists.'],
  ['Do you support patients after treatment?','Yes. We provide post-treatment follow-up support, including medical reports, travel assistance, and guidance for continued care.'],
  ['Do you arrange airport pickup and local transport?','Yes. We arrange airport pickup and local transport to make your journey comfortable and hassle-free.'],
  ['Is my medical information kept confidential?','Absolutely. We maintain strict confidentiality of all your medical information and personal details.'],
];

function SectionHead({eyebrow,title,children}){return <div className="section-head reveal"><span className="eyebrow center-line">{eyebrow}</span><h2>{title}</h2>{children&&<p>{children}</p>}</div>}
function PageCta({title,copy,first='Enquire Now',blue=false,second='WhatsApp Us',secondTo='https://wa.me/917292060190',firstTo='/contact'}){return <section className="section"><div className={`container cta-band${blue?' blue':''} reveal`}><div><h2>{title}</h2><p>{copy}</p></div><div className="cta-actions">{firstTo.startsWith('/')?<Link className="btn btn-white" to={firstTo}>{first} <ArrowRight size={18}/></Link>:<a className="btn btn-white" href={firstTo}>{first} <ArrowRight size={18}/></a>}{secondTo.startsWith('/')?<Link className="btn btn-outline" to={secondTo}>{second}</Link>:<a className="btn btn-outline" href={secondTo}><WhatsAppIcon/>{second}</a>}</div></div></section>}
function BenefitStrip({title='WHY CHOOSE US',heading='Care That Puts Patients First',items=benefits}){return <section className="section bg-soft"><div className="container"><SectionHead eyebrow={title} title={heading}/><div className="feature-strip">{items.map(([icon,text])=><div className="feature-mini reveal" key={text}><span className="fm-ic"><Icon name={icon}/></span><b>{text}</b></div>)}</div></div></section>}
function Disclaimer({title='Important Note',copy,blue=false}){return <div className="container mt-l mb-m"><div className={`notice reveal${blue?' blue':''}`}><span className="n-ic"><ShieldCheck/></span><div><h4>{title}</h4><p>{copy}</p></div></div></div>}
function CheckList({items}){return <ul className="pk-feats">{items.map(item=><li key={item}><Check/>{item}</li>)}</ul>}
function CountStat({value,label,index}){const node=useRef(null);const [count,setCount]=useState(0);const match=value.match(/^(\d+)(.*)$/);const target=Number(match?.[1]||0),suffix=match?.[2]||'';useEffect(()=>{const element=node.current;if(!element)return;let frame;const observer=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)return;const start=performance.now();const tick=now=>{const progress=Math.min((now-start)/1400,1);setCount(Math.round(target*(1-Math.pow(1-progress,3))));if(progress<1)frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick);observer.disconnect()},{threshold:.5});observer.observe(element);return()=>{observer.disconnect();cancelAnimationFrame(frame)}},[target]);return <div className={`stat reveal d${index+1}`} ref={node}><div className="num">{count}{suffix}</div><div className="lbl">{label}</div></div>}

function AboutPage(){return <>
  <section className="section"><div className="container"><div className="wrap-narrow tac reveal"><span className="eyebrow center-line">Who We Are</span><p className="lead-emph mt-m">We understand that travelling to another country for medical treatment can feel stressful — especially when patients have to manage hospital selection, appointments, travel, accommodation, local transport and follow-up care on their own. HealRoute India was created to make this journey easier. We act as a reliable bridge between patients abroad and leading hospitals, doctors, diagnostic centres, travel partners and hotels, and provide on-ground support services in India. From the first enquiry to treatment planning, hospital appointments, airport pickup, stay arrangements and post-treatment follow-up — our team helps patients and their families manage every step in a more organized and stress-free way.</p></div>
    <div className="grid mv-grid mt-l"><article className="mv-card mission reveal"><span className="mv-ic"><HeartPulse/></span><div><h3>Our Mission</h3><p>Our mission is to make medical travel to India simple, transparent, and patient-friendly. We aim to help every patient feel supported before arrival, during treatment, and after returning home.</p></div></article><article className="mv-card vision reveal d2"><span className="mv-ic"><Globe2/></span><div><h3>Our Vision</h3><p>Our vision is to become a trusted international patient facilitation platform that connects people across the world with quality healthcare and complete travel support in India.</p></div></article></div>
  </div></section>
  <BenefitStrip/>
  <PageCta title="Ready to begin your medical journey?" copy="Talk to our care team and get personalized guidance — free and with no obligation." first="Get Free Consultation" second="WhatsApp Us"/>
</>}

function ServicesPage(){const support=[
  [Building2,'Hospital & Doctor Coordination','We connect you with the right hospitals and specialists.'],[MessageCircle,'Second Opinion Support','Get expert medical opinions through online consultations.'],[CalendarCheck,'Appointment Booking','We book your appointments as per your schedule.'],[BedDouble,'Accommodation Support','We arrange comfortable stays near hospitals.'],[UsersRound,'On-Ground Assistance','Our team supports you during hospital visits and treatment.'],[Headset,'Post-Treatment Follow-Up','We coordinate follow-ups and support your recovery.'],
];const all=[
  [Building2,'Hospital & Doctor Coordination','We connect you with top hospitals and specialists.'],[MessageCircle,'Second Opinion Support','Get expert medical opinions through online consultations.'],[ClipboardList,'Treatment Estimate Coordination','We help you get accurate treatment estimates from trusted hospitals.'],[CalendarCheck,'Appointment Booking','We book your appointments as per your treatment plan.'],[Plane,'Airport Pickup & Local Transport','We arrange airport pickup and local transport.'],[BedDouble,'Hotel & Accommodation Support','We arrange comfortable stays near hospitals.'],[UsersRound,'On-Ground Hospital Assistance','Our team supports you during hospital visits and treatment.'],[CarFront,'Local Travel Support','We arrange local travel for hospital visits and city transfers.'],[Headset,'Post-Treatment Follow-Up','We coordinate follow-ups and support your recovery.'],
];return <>
  <section className="section bg-soft"><div className="container"><SectionHead eyebrow="What We Do" title={<>Support at <span className="title-accent">Every Stage</span></>}><>From your first enquiry to a safe return, we handle the details that matter.</></SectionHead><div className="grid cards-3">{support.map(([I,title,desc],i)=><article className="card reveal" key={title}><span className="c-ic"><I/></span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
  <section className="section"><div className="container"><SectionHead eyebrow="Our Services" title={<>Complete <span className="title-accent">Medical Travel Support</span></>}/><div className="grid cards-3">{all.map(([I,title,desc],i)=><article className="card reveal" key={title}><span className="c-ic"><I/></span><h3>{i+1}. {title}</h3><p>{desc}</p></article>)}</div></div></section>
  <BenefitStrip title="WHY HEALROUTE INDIA" heading="Why Patients Choose Us" items={benefits.map((item,i)=>i===5?['globe','Comfort for Attendants']:item)}/>
  <PageCta title="Need Help Planning Treatment in India?" copy="Our care coordinators are here to help you take the next step." first="Enquire Now" second="Talk to a Coordinator" secondTo="/contact"/>
  <Disclaimer title="HealRoute India is a medical travel facilitation service." copy="Medical advice and treatment are provided only by licensed hospitals and doctors. We coordinate the non-medical support required for your treatment journey." blue/>
</>}

function TreatmentsPage(){const helping=[
  [FileText,'Share Your Medical Reports'],[Building2,'Get Hospital & Specialist Options'],[ClipboardList,'Receive Treatment Estimate'],[CalendarCheck,'Book Appointments with Ease'],[Plane,'Airport Pickup & Local Travel'],[BedDouble,'Stay & On-Ground Support'],[Headset,'Post-Treatment Follow-up'],
];return <>
  <section className="section bg-soft"><div className="container"><SectionHead eyebrow="Specialities" title={<>Major <span className="title-accent">Treatment Categories</span></>}><>Expert care across a wide range of specialities, delivered by India’s leading hospitals.</></SectionHead><div className="grid cards-3">{treatments.map(([I,title,desc])=><article className="card reveal" key={title}><span className="c-ic"><I/></span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
  <section className="section"><div className="container"><SectionHead eyebrow="How We Help You" title="Your Care, Coordinated"/><div className="grid cards-3">{helping.map(([I,text])=><article className="card center reveal" key={text}><span className="c-ic"><I/></span><h3>{text}</h3></article>)}</div></div></section>
  <Disclaimer copy="HealRoute India is a medical travel facilitation service. We do not provide medical diagnosis, treatment, prescription, surgery or emergency care. All medical advice, diagnosis and treatments are provided only by licensed doctors and hospitals."/>
  <PageCta title="Looking for the right treatment in India?" copy="Share your reports and our coordinators will connect you with the best specialists." first="Enquire Now"/>
</>}

function PackagesPage(){return <>
  <section className="section"><div className="container"><div className="grid pkg-grid">{plans.map((plan,i)=><article className={`pkg reveal d${i+1} ${plan.theme}`} key={plan.title}>{plan.popular&&<span className="ribbon">Popular</span>}<span className="pk-ic"><Icon name={plan.icon}/></span><h3>{plan.title}</h3><p className="pk-desc">{plan.desc}</p><p className="pk-label">Services Included</p><CheckList items={plan.included}/><p className="pk-label">Suitable For</p><ul className="suitable-list">{plan.suitable.map(item=><li key={item}><span aria-hidden="true">•</span>{item}</li>)}</ul><Link className="btn btn-primary" to="/contact">{plan.cta}</Link></article>)}</div></div></section>
  <PageCta title="Need Help Choosing a Package?" copy="Not sure which plan is right for you? Share your treatment needs — our care coordinator will guide you to the perfect solution. Every case is unique, and we're always here to walk you through." first="Talk to a Care Coordinator" second="Submit Patient Enquiry" secondTo="/contact"/>
  <Disclaimer title="Medical Travel Support" copy="HealRoute India is a patient travel facilitation service. We do not provide medical diagnosis, treatment, prescriptions, surgery, or emergency medical care. All medical advice, diagnosis, treatment plans, and procedures are provided by licensed hospitals and registered medical professionals." blue/>
</>}

function HospitalsPage(){const stats=[['9+','Premier Hospitals'],['50+','Specialities Covered'],['100%','Accredited Partners'],['40+','Countries Served']];return <>
  <section className="section"><div className="container"><SectionHead eyebrow="Our Network" title={<>Best Hospitals to <span className="title-accent">Partner With</span></>}><>A curated network of premier hospitals offering advanced care for international patients.</></SectionHead><div className="grid hosp-grid">{hospitals.map(([name,place,tags])=><article className="hosp reveal" key={name}><div className="h-top"><span className="h-logo">{name[0]}</span><div><h3>{name}</h3><span className="h-loc"><MapPin/>{place}</span></div></div><div className="h-tags">{tags.map(tag=><span key={tag}>{tag}</span>)}</div></article>)}</div></div></section>
  <section className="section-sm bg-navy"><div className="container stats">{stats.map(([value,label],i)=><CountStat value={value} label={label} index={i} key={label}/>)}</div></section>
  <PageCta title="Want help choosing the right hospital?" copy="Tell us your condition and we'll match you with the most suitable accredited hospital and specialist." first="Get Hospital Recommendation"/>
</>}

function PatientJourneyPage(){const support=[
  [Building2,'Hospital Coordination','Connecting you with the right hospitals and specialists.'],[CalendarCheck,'Appointment Booking','Hassle-free scheduling of consultations and treatments.'],[CarFront,'Local Travel Support','Airport transfers, local travel and city assistance.'],[BedDouble,'Stay Assistance','Comfortable and safe stay options near hospitals.'],[Headset,'Follow-Up Support','Post-treatment guidance and continuous care coordination.'],
];return <>
  <section className="section bg-soft journey"><div className="container"><SectionHead eyebrow="The Process" title={<>Your Journey With <span className="title-accent">HealRoute India</span></>}/><div className="steps steps-7">{journeySteps.map(([title,desc],i)=><article className="step reveal" key={title}><span className="num">{i+1}</span><h4>{title}</h4><p>{desc}</p></article>)}</div></div></section>
  <section className="section"><div className="container"><SectionHead eyebrow="Full Support" title="What We Help With at Every Step"/><div className="grid cards-3">{support.map(([I,title,desc])=><article className="card reveal" key={title}><span className="c-ic"><I/></span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
  <PageCta title="Ready to Begin Your Medical Journey?" copy="Let us take care of the details while you focus on your health." first="Submit Enquiry" second="Talk to a Coordinator" secondTo="/contact"/>
  <Disclaimer copy="HealRoute India is a medical travel facilitation service. We do not provide medical diagnosis, treatment, prescription or emergency medical care. All medical advice, diagnosis and treatment are provided only by licensed doctors and hospitals."/>
</>}

const FAQCategories = [[CircleHelp,'About Services'],[Building2,'Hospitals & Doctors'],[Plane,'Travel & Stay'],[Stethoscope,'Treatment Support'],[Heart,'Aftercare']];
function FAQsPage(){const [open,setOpen]=useState(null);return <>
  <section className="section bg-soft"><div className="container"><div className="faq-cats">{FAQCategories.map(([I,label])=><div className="faq-cat reveal" key={label}><span className="fc-ic"><I/></span><b>{label}</b></div>)}</div>
    <div className="faq-cols">{faqItems.map(([q,a],i)=><article className={`faq-item reveal${open===i?' open':''}`} key={q}><button className="faq-q" aria-expanded={open===i} onClick={()=>setOpen(open===i?null:i)}><span className="qnum">{i+1}</span><span>{q}</span><span className="toggle">+</span></button><div className="faq-a" style={open===i?{maxHeight:220}:undefined}><p>{a}</p></div></article>)}</div></div></section>
  <PageCta title="Still Have Questions?" copy="We're here to help! Talk to our care coordinator and get personalized answers for your medical journey." first="Talk to a Care Coordinator" second="Submit Enquiry" secondTo="/contact"/>
  <Disclaimer title="Disclaimer" copy="HealRoute India is a medical travel facilitation service. Medical advice and treatment are provided only by licensed hospitals and doctors." blue/>
</>}

function ContactPage(){const countries=['United States','United Kingdom','UAE','Nigeria','Kenya','Bangladesh','Other'];const procedures=['Cardiology & Heart Care','Cancer Care & Oncology','Orthopaedics & Joint Replacement','Neurology & Spine Care','IVF & Fertility','Eye Care','Dental Care','Other'];const [sent,setSent]=useState(false);return <>
  <section className="section bg-soft"><div className="container"><div className="section-head"><span className="eyebrow center-line">Get in Touch</span></div><div className="contact-tiles"><a className="contact-tile call reveal" href="tel:+917292060190"><span className="ct-ic"><Phone/></span><span><small>Call Us</small><b>+91 7292060190</b></span></a><a className="contact-tile wa reveal d1" href="https://wa.me/917292060190"><span className="ct-ic"><WhatsAppIcon/></span><span><small>WhatsApp Support</small><b>Quick assistance for patients</b></span></a><a className="contact-tile mail reveal d2" href="mailto:hello@healrouteindia.com"><span className="ct-ic"><Mail/></span><span><small>Email Us</small><b>hello@healrouteindia.com</b></span></a></div></div></section>
  <section className="section"><div className="container"><div className="split"><div className="reveal"><span className="eyebrow">Send Us an Enquiry</span><h2>Tell Us About Your Needs</h2><p>Fill in the details and our care team will get back to you within 24 hours.</p></div><div className="form-card reveal d2"><form onSubmit={e=>{e.preventDefault();setSent(true)}} style={{display:sent?'none':undefined}}><div className="form-grid">
      <div className="field"><label htmlFor="contact-name">Full Name <span className="req">*</span></label><input id="contact-name" required placeholder="Enter your full name"/></div>
      <div className="field"><label htmlFor="contact-country">Country of Residence <span className="req">*</span></label><select id="contact-country" required defaultValue=""><option value="">Select your country</option>{countries.map(x=><option key={x}>{x}</option>)}</select></div>
      <div className="field"><label htmlFor="contact-phone">Phone / WhatsApp <span className="req">*</span></label><input id="contact-phone" type="tel" required placeholder="+91"/></div>
      <div className="field"><label htmlFor="contact-email">Email Address <span className="req">*</span></label><input id="contact-email" type="email" required placeholder="you@email.com"/></div>
      <div className="field full"><label htmlFor="contact-treatment">Treatment Required <span className="req">*</span></label><select id="contact-treatment" required defaultValue=""><option value="">Select treatment / procedure</option>{procedures.map(x=><option key={x}>{x}</option>)}</select></div>
      <div className="field full"><label htmlFor="contact-message">Message / Medical Concern <span className="req">*</span></label><textarea id="contact-message" required placeholder="Tell us about your medical needs"/></div>
    </div><div className="center" style={{marginTop:24}}><button type="submit" className="btn btn-primary btn-lg" style={{width:'100%'}}>Submit Enquiry <Send/></button></div><div className="form-note"><ShieldCheck/>Your information is safe and will be kept confidential.</div></form><div className={`form-success${sent?' show':''}`}><span className="c-ic"><Check/></span><h3>Enquiry Received!</h3><p>Your care team will get back to you within 24 hours.</p></div></div></div></div></section>
  <section className="section bg-soft"><div className="container"><SectionHead eyebrow="Why Us" title="Why Contact HealRoute India"/><div className="grid cards-4">{[
    [UsersRound,'One Point of Contact','A dedicated care coordinator for all your needs.'],[ShieldCheck,'Transparent Guidance','Clear information and honest advice at every step.'],[Heart,'Comfort for Patients & Families','We care for you like our own family.'],[Activity,'End-to-End Support','From the first enquiry to post-treatment follow-up.'],
  ].map(([I,title,copy])=><article className="card reveal" key={title}><span className="c-ic"><I/></span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
  <PageCta title="Need help planning treatment in India?" copy="Talk to our care team today — free, friendly and with no obligation." first="Talk to a Care Coordinator" firstTo="tel:+917292060190"/>
</>}

export default function InnerPages({pathname}){
  const data=pageData[pathname];
  if(!data)return null;
  const [title,subtitle,intro,b1,b2,b3]=data;
  const Content={'/about':AboutPage,'/services':ServicesPage,'/treatments':TreatmentsPage,'/packages':PackagesPage,'/hospitals':HospitalsPage,'/patient-journey':PatientJourneyPage,'/faqs':FAQsPage,'/contact':ContactPage}[pathname];
  return <><PageHero title={title} subtitle={subtitle} intro={intro} badges={[["shield-check",b1],["people",b2],["heart",b3]]}/><Content/></>;
}
