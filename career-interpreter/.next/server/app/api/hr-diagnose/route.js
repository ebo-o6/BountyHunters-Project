(()=>{var e={};e.id=93,e.ids=[93],e.modules={2261:(e,t,r)=>{var i={"./v1.10.100/build/pdf.js":4417,"./v1.10.88/build/pdf.js":2350,"./v1.9.426/build/pdf.js":7344,"./v2.0.550/build/pdf.js":5630};function n(e){return r(a(e))}function a(e){if(!r.o(i,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=a,e.exports=n,n.id=2261},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},2307:(e,t,r)=>{"use strict";r.r(t),r.d(t,{originalPathname:()=>y,patchFetch:()=>b,requestAsyncStorage:()=>g,routeModule:()=>m,serverHooks:()=>f,staticGenerationAsyncStorage:()=>h});var i={};r.r(i),r.d(i,{POST:()=>u});var n=r(9303),a=r(8716),s=r(3131),o=r(7070),l=r(3357),c=r.n(l),d=r(6945),p=r(2223);async function u(e){try{let t=await e.formData(),r=t.get("cv"),i=t.get("job");if(!r||!i)return o.NextResponse.json({error:"Both CV and Job Posting files are required"},{status:400});let n=Buffer.from(await r.arrayBuffer()),a=(await c()(n)).text;if(!a||a.trim().length<50)return o.NextResponse.json({error:"Could not extract text from CV PDF"},{status:400});let s=Buffer.from(await i.arrayBuffer()),l=(await c()(s)).text;if(!l||l.trim().length<50)return o.NextResponse.json({error:"Could not extract text from Job PDF"},{status:400});let u=(0,p.sK)(a),m=await (0,d.AW)(u),g=(0,p.cn)(m,l),h=await (0,d.AW)(g);return o.NextResponse.json({cv:m,jobText:l,diagnostic:h})}catch(e){return console.error("HR Diagnose error:",e),o.NextResponse.json({error:"Failed to generate HR diagnostic"},{status:500})}}let m=new n.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/hr-diagnose/route",pathname:"/api/hr-diagnose",filename:"route",bundlePath:"app/api/hr-diagnose/route"},resolvedPagePath:"/home/ebo_o6/Documents/GitHub/career-interpreter/app/api/hr-diagnose/route.ts",nextConfigOutput:"standalone",userland:i}),{requestAsyncStorage:g,staticGenerationAsyncStorage:h,serverHooks:f}=m,y="/api/hr-diagnose/route";function b(){return(0,s.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:h})}},6945:(e,t,r)=>{"use strict";r.d(t,{AW:()=>o,OC:()=>s});let i=new(r(1258)).$D(process.env.GEMINI_API_KEY),n=i.getGenerativeModel({model:"gemini-2.5-flash"}),a=i.getGenerativeModel({model:"gemini-embedding-2"});async function s(e){return(await a.embedContent(e)).embedding.values}async function o(e){return JSON.parse((await n.generateContent({contents:[{role:"user",parts:[{text:e}]}],generationConfig:{responseMimeType:"application/json"}})).response.text())}},2223:(e,t,r)=>{"use strict";function i(e){return`
You are a CV parsing engine. Extract structured information from the following CV text.

Return ONLY a valid JSON object with this exact structure. No markdown, no explanation, just JSON:

{
  "name": "string",
  "email": "string or null",
  "phone": "string or null",
  "location": "string or null",
  "summary": "2-3 sentence professional summary",
  "skills": ["array", "of", "technical", "skills"],
  "experience": [
    {
      "title": "Job title",
      "company": "Company name",
      "duration": "e.g. 2022–2024",
      "description": "What they did"
    }
  ],
  "education": [
    {
      "degree": "Degree name",
      "institution": "University name",
      "year": "Graduation year or Expected year"
    }
  ],
  "projects": [
    {
      "name": "Project name",
      "description": "What it does",
      "technologies": ["tech1", "tech2"]
    }
  ]
}

CV TEXT:
${e}
`}function n(e,t,r){let i=JSON.stringify({skills:e.skills,experience:e.experience.map(e=>({title:e.title,description:e.description})),projects:e.projects.map(e=>({name:e.name,technologies:e.technologies})),education:e.education},null,2),n=t.slice(0,15).map(e=>({title:e.title,skills:e.skills?.slice(0,10),requirements:e.requirements?.slice(0,5),role_category:e.role_category,matchScore:e.matchScore}));return`
You are a career advisor specializing in the Jordanian tech job market. Analyze this student's CV against the top matching local job postings and generate a detailed diagnostic report.

STUDENT CV:
${i}

TARGET TRACK: ${"se"===r?"Software Engineering":"cyber"===r?"Cybersecurity":"Data Science"}

CANDIDATE LEVEL: ${0===e.experience.length?"Student / No experience":e.experience.length<=2?"Junior (0-2 years)":"Mid-level (2+ years)"}. Calibrate scoring expectations to this level — a junior should be compared against junior role requirements, not senior ones.

TOP MATCHING JOBS FROM JORDAN MARKET:
${JSON.stringify(n,null,2)}

IMPORTANT CONTEXT ABOUT JORDAN TECH MARKET:
- Most companies hiring in Jordan: Optimiza, Aspire, Tarjama&, MedNet Jordan, Lucidya
- Banking/fintech employers require SQL and Oracle knowledge
- Many local companies use .NET, Oracle APEX, or Salesforce (Apex) 
- Edraak (edraak.org) is the main Arabic free learning platform for local students
- Al-Albayt, Jordan University, PSUT, and GJU are the main universities
- Remote work is increasingly common for Jordan-based developers
- Internship hubs: Optimiza, Aspire, Tarjama& all hire interns

Return ONLY a valid JSON object with this exact structure. No markdown, no explanation, just JSON:

{
  "matchPercentage": <integer 0-100>,
  "readinessLevel": <"Critical" | "Improving" | "Career-Ready">,
  "yearsToReady": <integer 1-5>,
  "interpretation": "<2 sentences explaining the result in plain language a student understands>",
  "topSkillToLearn": "<single most impactful skill to add right now given the Jordan market>",
  "hiddenAdvantage": "<one underrated strength in their CV worth amplifying>",
  "firstMoveThisWeek": "<one specific concrete action they can take in the next 7 days>",
  "strengths": [
    {
      "title": "<strength name>",
      "detail": "<why this matters, which local jobs it matches>",
      "relatedJobs": ["<job title 1>", "<job title 2>"]
    }
  ],
  "gaps": [
    {
      "title": "<missing skill or experience>",
      "detail": "<plain language explanation of why it matters and how many local jobs require it>",
      "severity": <"high" | "medium" | "low">
    }
  ],
  "skillVitals": [
    {
      "name": "<skill name>",
      "score": <integer 0-100>,
      "status": <"strong" | "transferable" | "gap">
    }
  ],
  "actionPlan": [
    {
      "step": <1-6>,
      "title": "<short action title>",
      "description": "<what to do and why>",
      "resource": "<specific course, tool, or company name — prefer Edraak for free Arabic content, or a local company for internships>",
      "resourceUrl": "<url if known, else null>",
      "estimatedTime": "<e.g. '2 weekends' or '1 month'>"
    }
  ],
  "bestFitRoles": [
    {
      "title": "<job title>",
      "company": "<company name or null>",
      "matchScore": <integer 0-100>,
      "badge": <"best_match" | "stepping_stone" | "reach">,
      "matchedSkills": ["<skill1>", "<skill2>"],
      "missingSkills": ["<skill1>", "<skill2>"],
      "jobId": "<jobId from the job data>"
    }
  ]
}

Rules:
- Always provide exactly 3 strengths, 3 gaps, 6-9 skillVitals, 6 action plan steps, 3 bestFitRoles
- Be specific to Jordan market — mention local companies and Edraak by name
- Explain gaps in plain language, never use jargon like "semantic similarity"
- Action plan resources must be real and locally relevant
- IMPORTANT: The job data includes postings from Jordan, Saudi Arabia, UAE, and Egypt. 
  Prioritize Jordan-based jobs in your analysis. For bestFitRoles, prefer Jordan jobs 
  first, then other Arab market jobs as they are still regionally relevant.
- When referencing companies in the action plan, mention Jordan-based employers 
  (Optimiza, Aspire, Tarjama&, MedNet, Lucidya).
  
SCORING RULES for matchPercentage — read carefully:
- Do NOT do strict keyword matching. "Built a login system" matches "authentication 
  experience". A C# game developer has OOP foundations relevant to .NET roles.
- Think like a hiring manager, not a keyword scanner.
- Scoring scale:
  * 70–100%: Has most required skills + some experience. Interview-ready for junior/mid roles.
  * 50–69%: Solid foundation, missing 2–3 key skills. Strong junior candidate.
  * 35–49%: Transferable skills and real projects but clear gaps. Improving.
  * 20–34%: Early stage, limited overlap. Needs focused learning.
  * Below 20%: Almost no relevant skills. Reserve for complete career changers only.
- A fresh graduate with real shipped projects should never score below 35%.
- Transferable skills count: leadership, teamwork, published apps, shipped products.
- Projects and published work = equivalent to 1 year of junior experience.
- Missing enterprise tools (Docker, CI/CD) should NOT tank the score — those are 
  learnable. Core technical skills are what determine the percentage.
`}function a(e,t){let r=JSON.stringify({skills:e.skills,experience:e.experience.map(e=>({title:e.title,description:e.description})),projects:e.projects.map(e=>({name:e.name,technologies:e.technologies})),education:e.education},null,2);return`
You are an expert HR recruiter and technical sourcer. Analyze this candidate's CV against the specific job posting provided and generate a detailed HR diagnostic report.

CANDIDATE CV:
${r}

JOB POSTING:
${t}

Return ONLY a valid JSON object with this exact structure. No markdown, no explanation, just JSON:

{
  "matchPercentage": <integer 0-100>,
  "readinessLevel": <"Critical" | "Improving" | "Career-Ready">,
  "aboutCandidate": "<A 3-4 sentence professؤؤional summary of the candidate's profile, highlighting their most relevant experience and skills in relation to this specific job.>",
  "strengths": [
    {
      "title": "<strength name>",
      "detail": "<why this matters for the job>",
      "relatedJobs": [] 
    }
  ],
  "gaps": [
    {
      "title": "<missing skill or experience>",
      "detail": "<explanation of why it matters for the job>",
      "severity": <"high" | "medium" | "low">
    }
  ],
  "skillVitals": [
    {
      "name": "<skill from job posting>",
      "score": <integer 0-100>,
      "status": <"strong" | "transferable" | "gap">
    }
  ]
}

Rules:
- Provide exactly 3 strengths, 3 gaps, and 6-9 skillVitals based on the skills required in the job posting.
- "relatedJobs" inside strengths should be an empty array [].
- Be objective and specific. Focus on concrete skills and experience matches/mismatches.
`}r.d(t,{bf:()=>n,cn:()=>a,sK:()=>i})}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[948,972,258,263],()=>r(2307));module.exports=i})();