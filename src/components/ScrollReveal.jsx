import { useEffect } from 'react';

export default function ScrollReveal(){
  useEffect(()=>{
    const elements=document.querySelectorAll('.reveal');
    if(!('IntersectionObserver' in window)){elements.forEach(element=>element.classList.add('in'));return}
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('in');observer.unobserve(entry.target)}
    }),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    elements.forEach(element=>observer.observe(element));
    return()=>observer.disconnect();
  },[]);
  return null;
}
