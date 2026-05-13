exports.id=549,exports.ids=[549],exports.modules={4108:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},1824:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,9404,23))},7307:(e,t,s)=>{"use strict";s.d(t,{u:()=>d});var a=s(326),r=s(7577),i=s(6307),l=s(9669);let d=({strengths:e,gaps:t})=>{let[s,d]=(0,r.useState)("strengths");return(0,a.jsxs)("div",{className:"flex flex-col h-full",children:[(0,a.jsxs)("div",{className:"flex border-b border-border mb-4",children:[(0,a.jsxs)("button",{className:`pb-2 px-4 font-medium text-sm transition-colors border-b-2 ${"strengths"===s?"border-brand-teal text-brand-teal":"border-transparent text-text-secondary hover:text-text-primary"}`,onClick:()=>d("strengths"),children:["Strengths (",e.length,")"]}),(0,a.jsxs)("button",{className:`pb-2 px-4 font-medium text-sm transition-colors border-b-2 ${"gaps"===s?"border-brand-coral text-brand-coral":"border-transparent text-text-secondary hover:text-text-primary"}`,onClick:()=>d("gaps"),children:["Gaps (",t.length,")"]})]}),a.jsx("div",{className:"flex-1 space-y-4",children:"strengths"===s?e.map((e,t)=>(0,a.jsxs)("div",{className:"flex gap-3 items-start animate-fade-up",style:{animationDelay:`${80*t}ms`},children:[a.jsx(i.Z,{className:"w-5 h-5 text-brand-teal shrink-0 mt-0.5"}),(0,a.jsxs)("div",{children:[a.jsx("p",{className:"font-medium text-text-primary",children:e.title}),a.jsx("p",{className:"text-sm text-text-secondary mt-1",children:e.detail}),e.relatedJobs&&e.relatedJobs.length>0&&a.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:e.relatedJobs.map((e,t)=>a.jsx("span",{className:"text-xs px-2 py-1 bg-surface border border-border rounded-md text-text-secondary",children:e},t))})]})]},t)):t.map((e,t)=>(0,a.jsxs)("div",{className:"flex gap-3 items-start animate-fade-up",style:{animationDelay:`${80*t}ms`},children:[a.jsx(l.Z,{className:"w-5 h-5 text-brand-coral shrink-0 mt-0.5"}),(0,a.jsxs)("div",{children:[a.jsx("p",{className:"font-medium text-text-primary",children:e.title}),a.jsx("p",{className:"text-sm text-text-secondary mt-1",children:e.detail})]})]},t))})]})}},4989:(e,t,s)=>{"use strict";s.d(t,{MatchMeter:()=>i});var a=s(326),r=s(7577);let i=({percentage:e,readinessLevel:t})=>{let[s,i]=(0,r.useState)(0);(0,r.useEffect)(()=>{let t=0,s=e/62.5,a=setInterval(()=>{(t+=s)>=e?(i(e),clearInterval(a)):i(Math.floor(t))},16);return()=>clearInterval(a)},[e]);let l=e>=70?"text-brand-teal stroke-brand-teal":e>=40?"text-brand-amber stroke-brand-amber":"text-brand-coral stroke-brand-coral",d=2*Math.PI*60;return(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center p-6 bg-surface-raised border border-border rounded-2xl shadow-sm",children:[(0,a.jsxs)("div",{className:"relative w-40 h-40 flex items-center justify-center",children:[(0,a.jsxs)("svg",{className:"w-full h-full transform -rotate-90",viewBox:"0 0 140 140",children:[a.jsx("circle",{cx:"70",cy:"70",r:60,className:"stroke-border fill-none",strokeWidth:"12"}),a.jsx("circle",{cx:"70",cy:"70",r:60,className:`fill-none transition-all duration-300 ease-out ${l.split(" ")[1]}`,strokeWidth:"12",strokeDasharray:d,strokeDashoffset:d-s/100*d,strokeLinecap:"round"})]}),(0,a.jsxs)("div",{className:"absolute flex flex-col items-center justify-center",children:[(0,a.jsxs)("span",{className:`text-4xl font-bold font-sora ${l.split(" ")[0]}`,children:[s,"%"]}),a.jsx("span",{className:"text-xs text-text-secondary mt-1 uppercase tracking-wider font-semibold",children:"Match"})]})]}),(0,a.jsxs)("div",{className:"mt-4 text-center",children:[a.jsx("p",{className:"text-sm text-text-secondary",children:"Readiness Level"}),a.jsx("p",{className:`font-semibold ${l.split(" ")[0]}`,children:t})]})]})}},9675:(e,t,s)=>{"use strict";s.d(t,{x:()=>i});var a=s(326);s(7577);var r=s(5833);let i=({vitals:e})=>(0,a.jsxs)("div",{className:"space-y-4",children:[e.map((e,t)=>{let s="strong"===e.status,i="gap"===e.status;return(0,a.jsxs)("div",{className:"animate-slide-in",style:{animationDelay:`${80*t}ms`},children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-1",children:[a.jsx("span",{className:"text-sm font-medium text-text-primary",children:e.name}),a.jsx(r.C,{variant:s?"strength":i?"gap":"neutral",children:e.status})]}),a.jsx("div",{className:"w-full bg-surface border border-border rounded-full h-2 overflow-hidden",children:a.jsx("div",{className:`${s?"bg-brand-purple":i?"bg-brand-coral":"bg-brand-teal"} h-2 rounded-full transition-all duration-1000 ease-out`,style:{width:`${e.score}%`}})})]},e.name)}),(0,a.jsxs)("div",{className:"flex gap-4 mt-6 pt-4 border-t border-border text-xs text-text-secondary",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1.5",children:[a.jsx("div",{className:"w-3 h-3 rounded-full bg-brand-purple"})," Strong"]}),(0,a.jsxs)("div",{className:"flex items-center gap-1.5",children:[a.jsx("div",{className:"w-3 h-3 rounded-full bg-brand-teal"})," Transferable"]}),(0,a.jsxs)("div",{className:"flex items-center gap-1.5",children:[a.jsx("div",{className:"w-3 h-3 rounded-full bg-brand-coral"})," Gap"]})]})]})},5833:(e,t,s)=>{"use strict";s.d(t,{C:()=>r});var a=s(326);s(7577);let r=({children:e,variant:t="neutral",className:s=""})=>a.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${{strength:"bg-brand-teal-light text-brand-teal",gap:"bg-brand-coral-light text-brand-coral",ai:"bg-brand-purple-light text-brand-purple",neutral:"bg-surface text-text-secondary border border-border",stepping_stone:"bg-brand-amber-light text-brand-amber",reach:"bg-brand-coral-light text-brand-coral",best_match:"bg-brand-teal-light text-brand-teal"}[t]} ${s}`,children:e})},3679:(e,t,s)=>{"use strict";s.d(t,{z:()=>i});var a=s(326),r=s(7577);let i=s.n(r)().forwardRef(({className:e="",variant:t="primary",...s},r)=>a.jsx("button",{ref:r,className:`inline-flex justify-center items-center px-4 py-2 rounded-[10px] font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${{primary:"bg-brand-purple text-white hover:scale-[1.02] hover:bg-[#432A99]",secondary:"bg-white border border-border text-text-primary hover:text-brand-purple hover:border-brand-purple",outline:"bg-transparent border border-brand-purple text-brand-purple hover:bg-brand-purple-light"}[t]} ${e}`,...s}));i.displayName="Button"},1021:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(326),r=s(7577);let i=s.n(r)().forwardRef(({className:e="",...t},s)=>a.jsx("div",{ref:s,className:`bg-surface-raised border border-border rounded-2xl shadow-[0_1px_4px_rgba(0,0,0,0.04)] overflow-hidden ${e}`,...t}));i.displayName="Card"},7728:(e,t,s)=>{"use strict";s.d(t,{H:()=>n,h:()=>d});var a=s(9642),r=s(7296);async function i(e,t){let s=document.createElement("iframe");s.style.position="fixed",s.style.left="-9999px",s.style.top="0",s.style.width="794px",s.style.height="1123px",s.style.border="none",document.body.appendChild(s);let i=s.contentDocument||s.contentWindow?.document;if(!i){document.body.removeChild(s);return}i.open(),i.write(e),i.close(),await new Promise(e=>setTimeout(e,300));let l=await (0,a.default)(i.body,{scale:2,useCORS:!0,width:794,windowWidth:794});document.body.removeChild(s);let d=l.toDataURL("image/png"),n=new r.ZP("p","mm","a4"),o=n.internal.pageSize.getWidth(),c=l.height*o/l.width;n.addImage(d,"PNG",0,0,o,c),n.save(t)}let l=`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; color: #1a1a2e; padding: 40px; line-height: 1.6; }
  h1 { font-size: 22px; font-weight: 700; margin-bottom: 4px; }
  h2 { font-size: 16px; font-weight: 600; color: #5b3cc4; margin-bottom: 12px; border-bottom: 2px solid #ece8fc; padding-bottom: 6px; }
  .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 28px; padding-bottom: 16px; border-bottom: 1px solid #e5e5e5; }
  .header-left .sub { color: #666; font-size: 13px; }
  .match-badge { text-align: center; background: #ece8fc; border-radius: 12px; padding: 14px 20px; }
  .match-badge .value { font-size: 32px; font-weight: 800; color: #5b3cc4; }
  .match-badge .label { font-size: 11px; color: #5b3cc4; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }
  .section { margin-bottom: 24px; }
  .interpretation { font-size: 14px; color: #444; margin-bottom: 24px; background: #f9f9fb; padding: 14px 16px; border-radius: 8px; border-left: 3px solid #5b3cc4; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .list-item { margin-bottom: 10px; padding-left: 16px; position: relative; font-size: 13px; }
  .list-item::before { content: ''; position: absolute; left: 0; top: 7px; width: 6px; height: 6px; border-radius: 50%; }
  .strength .list-item::before { background: #10b981; }
  .gap .list-item::before { background: #f43f5e; }
  .list-item strong { display: block; color: #1a1a2e; font-size: 13px; }
  .list-item span { color: #666; font-size: 12px; }
  .severity { display: inline-block; font-size: 10px; padding: 1px 6px; border-radius: 4px; font-weight: 600; text-transform: uppercase; margin-left: 6px; }
  .severity-high { background: #fde8e8; color: #c53030; }
  .severity-medium { background: #fef3c7; color: #b45309; }
  .severity-low { background: #e8f5e9; color: #2e7d32; }
  .vitals-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
  .vital { font-size: 12px; padding: 8px 12px; border-radius: 8px; border: 1px solid #e5e5e5; }
  .vital .name { font-weight: 600; margin-bottom: 2px; }
  .vital .bar { height: 4px; background: #eee; border-radius: 2px; margin-top: 4px; }
  .vital .bar-fill { height: 100%; border-radius: 2px; }
  .bar-strong { background: #5b3cc4; }
  .bar-transferable { background: #0ea5e9; }
  .bar-gap { background: #f43f5e; }
  .footer { margin-top: 32px; padding-top: 12px; border-top: 1px solid #e5e5e5; font-size: 11px; color: #999; text-align: center; }
  @media print { body { padding: 20px; } }
`;async function d(e,t,s){let a=s.strengths.map(e=>`<div class="list-item"><strong>${e.title}</strong><span>${e.detail}</span></div>`).join(""),r=s.gaps.map(e=>`<div class="list-item"><strong>${e.title}<span class="severity severity-${e.severity}">${e.severity}</span></strong><span>${e.detail}</span></div>`).join(""),d=s.skillVitals.map(e=>`<div class="vital"><div class="name">${e.name} — ${e.score}%</div><div class="bar"><div class="bar-fill bar-${e.status}" style="width:${e.score}%"></div></div></div>`).join(""),n=`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${e.name} — Career Diagnostic</title><style>${l}</style></head><body>
    <div class="header">
      <div class="header-left">
        <h1>${e.name}</h1>
        <div class="sub">${"se"===t?"Software Engineering":"cyber"===t?"Cybersecurity":"Data Science"} Track • Career Interpreter AI</div>
      </div>
      <div class="match-badge">
        <div class="value">${s.matchPercentage}%</div>
        <div class="label">${s.readinessLevel}</div>
      </div>
    </div>

    <div class="interpretation">${s.interpretation}</div>

    <div class="grid">
      <div class="section strength">
        <h2>Strengths</h2>
        ${a}
      </div>
      <div class="section gap">
        <h2>Gaps</h2>
        ${r}
      </div>
    </div>

    <div class="section">
      <h2>Skill Vitals</h2>
      <div class="vitals-grid">${d}</div>
    </div>

    <div class="footer">Generated by Career Interpreter AI • ${new Date().toLocaleDateString()}</div>
  </body></html>`;await i(n,`${e.name}_Career_Diagnostic.pdf`)}async function n(e,t){let s=t.strengths.map(e=>`<div class="list-item"><strong>${e.title}</strong><span>${e.detail}</span></div>`).join(""),a=t.gaps.map(e=>`<div class="list-item"><strong>${e.title}<span class="severity severity-${e.severity}">${e.severity}</span></strong><span>${e.detail}</span></div>`).join(""),r=t.skillVitals.map(e=>`<div class="vital"><div class="name">${e.name} — ${e.score}%</div><div class="bar"><div class="bar-fill bar-${e.status}" style="width:${e.score}%"></div></div></div>`).join(""),d=`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${e.name} — HR Diagnostic</title><style>${l}</style></head><body>
    <div class="header">
      <div class="header-left">
        <h1>${e.name}</h1>
        <div class="sub">HR Candidate Analysis • Career Interpreter AI</div>
      </div>
      <div class="match-badge">
        <div class="value">${t.matchPercentage}%</div>
        <div class="label">${t.readinessLevel}</div>
      </div>
    </div>

    <div class="section">
      <h2>About the Candidate</h2>
      <div class="interpretation">${t.aboutCandidate}</div>
    </div>

    <div class="grid">
      <div class="section strength">
        <h2>Strengths</h2>
        ${s}
      </div>
      <div class="section gap">
        <h2>Gaps</h2>
        ${a}
      </div>
    </div>

    <div class="section">
      <h2>Skill Vitals</h2>
      <div class="vitals-grid">${r}</div>
    </div>

    <div class="footer">Generated by Career Interpreter AI • ${new Date().toLocaleDateString()}</div>
  </body></html>`;await i(d,`${e.name}_HR_Diagnostic.pdf`)}},6159:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m,metadata:()=>x});var a=s(9510),r=s(8798),i=s.n(r),l=s(5100),d=s.n(l);s(7272),s(1159);var n=s(7371);let o=()=>a.jsx("nav",{className:"border-b border-border bg-surface-raised sticky top-0 z-50",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"flex justify-between h-16 items-center",children:[(0,a.jsxs)(n.default,{href:"/",className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-8 h-8 rounded bg-brand-purple flex items-center justify-center text-white font-bold font-sora",children:"CI"}),(0,a.jsxs)("span",{className:"font-sora font-semibold text-lg text-text-primary",children:["Career Interpreter ",a.jsx("span",{className:"text-brand-purple",children:"AI"})]})]}),a.jsx("div",{className:"flex gap-4",children:a.jsx(n.default,{href:"/about",className:"text-text-secondary hover:text-brand-purple transition-colors font-medium text-sm",children:"How it works?"})})]})})}),c=()=>a.jsx("footer",{className:"border-t border-border bg-surface mt-auto",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:a.jsx("div",{className:"flex justify-center items-center gap-4",children:(0,a.jsxs)("p",{className:"text-text-secondary text-sm",children:["\xa9 ",new Date().getFullYear()," Bounty Hunters. Built for the MENA Tech Community."]})})})}),x={title:"Career Interpreter AI",description:"Your career diagnosis in 30 seconds. Powered by AI."};function m({children:e}){return a.jsx("html",{lang:"en",children:(0,a.jsxs)("body",{className:`${i().variable} ${d().variable} font-sans min-h-screen flex flex-col`,children:[a.jsx(o,{}),a.jsx("main",{className:"flex-1 flex flex-col",children:e}),a.jsx(c,{})]})})}},7272:()=>{}};