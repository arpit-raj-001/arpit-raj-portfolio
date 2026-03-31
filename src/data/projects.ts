export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  domain: "Web Dev" | "Machine Learning" | "Data Analytics";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  status: "Completed" | "Ongoing";
  github: string;
  live?: string;
  featured: boolean;
  problem: string;
  features: string[];
  learned: string;
}

export const projectsData: Project[] = [
  // ==========================================
  // WEB DEVELOPMENT (8)
  // ==========================================
  {
    id: "web-devconnect",
    title: "DevConnect",
    description: "A developer-focused social platform to share posts, connect, and showcase profiles.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    domain: "Web Dev",
    difficulty: "Advanced",
    status: "Completed",
    github: "#",
    featured: false,
    problem: "Fragmented developer networking platforms",
    features: [
      "User authentication & profiles",
      "Post creation & feed system",
      "Like/comment functionality"
    ],
    learned: "Scalable backend design, auth flows, REST APIs"
  },
  {
    id: "web-codecollab",
    title: "CodeCollab",
    description: "A real-time collaborative code editor for multiple users.",
    tech: ["React", "Node.js", "WebSockets"],
    domain: "Web Dev",
    difficulty: "Advanced",
    status: "Completed",
    github: "#",
    featured: false,
    problem: "Lack of seamless real-time coding collaboration",
    features: [
      "Live multi-user editing",
      "Syntax highlighting",
      "Room-based sessions"
    ],
    learned: "WebSockets, real-time sync challenges"
  },
  {
    id: "web-smartportfolio",
    title: "SmartPortfolio Builder",
    description: "Generates developer portfolios dynamically using templates.",
    tech: ["React", "Firebase"],
    domain: "Web Dev",
    difficulty: "Intermediate",
    status: "Ongoing",
    github: "#",
    featured: false,
    problem: "Time-consuming portfolio creation",
    features: [
      "Theme switching",
      "Dynamic content generation",
      "Live preview"
    ],
    learned: "Component reusability, dynamic rendering"
  },
  {
    id: "web-airesume",
    title: "AI Resume Analyzer",
    description: "Analyzes resumes and provides structured insights using AI.",
    tech: ["React", "Node.js", "OpenAI API"],
    domain: "Web Dev",
    difficulty: "Advanced",
    status: "Completed",
    github: "#",
    featured: true, // ⭐ Featured
    problem: "Lack of specific, actionable feedback on resumes",
    features: [
      "Resume parsing",
      "Skill extraction",
      "AI-based suggestions"
    ],
    learned: "API integration, prompt design"
  },
  {
    id: "web-taskflow",
    title: "TaskFlow",
    description: "A kanban-style task manager for productivity.",
    tech: ["React", "Redux"],
    domain: "Web Dev",
    difficulty: "Intermediate",
    status: "Completed",
    github: "#",
    featured: false,
    problem: "Poor task organization and tracking",
    features: [
      "Drag & drop tasks",
      "Status tracking",
      "Persistent state"
    ],
    learned: "State management, UI/UX flows"
  },
  {
    id: "web-shopsphere",
    title: "ShopSphere",
    description: "Full-stack e-commerce platform with cart & checkout.",
    tech: ["MERN Stack"],
    domain: "Web Dev",
    difficulty: "Advanced",
    status: "Completed",
    github: "#",
    featured: false,
    problem: "Understanding full-stack commerce systems",
    features: [
      "Product catalog",
      "Cart & payment flow",
      "Admin dashboard"
    ],
    learned: "Full-stack architecture"
  },
  {
    id: "web-linkvault",
    title: "LinkVault",
    description: "Organize and manage useful links in one place.",
    tech: ["Next.js", "MongoDB"],
    domain: "Web Dev",
    difficulty: "Intermediate",
    status: "Completed",
    github: "#",
    featured: false,
    problem: "Scattered saved resources and links across browsers",
    features: [
      "Tag-based organization",
      "Search functionality",
      "Bookmark system"
    ],
    learned: "SSR, database structuring"
  },
  {
    id: "web-livepoll",
    title: "LivePoll",
    description: "Real-time polling system with instant updates.",
    tech: ["React", "Socket.io"],
    domain: "Web Dev",
    difficulty: "Intermediate",
    status: "Completed",
    github: "#",
    featured: false,
    problem: "Delayed survey and polling systems",
    features: [
      "Live vote updates",
      "Poll creation",
      "Result visualization"
    ],
    learned: "Event-driven systems"
  },

  // ==========================================
  // MACHINE LEARNING (7)
  // ==========================================
  {
    id: "ml-hiresense",
    title: "HireSense",
    description: "Ranks resumes based on job descriptions using ML.",
    tech: ["Python", "Scikit-learn"],
    domain: "Machine Learning",
    difficulty: "Advanced",
    status: "Completed",
    github: "#",
    featured: true, // ⭐ Featured
    problem: "Manual resume screening inefficiency",
    features: [
      "Resume scoring",
      "Keyword extraction",
      "Ranking system"
    ],
    learned: "Feature engineering, model evaluation"
  },
  {
    id: "ml-movierec",
    title: "Movie Recommender System",
    description: "Suggests movies based on user preferences.",
    tech: ["Python", "Pandas"],
    domain: "Machine Learning",
    difficulty: "Intermediate",
    status: "Completed",
    github: "#",
    featured: false,
    problem: "Content discovery problem on streaming platforms",
    features: [
      "Collaborative filtering",
      "Content-based filtering"
    ],
    learned: "Recommendation systems engineering"
  },
  {
    id: "ml-stockpred",
    title: "Stock Price Predictor",
    description: "Predicts stock trends using time series data.",
    tech: ["TensorFlow", "LSTM"],
    domain: "Machine Learning",
    difficulty: "Advanced",
    status: "Ongoing",
    github: "#",
    featured: false,
    problem: "Market trend prediction in volatile environments",
    features: [
      "Time series modeling",
      "Visualization of predictions"
    ],
    learned: "Deep learning basics, sequence modeling"
  },
  {
    id: "ml-spamclassifier",
    title: "Spam Email Classifier",
    description: "Classifies emails as spam or not using NLP.",
    tech: ["Python", "NLP"],
    domain: "Machine Learning",
    difficulty: "Beginner",
    status: "Completed",
    github: "#",
    featured: false,
    problem: "Email filtering and inbox management",
    features: [
      "Text preprocessing",
      "Classification models"
    ],
    learned: "NLP pipelines, TF-IDF"
  },
  {
    id: "ml-facemask",
    title: "Face Mask Detector",
    description: "Detects mask usage using webcam.",
    tech: ["OpenCV", "CNN"],
    domain: "Machine Learning",
    difficulty: "Intermediate",
    status: "Completed",
    github: "#",
    featured: false,
    problem: "Safety compliance monitoring in public areas",
    features: [
      "Real-time detection",
      "Image classification"
    ],
    learned: "Computer vision basics, neural networks"
  },
  {
    id: "ml-chatbot",
    title: "Chatbot Assistant",
    description: "Context-aware chatbot for natural conversations.",
    tech: ["Python", "NLP"],
    domain: "Machine Learning",
    difficulty: "Intermediate",
    status: "Completed",
    github: "#",
    featured: false,
    problem: "Automated interaction for customer support",
    features: [
      "Intent recognition",
      "Response generation"
    ],
    learned: "Conversational AI concepts"
  },
  {
    id: "ml-churn",
    title: "Customer Churn Predictor",
    description: "Predicts which users may leave a service.",
    tech: ["Python", "ML models"],
    domain: "Machine Learning",
    difficulty: "Intermediate",
    status: "Completed",
    github: "#",
    featured: false,
    problem: "Customer retention and proactive engagement",
    features: [
      "Predictive modeling",
      "Data analysis"
    ],
    learned: "Business ML applications"
  },

  // ==========================================
  // DATA ANALYTICS (7)
  // ==========================================
  {
    id: "data-salesinsights",
    title: "Sales Insights Dashboard",
    description: "Interactive dashboard for business insights.",
    tech: ["Power BI", "React Charts"],
    domain: "Data Analytics",
    difficulty: "Advanced",
    status: "Completed",
    github: "#",
    featured: true, // ⭐ Featured
    problem: "Lack of data-driven decisions and visibility",
    features: [
      "KPI tracking",
      "Interactive charts"
    ],
    learned: "Data storytelling, business intelligence"
  },
  {
    id: "data-covidtracker",
    title: "COVID Data Tracker",
    description: "Visualizes global COVID trends.",
    tech: ["Python", "Matplotlib"],
    domain: "Data Analytics",
    difficulty: "Beginner",
    status: "Completed",
    github: "#",
    featured: false,
    problem: "Data awareness and pandemic tracking",
    features: [
      "Trend graphs",
      "Region-based data"
    ],
    learned: "Data visualization libraries"
  },
  {
    id: "data-ipl",
    title: "IPL Data Analysis",
    description: "Analyzes IPL match statistics.",
    tech: ["Pandas"],
    domain: "Data Analytics",
    difficulty: "Intermediate",
    status: "Completed",
    github: "#",
    featured: false,
    problem: "Extracting sports insights from raw datasets",
    features: [
      "Player stats",
      "Match trends"
    ],
    learned: "Data wrangling, cleaning"
  },
  {
    id: "data-netflix",
    title: "Netflix Data Explorer",
    description: "Explores Netflix content trends.",
    tech: ["Python"],
    domain: "Data Analytics",
    difficulty: "Beginner",
    status: "Completed",
    github: "#",
    featured: false,
    problem: "Content analysis and viewing trends",
    features: [
      "Genre trends",
      "Year-wise analysis"
    ],
    learned: "Exploratory data analysis (EDA)"
  },
  {
    id: "data-financialrisk",
    title: "Financial Risk Analyzer",
    description: "Analyzes financial risk levels based on market indicators.",
    tech: ["Python"],
    domain: "Data Analytics",
    difficulty: "Advanced",
    status: "Completed",
    github: "#",
    featured: false,
    problem: "Risk assessment in quantitative trading",
    features: [
      "Risk scoring",
      "Data modeling"
    ],
    learned: "Quantitative analysis, statistics"
  },
  {
    id: "data-webtraffic",
    title: "Website Traffic Analyzer",
    description: "Analyzes user behavior on websites.",
    tech: ["Google Analytics API"],
    domain: "Data Analytics",
    difficulty: "Intermediate",
    status: "Ongoing",
    github: "#",
    featured: false,
    problem: "UX optimization and conversion rate issues",
    features: [
      "Traffic insights",
      "User flow analysis"
    ],
    learned: "Analytics integration, metrics"
  },
  {
    id: "data-abtesting",
    title: "A/B Testing Analyzer",
    description: "Compares two variants statistically.",
    tech: ["Python", "Statistics"],
    domain: "Data Analytics",
    difficulty: "Advanced",
    status: "Completed",
    github: "#",
    featured: false,
    problem: "Data-backed decision making over gut feeling",
    features: [
      "Hypothesis testing",
      "Statistical comparison"
    ],
    learned: "Statistical reasoning, p-values"
  }
];
