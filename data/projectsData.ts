// export interface Project {
//   title: string;
//   role: string;
//   techStack: string;
//   description: string;
//   outcome: string;
//   image: string;
//   link: string;
//   github?: string;
//   demoMedia?: {
//     type: 'video' | 'images';
//     content: string[];
//     thumbnail?: string;
//   };
//   features?: string[];
//   challenges?: string[];
//   solutions?: string[];
// }

// export const projectsData: Project[] = [
//   {
//     title: "Coopayroll – Payroll Management SaaS",
//     role: "Backend Developer",
//     techStack: "Node.js, Express.js, PostgreSQL",
//     description: "A SaaS platform for payroll, attendance, and employee management. Designed secure and scalable backend systems, integrated payment gateways, and synchronized biometric attendance data.",
//     outcome: "Streamlined payroll operations with real-time attendance and payment insights.",
//     image: "/images/capacity.PNG",
//     link: "https://coopayroll.com",
//     github: "https://github.com/yourusername/coopayroll",
//     demoMedia: {
//       type: 'images',
//       content: [
//         "/images/capacity.PNG",
//         "/images/report1.PNG",
//         "/images/report2.PNG",
//         "/images/report 3.PNG"
//       ],
//       thumbnail: "/images/report2.PNG"
//     },
//     features: [
//       "Real-time payroll processing",
//       "Biometric attendance integration",
//       "Multi-currency support",
//       "Automated tax calculations",
//       "Comprehensive reporting dashboard"
//     ],
//     // challenges: [
//     //   "Handling large-scale payroll data processing",
//     //   "Integrating with multiple biometric devices",
//     //   "Ensuring data security and compliance"
//     // ],
//     solutions: [
//       "Implemented batch processing with Redis queues",
//       "Created unified API for biometric device integration",
//       "Applied encryption and audit logging throughout the system"
//     ]
//   },
//   {
//     title: "Cedarsreet – Analytics as a Service Platform",
//     role: "Backend Developer",
//     techStack: "Node.js, Express.js, PostgreSQL, Power BI",
//     description: "An Analytics-as-a-Service platform integrated with Power BI for multi-tenant interactive dashboards and reports.",
//     outcome: "Enabled real-time business insights through embedded Power BI analytics.",
//     image: "/images/tenant.PNG",
//     link: "https://cedarsreet.com",
//     github: "https://github.com/yourusername/cedarsreet",
//     demoMedia: {
//       type: 'images',
//       content: [
//         "/images/tenant.PNG",
//         "/images/theme and branding.PNG",
//         "/images/navigation1.PNG",
//         "/images/layout.PNG"
//       ],
//       thumbnail: "/images/report2.PNG"
//     },
//     features: [
//       "Multi-tenant dashboard system",
//       "Power BI integration",
//       "Real-time data processing",
//       "Custom report generation",
//       "Role-based access control"
//     ]
//   },
//   {
//     title: "Future Forward Insights – Consultancy Website",
//     role: "Frontend Developer",
//     techStack: "Next.js, React, Tailwind CSS",
//     description: "Developed a responsive landing page for a consultancy organization to showcase services and expertise.",
//     outcome: "Improved brand visibility and client engagement.",
//     image: "/images/layout.PNG",
//     link: "https://futureforwardinsights.com",
//     demoMedia: {
//       type: 'images',
//       content: [
//         "/images/home.jpg",
//         "/images/colors.png",
//         "/images/font.png",
//         "/images/layout.png",
//         "images/report2.png"
//       ],
//       thumbnail: "images/home.jpg"
//     },
//     // demoMedia: {
//     //   type: 'images',
//     //   content: [
//     //     "/images/layout.PNG",
//     //     "/images/colors.PNG",
//     //     "/images/font.PNG",
//     //     "/images/theme and branding.PNG"
//     //   ],
//     //   thumbnail: "/images/layout.PNG"
//     // },
//     features: [
//       "Responsive design",
//       "SEO optimization",
//       "Contact form integration",
//       "Service showcase",
//       "Team profiles"
//     ]
//   },
//   {
//     title: "Coopeng – Account Opening Mobile Application",
//     role: "Flutter Developer",
//     techStack: "Flutter, Dart, RESTful APIs",
//     description: "A mobile app for digital account opening with offline support and national ID integration.",
//     outcome: "Enhanced onboarding efficiency and reduced manual paperwork.",
//     image: "/images/personal detail.PNG",
//     link: "https://play.google.com/store/apps/details?id=com.coopeng.app",
//     demoMedia: {
//       type: 'images',
//       content: [
//         "/images/personal detail.PNG",
//         "/images/capacity.PNG",
//         "/images/report1.PNG",
//         "/images/report2.PNG"
//       ],
//       thumbnail: "/images/report2.PNG"
//     },
//     features: [
//       "Offline-first architecture",
//       "National ID integration",
//       "Biometric authentication",
//       "Document upload",
//       "Real-time status tracking"
//     ]
//   },
//   {
//     title: "Ethiopia Peace Initiative – Organization Website",
//     role: "Frontend Developer",
//     techStack: "React.js, JavaScript, CSS",
//     description: "Developed a modern and accessible website for a peace organization to showcase its mission and programs.",
//     outcome: "Expanded the organization's digital presence and audience reach.",
//     image: "/images/theme and branding.PNG",
//     link: "https://ethiopiapeaceinitiative.org",
//     demoMedia: {
//       type: 'images',
//       content: [
//         "/images/theme and branding.PNG",
//         "/images/layout.PNG",
//         "/images/colors.PNG",
//         "/images/font.PNG"
//       ],
//       thumbnail: "/images/report2.PNG"
//     },
//     features: [
//       "Accessibility compliance",
//       "Multi-language support",
//       "News and updates section",
//       "Program showcase",
//       "Donation integration"
//     ]
//   }
// ];





export interface Project {
  title: string;
  role: string;
  techStack: string;
  description: string;
  outcome: string;
  image: string;
  link: string;
  github?: string;
  demoMedia?: {
    type: 'video' | 'images';
    content: string[];
    thumbnail?: string;
  };
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  overview?: string;
}

export const projectsData: Project[] = [
  {
    title: "Coopayroll – Payroll Management SaaS",
    role: "Backend Developer",
    techStack: "Node.js, Express.js, PostgreSQL",
    description:
      "Coopayroll is a Software-as-a-Service (SaaS) platform that automates payroll management, employee tracking, and attendance monitoring for organizations. The system integrates payment processing and biometric devices to streamline salary disbursements and ensure accurate attendance records.",
    overview:
      "As a backend developer, I was responsible for architecting and implementing secure, scalable backend APIs using Node.js and Express.js. I also designed and optimized PostgreSQL database schemas, integrated payment gateways, and synchronized attendance data from ZKTeco biometric devices. The platform was developed with a focus on performance, reliability, and multi-tenant accessibility.",
    outcome:
      "Successfully delivered a robust and efficient payroll management system that reduced manual administrative work and improved payroll accuracy across multiple organizations.",
    image: "/images/capacity.PNG",
    link: "https://coopayroll.com",
    github: "https://github.com/yourusername/coopayroll",
    demoMedia: {
      type: "images",
      content: [
        "/images/payroll/landing.PNG",
        "/images/payroll/2.PNG",
        "/images/payroll/3.PNG",
        "/images/payroll/4.PNG",
        "/images/payroll/5.PNG",
      ],
      thumbnail: "/images/payroll/landing.PNG"
    },
    features: [
      "Automated payroll and attendance management",
      "ZKTeco biometric device integration",
      "Multi-currency and tax handling support",
      "Comprehensive reporting dashboard",
      "Secure payment gateway integration"
    ],
    solutions: [
      "Implemented batch payroll processing with Redis queues",
      "Developed unified APIs for biometric data synchronization",
      "Applied encryption and audit logging for compliance and data integrity"
    ]
  },
  {
    title: "Cedarsreet – Analytics as a Service Platform",
    role: "Backend Developer",
    techStack: "Node.js, Express.js, PostgreSQL, Power BI",
    description:
      "Cedarsreet is an Analytics-as-a-Service (AaaS) platform that provides data visualization and business intelligence for organizations through Power BI integration. It enables companies to access interactive, multi-tenant dashboards and real-time insights from their operational data.",
    overview:
      "In this project, I developed the backend infrastructure using Node.js and Express.js, integrated Power BI APIs for dynamic report generation, and implemented authentication using Azure Active Directory (MSAL). The system was designed for multi-tenancy, ensuring that each organization could securely access its own analytics workspace.",
    outcome:
      "Delivered a scalable analytics platform that empowered client organizations to make data-driven decisions using real-time Power BI dashboards and automated reporting workflows.",
    image: "/images/tenant.PNG",
    link: "https://cedarsreet.com",
    github: "https://github.com/yourusername/cedarsreet",
    demoMedia: {
      type: "images",
      content: [
        "/images/cedar/2.PNG",
        "/images/cedar/3.PNG",
        "/images/cedar/4.PNG",
        "/images/cedar/5.PNG",
        "/images/cedar/6.PNG",
        "/images/cedar/7.PNG",
        "/images/cedar/8.PNG",
        "/images/cedar/9.PNG",
        "/images/cedar/10.PNG",
        "/images/cedar/11.PNG",
        "/images/cedar/12.PNG",
        "/images/cedar/13.PNG",
      ],
      thumbnail: "/images/cedar/10.PNG"
    },
    features: [
      "Power BI integration for real-time reporting",
      "Multi-tenant data management architecture",
      "Automated embed token generation",
      "Custom dashboards and analytics tools",
      "Role-based access control with Azure AD"
    ]
  },
  {
    title: "Future Forward Insights – Consultancy Website",
    role: "Frontend Developer",
    techStack: "Next.js, React, Tailwind CSS",
    description:
      "Future Forward Insights is a consultancy organization that offers business advisory and strategy services. The website serves as a modern, responsive digital platform to showcase the firm’s expertise, values, and offerings.",
    overview:
      "I developed the frontend using Next.js and Tailwind CSS, focusing on performance, responsiveness, and user engagement. The landing page includes SEO optimization, service listings, and interactive UI components designed to highlight the organization’s professional identity.",
    outcome:
      "Launched a visually appealing and optimized website that strengthened the company’s online presence and improved user engagement.",
    image: "/images/layout.PNG",
    link: "https://futureforwardinsights.com",
    demoMedia: {
      type: "images",
      content: [
        "/images/ffr/1.jpg",
        "/images/ffr/2.jpg",
        "/images/ffr/3.jpg",
        "/images/ffr/4.jpg",
        "/images/ffr/5.jpg",
        "/images/ffr/6.jpg",
        "/images/ffr/7.jpg",
        "/images/ffr/8.jpg",
        "/images/ffr/9.jpg",

      ],
      thumbnail: "images/ffr/1.jpg"
    },
    features: [
      "Fully responsive design",
      "SEO-friendly architecture",
      "Interactive landing page sections",
      "Team and service presentation modules",
      "Cross-browser optimization"
    ]
  },
  {
    title: "Coopeng – Account Opening Mobile Application",
    role: "Flutter Developer",
    techStack: "Flutter, Dart, RESTful APIs",
    description:
      "Coopeng is a mobile banking application that allows users to open individual, joint, and corporate accounts digitally. The app includes offline functionality and national ID integration to simplify the onboarding process.",
    overview:
      "As the Flutter developer, I built a cross-platform mobile solution with offline data storage and synchronization capabilities. I integrated secure RESTful APIs and implemented national ID lookups for automatic form population. The application also supports document uploads and real-time account status tracking.",
    outcome:
      "Delivered a user-friendly and efficient digital onboarding experience that minimized manual work and expanded account accessibility.",
    image: "/images/personal detail.PNG",
    link: "https://play.google.com/store/apps/details?id=com.coopeng.app",
    demoMedia: {
      type: "images",
      content: [
        "/images/personal detail.PNG",
        "/images/capacity.PNG",
        "/images/report1.PNG",
        "/images/report2.PNG"
      ],
      thumbnail: "/images/report2.PNG"
    },
    features: [
      "Offline-first architecture",
      "National ID system integration",
      "Document upload and validation",
      "Biometric authentication support",
      "Real-time application tracking"
    ]
  },
  {
    title: "Ethiopia Peace Initiative – Organization Website",
    role: "Frontend Developer",
    techStack: "React.js, JavaScript, CSS",
    description:
      "The Ethiopia Peace Initiative is a non-governmental organization focused on fostering peace, unity, and reconciliation. The website provides an informative platform to communicate the organization’s mission and ongoing programs.",
    overview:
      "I developed the frontend using React.js with a focus on accessibility, usability, and mobile responsiveness. The site architecture supports multilingual content, dynamic updates, and media integration for showcasing peace-building initiatives.",
    outcome:
      "Successfully launched a professional and user-friendly website that enhanced the organization’s visibility and strengthened community outreach.",
    image: "/images/theme and branding.PNG",
    link: "https://ethiopiapeaceinitiative.org",
    demoMedia: {
      type: "images",
      content: [
        "/images/epco/1.PNG",
        "/images/epco/2.PNG",
        "/images/epco/3.PNG",
        "/images/epco/3.PNG" ,
         "/images/epco/4.PNG",
        "/images/epco/4.PNG",
        "/images/epco/6.PNG",
      ],
      thumbnail: "/images/epco/1.PNG"
    },
    features: [
      "Accessibility-compliant design",
      "Multi-language support",
      "News and program update section",
      "Donation integration",
      "Responsive and modern layout"
    ]
  }
];
