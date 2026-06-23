import { Icons } from "@/components/icons";
import { FileText } from "lucide-react";

export const projects = [
  {
    title: "Multi-User Blogging Platform",
    href: "",
    dates: "Jun 2026",
    active: true,
    description:
      "A full-stack blogging platform built with Django that enables role-based content management, rich-text publishing, secure user administration, and media-rich blog creation through a structured permission system.",
  
    features: [
      "Role-based access control with User, Editor, and Manager permissions",
      "Secure authentication and authorization using Django Auth",
      "Complete blog CRUD operations with ownership-based access restrictions",
      "Rich text blog editor powered by CKEditor 5",
      "Image upload and media management for blog content",
      "Category management with SEO-friendly slug-based URLs",
      "Profile dashboard for managing personal blogs and account information",
      "User administration panel with permission-controlled actions",
      "Automatic profile creation and management",
      "Responsive blog listing and detailed article pages",
      "Server-side validation and secure access protection",
      "Role-specific dashboards for content and user management"
    ],
  
    technologies: [
      "Python",
      "Django",
      "SQLite",
      "HTML",
      "CSS",
      "Bootstrap",
      "CKEditor 5",
      "Django Authentication",
      "Role-Based Access Control (RBAC)",
      "Media Management",
      "CRUD Operations"
    ],
  
    links: [
      {
        type: "Live Demo",
        href: "https://jatin17.pythonanywhere.com/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Github",
        href: "https://github.com/jatin-agrawal17/blog-website",
        icon: <Icons.github className="size-3" />,
      },
    ],
  
    image: "/projects/blog.png",
  },
  {
  title: "YouTube Comment Sentiment Analysis",
  href: "https://github.com/jatin-agrawal17/youtube-comment-sentiment-analysis",
  dates: "Dec 2025",
  active: false,
  description:
    "An end-to-end MLOps project that analyzes YouTube comments using machine learning and delivers real-time sentiment insights through a Chrome Extension. The system classifies comments into Positive, Neutral, and Negative sentiments while providing rich analytics and downloadable reports.",
  features: [
    "Real-time sentiment analysis of YouTube comments",
    "Chrome Extension integration for seamless YouTube experience",
    "Sentiment distribution visualization and trend analysis",
    "Word cloud generation for frequent keywords",
    "CSV and PDF report export functionality",
    "MLflow experiment tracking and Model Registry integration",
    "DVC-based data and model versioning",
    "CI/CD automation using GitHub Actions",
    "Dockerized Flask API for production inference",
    "AWS deployment"
  ],
  technologies: [
    "Python",
    "Flask",
    "Scikit-learn",
    "MLflow",
    "DVC",
    "Docker",
    "GitHub Actions",
    "AWS",
    "Chrome Extension",
    "JavaScript",
    "Pandas",
    "NLP",
    "Machine Learning",
  ],
  links: [
    {
      type: "Backend",
      href: "https://github.com/jatin-agrawal17/youtube-comment-sentiment-analysis",
      icon: <Icons.github className="size-3" />,
    },
    {
      type: "Docker",
      href: "https://hub.docker.com/r/jatinag12/plugin",
      icon: <Icons.package className="size-3" />,
    },
  ],
  image: "/projects/youtube.png",
  video: "",
},



 {
  title: "Aadhaar Enrolment Analytics Dashboard",
  href: "https://aadhar-data-dashboard-gdhaemdgkzbziopqfyvfwg.streamlit.app/",
  dates: "Jan 2026",
  active: true,
  description:
    "An interactive Streamlit analytics dashboard built for UIDAI Hackathon 2026 that transforms Aadhaar enrolment data into coverage-aware, policy-safe insights through advanced data cleaning, reporting coverage analysis, and geographic intelligence.",
  features: [
    "National, state, district, and pincode-level enrolment analytics",
    "Coverage-aware metrics to handle non-reporting days and batch uploads",
    "Interactive choropleth maps and geographical visualizations",
    "State-wise deep-dive analysis with district rankings",
    "Age-group enrolment composition and demographic insights",
    "Automated PDF report generation for policy evaluation",
    "LLM-assisted insight generation using Gemini API",
    "Transparent analytics with reporting coverage indicators",
    "Detection of reporting anomalies and geographic inconsistencies",
    "Interactive dashboard deployed on Streamlit Cloud"
  ],
  technologies: [
    "Python",
    "Streamlit",
    "Pandas",
    "Plotly",
    "GeoPandas",
    "Data Analytics",
    "Data Visualization",
    "Feature Engineering",
    "PDF Generation",
    "Gemini API",
    "Statistical Analysis",
    "Geospatial Analytics"
  ],
  links: [
    {
      type: "Live Demo",
      href: "https://aadhar-data-dashboard-gdhaemdgkzbziopqfyvfwg.streamlit.app/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Github",
      href: "https://github.com/jatin-agrawal17/Aadhar-Data-Dashboard",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/projects/hackathon.png",
  video: "",
},


{
  title: "Subscription Guardian",
  href: "https://github.com/jatin-agrawal17/subscription-tracker",
  dates: "Jun 2026",
  active: true,
  description:
    "A full-stack subscription management platform delivered through a Chrome Extension and Django REST Framework backend, enabling users to track recurring expenses, manage free trials, monitor renewals, and analyze subscription spending from a centralized dashboard.",
  features: [
    "Secure user registration and login with JWT authentication",
    "Complete subscription CRUD operations with user-specific data isolation",
    "Monthly and yearly spending analytics dashboard",
    "Upcoming renewal tracking for recurring subscriptions",
    "Free trial monitoring and expiring trial detection",
    "Category-based filtering, search, and subscription sorting",
    "Automatic service detection from active browser tabs",
    "Pre-filled subscription forms for Netflix, Spotify, Canva, and ChatGPT",
    "Chrome Extension interface for quick subscription management",
    "Production deployment on Render with PostgreSQL database"
  ],
  technologies: [
    "Python",
    "Django",
    "Django REST Framework",
    "JWT Authentication",
    "PostgreSQL",
    "SQLite",
    "JavaScript",
    "HTML",
    "CSS",
    "Chrome Extension API",
    "Render",
    "Gunicorn",
    "WhiteNoise"
  ],
  links: [
    {
      type: "Github",
      href: "https://github.com/jatin-agrawal17/subscription-tracker",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/projects/subscription-guardian.png",
  video: "",
},



]

//   {
//     title: "ShareLink",
//     href: "https://sharelink.bhdocs.in/",
//     dates: "Aug 2025 - Nov 2025",
//     active: false,
//     description:
//       "A secure real-time communication and file sharing platform enabling peer-to-peer chat, audio messaging, calls, and large file transfers without server storage.",
//     features: [
//       "Real-time chat between two peers using WebRTC DataChannels",
//       "Audio message recording and direct P2P transfer",
//       "Peer-to-peer audio calling using WebRTC MediaStreams",
//       "Secure session-based connection using access codes",
//       "End-to-end encrypted communication",
//       "Large file transfer with real-time progress tracking",
//       "Direct-to-disk download using File System Access API",
//     ],
//     technologies: [
//       "Next.js",
//       "Node.js",
//       "WebRTC",
//       "WebSockets",
//       "Redis",
//       "TailwindCSS",
//     ],
//     links: [
//       {
//         type: "Website",
//         href: "https://sharelink.bhdocs.in/",
//         icon: <Icons.globe className="size-3" />,
//       },
//       {
//         type: "Github",
//         href: "https://github.com/Bharat346/ShareLink",
//         icon: <Icons.github className="size-3" />,
//       },
//     ],
//     image: "/projects/ShareLink.png",
//     video: "",
//   },
//   {
//     title: "Water Distribution System",
//     href: "https://bharat346.github.io/Water-Distribution-System/",
//     dates: "Mar 2024 - Apr 2024",
//     active: true,
//     description:
//       "Smart water distribution modeling with deep graph optimization.",
//     features: [
//       "Graph-based network modeling",
//       "Physics-based flow optimization",
//       "Real-time pressure visualizations",
//       "Efficient D3.js rendering",
//     ],
//     technologies: [
//       "React",
//       "TailwindCSS",
//       "Graph Algorithms",
//       "Physics Engine",
//     ],
//     links: [
//       {
//         type: "Website",
//         href: "https://bharat346.github.io/Water-Distribution-System/",
//         icon: <Icons.globe className="size-3" />,
//       },
//       {
//         type: "Github",
//         href: "https://github.com/Bharat346/Water-Distribution-System",
//         icon: <Icons.github className="size-3" />,
//       },
//     ],
//     image: "/projects/water_distri.png",
//     video: "",
//   },
//   {
//     title: "Scientific Calculator",
//     href: "https://bharat346.github.io/calculator/",
//     dates: "Sept 2024 - Oct 2024",
//     active: true,
//     description: "Advanced scientific calculator with complex math support.",
//     features: [
//       "Precision arithmetic logic",
//       "Advanced math function support",
//       "Fully responsive calculation history",
//       "Sleek dark mode interface",
//     ],
//     technologies: ["React", "JavaScript", "TailwindCSS"],
//     links: [
//       {
//         type: "Website",
//         href: "https://bharat346.github.io/calculator/",
//         icon: <Icons.globe className="size-3" />,
//       },
//       {
//         type: "Github",
//         href: "https://github.com/Bharat346/calculator/tree/gh-pages",
//         icon: <Icons.github className="size-3" />,
//       },
//     ],
//     image: "/projects/Calculator.png",
//     video: "",
//   },
// ];
