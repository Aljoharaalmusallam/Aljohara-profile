// THEME
const html=document.documentElement;
const tb=document.getElementById('theme-btn');
const sv=localStorage.getItem('theme')||'light';
html.setAttribute('data-theme',sv);tb.textContent=sv==='dark'?'☀':'🌙';
tb.addEventListener('click',()=>{const t=html.getAttribute('data-theme')==='dark'?'light':'dark';html.setAttribute('data-theme',t);localStorage.setItem('theme',t);tb.textContent=t==='dark'?'☀':'🌙'});

// ACTIVE NAV
document.querySelectorAll('section[id]').forEach(s=>{
  new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+x.target.id))})},{rootMargin:'-40% 0px -40% 0px'}).observe(s);
});

// REVEAL
document.querySelectorAll('.reveal').forEach(el=>{
  new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis')})},{threshold:.08}).observe(el);
});

// MODAL
const modal=document.getElementById('modal');
const mHd=document.getElementById('modal-hd');
const mBd=document.getElementById('modal-bd');
document.querySelectorAll('[data-modal]').forEach(el=>{
  el.addEventListener('click',e=>{if(e.target.closest('[data-ext]'))return;openModal(el.dataset.modal)});
});
function openModal(id){
  const d=projectData[id];if(!d)return;
  mHd.innerHTML=`<div><div style="margin-bottom:.4rem">${d.tags.map(t=>`<span class="modal-tag">${t}</span>`).join('')}</div><h2 style="font-size:1.05rem;font-weight:800;color:var(--fg)">${d.title}</h2></div><button class="modal-close" onclick="closeModal()">✕</button>`;
  mBd.innerHTML=d.body;modal.classList.add('open');document.body.style.overflow='hidden';
}
function closeModal(){modal.classList.remove('open');document.body.style.overflow=''}
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});

// LIGHTBOX
const lb=document.getElementById('lb');
function openLB(src,cap){document.getElementById('lb-img').src=src;document.getElementById('lb-cap').textContent=cap||'';lb.classList.add('open')}
lb.addEventListener('click',()=>lb.classList.remove('open'));

// SKILL BARS (if any)
document.querySelectorAll('.skill-wrap').forEach(w=>{
  new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.querySelectorAll('.sf').forEach(f=>f.style.width=f.dataset.w)})},{threshold:.2}).observe(w);
});
