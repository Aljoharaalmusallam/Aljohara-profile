// ── THEME ──
const html=document.documentElement;
const tb=document.getElementById('tb');
const sv=localStorage.getItem('theme')||'light';
html.setAttribute('data-theme',sv);updateTIcon(sv);
tb.addEventListener('click',()=>{const t=html.getAttribute('data-theme')==='dark'?'light':'dark';html.setAttribute('data-theme',t);localStorage.setItem('theme',t);updateTIcon(t)});
function updateTIcon(t){tb.innerHTML=t==='dark'?`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`}

// ── LANGUAGE ──
const i18n={
  en:{
    nav:['Home','About','Education','Experience','Skills','Projects','Certificates','Volunteer','Contact'],
    hero_eyebrow:'BIOMEDICAL ENGINEER',
    hero_role:'Biomedical Engineer',
    hero_tags:['Digital Health','AI in Healthcare','UI/UX Designer'],
    hero_desc:'Passionate about developing healthcare technologies that improve patient care and support digital transformation in line with Saudi Vision 2030.',
    hero_cv:'DOWNLOAD CV',hero_about:'ABOUT ME',
    about_label:'ABOUT ME',
    about_p1:'I am Aljohara Almusallam, a Biomedical Engineering graduate with First Class Honors from King Saud University, passionate about developing technology-driven solutions that improve healthcare delivery.',
    about_p2:'My interests lie at the intersection of Biomedical Engineering, Digital Health, Artificial Intelligence in Healthcare, and UI/UX Design. I believe technology creates the greatest impact when it is designed to meet the real needs of patients and healthcare professionals.',
    about_p3:'Through my academic journey and practical training, I gained experience in medical equipment maintenance, healthcare asset management, and digital health projects while strengthening my skills in problem-solving, collaboration, and continuous learning.',
    about_p4:'I aspire to build a career focused on advancing healthcare technologies, driving innovation, and supporting digital transformation in alignment with Saudi Vision 2030.',
    edu_label:'EDUCATION',edu_h:'King Saud University',
    edu_deg:'Bachelor of Biomedical Engineering',edu_yrs:'2020 – 2025',
    edu_gpa:'GPA: 4.82 / 5.00',edu_honors:'First Class Honors',
    edu_desc:'Built a strong foundation in Biomedical Engineering through academic coursework and practical projects, with a particular interest in medical devices, digital health, and healthcare technologies.',
    exp_label:'EXPERIENCE',
    exp_title:'Biomedical Engineering Intern',
    exp_org:'King Abdulaziz Medical City – Ministry of National Guard Health Affairs',
    exp_note:'Click on each card to view more details',
    depts:[
      {icon:'🩻',name:'Medical Imaging Workshop',
       desc:'Worked with diagnostic imaging systems including Ultrasound, X-ray, CT, MRI, PET/CT and more. Performed preventive maintenance, troubleshooting, calibration and functional testing. Gained exposure to HIS, PACS, and imaging workflow integration.',
       devices:['Ultrasound','Portable X-ray','C-arm','CT','MRI','Fluoroscopy','PET/CT','Angiography','Injector']},
      {icon:'❤️',name:'Cardiac Workshop',
       desc:'Worked with cardiac, critical care, and home-care medical devices by performing preventive maintenance, troubleshooting, calibration, functional testing, equipment acceptance, and component replacement while ensuring compliance with hospital standards.',
       devices:['Heart-Lung Machine','ECMO','IABP','Servo-i Ventilator','Oxilog 3000 Plus','Astral 150','ECMO Cooler/Heater','Bair Hugger','Oxygen Concentrator','CPAP','BiPAP','Nebulizer','Humidifier','ECG','ESU','Patient Monitors']},
      {icon:'🔧',name:'General Workshop',
       desc:'Performed preventive maintenance (PPM), corrective maintenance, troubleshooting, electrical safety testing, functional testing, calibration, and maintenance documentation using the CMMS asset management system. Participated in equipment acceptance and disposal procedures. Contributed to a hospital-wide replacement project involving printers, scanners, and chargers.',
       devices:['VS4 Vital Signs Monitor','LIFEPAK 15 Defibrillator','Dental X-ray Unit','Weight Scale','Cast Cutter','EEG Systems','ENT Devices','Ophthalmology Devices','Rehabilitation Equipment','Thermometers']},
      {icon:'🧪',name:'Laboratory Workshop',
       desc:'Worked with laboratory and dialysis equipment, assisting in maintenance, equipment acceptance, installation, configuration, and documentation while following hospital quality standards.',
       devices:['Dialysis Machines','Blood Analyzers','Centrifuges']},
      {icon:'🏥',name:'Operating Room Workshop',
       desc:'Maintained and tested medical equipment used in operating rooms and critical care areas by performing preventive maintenance, functional testing, calibration, troubleshooting, and maintenance documentation while supporting clinical teams.',
       devices:['Anesthesia Machines','Patient Monitors','ESU','Endoscopy Systems','Ophthalmic Surgical Devices','Baby Warmers','Cooler/Heater Units','Surgical Carts']},
    ],
    skills_label:'SKILLS',
    sk_tech_title:'Technical Skills',
    sk_tech:['Medical Device Maintenance & Troubleshooting','Preventive & Corrective Maintenance (PPM)','Medical Device Testing & Calibration','Medical Equipment Acceptance & Disposal','Asset Management (AssetPlus CMMS)','HL7 Fundamentals & Middleware Basics','Mobile App Development','UI/UX Design (Figma)','Prompt Engineering','MATLAB','Python (Basic)','Arduino (Basic)'],
    sk_sw_title:'Software & Tools',
    sk_sw:['Microsoft Office Suite','Microsoft Azure AI Fundamentals','Android Studio','Figma'],
    sk_pro_title:'Professional Skills',
    sk_pro:['Analytical Thinking','Problem Solving','Communication','Teamwork','Adaptability','Time Management','Technical Documentation','Attention to Detail'],
    fp_label:'FEATURED PROJECT',fp_num:'01',fp_name:'ETMAEN',fp_sub:'Home Healthcare Platform',
    fp_desc:'A digital platform connecting patients with licensed home healthcare providers in Saudi Arabia, inspired by on-demand service models.',
    fp_btn:'VIEW CASE STUDY',
    fp_role_label:'MY ROLE',fp_role:'• UI/UX Design\n• System Design\n• Workflow Planning\n• Requirement Analysis',
    fp_tech_label:'TECHNOLOGIES',fp_tech:'Figma, Kotlin, Firebase, Firestore',
    fp_focus_label:'FOCUS',fp_focus:'Healthcare workflow, User experience, Integration',
    cred_label:'PROFESSIONAL CREDENTIALS',
    cred_sub:'Licenses & Professional Memberships',
    cred1_h:'Practicing Registration',cred1_org:'Saudi Commission for Health Specialties',
    cred1_spec:'Specialist — Medical Devices',cred1_num:'26958478',cred1_issue:'08/07/2026',cred1_exp:'07/07/2028',
    cred2_h:'Professional Membership',cred2_org:'Saudi Council of Engineers',
    cred2_cat:'Engineer',cred2_num:'1268801',cred2_start:'07/06/2026',cred2_exp:'06/07/2027',
    cert_label:'CERTIFICATIONS',vol_label:'VOLUNTEER EXPERIENCE',
    vol:[
      {icon:'🔬',name:'Biomedical Technology Club',hours:'72 volunteer hours'},
      {icon:'🌿',name:'Darb Initiative',hours:'33 volunteer hours'},
      {icon:'📋',name:'Tazeez Annual Conference',hours:'25 volunteer hours'},
    ],
    contact_big:"Let's build the future of <em>healthcare together.</em>",
    contact_label:'CONTACT',
    footer_brand:"Let's build the future\nof healthcare together.",
    footer_copy:'© 2025 Aljohara Almusallam. All rights reserved.',
    lang_label:'عربي',
    row_spec:'Specialization',row_profile:'Profile No.',row_issue:'Issue Date',row_valid:'Valid Until',
    row_cat:'Category',row_mem:'Membership No.',row_start:'Start Date',
  },
  ar:{
    nav:['الرئيسية','عني','التعليم','الخبرة','المهارات','المشاريع','الشهادات','التطوع','تواصل'],
    hero_eyebrow:'مهندسة طب حيوي',
    hero_role:'مهندسة طب حيوي',
    hero_tags:['الصحة الرقمية','الذكاء الاصطناعي في الرعاية الصحية','مصممة UI/UX'],
    hero_desc:'شغوفة بتطوير تقنيات الرعاية الصحية التي تحسن رعاية المرضى وتدعم التحول الرقمي بما يتماشى مع رؤية المملكة 2030.',
    hero_cv:'تحميل السيرة الذاتية',hero_about:'نبذة عني',
    about_label:'نبذة عني',
    about_p1:'أنا الجوهرة المسلم، مهندسة طب حيوي حديثة التخرج بمرتبة الشرف الأولى من جامعة الملك سعود، ولدي شغف بتطوير حلول تقنية تساهم في تحسين جودة الرعاية الصحية.',
    about_p2:'يجمع اهتمامي بين الهندسة الطبية الحيوية، والصحة الرقمية، والذكاء الاصطناعي في الرعاية الصحية، وتصميم تجربة المستخدم (UI/UX). أؤمن بأن التقنية قادرة على إحداث أثر حقيقي عندما تُصمم لتلبية احتياجات المرضى ومقدمي الرعاية الصحية.',
    about_p3:'من خلال دراستي وتدريبي العملي، اكتسبت خبرة في صيانة الأجهزة الطبية، وإدارة الأصول الطبية، والعمل على المشاريع الصحية الرقمية، بالإضافة إلى تطوير مهاراتي في تحليل المشكلات، والعمل الجماعي، والتعلم المستمر.',
    about_p4:'أسعى إلى بناء مسيرة مهنية أساهم فيها في تطوير التقنيات الطبية والابتكار في القطاع الصحي، ودعم التحول الرقمي بما يتماشى مع رؤية المملكة 2030.',
    edu_label:'التعليم',edu_h:'جامعة الملك سعود',
    edu_deg:'بكالوريوس الهندسة الطبية الحيوية',edu_yrs:'2020 – 2025',
    edu_gpa:'المعدل: 4.82 / 5.00',edu_honors:'مرتبة الشرف الأولى',
    edu_desc:'اكتسبت أساسًا قويًا في الهندسة الطبية الحيوية من خلال الدراسة الأكاديمية والمشاريع التطبيقية، مع اهتمام خاص بالأجهزة الطبية، والصحة الرقمية، والتقنيات الصحية.',
    exp_label:'الخبرة',
    exp_title:'متدربة هندسة طبية حيوية',
    exp_org:'مدينة الملك عبدالعزيز الطبية – وزارة الحرس الوطني للشؤون الصحية',
    exp_note:'انقر على كل بطاقة لعرض التفاصيل',
    depts:[
      {icon:'🩻',name:'ورشة التصوير الطبي',
       desc:'تدربت على صيانة وفحص أجهزة التصوير الطبي، وشاركت في تنفيذ الصيانة الوقائية، وتشخيص الأعطال، واستبدال القطع التالفة، وإجراء المعايرة والاختبارات الوظيفية، بالإضافة إلى التعرف على أنظمة HIS وPACS وآلية تكامل أجهزة التصوير مع أنظمة المستشفى.',
       devices:['Ultrasound','Portable X-ray','C-arm','CT','MRI','Fluoroscopy','PET/CT','Angiography','Injector']},
      {icon:'❤️',name:'ورشة القلب',
       desc:'اكتسبت خبرة عملية في صيانة أجهزة القلب والعناية الحرجة وأجهزة الرعاية المنزلية، من خلال تنفيذ الصيانة الوقائية، واختبارات الأداء، والمعايرة، واستبدال القطع التالفة، بالإضافة إلى فحص واعتماد أجهزة الرعاية المنزلية قبل تسليمها للمستخدمين.',
       devices:['Heart-Lung Machine','ECMO','IABP','Servo-i Ventilator','Oxilog 3000 Plus','Astral 150','ECMO Cooler/Heater','Bair Hugger','Oxygen Concentrator','CPAP','BiPAP','Nebulizer','Humidifier','ECG','ESU','Patient Monitors']},
      {icon:'🔧',name:'الورشة العامة',
       desc:'عملت في الورشة العامة على صيانة وإدارة مجموعة متنوعة من الأجهزة الطبية، وشاركت في تنفيذ الصيانة الوقائية، والصيانة التصحيحية، وتشخيص الأعطال، واختبارات السلامة الكهربائية، والمعايرة، وتوثيق أعمال الصيانة باستخدام نظام CMMS. كما شاركت في مشروع استبدال الطابعات والماسحات الضوئية والشواحن في مختلف أقسام المستشفى.',
       devices:['VS4 Vital Signs Monitor','LIFEPAK 15 Defibrillator','Dental X-ray Unit','Weight Scale','Cast Cutter','EEG Systems','ENT Devices','Ophthalmology Devices','Rehabilitation Equipment','Thermometers']},
      {icon:'🧪',name:'ورشة المختبر',
       desc:'تدربت على أجهزة المختبر والغسيل الكلوي، وشاركت في صيانتها، واستلام الأجهزة الجديدة، والتأكد من تركيبها وتشغيلها، وتوثيقها وفق معايير الجودة وإجراءات المستشفى.',
       devices:['Dialysis Machines','Blood Analyzers','Centrifuges']},
      {icon:'🏥',name:'ورشة غرفة العمليات',
       desc:'شاركت في صيانة وفحص الأجهزة الطبية المستخدمة داخل غرف العمليات والعناية الحرجة، من خلال تنفيذ الصيانة الوقائية، والاختبارات الوظيفية، والمعايرة، وتوثيق أعمال الصيانة، والتعاون مع الفرق السريرية.',
       devices:['Anesthesia Machines','Patient Monitors','ESU','Endoscopy Systems','Ophthalmic Surgical Devices','Baby Warmers','Cooler/Heater Units','Surgical Carts']},
    ],
    skills_label:'المهارات',
    sk_tech_title:'المهارات التقنية',
    sk_tech:['صيانة الأجهزة الطبية واستكشاف الأعطال','الصيانة الوقائية والتصحيحية (PPM)','اختبار ومعايرة الأجهزة الطبية','استلام والتخلص من الأجهزة الطبية','إدارة الأصول (AssetPlus CMMS)','أساسيات HL7 والـ Middleware','تطوير تطبيقات الجوال','تصميم UI/UX (Figma)','هندسة المطالبات (Prompt Engineering)','MATLAB','Python (أساسي)','Arduino (أساسي)'],
    sk_sw_title:'البرامج والأدوات',
    sk_sw:['Microsoft Office Suite','Microsoft Azure AI Fundamentals','Android Studio','Figma'],
    sk_pro_title:'المهارات المهنية',
    sk_pro:['التفكير التحليلي','حل المشكلات','التواصل','العمل الجماعي','القدرة على التكيف','إدارة الوقت','التوثيق التقني','الدقة والاهتمام بالتفاصيل'],
    fp_label:'المشروع المميز',fp_num:'01',fp_name:'ETMAEN',fp_sub:'منصة الرعاية الصحية المنزلية',
    fp_desc:'منصة رقمية تربط المرضى بمقدمي خدمات الرعاية الصحية المنزلية المرخصين في المملكة العربية السعودية.',
    fp_btn:'عرض دراسة الحالة',
    fp_role_label:'دوري',fp_role:'• تصميم UI/UX\n• تصميم النظام\n• تخطيط سير العمل\n• تحليل المتطلبات',
    fp_tech_label:'التقنيات',fp_tech:'Figma, Kotlin, Firebase, Firestore',
    fp_focus_label:'التركيز',fp_focus:'سير عمل الرعاية الصحية، تجربة المستخدم، التكامل',
    cred_label:'الاعتمادات المهنية',
    cred_sub:'التراخيص والعضويات المهنية',
    cred1_h:'تسجيل ممارس',cred1_org:'الهيئة السعودية للتخصصات الصحية',
    cred1_spec:'أخصائي — أجهزة طبية',cred1_num:'26958478',cred1_issue:'08/07/2026',cred1_exp:'07/07/2028',
    cred2_h:'عضوية مهنية',cred2_org:'هيئة المهندسين السعوديين',
    cred2_cat:'مهندس',cred2_num:'1268801',cred2_start:'07/06/2026',cred2_exp:'06/07/2027',
    cert_label:'الشهادات',vol_label:'التطوع والقيادة',
    vol:[
      {icon:'🔬',name:'نادي التكنولوجيا الطبية الحيوية',hours:'72 ساعة تطوع'},
      {icon:'🌿',name:'مبادرة درب',hours:'33 ساعة تطوع'},
      {icon:'📋',name:'مؤتمر تعزيز السنوي',hours:'25 ساعة تطوع'},
    ],
    contact_big:'لنبني مستقبل <em>الرعاية الصحية معاً.</em>',
    contact_label:'تواصل',
    footer_brand:'لنبني مستقبل\nالرعاية الصحية معاً.',
    footer_copy:'© 2025 الجوهرة المسلم. جميع الحقوق محفوظة.',
    lang_label:'EN',
    row_spec:'التخصص',row_profile:'رقم الملف',row_issue:'تاريخ الإصدار',row_valid:'صالح حتى',
    row_cat:'الفئة',row_mem:'رقم العضوية',row_start:'تاريخ البدء',
  }
};

let lang='en';
function applyLang(){
  const t=i18n[lang];
  const isAr=lang==='ar';
  document.documentElement.setAttribute('dir',isAr?'rtl':'ltr');
  document.documentElement.setAttribute('lang',lang);

  // Nav
  const navAs=document.querySelectorAll('.nav-links a');
  t.nav.forEach((txt,i)=>{if(navAs[i])navAs[i].textContent=txt});

  // Hero
  document.getElementById('hero-eyebrow').textContent=t.hero_eyebrow;
  document.getElementById('hero-role').textContent=t.hero_role;
  const tagsEl=document.getElementById('hero-tags');
  tagsEl.innerHTML=t.hero_tags.map(x=>`<span>${x}</span>`).join('');
  document.getElementById('hero-desc').textContent=t.hero_desc;
  document.getElementById('hero-cv-btn').innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>${t.hero_cv}`;
  document.getElementById('hero-about-btn').innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>${t.hero_about}`;

  // About
  document.getElementById('about-label').textContent=t.about_label;
  ['about-p1','about-p2','about-p3','about-p4'].forEach((id,i)=>document.getElementById(id).textContent=t[`about_p${i+1}`]);

  // Edu
  document.getElementById('edu-label').textContent=t.edu_label;
  document.getElementById('edu-h').textContent=t.edu_h;
  document.getElementById('edu-deg').textContent=t.edu_deg;
  document.getElementById('edu-yrs').textContent=t.edu_yrs;
  document.getElementById('edu-gpa').textContent=t.edu_gpa;
  document.getElementById('edu-honors').textContent=t.edu_honors;
  document.getElementById('edu-desc').textContent=t.edu_desc;

  // Exp
  document.getElementById('exp-label').textContent=t.exp_label;
  document.getElementById('exp-title').textContent=t.exp_title;
  document.getElementById('exp-org').textContent=t.exp_org;
  document.getElementById('exp-note').textContent=t.exp_note;

  // Dept cards
  buildDepts(t);

  // Skills
  document.getElementById('skills-label').textContent=t.skills_label;
  buildSkills(t);

  // Featured Project
  document.getElementById('fp-label').textContent=t.fp_label;
  document.getElementById('fp-sub').textContent=t.fp_sub;
  document.getElementById('fp-desc').textContent=t.fp_desc;
  document.getElementById('fp-btn').textContent=t.fp_btn;
  document.getElementById('fp-role-label').textContent=t.fp_role_label;
  document.getElementById('fp-role').innerHTML=t.fp_role.replace(/\n/g,'<br>');
  document.getElementById('fp-tech-label').textContent=t.fp_tech_label;
  document.getElementById('fp-tech').textContent=t.fp_tech;
  document.getElementById('fp-focus-label').textContent=t.fp_focus_label;
  document.getElementById('fp-focus').textContent=t.fp_focus;

  // Credentials
  document.getElementById('cred-label').textContent=t.cred_label;
  document.getElementById('cred-sub').textContent=t.cred_sub;
  document.getElementById('cred1-h').textContent=t.cred1_h;
  document.getElementById('cred1-org').textContent=t.cred1_org;
  document.getElementById('cred1-spec').textContent=t.cred1_spec;
  document.getElementById('cred1-num').textContent=t.cred1_num;
  document.getElementById('cred1-issue').textContent=t.cred1_issue;
  document.getElementById('cred1-exp').textContent=t.cred1_exp;
  document.getElementById('cred2-h').textContent=t.cred2_h;
  document.getElementById('cred2-org').textContent=t.cred2_org;
  document.getElementById('cred2-cat').textContent=t.cred2_cat;
  document.getElementById('cred2-num').textContent=t.cred2_num;
  document.getElementById('cred2-start').textContent=t.cred2_start;
  document.getElementById('cred2-exp').textContent=t.cred2_exp;
  ['row-spec','row-profile','row-issue','row-valid','row-cat','row-mem','row-start'].forEach(id=>{
    const el=document.getElementById(id);if(el)el.textContent=t[id.replace('-','_')];
  });

  // Cert, vol
  document.getElementById('cert-label').textContent=t.cert_label;
  document.getElementById('vol-label').textContent=t.vol_label;
  buildVol(t);

  // Contact
  document.getElementById('contact-label').textContent=t.contact_label;
  document.getElementById('contact-big').innerHTML=t.contact_big;
  document.getElementById('footer-brand').innerHTML=t.footer_brand.replace('\n','<br>');
  document.getElementById('footer-copy').textContent=t.footer_copy;

  // lang btn
  document.getElementById('lang-btn').querySelector('.lb-txt').textContent=t.lang_label;
}

function buildDepts(t){
  const grid=document.getElementById('dept-grid');
  const detail=document.getElementById('dept-detail');
  grid.innerHTML='';
  let openIdx=-1;
  t.depts.forEach((d,i)=>{
    const card=document.createElement('div');
    card.className='dept-card';
    card.innerHTML=`<div class="dc-icon">${d.icon}</div><div class="dc-top"><div class="dc-name">${d.name}</div><span class="dc-arr">▾</span></div>`;
    card.addEventListener('click',()=>{
      if(openIdx===i){openIdx=-1;detail.classList.remove('show');card.classList.remove('open')}
      else{
        grid.querySelectorAll('.dept-card').forEach(c=>c.classList.remove('open'));
        card.classList.add('open');openIdx=i;
        detail.classList.add('show');
        detail.innerHTML=`<p class="dd-desc">${d.desc}</p><div class="dd-label">${lang==='en'?'Medical Devices':'الأجهزة الطبية'}</div><div class="dd-devices">${d.devices.map(x=>`<span class="dd-device">${x}</span>`).join('')}</div>`;
      }
    });
    grid.appendChild(card);
  });
}

function buildSkills(t){
  const wrap=document.getElementById('skills-grid');
  wrap.innerHTML=`
    <div class="skill-col"><div class="sk-head"><div class="sk-icon">⚙️</div><div class="sk-title">${t.sk_tech_title}</div></div><ul>${t.sk_tech.map(x=>`<li>${x}</li>`).join('')}</ul></div>
    <div class="skill-col"><div class="sk-head"><div class="sk-icon">💻</div><div class="sk-title">${t.sk_sw_title}</div></div><ul>${t.sk_sw.map(x=>`<li>${x}</li>`).join('')}</ul><div style="margin-top:1.5rem"></div><div class="sk-head"><div class="sk-icon">👥</div><div class="sk-title">${t.sk_pro_title}</div></div><ul>${t.sk_pro.map(x=>`<li>${x}</li>`).join('')}</ul></div>
  `;
}

function buildVol(t){
  const grid=document.getElementById('vol-grid');
  grid.innerHTML=t.vol.map(v=>`
    <div class="vol-card">
      <div class="vc-icon">${v.icon}</div>
      <h3>${v.name}</h3>
      <div class="vc-hours">${v.hours}</div>
    </div>
  `).join('');
}

document.getElementById('lang-btn').addEventListener('click',()=>{
  lang=lang==='en'?'ar':'en';applyLang();
});

// Active nav
document.querySelectorAll('section[id]').forEach(s=>{
  new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))})},{rootMargin:'-35% 0px -35% 0px'}).observe(s);
});

// Reveal
document.querySelectorAll('.reveal').forEach(el=>{
  new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis')})},{threshold:.08}).observe(el);
});

// Modal
const modal=document.getElementById('modal');
const mHd=document.getElementById('modal-hd');
const mBd=document.getElementById('modal-bd');
function openModal(id){
  const d=projectData[id];if(!d)return;
  mHd.innerHTML=`<div><div style="margin-bottom:.4rem">${d.tags.map(t=>`<span class="mtag">${t}</span>`).join('')}</div><h2 style="font-size:1rem;font-weight:800">${d.title}</h2></div><button class="modal-close" onclick="closeModal()">✕</button>`;
  mBd.innerHTML=d.body;modal.classList.add('open');document.body.style.overflow='hidden';
}
function closeModal(){modal.classList.remove('open');document.body.style.overflow=''}
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});

// Lightbox
const lb=document.getElementById('lb');
function openLB(src){document.getElementById('lb-img').src=src;lb.classList.add('open')}
lb.addEventListener('click',()=>lb.classList.remove('open'));

// Init
applyLang();
