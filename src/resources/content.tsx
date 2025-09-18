import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Manideep",
  lastName: "Yadav Mamilla",
  name: `Manideep Mamilla`,
  role: "Front-end Developer",
  avatar: "/images/avatar.jpg",
  email: "manideep.m.yadav@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi", "Telugu"],
  local: "Hyderbad/India",
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Manideep519/", // [cite: 4]
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/manideep-yadav/",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp", // You may need to add a "whatsapp" icon
    link: "https://wa.me/917674062837", // [cite: 3]
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`, // [cite: 2]
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
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
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A React Frontend Developer from Hyderabad with over 5 years of experience building scalable
        web and mobile applications using the modern React ecosystem, React Native, and TypeScript.
        Passionate about creating intuitive, user-centric digital experiences through clean code and
        performance optimization. Specialized in developing responsive, accessible user interfaces
        with React.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Citimedia",
        timeframe: "Jan 2024 - Present",
        role: "Frontend Developer",
        achievements: [
          <>
            Developed modern React applications including interactive dashboards and map-based
            solutions using React 18, TypeScript, and Tailwind CSS with Electron for desktop
            deployment.
          </>,
          <>
            Architected and deployed scalable frontend solutions on AWS and GCP instances, working
            independently to deliver end-to-end user experiences.
          </>,
          <>
            Implemented responsive designs and performance optimizations, ensuring seamless user
            interactions across web and desktop platforms.
          </>,
        ],
        images: [],
      },
      {
        company: "Asgardian Labs",
        timeframe: "Jan 2023 - Dec 2023",
        role: "ReactJS Developer",
        achievements: [
          <>
            Built dynamic web applications using React, Next.js, and Material-UI, focusing on
            responsive design and cross-browser compatibility.
          </>,
          <>
            Developed full-stack solutions with Node.js backend and MongoDB integration, ensuring
            efficient data management and retrieval.
          </>,
          <>
            Delivered high-quality, maintainable code following modern JavaScript (ES6+) best
            practices and web development standards.
          </>,
        ],
        images: [],
      },
      {
        company: "Deque Systems",
        timeframe: "Jun 2022 - Dec 2022",
        role: "Frontend Engineer",
        achievements: [
          <>
            Successfully migrated legacy UI from Pug templates to modern ReactJS, improving
            maintainability and development efficiency.
          </>,
          <>
            Implemented accessibility standards (WCAG, ARIA) across web applications, ensuring
            inclusive user experiences.
          </>,
          <>
            Developed backend solutions with Node.js and PostgreSQL, delivering integrated
            full-stack functionality.
          </>,
        ],
        images: [],
      },
      {
        company: "AgriEtern Technologies Pvt Ltd",
        timeframe: "Jun 2019 - May 2022",
        role: "Web Developer",
        achievements: [
          <>
            Developed responsive web applications using HTML5, CSS3, JavaScript, and jQuery with the
            Bootstrap framework.
          </>,
          <>
            Built dynamic web solutions using PHP and MySQL database integration, implementing
            server-side scripting for data processing and user authentication systems.
          </>,
          <>
            Collaborated with backend teams to integrate RESTful APIs and implemented responsive
            design patterns using Bootstrap's grid system.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>
            Building scalable, high-performance web and mobile applications using the modern React
            ecosystem, React Native, and TypeScript.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "React Native", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Vite", icon: "vite" },
          { name: "Electron", icon: "electron" },
          { name: " JavaScript", icon: "javaScript" },
          { name: " HTML5", icon: "HTML5" },
          { name: "CSS3", icon: "CSS3" },
        ],
        images: [],
      },
      {
        title: "UI Libraries & Styling",
        description: (
          <>
            Crafting responsive and accessible user interfaces with modern design systems and
            CSS-in-JS solutions.
          </>
        ),
        tags: [
          { name: "Tailwind CSS", icon: "tailwindcss" },
          { name: "Material-UI", icon: "materialui" },
          { name: "Shadcn/ui", icon: "" },
          { name: "Styled Components", icon: "styledcomponents" },
        ],
        images: [],
      },
      {
        title: "Backend & Databases",
        description: (
          <>
            Developing robust server-side applications and APIs with Node.js and managing data with
            both SQL and NoSQL databases.
          </>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "GraphQL", icon: "graphql" },
        ],
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: (
          <>
            Deploying and managing applications on modern cloud platforms and implementing
            containerized environments.
          </>
        ),
        tags: [
          { name: "AWS", icon: "aws" },
          { name: "Google Cloud", icon: "googlecloud" },
          { name: "Docker", icon: "docker" },
          { name: "Vercel", icon: "vercel" },
          { name: "Netlify", icon: "netlify" },
        ],
        images: [],
      },
      {
        title: "AI for Frontend",
        description: (
          <>
            Integrating generative AI features and running models in the browser using modern
            JavaScript libraries, SDKs, and APIs.
          </>
        ),
        tags: [
          { name: "OpenAI API", icon: "openai" },
          { name: "TensorFlow.js", icon: "tensorflow" },
          { name: "Vercel AI SDK", icon: "vercel" },
          { name: "Hugging Face", icon: "huggingface" },
          { name: "LangChain.js", icon: "langchain" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
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
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
