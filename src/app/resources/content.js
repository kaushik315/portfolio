import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Kaushik",
  lastName: "Chandrasekhar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer / Data Analyst",
  avatar: "/images/avatar.jpg",
  email: "kaushik315@gmail.com",
  location: "Europe/London",
  languages: ["English"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>I write code and deploy it here and there.</>,
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kaushik315", // Replace with your actual GitHub link
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kaushik-chandrasekhar", // Replace with your actual LinkedIn link
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>See my works and projects</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">NyxxIntel</strong></>,
    href: "/work/nyxx-intel",
  },
  subline: (
    <>
      I'm Kaushik, a Full Stack Developer and Data Analyst, working on projects to develop
      <br /> modern, scalable, and user-friendly web applications. Check out my work.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com", // Replace with your actual Cal.com link if available
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Kaushik Chandrasekhar is an Edinburgh-based full-stack developer and data analyst
        with a passion for turning complex challenges into scalable, user-friendly digital solutions.
        His work spans web applications, threat intelligence tools, and interactive dashboards—
        where performance, security, and UX converge.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Edinburgh Napier University",
        timeframe: "October 2024 - May 2025",
        role: "SDG Dashboard Analyst/Developer - Team Lead",
        achievements: [
          <>
            Built a modern web application using NextJS to showcase the SDG efforts,
            employing visual aesthetics, content management, and SEO strategies to enhance visibility and engagement.
            Also developed a chatbot using Google DialogFlow to centralize SDG data.
          </>,
          <>
            Led a team to identify gaps in SDG initiatives through data analysis and
            presented key findings with actionable recommendations to stakeholders.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/sdg-exp.png",
            alt: "SDG Dashboard Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "NyxxIntel",
        timeframe: "January 2024 - Present",
        role: "Full Stack Developer / Co-Founder",
        achievements: [
          <>
            Co-founded and developed the NyxxIntel threat intelligence platform,
            building the frontend architecture using Next.js and TypeScript.
          </>,
          <>
            Currently integrating data from OpenCTI and other sources to power dynamic dashboards
            and tooltips for real-time client insight delivery.
          </>,
          <>
            Delegated tasks based on team members’ strengths and actively contribute
            to ongoing development, optimization, and client-facing UI components.
          </>,
        ],
        images: [],
      },
      {
        company: "Discovery Warner Brothers – UCI Downhill Championship",
        timeframe: "May 2024",
        role: "Technical & Media Support",
        achievements: [
          <>
            Provided live technical support to media teams during the UK’s largest downhill mountain biking event.
          </>,
          <>
            Identified and fixed issues with file formats affecting live updates on the event platform.
          </>,
        ],
        images: [],
      },
      {
        company: "Linkfield Residential Ltd",
        timeframe: "January 2024 – Present",
        role: "Bank Care Officer",
        achievements: [
          <>Provided care and daily support for clients with learning difficulties.</>,
          <>Administered medication and recorded vital signs and medical records accurately.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Edinburgh Napier University",
        description: <>Master of Science in Computing with Professional Placement</>,
      },
      {
        name: "De Montfort University",
        description: <>Master of Science in Data Analytics</>,
      },
      {
        name: "VLB Janakiammal College of Arts and Science",
        description: <>Bachelor of Science in Computer Applications</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: <>Developing scalable web applications using Next.js and TypeScript.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Python & Data Analysis",
        description: <>Skilled in Python, Excel, SAS, and Tableau for data cleaning, exploration, and visualization.</>,
        images: [],
      },
      {
        title: "ASP.NET & C#",
        description: <>Developed enterprise-style web apps using ASP.NET and C#.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Posts will appear here once .mdx files are added
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
