export const PORTFOLIO_DATA = {
  skipLink: "Skip to content",
  header: {
    avatar: "NL",
    name: "Nilesh Laxmi",
    title: "Frontend Tech Lead / Cross-Platform UI Lead",
    location: "Delhi, India",
    phone: "+91 • hidden",
    email: "nileshlaxmi4@gmail.com",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nilesh-laxmi",
      },
      {
        name: "Portfolio",
        url: "https://nileshlaxmi.github.io",
      },
      {
        name: "Github",
        url: "https://github.com/nileshlaxmi",
      },
    ],
    actions: {
      themeToggle: {
        text: "🌙 Theme",
        title: "Toggle theme",
        ariaLabel: "Toggle theme",
      },
      downloadResume: {
        text: "",
        href: "docs/resume.pdf",
        download: "Nilesh-Laxmi-Resume.pdf",
      },
    },
  },
  main: {
    summary: {
      heading: "Summary",
      text: "Frontend Tech Lead / Cross-Platform UI Lead with 10+ years building scalable, performant, and accessible web & mobile applications. Expert in React, React Native Web and modern JavaScript. Experienced in platform-first architecture, WCAG adoption, and leading cross-functional teams.",
      stats: [
        {
          number: "10+",
          label: "Years",
        },
        {
          number: "10+",
          label: "Products",
        },
      ],
    },
    experience: [
      {
        company: "Airtel Digital",
        title: "Lead Engineer (Frontend)",
        location: "Gurugram",
        period: "Jan 2022 – Present",
        bullets: [
          "<strong>Currently working on Claim Journey in Airtel Black Revamp",
          "<strong>International Roaming (IR)</strong>: Developed enhanced UX flows to display prerequisites for activating international roaming after plan purchase, along with contextual error handling for failures during plan purchase or modification, improving transparency and user confidence.",
          "<strong>Accessibility Leadership</strong>: Championed end-to-end accessibility (a11y) compliance across high-impact journeys — Selfcare Account, DTH Recharge, Login, Appointments, Recharges, Digital Store, and Track Requests. Led collaboration with product, design, and QA teams to embed WCAG 2.1 standards into the development lifecycle, ensuring inclusive experiences for all users and setting accessibility as a platform-wide engineering standard.",
          "<strong>Wi-Fi Change Plan Journey</strong>: Designed and implemented a seamless flow for plan upgrades on Thanks App — covering selection, comparison, review, and confirmation. Improved user clarity and reduced friction through simplified plan cards, contextual nudges, and clear cost breakdown.",
          "<strong>Corporate Business Journey (Thanks App & Airtel.in)</strong>: Delivered onboarding and manage flows for corporate customers via email validation and app integration, reducing offline dependency and leakage.",
          "<strong>Postpaid Change Plan Journey</strong>: Revamped plan discovery and decision-making UX; introduced plan comparison, upsell nudges, downgrade friction, and improved billing transparency. Led to <strong>19% uplift in conversion</strong> and <strong>₹40 Cr</strong> annual incremental revenue.",
          "<strong>Track Request Journey (Thanks App & Airtel.in)</strong>: Enabled consolidated tracking of orders and complaints across both Thanks App and Airtel.in. Added appointment handling, communication transparency, and status visibility — reducing <strong>100K+ assisted calls annually</strong>.",
          '<strong>TRAI Compliance (DND Journey)</strong>: Led the frontend implementation for TRAI-mandated compliance changes to enhance user control over spam and fraudulent communications. Made the DND (Do Not Disturb) options easily accessible via the homepage header and "About Airtel" settings in Thanks App (previously limited to footer). Revamped the complaint form to allow users to report and block spam messages and calls more effectively.',
          "<strong>TRAI Compliance (Inactive Account Form)</strong>: Delivered updated frontend forms for inactive user account webpages for both Postpaid and Wi-Fi categories, ensuring compliance with new TRAI guidelines and a smoother user experience.",
          "<strong>API Migration & Platform Reusability</strong>: Migrated legacy APIs for the Wi-Fi Journey and enabled cross-platform reusability across Thanks App and M-Web, improving scalability and performance.",
          "<strong>Prepaid → Postpaid Migration (Thanks App)</strong>: Delivered a campaign-integrated UI on Thanks App to simplify the user conversion funnel and boost postpaid acquisitions.",
          "<strong>Prepaid Recharge Experience (Web)</strong>: Delivered a redesigned, user-friendly recharge flow for Airtel prepaid users on web. Built a seamless, brand-aligned experience using reusable components consistent with the Thanks App UI — focused on clarity, ease of use, and upsell opportunities.",
          "Collaborated with cross-functional squads, maintained high code quality, and optimized performance for large-scale users.",
        ],
      },
      {
        company: "TELUS International",
        title: "Module Lead",
        location: "Noida",
        period: "Aug 2018 – Jan 2022",
        bullets: [
          "Developed Visual IVR, chatbot frameworks, and image-capture utilities.",
          "Led UI for multiple chatbot platforms: HR Bot, Recruitment Bot, SPOC Bot with SSO, admin panels, and analytics dashboards.",
          "Supported PWA implementation, third-party integrations, and Agile delivery practices.",
          "Created enterprise UI components with strong emphasis on maintainability and scalability.",
        ],
      },
      {
        company: "NTT DATA Services",
        title: "Software Development Analyst",
        location: "Noida",
        period: "Nov 2014 – Jun 2018",
        bullets: [
          "Delivered healthcare integration solutions using IBM IIB, WMQ, HL7, and WMB.",
          "Part of key EDI server migration and HL7 Go-Live teams.",
          "Conducted requirements analysis, interface design, system testing, and client training.",
          "Hands-on experience with UNIX/AIX systems and enterprise middleware.",
        ],
      },
    ],
    projects: [
      {
        title: "International Roaming Journey",
        description:
          "React + TypeScript. End-to-end redesign of the International Roaming purchase, activation and tariff-selection flows. Accessibility-first (WCAG AA), improved error handling, offline-capable states and clear billing consent — simplified UX and reduced assisted support.",
      },
      {
        title: "Broadband Change Plan — UI",
        description:
          "React + TypeScript. Accessibility-first redesign and conversion improvements.",
      },
      {
        title: "Prepaid Recharge Journey",
        description:
          "React + TypeScript. Reimagined the Prepaid Recharge journey: multi-screen recharge flow with intelligent plan suggestions, saved payment & wallet support, progressive validation. Accessibility-first (WCAG AA), explicit billing consent — reduced checkout time and support calls.",
      },
      {
        title: "Native Bridge Library",
        description:
          "Created a reusable library to send app-specific data from mobile app to the web.",
      },
      {
        title: "Design System",
        description:
          "Reusable tokens, Storybook, cross-platform components for web & mobile.",
      },
      {
        title: "Track Request Journey",
        description:
          "Unified order & complaint tracking that reduced assisted calls significantly.",
      },
    ],
    contactForm: {
      heading: "Contact Form",
      subtext: "Open to leadership roles • Relocation friendly",
      action: "https://formspree.io/f/nileshlaxmi4@gmail.com",
      method: "POST",
      fields: [
        {
          name: "name",
          label: "Name",
          type: "text",
          required: true,
        },
        {
          name: "_replyto",
          label: "Email",
          type: "email",
          required: true,
        },
        {
          name: "message",
          label: "Message",
          type: "textarea",
          required: true,
          rows: 4,
        },
      ],
      hiddenFields: [
        {
          name: "_subject",
          value: "Portfolio contact",
        },
      ],
      submitButton: "Send message",
    },
    skills: [
      "JavaScript",
      "React",
      "Redux",
      "React Native Web",
      "TypeScript",
      "HTML",
      "CSS",
      "PWA",
      "Webpack",
      "SASS/SCSS",
      "Accessibility (WCAG)",
      "Design Systems",
      "CI / CD",
      "BFF",
    ],
    education: {
      heading: "Education",
      degree: "B.Tech — Information Technology",
      institution: "GGSIPU",
      year: "2014",
    },
    certifications: {
      heading: "Certifications",
      items: [
        {
          title: "FreeCodeCamp — Front End Libraries",
          url: "https://www.freecodecamp.org/certification/nileshlaxmi/front-end-development-libraries",
        },
        {
          title: "FreeCodeCamp — Javascript Algorithms and Data Structures",
          url: "https://www.freecodecamp.org/certification/nileshlaxmi/javascript-algorithms-and-data-structures-v8",
        },
        {
          title: "FreeCodeCamp — Responsive Web Design",
          url: "https://www.freecodecamp.org/certification/nileshlaxmi/responsive-web-design",
        },
      ],
    },
  },
  footer: {
    text: "Available for leadership roles • Open to relocation",
  },
};
