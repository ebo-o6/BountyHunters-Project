"use strict";(()=>{var e={};e.id=141,e.ids=[141],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},83:(e,t,i)=>{i.r(t),i.d(t,{originalPathname:()=>h,patchFetch:()=>y,requestAsyncStorage:()=>u,routeModule:()=>p,serverHooks:()=>g,staticGenerationAsyncStorage:()=>m});var a={};i.r(a),i.d(a,{POST:()=>d});var n=i(9303),r=i(8716),s=i(3131),o=i(7070),l=i(6945),c=i(2223);async function d(e){try{let{cv:t,topJobs:i,track:a}=await e.json(),n=(0,c.bf)(t,i,a),r=await (0,l.AW)(n);return o.NextResponse.json({diagnostic:r})}catch(e){return console.error("Diagnostic error:",e),o.NextResponse.json({error:"Failed to generate diagnostic"},{status:500})}}let p=new n.AppRouteRouteModule({definition:{kind:r.x.APP_ROUTE,page:"/api/diagnose/route",pathname:"/api/diagnose",filename:"route",bundlePath:"app/api/diagnose/route"},resolvedPagePath:"/home/ebo_o6/Documents/GitHub/career-interpreter/app/api/diagnose/route.ts",nextConfigOutput:"standalone",userland:a}),{requestAsyncStorage:u,staticGenerationAsyncStorage:m,serverHooks:g}=p,h="/api/diagnose/route";function y(){return(0,s.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:m})}},6945:(e,t,i)=>{i.d(t,{AW:()=>o,OC:()=>s});let a=new(i(1258)).$D(process.env.GEMINI_API_KEY),n=a.getGenerativeModel({model:"gemini-2.5-flash"}),r=a.getGenerativeModel({model:"gemini-embedding-2"});async function s(e){return(await r.embedContent(e)).embedding.values}async function o(e){return JSON.parse((await n.generateContent({contents:[{role:"user",parts:[{text:e}]}],generationConfig:{responseMimeType:"application/json"}})).response.text())}},2223:(e,t,i)=>{function a(e){return`
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
`}function n(e,t,i){let a=JSON.stringify({skills:e.skills,experience:e.experience.map(e=>({title:e.title,description:e.description})),projects:e.projects.map(e=>({name:e.name,technologies:e.technologies})),education:e.education},null,2),n=t.slice(0,15).map(e=>({title:e.title,skills:e.skills?.slice(0,10),requirements:e.requirements?.slice(0,5),role_category:e.role_category,matchScore:e.matchScore}));return`
You are a career advisor specializing in the Jordanian tech job market. Analyze this student's CV against the top matching local job postings and generate a detailed diagnostic report.

STUDENT CV:
${a}

TARGET TRACK: ${"se"===i?"Software Engineering":"cyber"===i?"Cybersecurity":"Data Science"}

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
`}function r(e,t){let i=JSON.stringify({skills:e.skills,experience:e.experience.map(e=>({title:e.title,description:e.description})),projects:e.projects.map(e=>({name:e.name,technologies:e.technologies})),education:e.education},null,2);return`
You are an expert HR recruiter and technical sourcer. Analyze this candidate's CV against the specific job posting provided and generate a detailed HR diagnostic report.

CANDIDATE CV:
${i}

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
`}i.d(t,{bf:()=>n,cn:()=>r,sK:()=>a})}};var t=require("../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),a=t.X(0,[948,972,258],()=>i(83));module.exports=a})();