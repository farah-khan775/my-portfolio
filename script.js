const glow=document.querySelector('.cursor-glow');
document.addEventListener('mousemove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const menu=document.querySelector('.menu'),links=document.querySelector('.nav-links');
if(menu&&links){menu.addEventListener('click',()=>links.classList.toggle('open'));links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')))}
const sections=[...document.querySelectorAll('main section[id]')];
const navAnchors=[...document.querySelectorAll('.nav-links a')];
const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navAnchors.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}}),{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(section=>navObserver.observe(section));
if(window.matchMedia('(pointer:fine)').matches){document.querySelectorAll('.skill,.project,.service,.advantage,.process-step,.journey-card').forEach(card=>{card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(700px) rotateX(${(-y*2).toFixed(2)}deg) rotateY(${(x*2).toFixed(2)}deg) translateY(-5px)`});card.addEventListener('mouseleave',()=>card.style.transform='')})}
