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
                    {
                        title: "What is HTML?",
                        description:
                            "HTML (HyperText Markup Language) is the standard language for creating webpages. It allows you to define headings, paragraphs, links, images, lists, and other elements that form the structure of a webpage. Understanding HTML is the first step in web development.",
                    },
                    {
                        title: "How the Web Works (Browsers & Servers)",
                        description:
                            "Websites work using a client-server model. Browsers (clients) request content from servers, which host HTML, CSS, and JavaScript files. Browsers then render these files into visual pages. Learning this process helps you understand how your HTML is displayed and debug issues.",
                    },
                    {
                        title: "HTML Document Structure",
                        description:
                            "An HTML document has a specific structure: it starts with a <!DOCTYPE html> declaration, followed by <html>, <head>, and <body> tags. The head contains metadata, styles, and scripts, while the body contains all the visible content.",
                    },
                    {
                        title: "HTML Editors & Development Tools",
                        description:
                            "You can write HTML in any text editor, but using modern code editors like VS Code, Sublime Text, or Atom provides syntax highlighting, auto-completion, and live preview features that make development easier and faster.",
                    },
                    {
                        title: "Creating Your First HTML Page",
                        description:
                            "Start by creating a new file with the .html extension. Add basic structure tags: <!DOCTYPE html>, <html>, <head>, and <body>. Inside the body, add a heading and paragraph. Open the file in a browser to see your first webpage.",
                    },
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
                    {
                        title: "HTML Elements Explained",
                        description:
                            "HTML elements are the building blocks of a webpage. Tags like <div>, <p>, <h1>-<h6>, <a>, <img>, etc., define content and structure. Each element has a specific purpose and semantic meaning.",
                    },
                    {
                        title: "HTML Attributes & Best Practices",
                        description:
                            "Attributes add extra information to HTML elements. Examples include 'id', 'class', 'src', and 'href'. Using attributes correctly improves accessibility, styling, and interactivity.",
                    },
                    {
                        title: "Headings & Content Hierarchy",
                        description:
                            "Use headings <h1> through <h6> to create a clear hierarchy. The main title of a page should be <h1>, subsections <h2>, and so on. Proper headings improve readability and SEO.",
                    },
                    {
                        title: "Paragraphs & Text Flow",
                        description:
                            "Paragraphs are blocks of text enclosed in <p> tags. Maintain logical text flow and avoid unnecessary breaks. Proper structure ensures your content is readable and accessible.",
                    },
                    {
                        title: "Text Formatting & Emphasis",
                        description:
                            "Use <strong>, <em>, <b>, and <i> to emphasize text. Avoid using formatting tags purely for styling—use CSS for visual changes.",
                    },
                    {
                        title: "Quotations & Citations",
                        description:
                            "Use <blockquote> for long quotes and <q> for inline quotes. Cite sources appropriately with <cite>. This ensures your content is clear, credible, and accessible.",
                    },
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
                    {
                        title: "Inline Styles & When to Avoid Them",
                        description:
                            "Inline styles are CSS applied directly to HTML elements using the 'style' attribute. They are not recommended for large projects because they make maintenance harder. Use external CSS files instead.",
                    },
                    {
                        title: "HTML Colors & Visual Meaning",
                        description:
                            "HTML elements can use color attributes, but semantic color meaning should be applied carefully. Color conveys meaning and should support readability and accessibility.",
                    },
                    {
                        title: "Links & Navigation",
                        description:
                            "Use the <a> tag to create hyperlinks. Links can navigate within the page or to external resources. Ensure links are clear and descriptive for better UX.",
                    },
                    {
                        title: "Images & Media Embedding",
                        description:
                            "HTML allows embedding images, videos, and audio using <img>, <video>, and <audio> tags. Always provide descriptive alt text for accessibility.",
                    },
                    {
                        title: "Image Accessibility (alt text & SEO)",
                        description:
                            "Alt text describes images to users with visual impairments and helps search engines understand content. Always include meaningful alt attributes.",
                    },
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
                    {
                        title: "Ordered & Unordered Lists",
                        description:
                            "Use <ul> for unordered lists and <ol> for ordered lists. Lists organize content clearly and improve readability.",
                    },
                    {
                        title: "Tables for Structured Data",
                        description:
                            "Use <table> to present structured data in rows and columns. Include <thead>, <tbody>, and <th> for clarity and accessibility.",
                    },
                    {
                        title: "Forms & User Input",
                        description:
                            "Forms (<form>) allow users to submit data. Use input elements appropriately and organize fields logically.",
                    },
                    {
                        title: "HTML Input Types",
                        description:
                            "HTML provides input types like text, email, number, password, and date. Choosing the correct type improves usability and validation.",
                    },
                    {
                        title: "Form Labels, Validation & Accessibility",
                        description:
                            "Always pair inputs with <label> tags. Add validation messages and ARIA attributes for accessibility and better UX.",
                    },
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
                    {
                        title: "What is CSS?",
                        description:
                            "CSS (Cascading Style Sheets) defines how HTML elements are displayed on the page. It controls layout, colors, fonts, spacing, and visual styling, separating content from design.",
                    },
                    {
                        title: "CSS Syntax & Rules",
                        description:
                            "CSS rules consist of selectors and declarations. A selector targets HTML elements, while declarations inside curly braces define styles using property: value; pairs. Understanding syntax helps you write accurate styles.",
                    },
                    {
                        title: "Selectors & Targeting Elements",
                        description:
                            "Selectors let you apply styles to specific HTML elements, classes, IDs, or attributes. Examples: div, .className, #idName, [attribute='value']. Choosing the right selector ensures correct styling.",
                    },
                    {
                        title: "Specificity & Cascade",
                        description:
                            "When multiple CSS rules apply to the same element, the browser decides which one wins based on specificity and cascade rules. Inline styles override IDs, which override classes, which override elements.",
                    },
                    {
                        title: "CSS Comments & Organization",
                        description:
                            "Use /* comment */ to annotate your CSS. Organize styles logically using sections, grouping related rules, and keeping external CSS files structured for readability and maintenance.",
                    },
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
                    {
                        title: "Color Theory & Usage",
                        description:
                            "Colors impact the feel and usability of your site. Use complementary, analogous, and contrasting colors carefully. CSS supports named colors, hex codes, RGB, and HSL formats.",
                    },
                    {
                        title: "Backgrounds & Gradients",
                        description:
                            "CSS backgrounds can be solid colors, images, or gradients. Gradients can create smooth color transitions using linear-gradient() or radial-gradient().",
                    },
                    {
                        title: "Borders & Shadows",
                        description:
                            "Borders define element edges using width, style, and color. Box-shadow adds depth by casting shadows around elements, enhancing visual hierarchy.",
                    },
                    {
                        title: "Margins & Padding",
                        description:
                            "Margins create space outside elements, padding creates space inside. Proper spacing ensures content is readable and prevents overlapping elements.",
                    },
                    {
                        title: "Text Styling",
                        description:
                            "Control text using font-family, font-size, font-weight, line-height, letter-spacing, text-align, and text-decoration. Consistent typography improves readability.",
                    },
                    {
                        title: "Fonts & Readability",
                        description:
                            "Choose web-safe or custom fonts carefully. Ensure sufficient contrast, size, and spacing for accessibility and comfortable reading.",
                    },
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
                    {
                        title: "CSS Box Model",
                        description:
                            "Every element is a rectangular box: content, padding, border, and margin. Understanding the box model is essential to control element size and spacing accurately.",
                    },
                    {
                        title: "Display Property",
                        description:
                            "The display property defines how elements behave in the layout. Common values: block, inline, inline-block, flex, grid, none. Use display to control flow and layout.",
                    },
                    {
                        title: "Positioning Elements",
                        description:
                            "CSS offers position values: static, relative, absolute, fixed, sticky. Positioning determines how elements are placed in relation to the page or other elements.",
                    },
                    {
                        title: "Flexbox Layout System",
                        description:
                            "Flexbox is a one-dimensional layout system for arranging items in rows or columns. It handles alignment, spacing, and distribution of elements efficiently.",
                    },
                    {
                        title: "CSS Grid Layout",
                        description:
                            "Grid is a two-dimensional layout system. It lets you define rows and columns, place items precisely, and build complex responsive layouts with minimal code.",
                    },
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
                    {
                        title: "Media Queries",
                        description:
                            "Media queries apply different styles based on device characteristics like width, height, orientation, or resolution. Use them to adapt layouts to various screens.",
                    },
                    {
                        title: "Responsive Units (%, rem, vw, vh)",
                        description:
                            "CSS supports relative units like %, rem, vw, vh to make elements scale according to screen size. Avoid fixed units for flexible, responsive designs.",
                    },
                    {
                        title: "Mobile-First Design Principles",
                        description:
                            "Design for small screens first, then enhance for larger screens. Mobile-first ensures your content is accessible and functional on all devices.",
                    },
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
                    {
                        title: "What is JavaScript?",
                        description:
                            "JavaScript is a programming language that runs in the browser and on servers. It allows you to add behavior, interactivity, and dynamic content to web pages.",
                    },
                    {
                        title: "Variables & Constants",
                        description:
                            "Variables store data values, while constants store values that should not change. Use `let` for mutable variables and `const` for constants to manage data effectively.",
                    },
                    {
                        title: "JavaScript Data Types",
                        description:
                            "JavaScript has several data types including numbers, strings, booleans, null, undefined, objects, and arrays. Understanding data types helps prevent errors and ensures proper operations.",
                    },
                    {
                        title: "Operators & Expressions",
                        description:
                            "Operators perform actions on values (e.g., +, -, *, /, %, ===). Expressions combine values and operators to compute results. Use them to manipulate data in your code.",
                    },
                    {
                        title: "Comments & Code Readability",
                        description:
                            "Use `//` for single-line and `/* ... */` for multi-line comments. Writing readable code with comments improves collaboration and maintainability.",
                    },
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
                    {
                        title: "Conditional Statements (if/else)",
                        description:
                            "Conditional statements let your code make decisions. Use `if`, `else if`, and `else` to execute different blocks depending on conditions.",
                    },
                    {
                        title: "Loops (for, while)",
                        description:
                            "Loops execute code repeatedly. `for` loops iterate a known number of times, `while` loops iterate as long as a condition is true. Loops help automate repetitive tasks.",
                    },
                    {
                        title: "Logical Operators",
                        description:
                            "Logical operators (`&&`, `||`, `!`) combine or invert conditions. They allow complex decision-making in conditional statements and loops.",
                    },
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
                    {
                        title: "Functions & Reusability",
                        description:
                            "Functions are reusable blocks of code that perform a specific task. They help organize logic, reduce repetition, and make your code more modular.",
                    },
                    {
                        title: "Parameters & Return Values",
                        description:
                            "Functions can accept inputs called parameters and can return outputs using the `return` keyword. This allows flexible and dynamic functionality.",
                    },
                    {
                        title: "Arrays & Collections",
                        description:
                            "Arrays store multiple values in an ordered list. They allow iteration, manipulation, and storage of related data efficiently.",
                    },
                    {
                        title: "Objects & Data Modeling",
                        description:
                            "Objects store related data in key-value pairs. Use objects to represent real-world entities and model structured data in your applications.",
                    },
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
                    {
                        title: "Events & Event Listeners",
                        description:
                            "Events are actions like clicks, typing, or page loads. Event listeners let you run code in response to events, making pages interactive.",
                    },
                    {
                        title: "DOM Selection Methods",
                        description:
                            "The DOM (Document Object Model) represents your HTML as objects. Use methods like `getElementById`, `querySelector`, and `getElementsByClassName` to select elements.",
                    },
                    {
                        title: "DOM Manipulation",
                        description:
                            "Manipulate DOM elements by changing text, styles, attributes, or adding/removing nodes. This makes your webpage dynamic and responsive to user actions.",
                    },
                    {
                        title: "Basic Error Handling",
                        description:
                            "Use `try`, `catch`, and `finally` to handle errors gracefully. Error handling prevents crashes and provides feedback to users.",
                    },
                    {
                        title: "Introduction to ES6 Features",
                        description:
                            "ES6 introduced modern JavaScript features: arrow functions, template literals, let/const, destructuring, classes, and modules. These features make coding cleaner and more efficient.",
                    },
                ],
            },
        ],
    },
];


export { courses }