// THEME
const html=document.documentElement;
const themeBtn=document.getElementById('theme-btn');
const saved=localStorage.getItem('theme')||'light';
html.setAttribute('data-theme',saved);
updateIcon(saved);
themeBtn.addEventListener('click',()=>{
  const t=html.getAttribute('data-theme')==='dark'?'light':'dark';
  html.setAttribute('data-theme',t);localStorage.setItem('theme',t);updateIcon(t);
});
function updateIcon(t){themeBtn.innerHTML=t==='dark'?'☀️':'🌙'}

// LANGUAGE
const translations={
  en:{
    eyebrow:'Biomedical Engineer',
    h1a:'Engineering',h1b:'Better Healthcare',
    sub:'Early-career Biomedical Engineer focused on healthcare systems integration and clinical biomedical workflows.',
    btn1:'View My Work',btn2:'Download CV',
    nav_home:'Home',nav_about:'About',nav_exp:'Experience',nav_proj:'Projects',nav_skills:'Skills',nav_contact:'Contact',
    about_label:'About Me',
    about_h:'Biomedical Engineering graduate with hands-on clinical exposure and a passion for healthcare <em>innovation</em>.',
    about_p1:'I completed clinical training at NGHA across multiple departments including cardiac care, operating rooms, laboratories, imaging, and biomedical engineering workshops.',
    about_p2:'I enjoy understanding clinical needs and improving healthcare systems through engineering solutions.',
    stat1_n:'B.S.',stat1_l:'Biomedical Engineering',
    stat2_n:'5+',stat2_l:'Clinical Departments',
    stat3_n:'1+',stat3_l:'Year of Clinical Training',
    stat4_n:'Driven',stat4_l:'To Improve Healthcare',
    exp_label:'Clinical Training',exp_h:'NGHA Clinical Training Program',
    exp_p:'Rotational clinical training across multiple hospital departments, gaining hands-on exposure to clinical workflows, medical equipment, and healthcare system operations.',
    exp_btn:'View Experience',
    ke_label:'Key Exposure',
    ke1:'Clinical workflows in hospital environments',ke2:'Hands-on exposure to medical equipment',
    ke3:'Understanding of medical device lifecycle',ke4:'Healthcare systems operations & integration',
    fp_label:'Featured Project',fp_badge:'Graduation Project',
    fp_h:'Home Healthcare Service Platform',
    fp_p:'Designed a healthcare service platform connecting patients with home healthcare providers in Saudi Arabia.',
    fp_l1:'Focused on healthcare service workflow design',fp_l2:'User experience and interface planning',fp_l3:'System-level integration between patients and providers',
    fp_link:'View Project',
    skills_label:'Skills',
    sk1_h:'Technical Skills',sk2_h:'Healthcare & Clinical',sk3_h:'Other Skills',
    open_label:'Open To',
    open_big:'Let\'s build the future of <em>healthcare together.</em>',
    pills:['Healthcare Technology','Clinical Engineering','Medical Systems','Integration Projects','Saudi Arabia'],
    footer_l:'Aljohara Almusallam',footer_r:'© 2026 Aljohara Almusallam. All rights reserved.',
    lang_btn:'ع',
    dept:['General Cardiac','Operating Rooms (OR)','Laboratory Services','Imaging Department','Biomedical Engineering Workshops'],
    projects_label:'Projects',
    lab_label:'Integration Lab',lab_title:'Healthcare Integration Lab',lab_sub:'Click any node to understand how hospital systems interconnect',
    tl_label:'Timeline',tl_title:'Professional Timeline',
    learn_label:'Currently Exploring',
    cert_label:'Certifications',
    vol_label:'Leadership & Volunteering',
    contact_email:'Email',contact_phone:'Phone',contact_li:'LinkedIn',contact_btn:'Get In Touch',
  },
  ar:{
    eyebrow:'مهندسة طبية حيوية',
    h1a:'هندسة',h1b:'رعاية صحية أفضل',
    sub:'مهندسة طبية حيوية في بداية مسيرتها المهنية، متخصصة في تكامل أنظمة الرعاية الصحية وسير العمل الإكلينيكي.',
    btn1:'عرض أعمالي',btn2:'تحميل السيرة الذاتية',
    nav_home:'الرئيسية',nav_about:'عني',nav_exp:'الخبرة',nav_proj:'المشاريع',nav_skills:'المهارات',nav_contact:'تواصل',
    about_label:'عني',
    about_h:'خريجة هندسة طبية حيوية مع خبرة إكلينيكية عملية وشغف نحو <em>الابتكار</em> في الرعاية الصحية.',
    about_p1:'أكملت تدريبي الإكلينيكي في الحرس الوطني للصحة عبر أقسام متعددة تشمل: العناية القلبية، غرف العمليات، المختبرات، التصوير الطبي، وورش الهندسة الطبية الحيوية.',
    about_p2:'أسعى لفهم الاحتياجات الإكلينيكية وتحسين أنظمة الرعاية الصحية من خلال الحلول الهندسية.',
    stat1_n:'بكالوريوس',stat1_l:'هندسة طبية حيوية',
    stat2_n:'+5',stat2_l:'أقسام إكلينيكية',
    stat3_n:'+1',stat3_l:'سنة تدريب إكلينيكي',
    stat4_n:'شغف',stat4_l:'لتطوير الرعاية الصحية',
    exp_label:'التدريب الإكلينيكي',exp_h:'برنامج التدريب الإكلينيكي – NGHA',
    exp_p:'تدريب دوري عبر أقسام متعددة بالمستشفى، مع تعرض عملي لسير العمل الإكلينيكي والأجهزة الطبية وعمليات نظام الرعاية الصحية.',
    exp_btn:'عرض الخبرة',
    ke_label:'أبرز ما اكتسبته',
    ke1:'سير العمل الإكلينيكي في البيئات المستشفيية',ke2:'تعرض عملي على الأجهزة الطبية',
    ke3:'فهم دورة حياة الأجهزة الطبية',ke4:'عمليات وتكامل أنظمة الرعاية الصحية',
    fp_label:'مشروع مميز',fp_badge:'مشروع التخرج',
    fp_h:'منصة خدمات الرعاية الصحية المنزلية',
    fp_p:'صممت منصة لربط المرضى بمزودي خدمات الرعاية الصحية المنزلية في المملكة العربية السعودية.',
    fp_l1:'تصميم سير عمل خدمة الرعاية الصحية',fp_l2:'تجربة المستخدم وتخطيط الواجهة',fp_l3:'التكامل على مستوى الأنظمة بين المرضى ومزودي الخدمة',
    fp_link:'عرض المشروع',
    skills_label:'المهارات',
    sk1_h:'المهارات التقنية',sk2_h:'الرعاية الصحية والإكلينيكية',sk3_h:'مهارات أخرى',
    open_label:'منفتحة على',
    open_big:'لنبني مستقبل <em>الرعاية الصحية معاً.</em>',
    pills:['تقنية الرعاية الصحية','الهندسة الإكلينيكية','الأنظمة الطبية','مشاريع التكامل','المملكة العربية السعودية'],
    footer_l:'الجوهرة المسلم',footer_r:'© 2026 الجوهرة المسلم. جميع الحقوق محفوظة.',
    lang_btn:'EN',
    dept:['القسم القلبي','غرف العمليات','خدمات المختبر','قسم التصوير الطبي','ورش الهندسة الطبية الحيوية'],
    projects_label:'المشاريع',
    lab_label:'مختبر التكامل',lab_title:'مختبر تكامل الرعاية الصحية',lab_sub:'انقر على أي عقدة لفهم كيفية ترابط أنظمة المستشفى',
    tl_label:'المسيرة',tl_title:'المسيرة المهنية',
    learn_label:'أتعلم حالياً',
    cert_label:'الشهادات',
    vol_label:'القيادة والتطوع',
    contact_email:'البريد الإلكتروني',contact_phone:'الهاتف',contact_li:'لينكد إن',contact_btn:'تواصل معي',
  }
};
let lang='en';
const langBtn=document.getElementById('lang-btn');
langBtn.addEventListener('click',()=>{
  lang=lang==='en'?'ar':'en';
  document.documentElement.setAttribute('dir',lang==='ar'?'rtl':'ltr');
  applyLang();
});
function applyLang(){
  const t=translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    if(t[key]!==undefined){
      if(el.tagName==='INPUT'||el.tagName==='TEXTAREA') el.placeholder=t[key];
      else el.innerHTML=t[key];
    }
  });
  langBtn.textContent=t.lang_btn;
  // pills
  const pillsWrap=document.getElementById('ot-pills');
  if(pillsWrap) pillsWrap.innerHTML=t.pills.map(p=>`<span class="ot-pill">${p}</span>`).join('');
  // dept
  document.querySelectorAll('.dept-lbl').forEach((el,i)=>{if(t.dept[i])el.textContent=t.dept[i]});
}

// ACTIVE NAV
document.querySelectorAll('section[id]').forEach(s=>{
  new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('.top-nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))})
  },{rootMargin:'-40% 0px -40% 0px'}).observe(s);
});

// REVEAL
document.querySelectorAll('.reveal').forEach(el=>{
  new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis')})},{threshold:.1}).observe(el);
});

// SKILL BARS
document.querySelectorAll('.skill-wrap').forEach(w=>{
  new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.querySelectorAll('.sf').forEach(f=>f.style.width=f.dataset.w)})
  },{threshold:.2}).observe(w);
});

// LAB
const labData={
  monitor:{name:'Patient Monitor',name_ar:'جهاز مراقبة المريض',desc:'Collects vital signs (ECG, SpO₂, BP, temperature) in real-time. The biomedical engineer ensures calibration using ProSim 8 and ESA 615/715 and safe hospital network integration.',desc_ar:'يجمع العلامات الحيوية في الوقت الفعلي. تضمن المهندسة الطبية الحيوية معايرته باستخدام ProSim 8 وESA 615/715 وتكامله الآمن مع شبكة المستشفى.'},
  middleware:{name:'Middleware',name_ar:'الوسيط',desc:'Translates and routes data between heterogeneous hospital systems. Normalizes formats, handles protocol conversion (HL7, FHIR), and ensures reliable message delivery.',desc_ar:'يترجم البيانات ويوجهها بين أنظمة المستشفى المختلفة، ويعالج تحويل البروتوكولات مثل HL7 وFHIR.'},
  hl7:{name:'HL7 Engine',name_ar:'محرك HL7',desc:'Parses, validates and routes HL7 v2.x messages carrying ADT events, lab results, orders and clinical observations between hospital systems.',desc_ar:'يعالج ويتحقق من رسائل HL7 v2.x الحاملة لأحداث الدخول والنتائج والطلبات الإكلينيكية بين أنظمة المستشفى.'},
  his:{name:'HIS',name_ar:'نظام معلومات المستشفى',desc:'Central hub managing patient admissions, scheduling, billing, lab orders, and clinical workflows. All integrated systems read and write to the HIS.',desc_ar:'المحور المركزي لإدارة دخول المرضى والجدولة والفواتير وطلبات المختبر وسير العمل الإكلينيكي.'},
  emr:{name:'EMR',name_ar:'السجل الطبي الإلكتروني',desc:'Stores the longitudinal patient health record — diagnoses, medications, procedures and clinical notes. Tight integration ensures clinicians see accurate real-time data.',desc_ar:'يخزن السجل الصحي الطولي للمريض من تشخيصات وأدوية وإجراءات وملاحظات إكلينيكية.'},
};
const labDetail=document.getElementById('lab-detail');
document.querySelectorAll('.lab-node').forEach(n=>{
  n.addEventListener('click',()=>{
    document.querySelectorAll('.lab-node').forEach(x=>x.classList.remove('active'));
    n.classList.add('active');
    const d=labData[n.dataset.node];
    const isAr=lang==='ar';
    labDetail.innerHTML=`<h3>${isAr?d.name_ar:d.name}</h3><p>${isAr?d.desc_ar:d.desc}</p>`;
  });
});
document.querySelector('.lab-node')?.click();

// MODAL
const modal=document.getElementById('modal');
const modalHd=document.getElementById('modal-hd');
const modalBd=document.getElementById('modal-bd');
document.querySelectorAll('[data-modal]').forEach(c=>{
  c.addEventListener('click',e=>{if(e.target.closest('[data-external]'))return;openModal(c.dataset.modal)});
});
function openModal(id){
  const d=projectData[id];if(!d)return;
  modalHd.innerHTML=`<div><div style="display:flex;gap:.3rem;flex-wrap:wrap;margin-bottom:.35rem">${d.tags.map(t=>`<span class="pc-tag">${t}</span>`).join('')}</div><h2 style="font-size:1rem;font-weight:800;color:var(--black)">${d.title}</h2></div><button class="modal-close" onclick="closeModal()">✕</button>`;
  modalBd.innerHTML=d.body;modal.classList.add('open');document.body.style.overflow='hidden';
}
function closeModal(){modal.classList.remove('open');document.body.style.overflow=''}
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});

// LIGHTBOX
const lb=document.getElementById('lb');
function openLB(src,cap){document.getElementById('lb-img').src=src;document.getElementById('lb-cap').textContent=cap||'';lb.classList.add('open')}
lb.addEventListener('click',()=>lb.classList.remove('open'));
