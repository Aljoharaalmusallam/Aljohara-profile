// ===== THEME =====
const root = document.documentElement;
const themeBtn = document.getElementById('theme-btn');
const stored = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', stored);
themeBtn.addEventListener('click', () => {
  const t = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  themeBtn.innerHTML = t === 'dark' ? sunIcon() : moonIcon();
});
if (stored === 'dark') themeBtn.innerHTML = sunIcon();
function sunIcon(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`}
function moonIcon(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`}

// ===== TYPEWRITER =====
const words = ['Medical Devices','HL7 Integration','Healthcare Systems','Cloud Computing','Digital Health','CMMS Operations'];
let wi=0,ci=0,del=false;
const tw = document.getElementById('typewriter');
function type(){
  const w=words[wi];
  if(!del){tw.textContent=w.slice(0,++ci);if(ci===w.length){del=true;setTimeout(type,1600);return}}
  else{tw.textContent=w.slice(0,--ci);if(ci===0){del=false;wi=(wi+1)%words.length}}
  setTimeout(type,del?50:90);
}
type();

// ===== ACTIVE NAV =====
const sections=document.querySelectorAll('section[id]');
const navLinks=document.querySelectorAll('#sidebar nav a');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));
    }
  });
},{rootMargin:'-40% 0px -40% 0px'});
sections.forEach(s=>observer.observe(s));

// ===== SCROLL REVEAL =====
const revObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revObserver.unobserve(e.target)}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revObserver.observe(el));

// ===== SKILL BARS =====
const barObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.skill-bar .fill').forEach(f=>{f.style.width=f.dataset.w});
      barObserver.unobserve(e.target);
    }
  });
},{threshold:.2});
document.querySelectorAll('#skills .skills-panel').forEach(p=>barObserver.observe(p));

// ===== INTEGRATION LAB =====
const nodes={
  monitor:{name:'Patient Monitor',desc:'Collects vital signs data (ECG, SpO₂, BP, Temperature) in real-time and transmits to the hospital network. In a clinical setting, the biomedical engineer ensures these devices are maintained, calibrated, and safely integrated.'},
  middleware:{name:'Middleware',desc:'Acts as the translator between disparate systems. It normalizes and routes data from medical devices (using protocols like HL7, DICOM, FHIR) to hospital information systems, ensuring seamless communication.'},
  hl7:{name:'HL7 Engine',desc:'HL7 (Health Level 7) is the international standard for healthcare data exchange. The HL7 engine parses, validates, and transforms messages so patient data flows correctly between applications. A key focus area in my integration training at NGHA.'},
  his:{name:'HIS',desc:'Hospital Information System — the central hub managing patient admissions, billing, scheduling, lab orders, and clinical workflows. All data streams ultimately feed into or out of the HIS.'},
  emr:{name:'EMR',desc:'Electronic Medical Records store the longitudinal patient health record — diagnoses, medications, test results, and clinical notes. Tight integration ensures clinicians see accurate, real-time information at the point of care.'},
};
const detail=document.getElementById('lab-detail');
document.querySelectorAll('.lab-node').forEach(node=>{
  node.addEventListener('click',()=>{
    document.querySelectorAll('.lab-node').forEach(n=>n.classList.remove('active'));
    node.classList.add('active');
    const d=nodes[node.dataset.node];
    detail.innerHTML=`<h3>${d.name}</h3><p>${d.desc}</p>`;
  });
});
// activate first node
document.querySelector('.lab-node').click();

// ===== PROJECT MODAL =====
const modal=document.getElementById('project-modal');
const modalHead=document.getElementById('modal-head');
const modalBody=document.getElementById('modal-body');
document.querySelectorAll('.project-card[data-modal]').forEach(card=>{
  card.addEventListener('click',e=>{
    if(e.target.closest('.action-btn')) return;
    openModal(card.dataset.modal);
  });
});
function openModal(id){
  const data=projectData[id];
  if(!data) return;
  modalHead.innerHTML=`
    <div>
      <div style="display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:.5rem">${data.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <h2 style="font-size:1.2rem;color:var(--dark)">${data.title}</h2>
    </div>
    <button class="modal-close" onclick="closeModal()">✕</button>`;
  modalBody.innerHTML=data.body;
  modal.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){modal.classList.remove('open');document.body.style.overflow='';}
modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});

// ===== LIGHTBOX =====
const lb=document.getElementById('lightbox');
const lbImg=document.getElementById('lb-img');
const lbCap=document.getElementById('lb-cap');
function openLB(src,cap){lbImg.src=src;lbCap.textContent=cap||'';lb.classList.add('open');}
lb.addEventListener('click',()=>lb.classList.remove('open'));

// ===== BG NETWORK CANVAS =====
const canvas=document.getElementById('bg-network');
const ctx=canvas.getContext('2d');
let pts=[];
function initCanvas(){
  canvas.width=window.innerWidth;canvas.height=window.innerHeight;
  pts=Array.from({length:35},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3}));
}
function drawCanvas(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  pts.forEach(p=>{
    p.x+=p.vx;p.y+=p.vy;
    if(p.x<0||p.x>canvas.width)p.vx*=-1;
    if(p.y<0||p.y>canvas.height)p.vy*=-1;
    ctx.beginPath();ctx.arc(p.x,p.y,2.5,0,Math.PI*2);
    ctx.fillStyle='#2563EB';ctx.fill();
  });
  pts.forEach((a,i)=>pts.slice(i+1).forEach(b=>{
    const d=Math.hypot(a.x-b.x,a.y-b.y);
    if(d<140){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(37,99,235,${1-d/140})`;ctx.lineWidth=.5;ctx.stroke();}
  }));
  requestAnimationFrame(drawCanvas);
}
window.addEventListener('resize',initCanvas);
initCanvas();drawCanvas();
