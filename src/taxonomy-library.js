(() => {
  const taxonomy = [
    { number:'01', id:'foundations', name:'FOUNDATIONS', description:'Visual philosophies, structural traditions and design movements.', groups:[
      {name:'STRUCTURE & RESTRAINT', styles:[['minimalism','MINIMALISM','Clarity through restraint. Space, hierarchy and simple form do the heavy lifting.','minimalism']]},
      {name:'RAW & ANTI-REFINEMENT', styles:[['brutalism','BRUTALISM','Raw structure, bold typography and deliberate visual tension.','brutalism']]},
      {name:'EXPANSION & ABUNDANCE', styles:[['maximalism','MAXIMALISM','Abundance with intention — colour, typography, imagery, pattern and texture.','maximalism']]}
    ]},
    { number:'02', id:'surface-material', name:'SURFACE & MATERIAL', description:'How interfaces communicate material, depth, texture and physical metaphor.', groups:[
      {name:'MORPHIC / PHYSICAL', styles:[['skeuomorphism','SKEUOMORPHISM','Physical objects, materials and familiar metaphors become interaction language.','skeuomorphism'],['neumorphism','NEUMORPHISM','Soft shadows make controls feel physical, tactile and quietly dimensional.','neumorphism'],['glassmorphism','GLASSMORPHISM','Translucent surfaces, blur and light create depth.','glassmorphism'],['claymorphism','CLAYMORPHISM','Soft inflated forms, rounded surfaces and gentle depth.','claymorphism']]}
    ]},
    { number:'03', id:'digital-interface', name:'DIGITAL INTERFACE', description:'Interface-specific visual languages, systems and UI strategies.', groups:[
      {name:'FLAT / REDUCED DEPTH', styles:[['flatdesign','FLAT DESIGN','Colour, typography, geometry and spacing without unnecessary depth.','flatdesign']]},
      {name:'SYSTEMIC INTERFACES', styles:[['materialdesign','MATERIAL DESIGN','Surfaces, elevation, colour and meaningful motion form a practical system.','materialdesign']]},
      {name:'INTERFACE MODES', styles:[['darkuidesign','DARK UI DESIGN','Deep surfaces, controlled contrast and luminous accents.','darkuidesign']]}
    ]},
    { number:'04', id:'expressive-creative', name:'EXPRESSIVE & CREATIVE', description:'Expressive visual languages driven by colour, culture, decoration and experimentation.', groups:[
      {name:'LIGHT & COLOUR', styles:[['auroragradient','AURORA / GRADIENT DESIGN','Atmospheric surfaces, flowing colour and luminous depth.','auroragradient']]}
    ]},
    { number:'05', id:'motion-interaction', name:'MOTION & INTERACTION', description:'Behavioural languages that can combine with any visual style.', groups:[
      {name:'MOTION-FIRST', styles:[]}, {name:'TYPOGRAPHY MOTION',styles:[]},{name:'SCROLL / SPATIAL',styles:[]},{name:'REACTIVE / GENERATIVE',styles:[]}
    ]}
  ];

  const style = document.createElement('style');
  style.textContent = `
    .da-taxonomy-library{max-width:1180px;margin:0 auto;padding:0 24px 100px;color:#eef2f4}
    .da-taxonomy-hero{padding:72px 0 58px;border-bottom:1px solid rgba(255,255,255,.12)}
    .da-taxonomy-kicker{font-size:11px;letter-spacing:.22em;color:#78828b;margin:0 0 18px}
    .da-taxonomy-hero h1{font-size:clamp(42px,7vw,86px);line-height:.95;margin:0;letter-spacing:-.05em}.da-taxonomy-hero h1 em{font-style:normal;color:#6bd8e7}
    .da-taxonomy-hero p{max-width:680px;color:#8e98a1;font-size:18px;line-height:1.65;margin:24px 0 0}
    .da-domain{padding:70px 0 0}.da-domain-head{display:grid;grid-template-columns:70px 1fr;gap:16px;align-items:start;margin-bottom:28px}.da-domain-num{font:12px/1 monospace;letter-spacing:.18em;color:#6b747d;padding-top:10px}.da-domain-head h2{margin:0;font-size:clamp(26px,4vw,46px);letter-spacing:-.035em}.da-domain-head p{grid-column:2;color:#707a83;margin:4px 0 0;max-width:620px;line-height:1.6}
    .da-subfamily{margin:28px 0 0}.da-subfamily-title{display:flex;gap:14px;align-items:center;font:11px/1 monospace;letter-spacing:.18em;color:#6e7880}.da-subfamily-title:after{content:"";height:1px;flex:1;background:rgba(255,255,255,.09)}
    .da-style-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:14px}.da-style-card{min-height:190px;border:1px solid rgba(255,255,255,.1);border-radius:18px;background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.018));padding:20px;display:flex;flex-direction:column;justify-content:space-between;transition:.25s ease;text-decoration:none;color:inherit}.da-style-card:hover{transform:translateY(-3px);border-color:rgba(107,216,231,.42);background:linear-gradient(145deg,rgba(107,216,231,.09),rgba(255,255,255,.018))}.da-style-tag{font:10px monospace;color:#69747d;letter-spacing:.14em}.da-style-card h3{font-size:19px;margin:18px 0 8px;letter-spacing:-.02em}.da-style-card p{font-size:13px;line-height:1.55;color:#858f98;margin:0}.da-style-open{margin-top:16px;font:10px monospace;letter-spacing:.16em;color:#68d8e7}
    .da-empty{padding:18px 0;color:#4f5961;font:11px monospace;letter-spacing:.12em}.da-crosslink{margin-top:70px;border:1px solid rgba(255,255,255,.1);border-radius:22px;padding:28px;background:rgba(255,255,255,.025)}.da-crosslink strong{display:block;font-size:12px;letter-spacing:.16em}.da-crosslink p{color:#747e87;line-height:1.6;max-width:700px}.da-taxonomy-note{font:10px monospace;letter-spacing:.12em;color:#59636c;margin-top:12px}
    @media(max-width:820px){.da-style-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.da-domain-head{grid-template-columns:50px 1fr}.da-domain-head p{grid-column:2}}
    @media(max-width:520px){.da-taxonomy-library{padding:0 18px 70px}.da-taxonomy-hero{padding-top:42px}.da-style-grid{grid-template-columns:1fr}.da-domain-head{grid-template-columns:42px 1fr}.da-domain-head p{grid-column:2;font-size:13px}.da-domain{padding-top:48px}}
  `;
  document.head.appendChild(style);

  const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const render = root => {
    if (!root || root.dataset.taxonomyRendered === 'true') return;
    root.dataset.taxonomyRendered = 'true';
    root.innerHTML = `
      <div class="da-taxonomy-library">
        <section class="da-taxonomy-hero">
          <p class="da-taxonomy-kicker">RESEARCH-GROUNDED DESIGN TAXONOMY</p>
          <h1>Explore <em>design by relationship.</em></h1>
          <p>Design Anatomy no longer forces every style into the old “Morphism / Lism / Modern Digital” buckets. Styles are organized by what they actually are: foundations, surface/material treatments, interface languages, expressive aesthetics, and interaction behaviour.</p>
          <div class="da-taxonomy-note">A STYLE HAS ONE PRIMARY HOME · RELATED CONCEPTS CAN CROSS-LINK</div>
        </section>
        ${taxonomy.map(domain => `
          <section class="da-domain" id="${domain.id}">
            <div class="da-domain-head"><span class="da-domain-num">${domain.number}</span><div><h2>${escapeHtml(domain.name)}</h2><p>${escapeHtml(domain.description)}</p></div></div>
            ${domain.groups.map(group => `
              <div class="da-subfamily"><div class="da-subfamily-title">${escapeHtml(group.name)}</div>
                <div class="da-style-grid">${group.styles.length ? group.styles.map(([id,name,copy,route],i)=>`<a class="da-style-card" href="#${route}" data-route="${route}"><span class="da-style-tag">${domain.number}.${String(i+1).padStart(2,'0')}</span><div><h3>${escapeHtml(name)}</h3><p>${escapeHtml(copy)}</p></div><span class="da-style-open">OPEN STYLE →</span></a>`).join('') : '<div class="da-empty">COMING SOON · INTERACTION-BASED STYLES WILL LIVE HERE</div>'}</div>
              </div>`).join('')}
          </section>`).join('')}
        <div class="da-crosslink"><strong>WHY THIS MODEL</strong><p>Visual style, material treatment, interface system and motion are different kinds of design relationships. Keeping them separate makes the library expandable: a future style can be classified by its primary nature instead of being squeezed into an arbitrary family.</p></div>
      </div>`;
  };

  const watch = new MutationObserver(() => { const root=document.querySelector('.library-page'); if(root) render(root); });
  watch.observe(document.body,{childList:true,subtree:true});
  const initial=document.querySelector('.library-page'); if(initial) render(initial);
})();
