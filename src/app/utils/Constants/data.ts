const courses = [
    {
        id: "html",
        title: "HTML",
        level: "Beginner",
        description: "Structure the web using semantic, accessible markup.",
        intro:
            "HTML is the backbone of every website. In this course, you’ll learn how web pages are structured, how browsers interpret markup, and how to create clean, accessible documents that form a solid foundation for any web project.",
        estimatedTime: "6–8 hours",
        color: "#E0E7FF",

        outcomes: [
            "Understand how web pages are structured and rendered",
            "Write clean, semantic, and accessible HTML",
            "Build well-organized documents that scale easily",
            "Develop confidence reading and understanding existing HTML",
        ],

        modules: [
            {
                id: "html-module-1",
                title: "Getting Started",
                summary:
                    "Learn what HTML is, how the web works behind the scenes, and how to create your very first webpage from scratch.",
                challengePrompt:
                    "A simple webpage displays differently across browsers. How would you identify whether the issue lies in structure, standards, or browser behavior?",
                topics: [
                    "What is HTML?",
                    "How the Web Works (Browsers & Servers)",
                    "HTML Document Structure",
                    "HTML Editors & Development Tools",
                    "Creating Your First HTML Page",
                ],
            },

            {
                id: "html-module-2",
                title: "Core Elements",
                summary:
                    "Explore the fundamental building blocks that give structure and meaning to web content.",
                challengePrompt:
                    "A webpage feels cluttered and confusing. Which semantic elements could improve clarity and readability?",
                topics: [
                    "HTML Elements Explained",
                    "HTML Attributes & Best Practices",
                    "Headings & Content Hierarchy",
                    "Paragraphs & Text Flow",
                    "Text Formatting & Emphasis",
                    "Quotations & Citations",
                ],
            },

            {
                id: "html-module-3",
                title: "Styling & Media",
                summary:
                    "Learn how HTML supports visual presentation through media, links, and basic styling.",
                challengePrompt:
                    "Users say a page looks visually dull. Before adding CSS, what HTML-level improvements could enhance structure and clarity?",
                topics: [
                    "Inline Styles & When to Avoid Them",
                    "HTML Colors & Visual Meaning",
                    "Links & Navigation",
                    "Images & Media Embedding",
                    "Image Accessibility (alt text & SEO)",
                ],
            },

            {
                id: "html-module-4",
                title: "Lists, Tables & Forms",
                summary:
                    "Handle structured data and collect user input in a clear, accessible way.",
                challengePrompt:
                    "You need to collect user data accurately and safely. How do you design a form that’s both usable and accessible?",
                topics: [
                    "Ordered & Unordered Lists",
                    "Tables for Structured Data",
                    "Forms & User Input",
                    "HTML Input Types",
                    "Form Labels, Validation & Accessibility",
                ],
            },
        ],
    },

    {
        id: "css",
        title: "CSS",
        level: "Beginner",
        description: "Design beautiful, consistent, and responsive layouts.",
        intro:
            "CSS controls how websites look and feel. In this course, you’ll learn how styles are applied, how layouts are built, and how to design responsive interfaces that work across all screen sizes.",
        estimatedTime: "7–9 hours",
        color: "#DBEAFE",

        outcomes: [
            "Style web pages with confidence",
            "Understand spacing, typography, and color systems",
            "Build flexible layouts using modern CSS tools",
            "Create responsive designs that adapt to any device",
        ],

        modules: [
            {
                id: "css-module-1",
                title: "CSS Fundamentals",
                summary:
                    "Learn how CSS works, how styles are applied, and how to control them effectively.",
                challengePrompt:
                    "A style isn’t applying as expected. How do you determine whether it’s a selector, specificity, or cascade issue?",
                topics: [
                    "What is CSS?",
                    "CSS Syntax & Rules",
                    "Selectors & Targeting Elements",
                    "Specificity & Cascade",
                    "CSS Comments & Organization",
                ],
            },

            {
                id: "css-module-2",
                title: "Visual Styling",
                summary:
                    "Control color, spacing, borders, and typography to create visually appealing designs.",
                challengePrompt:
                    "A page feels inconsistent and messy. Which visual properties would you adjust first to improve balance?",
                topics: [
                    "Color Theory & Usage",
                    "Backgrounds & Gradients",
                    "Borders & Shadows",
                    "Margins & Padding",
                    "Text Styling",
                    "Fonts & Readability",
                ],
            },

            {
                id: "css-module-3",
                title: "Layout Systems",
                summary:
                    "Learn how elements are positioned and aligned on the page using modern layout techniques.",
                challengePrompt:
                    "A layout works on desktop but breaks on mobile. Which layout system would provide better flexibility?",
                topics: [
                    "CSS Box Model",
                    "Display Property",
                    "Positioning Elements",
                    "Flexbox Layout System",
                    "CSS Grid Layout",
                ],
            },

            {
                id: "css-module-4",
                title: "Responsive Design",
                summary:
                    "Make layouts adapt seamlessly across different screen sizes and devices.",
                challengePrompt:
                    "Mobile users report poor usability. Which responsive strategies would you apply first?",
                topics: [
                    "Media Queries",
                    "Responsive Units (%, rem, vw, vh)",
                    "Mobile-First Design Principles",
                ],
            },
        ],
    },

    {
        id: "javascript",
        title: "JavaScript",
        level: "Beginner",
        description: "Add logic, behavior, and interactivity to the web.",
        intro:
            "JavaScript brings websites to life. In this course, you’ll learn programming fundamentals, logical thinking, and how to make web pages respond to user actions dynamically.",
        estimatedTime: "10–12 hours",
        color: "#FEF3C7",

        outcomes: [
            "Write basic programs with confidence",
            "Understand core programming concepts",
            "Handle user interactions and events",
            "Manipulate web content dynamically",
        ],

        modules: [
            {
                id: "js-module-1",
                title: "Programming Basics",
                summary:
                    "Understand how programming works and how JavaScript executes code.",
                challengePrompt:
                    "A script fails without errors. What debugging steps would you take to find the problem?",
                topics: [
                    "What is JavaScript?",
                    "Variables & Constants",
                    "JavaScript Data Types",
                    "Operators & Expressions",
                    "Comments & Code Readability",
                ],
            },

            {
                id: "js-module-2",
                title: "Control Flow",
                summary:
                    "Control how and when code runs using logical conditions.",
                challengePrompt:
                    "Different users see different outcomes. How do you control program flow effectively?",
                topics: [
                    "Conditional Statements (if/else)",
                    "Loops (for, while)",
                    "Logical Operators",
                ],
            },

            {
                id: "js-module-3",
                title: "Functions & Data",
                summary:
                    "Organize your code into reusable blocks and manage data efficiently.",
                challengePrompt:
                    "Your codebase is growing quickly. What abstraction can reduce duplication?",
                topics: [
                    "Functions & Reusability",
                    "Parameters & Return Values",
                    "Arrays & Collections",
                    "Objects & Data Modeling",
                ],
            },

            {
                id: "js-module-4",
                title: "Interactivity & DOM",
                summary:
                    "Respond to user actions and dynamically update the webpage.",
                challengePrompt:
                    "A button click should update the page instantly. How do you design the interaction?",
                topics: [
                    "Events & Event Listeners",
                    "DOM Selection Methods",
                    "DOM Manipulation",
                    "Basic Error Handling",
                    "Introduction to ES6 Features",
                ],
            },
        ],
    },
];


export { courses }