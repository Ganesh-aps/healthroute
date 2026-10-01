const steps=[
  ['Share Your Requirement','Share your medical reports and treatment details.'],
  ['Get Hospital Options','We connect you with suitable hospitals and specialists.'],
  ['Receive Treatment Estimate','Get treatment plan options and cost estimate.'],
  ['Confirm & Plan Your Travel','Confirm appointment, travel dates and stay arrangements.'],
  ['Arrive & Receive Treatment','We assist you throughout your treatment journey.'],
  ['Follow-Up & Return Support','We help with follow-up consultations and return travel.'],
];
export default function Steps(){return <section className="section bg-soft journey" id="journey"><div className="container" id="about">
  <div className="section-head reveal"><span className="eyebrow center-line">How It Works</span><h2>Your Medical Travel Journey in <span className="title-accent">6 Simple Steps</span></h2></div>
  <div className="steps steps-6">{steps.map(([title,desc],i)=><article className={`step reveal d${i+1}`} key={title}><div className="num">{i+1}</div><h4>{title}</h4><p>{desc}</p></article>)}</div>
</div></section>}
