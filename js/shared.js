
/* ════════════════════════════════
   SHARED JS · Mohammad Sami SEO
════════════════════════════════ */
(function(){
  const l=document.createElement('link');
  l.rel='stylesheet';
  l.href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';
  document.head.prepend(l);
})();

document.addEventListener('DOMContentLoaded',()=>{
  // Hamburger
  const hb=document.getElementById('hb');
  const nl=document.getElementById('navLinks');
  if(hb&&nl){
    hb.addEventListener('click',()=>{
      hb.classList.toggle('open');
      nl.classList.toggle('open');
    });
  }
  // Close nav on link click (mobile)
  if(nl) nl.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nl.classList.remove('open');if(hb)hb.classList.remove('open');}));

  // Active link
  const p=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===p)a.classList.add('active');});

  // Reveal
  const ro=new IntersectionObserver((es)=>{
    es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*55);ro.unobserve(e.target);}});
  },{threshold:.06});
  document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

  // Counters
  const co=new IntersectionObserver((es)=>{
    es.forEach(e=>{
      if(!e.isIntersecting)return;
      const el=e.target,tgt=+el.dataset.count,sfx=el.dataset.suffix||'';
      let n=0;const st=Math.ceil(tgt/55);
      const ti=setInterval(()=>{n=Math.min(n+st,tgt);el.textContent=n.toLocaleString()+sfx;if(n>=tgt)clearInterval(ti);},18);
      co.unobserve(el);
    });
  },{threshold:.5});
  document.querySelectorAll('[data-count]').forEach(el=>co.observe(el));
});

/* ════════════════════════════════════
   GSC SCREENSHOTS CONFIG
   ────────────────────────────────────
   HOW TO ADD YOUR SCREENSHOTS:
   1. Upload to Google Drive
   2. Share → Anyone with link can view
   3. Copy: drive.google.com/file/d/FILE_ID/view
   4. Convert to: drive.google.com/uc?export=view&id=FILE_ID
   5. Paste in url field · set type:'img'

   For HTML embed links (iframe):
   Set type:'iframe' and paste embed URL
════════════════════════════════════ */
const GSC={
  /* ── CURRENT PROJECTS ── */
  roman:{
    title:'Roman Electric Co., Inc. — Google Search Console',
    sub:'Aug–Dec 2025 (Before) vs Dec 2025–Apr 2026 (After) · Impressions +105.3% · Clicks +10%',
    type:'img', url:'https://github.com/msuk714/Mohammad-Sami/blob/main/images/RomanElectricsPerformance.png'
  },
  signarama:{
    title:'Milwaukee Signarama — Google Search Console',
    sub:'Aug–Dec 2025 (Before) vs Dec 2025–Apr 2026 (After) · Impressions +95.8% · Clicks +83.8%',
    type:'img', url:'https://raw.githubusercontent.com/msuk714/Mohammad-Sami/main/images/MilwaukeeSignaramaPerformance.png'
  },
  p2ezpay:{
    title:'P2EzPay — Google Search Console',
    sub:'Aug–Dec 2025 (Before) vs Dec 2025–Apr 2026 (After) · Impressions +954% · Clicks +800%',
    type:'img', url:'https://raw.githubusercontent.com/msuk714/Mohammad-Sami/main/images/P2ezPayPerformance.png'
  },
  /* ── RECENT PROJECTS ── */
  rosa:{
    title:'Rosa Clothing & Apparel Store — Google Search Console',
    sub:'Mar–Aug 2025 · 2,690 Clicks · 37,500 Impressions · 7.2% CTR · 10 Keywords #1',
    type:'img', url:''
  },
  pinky:{
    title:'Pinky Furniture UAE — Google Search Console',
    sub:'Mar–Jul 2025 · 2,070 Clicks · 194,000 Impressions · 1.1% CTR · 7 Keywords #1',
    type:'img', url:''
  },
  mrfashion:{
    title:'MR Fashions — Google Search Console',
    sub:'Mar–Jul 2025 · 1,020 Clicks · 14,000 Impressions · 7.3% CTR',
    type:'img', url:''
  },
  khanabadosh:{
    title:'Khanabadosh Glamps — Google Search Console',
    sub:'Mar–Jun 2025 · 3,110 Clicks · 34,400 Impressions · 9% CTR · Avg Pos 4.0',
    type:'img', url:''
  },
  latitude:{
    title:'Latitude Resort Kumrat — Google Search Console',
    sub:'Dec 2024–Jun 2025 · 5,540 Clicks · 115,000 Impressions · 4.8% CTR · 11 Keywords #1',
    type:'img', url:''
  },
  blinds:{
    title:'Blinds and Curtains Dubai — Google Search Console',
    sub:'Jun 2024–Apr 2025 · 11,700 Clicks · 1,090,000 Impressions · 1.1% CTR',
    type:'img', url:''
  },
  twoguys:{
    title:'Two Guys Home Furnishing Dubai — Google Search Console',
    sub:'Jun 2024–Apr 2025 · 218,000 Impressions · #1 Sintered Stone Flooring',
    type:'img', url:''
  },
  interior:{
    title:'Interior Films Dubai — Google Search Console',
    sub:'Jun 2024–Apr 2025 · 357 Clicks · 34,600 Impressions · 6 Keywords #1',
    type:'img', url:''
  },
};

const WA='https://wa.me/923126540714';

function openGSC(key){
  const d=GSC[key]; if(!d)return;
  document.getElementById('gscTitle').textContent=d.title;
  document.getElementById('gscSub').textContent=d.sub;
  const body=document.getElementById('gscBody');
  let html='';
  if(d.url&&d.url.trim()){
    if(d.type==='iframe'){
      html=`<div class="modal-iframe-wrap"><iframe src="${d.url}" loading="lazy" title="${d.title}"></iframe><div class="modal-wm"><span>Mohammad Sami — Senior SEO Strategist</span></div></div>`;
    } else {
      html=`<div class="modal-img-wrap"><img src="${d.url}" alt="${d.title}" loading="lazy"/><div class="modal-wm"><span>Mohammad Sami — Senior SEO Strategist</span></div></div>`;
    }
  } else {
    html=`<div class="modal-ph"><div class="modal-ph-ico">📊</div><div class="modal-ph-title">${d.title}</div><div class="modal-ph-sub">Screenshot appears here once you add the Google Drive link in <strong>shared.js</strong> → key <strong style="color:var(--accent)">'${key}'</strong></div><div class="modal-ph-code">GSC['${key}'].url = 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID';</div></div>`;
  }
  html+=`<div class="modal-wa"><div class="modal-wa-ico">💬</div><div class="modal-wa-text"><div class="modal-wa-title">Want results like this for your website?</div><div class="modal-wa-sub">Free 30-min consultation · No commitment · Real strategy</div></div><a href="${WA}" target="_blank" rel="noopener" class="modal-wa-btn"><svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12c0 1.85.49 3.59 1.35 5.09L1.5 22.5l5.53-1.3A10.54 10.54 0 0012 22.5C17.8 22.5 22.5 17.8 22.5 12S17.8 1.5 12 1.5zm0 19.1a8.6 8.6 0 01-4.45-1.23l-.32-.19-3.28.77.82-3.19-.21-.33A8.6 8.6 0 0112 3.44c4.75 0 8.56 3.81 8.56 8.56S16.75 20.6 12 20.6z"/></svg>Chat on WhatsApp</a></div>`;
  body.innerHTML=html;
  document.getElementById('gscModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeGSC(){
  document.getElementById('gscModal').classList.remove('open');
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeGSC();});
