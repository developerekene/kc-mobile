const newCourseArray = [
  {
    color: "#E0E7FF",
    description: "Build and style modern websites using structured HTML and powerful CSS.",
    estimatedTime: "18–24 hours",
    id: "html-css",
    intro: "HTML and CSS are the core building blocks of the web. HTML provides structure while CSS controls layout and design. In this course, you’ll learn how to create well-structured, accessible web pages and style them into responsive, visually appealing websites that work across devices.",
    level: "Beginner",
    title: "HTML & CSS",
    modules: [
      {
        id: "html-css-module-1",
        title: "Getting Started",
        summary: "Develop a solid foundation in how the web works and learn to build structured, standards-compliant webpages using HTML. This module introduces core web concepts, essential HTML syntax, and practical skills needed to create and debug your first webpage.",
        topics: [
          {
            title: "How the Web Works",
            description: "Understand the full lifecycle of how web pages are delivered, including the roles of browsers, servers, DNS, and HTTP/HTTPS protocols.",
            keyPoints: [
              "Client-server architecture and request-response cycle",
              "Role of browsers in parsing and rendering HTML/CSS",
              "DNS resolution and how domain names map to IP addresses",
              "Difference between static and dynamic content",
              "Introduction to network requests and response status codes"
            ],
            content: `
          ### The Big Picture
          The web operates on a **client-server model**. When you visit a website, your browser (the client) communicates with a server to request and retrieve content.
          
          ### Step-by-Step: What Happens When You Visit a Website
          1. You enter a URL into your browser (e.g., https://example.com)
          2. The browser performs a **DNS lookup** to find the server’s IP address
          3. A request is sent using **HTTP or HTTPS**
          4. The server processes the request and sends back a response (HTML, CSS, JavaScript)
          5. The browser parses the response and renders the page visually
          
          ### Key Components Explained
          
          **Browser (Client):**
          - Sends requests to servers
          - Parses HTML into a DOM (Document Object Model)
          - Applies CSS and executes JavaScript
          - Renders the final page you see
          
          **Server:**
          - Stores website files or runs applications
          - Handles incoming requests
          - Sends responses back to the browser
          
          **HTTP / HTTPS:**
          - Protocols used for communication
          - HTTPS is secure (encrypted using SSL/TLS)
          - Common methods: GET, POST
          
          **DNS (Domain Name System):**
          - Translates human-readable domain names into IP addresses
          - Example: example.com → 93.184.216.34
          
          ### Static vs Dynamic Content
          - **Static:** Pre-built files sent as-is (HTML pages)
          - **Dynamic:** Content generated on demand (e.g., user dashboards, search results)
          
          ### Response Status Codes
          - 200 → Success
          - 404 → Not Found
          - 500 → Server Error
          
          ### How Browsers Render Pages
          - HTML is parsed into the DOM
          - CSS is parsed into the CSSOM
          - These are combined to form the render tree
          - The browser paints pixels to the screen
          
          ### Why This Matters (Professional Insight)
          Understanding this flow helps you:
          - Debug slow or broken websites
          - Optimize performance
          - Understand frontend/backend interactions
          - Work effectively with APIs and modern frameworks
          `,
            practical: "Open browser DevTools → Network tab → reload a webpage and analyze request timings, file types, and status codes. Identify which resources load first and which take the longest."
          },
          {
            title: "Introduction to HTML",
            description: "Learn the fundamentals of HTML and how it is used to structure content on the web.",
            keyPoints: [
              "What HTML is and how it differs from programming languages",
              "Understanding elements, tags, and attributes",
              "Proper nesting and document hierarchy",
              "Inline vs block-level elements",
              "Introduction to semantic HTML and why it matters"
            ],
            practical: "Create simple HTML snippets using common elements like headings, paragraphs, and links."
          },
          {
            title: "Basic Document Structure",
            description: "Explore the standard HTML document structure and understand how browsers interpret it.",
            keyPoints: [
              "Purpose of <!DOCTYPE html> and standards mode",
              "Structure and role of <html>, <head>, and <body>",
              "Importance of metadata (charset, viewport, title)",
              "How browsers parse and construct the DOM",
              "Common mistakes that lead to rendering issues"
            ],
            practical: "Build a clean HTML boilerplate from scratch and validate it using an online validator."
          },
          {
            title: "Text Elements",
            description: "Use HTML text elements to create well-structured, readable, and accessible content.",
            keyPoints: [
              "Using headings (h1–h6) correctly for hierarchy",
              "Working with paragraphs and text formatting tags",
              "Creating ordered and unordered lists",
              "Differences between <strong>, <em>, and purely visual tags",
              "Accessibility considerations for text structure"
            ],
            practical: "Convert a plain text document into a properly structured HTML page using semantic text elements."
          },
          {
            title: "Your First Webpage",
            description: "Apply your knowledge to build, run, and debug your first complete HTML webpage.",
            keyPoints: [
              "Setting up a basic project with an index.html file",
              "Writing and organizing HTML content",
              "Opening and testing pages in different browsers",
              "Using DevTools to inspect and debug elements",
              "Validating HTML and identifying structural issues"
            ],
            practical: "Build a personal webpage that includes a title, introduction, and a list of interests, then test it across multiple browsers."
          }
        ],
        challengePrompt: "A simple webpage displays differently across browsers. How would you identify whether the issue lies in structure, standards, or browser behavior?",
        challengeGuidance: [
          "Validate the HTML structure using a standard validator",
          "Check for correct DOCTYPE declaration and encoding",
          "Compare rendering across multiple browsers",
          "Use DevTools to inspect DOM and layout differences",
          "Identify any browser-specific styling or default behavior differences"
        ]
      },
      {
        id: "html-css-module-2",
        title: "Core Elements",
        summary: "Explore the essential HTML elements that give structure and meaning to content.",
        topics: [
          {
            title: "Semantic HTML",
            description: "Learn the importance of meaningful tags for accessibility and SEO."
          },
          {
            title: "Page Layout Elements",
            description: "Use header, nav, main, section, and footer to structure pages."
          },
          {
            title: "Lists and Links",
            description: "Create ordered, unordered lists and navigation links."
          },
          {
            title: "Images and Media",
            description: "Add images and understand the importance of alt text."
          },
          {
            title: "Accessibility Basics",
            description: "Ensure your HTML is usable by all users, including those with disabilities."
          }
        ],
        challengePrompt: "A webpage feels cluttered and confusing. Which semantic elements could improve clarity and readability?"
      },
      {
        id: "html-css-module-3",
        title: "Styling with CSS",
        summary: "Learn how to apply styles to HTML elements using CSS.",
        topics: [
          {
            title: "Introduction to CSS",
            description: "Understand how CSS works and how it connects to HTML."
          },
          {
            title: "Selectors",
            description: "Target elements using class, id, and element selectors."
          },
          {
            title: "Colors and Typography",
            description: "Style text using fonts, colors, and spacing."
          },
          {
            title: "Box Model",
            description: "Understand margin, padding, borders, and how elements take up space."
          },
          {
            title: "Applying Styles",
            description: "Learn inline, internal, and external CSS methods."
          }
        ],
        challengePrompt: "Users say a page looks visually dull. Before adding complex styles, what CSS basics would you apply to improve clarity and design?"
      },
      {
        id: "html-css-module-4",
        title: "Layout & Responsiveness",
        summary: "Build flexible and responsive layouts using modern CSS techniques.",
        topics: [
          {
            title: "Display Properties",
            description: "Understand block, inline, and inline-block elements."
          },
          {
            title: "Flexbox",
            description: "Create flexible layouts for aligning and distributing space."
          },
          {
            title: "CSS Grid",
            description: "Design complex layouts with rows and columns."
          },
          {
            title: "Positioning",
            description: "Control element placement using relative, absolute, and fixed positioning."
          },
          {
            title: "Media Queries",
            description: "Make your website responsive across different screen sizes."
          }
        ],
        challengePrompt: "Your layout breaks on mobile devices. How would you use Flexbox, Grid, and media queries to fix responsiveness?"
      }
    ],
    outcomes: [
      "Understand how web pages are structured and styled",
      "Write clean, semantic, and accessible HTML",
      "Apply CSS to create visually appealing designs",
      "Build responsive layouts using Flexbox and Grid",
      "Create modern websites that work across devices",
      "Debug and improve existing HTML and CSS code"
    ]
  }
]

export default newCourseArray;
