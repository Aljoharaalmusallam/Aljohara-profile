// THEME
const html=document.documentElement;
const themeBtn=document.getElementById('theme-btn');
const saved=localStorage.getItem('theme')||'light';
html.setAttribute('data-theme',saved);
updateThemeIcon(saved);
themeBtn.addEventListener('click',()=>{
  const t=html.getAttribute('data-theme')==='dark'?'light':'dark';
  html.setAttribute('data-theme',t);localStorage.setItem('theme',t);updateThemeIcon(t);
});
function updateThemeIcon(t){themeBtn.innerHTML=t==='dark'?`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`}

// TYPEWRITER
const words=['Healthcare Integration','Medical Device Maintenance','Clinical Biomedical Engineering','HL7 & Middleware Systems','CMMS Operations','Digital Health'];
let wi=0,ci=0,del=false;
const tw=document.getElementById('tw');
function type(){
  const w=words[wi];
  if(!del){tw.textContent=w.slice(0,++ci);if(ci===w.length){del=true;setTimeout(type,1800);return}}
  else{tw.textContent=w.slice(0,--ci);if(ci===0){del=false;wi=(wi+1)%words.length}}
  setTimeout(type,del?45:80);
}type();

// ACTIVE NAV
const secs=document.querySelectorAll('section[id]');
const navAs=document.querySelectorAll('#sidebar nav a');
new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)navAs.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))});
},{rootMargin:'-35% 0px -35% 0px'}).observe && secs.forEach(s=>new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)navAs.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))})},{rootMargin:'-35% 0px -35% 0px'}).observe(s));

// REVEAL
new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis')}})},{threshold:.1}).observe && document.querySelectorAll('.reveal').forEach(el=>new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis')})},{threshold:.1}).observe(el));

// SKILL BARS
document.querySelectorAll('.skills-panel').forEach(panel=>{
  new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.skill-fill').forEach(f=>{f.style.width=f.dataset.w})}})},{threshold:.2}).observe(panel);
});

// INTEGRATION LAB
const labData={
  monitor:{name:'Patient Monitor',desc:'Collects vital signs in real-time — ECG, SpO₂, blood pressure, temperature. In clinical engineering, the biomedical engineer ensures these devices pass safety testing (ESA 615/715), are calibrated with tools like ProSim 8, and are integrated into the hospital network.'},
  middleware:{name:'Middleware / Integration Engine',desc:'Acts as the translation layer between heterogeneous systems. Normalizes data formats, routes messages, and handles protocol conversion (HL7 v2, FHIR). Without middleware, systems cannot communicate — a core concept encountered during NGHA integration department exposure.'},
  hl7:{name:'HL7 Engine',desc:'Health Level 7 is the international standard for healthcare data exchange. HL7 messages carry ADT (admission/discharge/transfer), lab results, orders, and clinical observations. The HL7 engine validates, parses, and routes these messages between systems.'},
  his:{name:'Hospital Information System',desc:'The central operational hub managing patient admissions, scheduling, billing, lab orders, pharmacy, and clinical workflows. All integrated systems ultimately read from or write to the HIS to maintain a unified patient record.'},
  emr:{name:'Electronic Medical Record',desc:'The longitudinal clinical record — diagnoses, medications, procedures, test results, and clinical notes. Tight integration with devices and HIS ensures clinicians access accurate, real-time data at the point of care, improving patient safety.'},
};
const labDetail=document.getElementById('lab-detail');
document.querySelectorAll('.lab-node').forEach(n=>{
  n.addEventListener('click',()=>{
    document.querySelectorAll('.lab-node').forEach(x=>x.classList.remove('active'));
    n.classList.add('active');
    const d=labData[n.dataset.node];
    labDetail.innerHTML=`<h3>${d.name}</h3><p>${d.desc}</p>`;
  });
});
document.querySelector('.lab-node')?.click();

// MODAL
const modal=document.getElementById('modal');
const modalHd=document.getElementById('modal-hd');
const modalBd=document.getElementById('modal-bd');
document.querySelectorAll('[data-modal]').forEach(card=>{
  card.addEventListener('click',e=>{if(e.target.closest('.proj-btn[data-external]'))return;openModal(card.dataset.modal)});
});
function openModal(id){
  const d=projectData[id];if(!d)return;
  modalHd.innerHTML=`<div><div style="display:flex;gap:.35rem;flex-wrap:wrap;margin-bottom:.4rem">${d.tags.map(t=>`<span class="proj-tag">${t}</span>`).join('')}</div><h2 style="font-size:1.05rem;font-weight:800;color:var(--dark)">${d.title}</h2></div><button class="modal-close" onclick="closeModal()">✕</button>`;
  modalBd.innerHTML=d.body;
  modal.classList.add('open');document.body.style.overflow='hidden';
}
function closeModal(){modal.classList.remove('open');document.body.style.overflow=''}
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});

// LIGHTBOX
const lb=document.getElementById('lb');
const lbImg=document.getElementById('lb-img');
const lbCap=document.getElementById('lb-cap');
function openLB(src,cap){lbImg.src=src;lbCap.textContent=cap||'';lb.classList.add('open')}
lb.addEventListener('click',()=>lb.classList.remove('open'));

// BG CANVAS
const cv=document.getElementById('bg-canvas');
const ctx=cv.getContext('2d');
let pts=[];
function initCv(){cv.width=window.innerWidth;cv.height=window.innerHeight;pts=Array.from({length:30},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25}))}
function drawCv(){
  ctx.clearRect(0,0,cv.width,cv.height);
  pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>cv.width)p.vx*=-1;if(p.y<0||p.y>cv.height)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,2,0,Math.PI*2);ctx.fillStyle='#2563EB';ctx.fill()});
  pts.forEach((a,i)=>pts.slice(i+1).forEach(b=>{const d=Math.hypot(a.x-b.x,a.y-b.y);if(d<130){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(37,99,235,${1-d/130})`;ctx.lineWidth=.4;ctx.stroke()}}));
  requestAnimationFrame(drawCv);
}
window.addEventListener('resize',initCv);initCv();drawCv();
