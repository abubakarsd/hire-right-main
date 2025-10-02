// import PeopleManagement from "@/components/services/PeopleManagement";

export type Job = {
  id: string;
  company: string;
  role: string;
  about: string;
  location: string;
  mode: "On-site" | "Hybrid" | "Remote";
  type: "Full time" | "Part time" | "Contract";
  salary: string;
  link: string;
  duties: string[];
  requirements: string[];
  posted: string;        // e.g. "27/07/2025"
  logo: string;  
  locate:string
  calendar:string  
  locatebar:string
       // /public path (optional)
};


export const jobs: Job[] = [
  {
    id: "g-1",
    company: "Google",
    role: "Social media manager",
    requirements: [
    "Experience managing social media in crypto/fintech/tech",
    "Strong knowledge of blockchain, Web3, NFTs & DeFi",
    "Skilled in copywriting, storytelling & content creation",
    "Proficient with Hootsuite, Buffer, Notion, Canva & analytics tools",
    "Familiar with crypto community tone & culture (memes, alpha, FUD)",
    "Thrives in fast-paced, remote-first environments"
  ],
    about:
      "Building brands and engaging communities through digital storytelling.",
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "#400,000-#500,000",
    duties: ["Content creation", "Community engagement", "Analytics tracking", "Campaign management", "& more"]
,
    posted: "27/07/2025",
    logo: "/jobopening/google.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
  },
  {
    id: "g-2",
    company: "Google",
    role: "Hr Manager",
    requirements: [
      "Bachelor's in HR, Business Admin or related field (HR certification a plus)",
      "4-6yrs HR  experience; 2+yrs in supervisory/managerial role",
    "Strong knowledge of Nigerian labor laws,Hr practices & compliance ",
      "Experience setting up HR systems during organizational restructuring",
      "Excellent leadership communications & conflict resolution skills",
      
    ],
    about:
      "Driving people strategy and fostering a thriving workplace culture.",
    location: " Ajao Estate, Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "#3,000,000-#3,600,000",
    duties:["Recruitment & onboarding", "Employee relations", "Performance management", "Policy development", "& more"],
    posted: "27/07/2025",
    logo: "/jobopening/google.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
  },
  {
    id: "g-3",
    company: "Google",
    role: "Restaurant Manager",
    requirements: [
   "HND/BSc in Hospitality ,Business Admin , or related field ",
  "3-5 yrs in restaurant/hospitality management",
  "Strong leadership ,team management & interpersonal skills",
  "Excellent customer service & problem -solving abilities",
  "Knowledge of POS & restaurant software",
  "Strong organizational & multiasking skills ",
  "Flexible to work evenings , weekends & holidays "
    ],
    about:
      "Delivering seamless dining experiences with operational excellence.",
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties:["Daily operations supervision", "Customer service", "Staff scheduling", "Inventory management", "& more"]
,
    posted: "27/07/2025",
    logo: "/jobopening/google.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/location.png",
    link:"https://bit/hirerightrecruitment",
  },
   {
    id: "g-3",
    company: "Google",
    role: "Sales Representative-Fashion",
    requirements: [
      "HND/BSc in any field (fashion retail experience a plus )",
      "1-2yrs in retail sales, preferably fashion",
      "Knowledge of fashion trends, fabrics & garment care"

    ],
    about:
      "Connecting style with customers through tailored sales solutions..",
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties: ["Client engagement", "Sales conversion", "Fashion advisory", "Relationship building", "& more"],
    posted: "27/07/2025",
    logo: "/jobopening/google.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment"
  },
   {
    id: "g-3",
    company: "Google",
    role: "Head, CASA Business Segment",
    about:
      "Leading growth in current and savings account portfolios.",
      requirements: [
        "bachelor's in Banking, Finance, Business",
        "Admin or related field (MBA/ICAN/ACCA a plus)",
        "8-10yrs in retail banking/deposit mobilization ;5+ yrs in leadership ",
        "Expertise in digital banking , customer lifecycle & retail strategy execution ",
        "Strong analytical strategic  planning & cross-functional collaboration skills ",
        "Excellent communication , leadership & results-driven mindset"

      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties: ["Account acquisition", "Product strategy", "Customer retention", "Campaign execution", "& more"]
,
    posted: "27/07/2025",
    logo: "/jobopening/google.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment"
    
  },


    {
    id: "g-3",
    company: "Google",
    role: "Head, Salary Business Segment",
    about:
      "Driving salary-based banking products and client satisfaction.",
      requirements: [
        "Bachelor's in Banking ,Finance, or related field (Master's preferred )",
        "10+yrs in retail banking /salary processing /product mgmt; 5+ yrs in leadership",
        "Strong knowledge of payroll, corporate banking & lending solutions ",
        "Proven ability in customer acquisition & deposit mobilization",
        "Excellent relationship management, negotiation & leadership skills",
      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties: ["Salary account management", "Corporate partnerships", "Client retention", "Business growth", "& more"]
,
    posted: "27/07/2025",
    logo: "/jobopening/google.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment"
    
  },

      {
    id: "g-3",
    company: "Google",
    role: "Business/Operations Admin",
    about:
      "Supporting efficient workflows and daily business operations.",
      requirements: [
       "Bachelor's in Business Admin Management, Finance, or related field",
       " Proficient in MS Office & Google  workspace ",
       "Strong organizational & multitasking skills Excellent written & verbal communication ",
       "Independent, able to manage priorities in fast-paced settings ",
       "Experience in tech/fintech an advantage Discreet with confidential information"





      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties: ["Clerical support", "Record management", "Meeting coordination", "Process support", "& more"]
,
    posted: "27/07/2025",
    logo: "/jobopening/google.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment"
    
  },
      {
    id: "g-3",
    company: "Google",
    role: "Junior Architect",
    about:
      "Transforming creative ideas into functional architectural designs.",
      requirements: [
            "Bachelor's in Architecture or related field 1-3yrs in design or construction (intern/-full-time)",
    " Proficient in AutoCAD, SketchUp, Revit & Adobe Creative Suite",
"3D modeling experience a plus",
"Detail-oriented with strong time management",
"Excellent communication & teamwork skills",


      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "#2,400,000 Anually",
    duties: ["Clerical support", "Record management", "Meeting coordination", "Process support", "& more"]
,
    posted: "27/07/2025",
    logo: "/jobopening/google.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment"
    
  },
      {
    id: "g-3",
    company: "Google",
    role: "Head, Corporate Business Segment ",
    about:
      "Spearheading corporate partnerships and business development.",
      requirements: [
       "Bachelor's in Finance, Banking ,Business",
" Admin or related field (MBA/ICAN/ACCA a plus)",
"8-10yrs in corporate banking/business development;5+ yrs in leadership",
"Strong knowledge of corporate financial services ,credit analysis & risk",
"Excellent relationship management ,Business development & negotiation skills"


      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties:["Design assistance", "Drawing preparation", "Project modeling", "Senior support", "& more"],


    posted: "27/07/2025",
    logo: "/jobopening/google.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment"
    
  },
      {
    id: "g-3",
    company: "Google",
    role: "Assistant Engineer",
    about:
      "Designing and implementing innovative technical solutions.",
      requirements: [
       "Bachelor's in Computer Science, Engineering, or related field", 
"1-3yrs in software development or similar role ",
"Basic knowledge of frontend &backend technologies ",
"Familiar with databases, APIs &cloud applications ",
"Strong problem-solving & analytical skills "


      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "#2,400,000 - #3,000,000 Anually",
    duties: ["System design", "Implementation", "Testing & validation", "Project collaboration", "& more"],


    posted: "27/07/2025",
    logo: "/jobopening/google.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment"
    
  },
      {
    id: "g-3",
    company: "Google",
    role: "Qality Control Officer ",
    about:
      "Ensuring product excellence and compliance with standards.",
      requirements: [
      "OND in a relevant field ",
      "1-2yrs in laundry services or quality control (preferred)",
      "Knowledge of garment care, treatments & laundry chemicals on advantage ",




      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties:["Product inspection", "Standards compliance", "Issue reporting", "Process improvement", "& more"],

    posted: "27/07/2025",
    logo: "/jobopening/google.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment"
    
  },
      {
    id: "g-3",
    company: "Google",
    role: "Full Stack Engineer (Fintech",
    about:
      "Building secure, scalable fintech solutions from front to back end.",
      requirements: [
      "3+yrs in backend/software engineering ",
      "2+yrs in technical leadership/management",
      "Strong in React Native,Python/Django, Css, GCP, API development &mobile integration ",
      "Proven record delivering scalable ,secure fintech/proptech/SoaS apps ",
      "Experience Collaborating with cross-functional teams (product,marketting, finance,operations) ",




      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties: ["Frontend development", "Backend Integration", "API implementation", "Process support", "& more"],
    posted: "27/07/2025",
    logo: "/jobopening/google.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment"
    
  },
      {
    id: "g-3",
    company: "Google",
    role: "Engineering Lead",
    about:
      "Guiding teams to deliver impactful engineering solutions.",
      requirements: [
       "Bachelor's in Computer Science, Engineering, (Masters a  plus)",
"7+yrs in software development; 3+yrs in leadership",
"Skilled in backend  & frontend  (java, NET, Python, Js frameworks)",
"Expertise in architecture, APIs microservices & cloud(AWS/Azure/GCP)",
"Knowledge of financial systems, security & compliance"


      ],
    location: " Maryland Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "#4,000,000 - #4,800,000 Anually",
    duties:["Team leadership", "Project supervision", "Mentorship", "Innovation delivery", "& more"]

,
    posted: "27/07/2025",
    logo: "/jobopening/google.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment"
    
  },
      {
    id: "g-3",
    company: "Google",
    role: "Areas Sales Manager",
    about:
      "Driving regional sales performance and market growth.",
      requirements: [
       "Bachelor's in Business, Marketing or related field ",
       "4-6yrs in sales /BD (FMCG,retail or related preferred)",
       "Strong presentation , negotiation & public speaking skills",
       "Proven track record of exceeding sales targets and driving revenue growth",
       "Strong leadership, Communication & interpersonal skills"

      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "#4,800,000 - #7,200,000 Anually",
    duties:["Regional sales growth", "Team training", "Target achievement", "Market analysis", "& more"],
    posted: "27/07/2025",
    logo: "/jobopening/google.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment"
    
  },
      {
    id: "g-3",
    company: "Google",
    role: "Business/Operations Admin",
    about:
      "Supporting efficient workflows and daily business operations.",
      requirements: [
       "Bachelor's in Business Admin Management, Finance, or related field",
       " Proficient in MS Office & Google  workspace ",
       "Strong organizational & multitasking skills Excellent written & verbal communication ",
       "Independent, able to manage priorities in fast-paced settings ",
       "Experience in tech/fintech an advantage Discreet with confidential information"





      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties: ["Clerical support", "Record management", "Meeting coordination", "Process support", "& more"]
,
    posted: "27/07/2025",
    logo: "/jobopening/google.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment"
    
  },
];


