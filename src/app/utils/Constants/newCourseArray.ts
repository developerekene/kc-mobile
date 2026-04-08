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
          # The Big Picture
          The web operates on a **client-server model**. When you visit a website, your browser (the client) communicates with a server to request and retrieve content.
          
          # Step-by-Step: What Happens When You Visit a Website
          1. You enter a URL into your browser (e.g., https://example.com)
          2. The browser performs a **DNS lookup** to find the server’s IP address
          3. A request is sent using **HTTP or HTTPS**
          4. The server processes the request and sends back a response (HTML, CSS, JavaScript)
          5. The browser parses the response and renders the page visually
          
          # Key Components Explained
          
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
          
          # Static vs Dynamic Content
          - **Static:** Pre-built files sent as-is (HTML pages)
          - **Dynamic:** Content generated on demand (e.g., user dashboards, search results)
          
          # Response Status Codes
          - 200 → Success
          - 404 → Not Found
          - 500 → Server Error
          
          # How Browsers Render Pages
          - HTML is parsed into the DOM
          - CSS is parsed into the CSSOM
          - These are combined to form the render tree
          - The browser paints pixels to the screen
          
          # Why This Matters (Professional Insight)
          Understanding this flow helps you:
          - Debug slow or broken websites
          - Optimize performance
          - Understand frontend/backend interactions
          - Work effectively with APIs and modern frameworks
          `,
            practical: "Open browser DevTools → Network tab → reload a webpage and analyze request timings, file types, and status codes. Identify which resources load first and which take the longest."
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
            content: `
          # The Anatomy of a Webpage
          Every HTML document follows a strict, standardized tree structure. This structure tells the browser exactly how to process the page and ensures consistency across different devices.
          
          # The Essential Boilerplate
          
          ### 1. The Document Type Declaration
          The very first line of every file must be \`<!DOCTYPE html>\`. 
          - **What it does:** It isn't actually an HTML tag; it's an instruction to the browser that the document is being written in HTML5.
          - **Why it matters:** Without it, browsers may enter "Quirks Mode," where they try to emulate older, buggier rendering engines from the 90s.
          
          ### 2. The Root Element
          The \`<html>\` tag wraps the entire document. It usually includes a \`lang\` attribute (e.g., \`<html lang="en">\`) to help search engines and screen readers identify the primary language.
          
          ### 3. The Head Section (<head>)
          This is the "brain" of the document. Content here **does not** appear on the webpage itself. It contains metadata:
          - **Character Encoding:** \`<meta charset="UTF-8">\` ensures special characters display correctly.
          - **Viewport:** \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\` makes the site mobile-friendly.
          - **Title:** \`<title>\` defines the name shown on the browser tab.
          
          ### 4. The Body Section (<body>)
          This is the "heart" of the document. Everything inside here is what the user actually sees: text, images, buttons, and videos.
          
          # How Browsers Read Your Code
          When a browser loads your HTML, it creates a **DOM (Document Object Model)**.
          - It sees the document as a tree of "nodes."
          - \`<html>\` is the root.
          - \`<head>\` and \`<body>\` are the main branches (children).
          - Elements inside the body are further sub-branches.
          
          # Why This Matters (Professional Insight)
          A broken document structure is the #1 cause of "invisible" bugs. 
          - If you accidentally put a \`<link>\` tag in the \`<body>\` or a \`<div>\` in the \`<head>\`, the browser will try to "fix" it for you, but this often leads to layout shifts, slow loading times, or broken SEO. 
          - Always validate your structure to ensure the browser doesn't have to guess your intent.
            `,
            practical: "Create a file named index.html. Type '!' and hit Tab (if using VS Code) to generate the boilerplate. Manually delete the <body> and try to add a paragraph inside the <head>—then open it in a browser and use Inspect Element to see how the browser automatically moved it back to the body."
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
            content: `
          # The Anatomy of a Webpage
          Every HTML document follows a strict, standardized tree structure. This structure acts as a set of instructions that tells the browser exactly how to process the page and ensures your content looks consistent across different devices.
          
          
          
          # The Essential Boilerplate
          
          ### 1. The Document Type Declaration
          The very first line of every file must be \`<!DOCTYPE html>\`. 
          - **What it does:** It isn't actually an HTML tag; it's a "preamble" that tells the browser the document is being written in modern HTML5.
          - **Why it matters:** Without it, browsers enter **"Quirks Mode,"** where they try to emulate older, buggier rendering engines from the 1990s, often breaking modern layouts.
          
          ### 2. The Root Element
          The \`<html>\` tag wraps everything else. It is the "parent" of the entire document. We usually include a \`lang\` attribute (e.g., \`<html lang="en">\`) to help search engines and screen readers identify the primary language.
          
          ### 3. The Head Section (<head>)
          This is the "brain" of the document. Content here **does not** appear on the webpage itself. It contains metadata:
          - **Character Encoding:** \`<meta charset="UTF-8">\` ensures symbols and emojis display correctly.
          - **Viewport:** \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\` is critical for mobile responsiveness—it tells the browser to match the site's width to the device's screen.
          - **Title:** \`<title>\` defines the name shown on the browser tab.
          
          ### 4. The Body Section (<body>)
          This is the "heart" of the document. Everything inside here is what the user actually sees: text, images, buttons, and videos.
          
          # How Browsers Read Your Code: The DOM
          When a browser loads your HTML, it creates a **DOM (Document Object Model)**.
          - It translates your text code into a **Tree Structure**.
          - \`<html>\` is the **Root**.
          - \`<head>\` and \`<body>\` are **Child nodes**.
          - Elements inside the body (like headings or paragraphs) are further sub-branches.
          
          
          
          # Why This Matters (Professional Insight)
          A broken document structure is the most common cause of "ghost bugs." 
          - If you accidentally put a \`<link>\` tag in the \`<body>\` or a \`<div>\` in the \`<head>\`, the browser will try to "autocorrect" your mistake.
          - This "silent fix" often causes **Layout Shifts**, where elements jump around as the page loads, or prevents search engines from indexing your page correctly.
          - Always use a validator to ensure your "skeleton" is perfect before you start adding "flesh" (content) and "clothes" (CSS).
            `,
            practical: "Create a file named index.html. Type '!' and hit Tab (if using VS Code) to generate the boilerplate. Manually move the <title> tag into the <body> and observe how the browser tab name changes (or doesn't). Then, use the browser's 'Inspect Element' tool to see how the browser tried to restructure your code."
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
            content: `
          # Content is King
          In the world of web development, content is almost always text-based. HTML provides a specific set of tags to give that text meaning, ensuring that both users and search engines can distinguish between a major headline, a side note, or a list of items.
          
          # Organizing with Headings
          HTML offers six levels of section headings. \`<h1>\` is the most important, and \`<h6>\` is the least.
          - **Hierarchy Matters:** You should never skip levels (e.g., jumping from \`<h1>\` to \`<h3>\`). Think of it like a book outline:
            - \`<h1>\`: The Book Title (Only use one per page)
            - \`<h2>\`: Chapter Titles
            - \`<h3>\`: Sub-sections within a chapter
          
          # Paragraphs and Breaks
          - **The Paragraph Tag (\`<p>\`):** Wraps a block of text. Browsers automatically add some space (margin) before and after a paragraph.
          - **The Line Break (\`<br>\`):** Creates a new line without starting a new paragraph. Use this sparingly (e.g., for addresses or poems).
          
          # Formatting with Meaning (Semantics)
          It is tempting to use tags just to change how text looks, but in modern HTML, we use tags to describe **importance**:
          - \`<strong>\`: For content of great importance (usually rendered as **bold**).
          - \`<em>\`: For emphasized text (usually rendered as *italic*).
          - **Note:** Avoid using \`<b>\` and \`<i>\` as they are purely visual and provide no information to screen readers.
          
          # Lists: Ordered vs. Unordered
          Lists are essential for grouping related pieces of information.
          1. **Unordered (\`<ul>\`):** Used for items where the sequence doesn't matter (bullet points).
          2. **Ordered (\`<ol>\`):** Used for sequences, like recipes or rankings (numbered 1, 2, 3).
          3. **List Items (\`<li>\`):** Every item inside a list must be wrapped in this tag.
          
          # Why This Matters (Professional Insight)
          Proper text structuring is the backbone of **Web Accessibility (A11y)**. 
          - Users with visual impairments often use screen readers to "scan" a page by jumping from heading to heading. If you use a \`<div>\` and style it to look like a heading instead of using an actual \`<h2>\` tag, those users lose their ability to navigate your site.
          - Clean text structure also improves your **SEO ranking**, as Google uses your headings to understand what your page is actually about.
            `,
            practical: "Take a raw news article text and convert it into HTML. Use one \`<h1>\` for the headline, \`<h2>\` for sub-headers, \`<strong>\` for key terms, and an unordered list for the 'key takeaways' section."
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
            content: `
          # From Code to Reality
          This is the milestone where your code leaves the editor and becomes a live document. Building your first webpage involves a specific workflow: creating the file, writing the structure, and using the browser's "Developer Tools" to ensure everything is working as intended.
          
          # The Development Workflow
          
          ### 1. Project Setup
          Web projects start with a folder. Inside that folder, the main file is almost always named \`index.html\`.
          - **Why index?** Web servers are configured to look for "index" as the default entry point of any directory.
          - **Extension:** Ensure the file ends in \`.html\` so your operating system and editor recognize it.
          
          ### 2. Organizing Content
          A professional webpage follows a logical flow. You should start with a header, move to the main content, and end with a footer. 
          - Use \`<h1>\` for the primary subject.
          - Use \`<div>\` or \`<section>\` tags to group related items.
          - Keep your code indented. Proper indentation doesn't change how the page looks to the user, but it is vital for you to read and debug your own hierarchy.
          
          # Viewing and Testing
          To view your page, you can simply double-click the file to open it in a browser, or use a "Live Server" extension in your editor.
          - **Cross-Browser Testing:** A page might look perfect in Chrome but slightly "off" in Safari or Firefox. Always check at least two different browser engines.
          
          # The Developer's Secret Weapon: DevTools
          Every modern browser includes **Developer Tools** (usually accessed by right-clicking and selecting **Inspect**).
          
          
          
          - **The Elements Tab:** Shows you the live DOM. You can temporarily change text or CSS values here to see how they look without saving the file.
          - **The Console:** Alerts you to errors, such as missing images or syntax mistakes.
          
          # Validation: The "Spell-Check" for HTML
          Browsers are "forgiving"—if you forget to close a tag, the browser will try to guess where it ends. However, this "guesswork" can lead to inconsistent layouts.
          - Use the **W3C Markup Validation Service** to upload your file.
          - It will point out exactly which line has a structural error, such as a nested tag that wasn't closed.
          
          # Why This Matters (Professional Insight)
          The ability to **debug** is what separates a student from a developer. 
          - Most of your time in the real world isn't spent writing new code; it's spent "inspecting" existing code to find why a button isn't clicking or an image is overlapping text. 
          - Master the **Inspect Element** tool early—it is the single most important skill you will use daily as a frontend engineer.
            `,
            practical: "Build a 'Personal Profile' page. Include a header with your name, a section for a short bio, and an unordered list of your top 3 skills. Once finished, open your browser's DevTools, find your bio in the Elements tab, and try changing your name directly in the browser to see it update instantly."
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
        summary: "Master the essential HTML elements that define the skeleton of a modern website. This module moves beyond basic text, teaching you how to use semantic landmarks, structured lists, interactive links, and accessible media to create meaningful, high-quality web content.",
        topics: [
          {
            title: "Semantic HTML",
            description: "Learn the importance of meaningful tags for accessibility and SEO.",
            keyPoints: [
              "Difference between structural tags and semantic tags",
              "How search engines (SEO) interpret semantic meaning",
              "The impact of semantics on screen readers",
              "Moving away from 'Div-itis' (overusing generic containers)"
            ],
            content: `
      # Meaning Over Appearance
      In the early days of web development, developers used \`<div>\` tags for everything. While a \`<div>\` can look like a header or a footer to a human user once styled with CSS, the computer sees it as a generic, meaningless box. **Semantic HTML** uses tags that describe their purpose.
      
      
      
      ### Why Semantics Matter
      1. **Accessibility:** Screen readers use these tags to allow users to skip directly to the "main" content or "navigation."
      2. **SEO:** Google prioritizes content found within semantic tags like \`<article>\` or \`<main>\`.
      3. **Maintainability:** It is much easier for a developer to read \`<nav>\` than \`<div class="top-menu-bar-navigation">\`.
      
      ### Common Semantic Tags
      - \`<header>\`: Introductory content or navigation links.
      - \`<main>\`: The unique, central content of the document.
      - \`<section>\`: A generic standalone section of a document.
      - \`<article>\`: A self-contained composition (like a blog post or news story).
      - \`<aside>\`: Content indirectly related to the main content (like a sidebar).
      - \`<footer>\`: Contains copyright information, contact details, or sitemaps.
            `,
            practical: "Visit your favorite news site. Right-click and 'Inspect' the page. Try to find at least three semantic tags (like <article>, <nav>, or <aside>) in the source code."
          },
          {
            title: "Page Layout Elements",
            description: "Use header, nav, main, section, and footer to structure pages.",
            keyPoints: [
              "Defining the 'Top-Level' structure of a site",
              "Proper use of the <nav> element for primary links",
              "Distinguishing between <section> and <article>",
              "When to use <aside> for sidebars and callouts"
            ],
            content: `
      # Structuring the Skeleton
      Every modern website follows a fairly standard layout pattern. By using the correct HTML5 layout elements, you tell the browser exactly how your page is organized.
      
      
      
      ### The Layout Hierarchy
      - **Header (<header>):** Usually contains the logo and the site title.
      - **Navigation (<nav>):** Wraps the primary links that take you to different pages.
      - **Main Content (<main>):** There should only be **one** \`<main>\` tag per page. It holds the content that makes that specific page unique.
      - **The Content Block (<section> & <article>):** Use \`<section>\` for thematic groupings (like "Features" or "Contact Us") and \`<article>\` for content that makes sense on its own (like a forum post).
      - **The Sidebar (<aside>):** Used for ads, quotes, or links to related articles.
      - **Footer (<footer>):** Typically contains "About" links and legal disclaimers.
            `,
            practical: "Draw a simple wireframe of a blog page on paper, then write out the HTML tags you would use to wrap each section you drew."
          },
          {
            title: "Lists and Links",
            description: "Create ordered, unordered lists and navigation links.",
            keyPoints: [
              "Creating bulleted lists (<ul>) and numbered lists (<ol>)",
              "The relationship between the list parent and list items (<li>)",
              "Building hyperlinks with the anchor (<a>) tag",
              "Understanding 'href' and 'target' attributes"
            ],
            content: `
      # Connecting Content
      Links are the "connective tissue" of the internet. Without them, we would have no "web." Lists, on the other hand, provide the most basic form of data organization.
      
      ### 1. Lists
      - **Unordered List (<ul>):** Used when the order doesn't matter (e.g., a grocery list).
      - **Ordered List (<ol>):** Used for sequences (e.g., a "Top 10" list or a recipe).
      - **List Items (<li>):** Every item in a list must be wrapped in this tag.
      
      ### 2. Links (The Anchor Tag)
      The \`<a>\` tag defines a hyperlink. 
      - **href:** (Hypertext Reference) This attribute tells the browser where to go.
      - **target="_blank":** This attribute tells the browser to open the link in a new tab.
      
      \`\`\`html
      <a href="https://google.com" target="_blank">Search the Web</a>
      \`\`\`
            `,
            practical: "Create an unordered list of your three favorite websites, and make each item a clickable link that opens in a new tab."
          },
          {
            title: "Images and Media",
            description: "Add images and understand the importance of alt text.",
            keyPoints: [
              "Using the <img> tag and its self-closing nature",
              "Understanding 'src' (source) and 'alt' (alternative text)",
              "Responsive image basics (width and height)",
              "Introduction to <video> and <audio> elements"
            ],
            content: `
      # Visuals and Accessibility
      Images bring a webpage to life, but they must be implemented carefully to ensure they don't slow down the site or exclude users with visual impairments.
      
      ### The <img> Tag
      The image tag is "self-closing," meaning it doesn't need a \`</img>\` closing tag. 
      - **src:** The file path to your image (local or URL).
      - **alt:** A text description of the image. **This is mandatory for accessibility.** If the image doesn't load, or if a user is blind, this text explains what the image is.
      
      
      
      ### Modern Media
      HTML5 also introduced native support for video and audio:
      - **<video>:** Supports attributes like \`controls\`, \`autoplay\`, and \`loop\`.
      - **<audio>:** Allows for simple music or podcast players without third-party plugins.
            `,
            practical: "Find an image online, copy its URL, and display it on your page. Write an 'alt' description that accurately describes what is happening in the photo."
          },
          {
            title: "Accessibility (A11y) Basics",
            description: "Ensure your HTML is usable by all users, including those with disabilities.",
            keyPoints: [
              "Introduction to the A11y (Accessibility) movement",
              "Keyboard navigation (Tab-ability)",
              "Color contrast and font sizing for readability",
              "Form labels and ARIA roles"
            ],
            content: `
      # The Inclusive Web
      Web accessibility means that websites, tools, and technologies are designed so that people with disabilities can use them.
      
      ### Core Accessibility Principles
      1. **Perceivable:** Users must be able to see or hear the content (Alt text for images).
      2. **Operable:** Users must be able to navigate the page (Keyboard navigation).
      3. **Understandable:** The content and UI must be clear.
      4. **Robust:** The site should work across different browsers and assistive technologies.
      
      ### Simple Steps for Better A11y
      - Never use color alone to convey meaning (e.g., "click the red button").
      - Ensure all interactive elements (links, buttons) can be reached using only the **Tab** key.
      - Always use semantic tags; they provide "hooks" for screen readers.
            `,
            practical: "Put your mouse aside. Try to navigate your favorite website using only the 'Tab', 'Shift+Tab', and 'Enter' keys. Can you reach every link?"
          }
        ],
        challengePrompt: "A webpage feels cluttered and confusing. Which semantic elements could improve clarity and readability?",
        challengeGuidance: [
          "Identify the 'hero' or 'intro' area and wrap it in a <header>.",
          "Group the primary links into a <nav> container.",
          "Move secondary information (like 'recent posts') into an <aside> sidebar.",
          "Ensure the main bulk of text is wrapped in <main> and sub-divided with <section> tags."
        ]
      },
      {
        id: "html-css-module-3",
        title: "Styling with CSS",
        summary: "Transform plain HTML into visually engaging experiences. This module introduces Cascading Style Sheets (CSS), covering everything from targeting elements with precision to mastering the Box Model—the foundation of all web layout and design.",
        topics: [
          {
            title: "Introduction to CSS",
            description: "Understand how CSS works and how it connects to HTML.",
            keyPoints: [
              "The role of CSS in the 'separation of concerns' (content vs. style)",
              "Understanding the 'Cascading' nature of CSS",
              "Syntax basics: Selectors, Properties, and Values",
              "How browsers interpret CSS to create the CSSOM"
            ],
            content: `
      # Bringing Color to the Skeleton
      If HTML is the skeleton of a webpage, **CSS (Cascading Style Sheets)** is the skin, clothes, and makeup. CSS allows you to control exactly how HTML elements look—from their color and font to their position on the screen.
      
      ### The Rule Set
      A CSS "rule" consists of a **selector** and a **declaration block**.
      - **Selector:** Points to the HTML element you want to style.
      - **Declaration:** Contains a property and a value, separated by a colon.
      
      
      
      ### What does "Cascading" mean?
      The "Cascade" is the algorithm browsers use to decide which style wins when multiple rules apply to the same element. It follows a hierarchy based on:
      1. **Importance:** (e.g., \`!important\` tags)
      2. **Specificity:** How specific the selector is (an ID is more specific than a Class).
      3. **Source Order:** If everything else is equal, the last rule written is the one that is applied.
            `,
            practical: "Create a simple HTML paragraph and try to change its color to red using a CSS rule. Then, write a second rule changing it to blue and observe which color 'wins' based on the order."
          },
          {
            title: "Selectors",
            description: "Target elements using class, id, and element selectors.",
            keyPoints: [
              "Element selectors (target all <p>, <h1>, etc.)",
              "Class selectors (.) for reusable styles",
              "ID selectors (#) for unique elements",
              "Grouping selectors and basic combinators"
            ],
            content: `
      # Targeting with Precision
      To style an element, you first have to "find" it. CSS provides several ways to target HTML elements depending on how broad or specific you want to be.
      
      ### 1. Element Selector
      Targets every instance of a specific tag.
      - **Example:** \`p { color: grey; }\` (Styles all paragraphs).
      
      ### 2. Class Selector (.)
      Used for styles you want to reuse across many different elements.
      - **Example:** \`.highlight { background: yellow; }\` (Styles anything with \`class="highlight"\`).
      
      ### 3. ID Selector (#)
      Used to target one unique element. An ID should only appear **once** per page.
      - **Example:** \`#main-button { width: 200px; }\`.
      
      
      
      ### Best Practice
      In professional development, **Classes** are used for 90% of styling. This keeps your CSS reusable and prevents "specificity wars" where styles become impossible to override.
            `,
            practical: "Build a list of items where the first item has a class of 'first' and the last has an ID of 'final'. Apply different colors to each using the correct CSS selectors."
          },
          {
            title: "Colors and Typography",
            description: "Style text using fonts, colors, and spacing.",
            keyPoints: [
              "Color systems: Keywords, Hex codes, and RGB/RGBA",
              "Font-family and web-safe fonts",
              "Text alignment, line-height, and letter-spacing",
              "Font-weight and font-style"
            ],
            content: `
      # Design Foundations
      Typography and color are the most powerful tools in your design kit. They set the "mood" of your website and determine how readable your content is.
      
      ### Color Systems
      - **Hex Codes:** \`#FF5733\` (Professional standard).
      - **RGB:** \`rgb(255, 87, 51)\` (Red, Green, Blue).
      - **RGBA:** \`rgba(255, 87, 51, 0.5)\` (The 'A' stands for Alpha, which controls transparency).
      
      ### Typography Basics
      - **font-family:** Defines the typeface. Always provide a "fallback" font like \`sans-serif\`.
      - **line-height:** Adds space between lines of text, making long paragraphs much easier to read.
      - **text-align:** Controls whether text is left, right, center, or justified.
      
      ### Professional Insight
      Good design is 90% typography. Increasing your \`line-height\` to 1.5 and choosing a clean, modern font-family can instantly make a "dull" page look like a premium product.
            `,
            practical: "Find a Google Font you like, import it into your project, and apply it to your headings. Experiment with 'letter-spacing' to see how it changes the feel of your titles."
          },
          {
            title: "Box Model",
            description: "Understand margin, padding, borders, and how elements take up space.",
            keyPoints: [
              "The components: Content, Padding, Border, and Margin",
              "Understanding how width and height are calculated",
              "Margin collapsing and auto-margins",
              "The 'box-sizing: border-box' reset"
            ],
            content: `
      # The Most Important Concept in CSS
      Every single element on a webpage is actually a rectangular box. The **Box Model** describes the layers of space that make up these boxes.
      
      
      
      ### The Four Layers
      1. **Content:** The actual text or image.
      2. **Padding:** Transparent space *inside* the border. It pushes the content away from the edges of the box.
      3. **Border:** A line that goes around the padding and content.
      4. **Margin:** Space *outside* the border. It pushes other elements away from this box.
      
      ### The 'border-box' Trick
      By default, adding padding makes an element wider than the width you set. To fix this, pros use:
      \`\`\`css
      * { box-sizing: border-box; }
      \`\`\`
      This ensures the width you set includes the padding and border, making layouts much more predictable.
            `,
            practical: "Create two 'div' boxes. Give one 'padding' and the other 'margin'. Use 'Inspect Element' in your browser to hover over the boxes and see the colored overlays showing exactly where the padding and margin are."
          },
          {
            title: "Applying Styles",
            description: "Learn inline, internal, and external CSS methods.",
            keyPoints: [
              "Inline styles (using the 'style' attribute)",
              "Internal CSS (using the <style> tag in <head>)",
              "External CSS (linking an .css file)",
              "Pros and cons of each method"
            ],
            content: `
      # Where to Write Your CSS
      There are three ways to add CSS to your HTML. While they all work, one is the clear winner for professional projects.
      
      ### 1. Inline Styles
      Written directly inside the HTML tag. 
      - **Example:** \`<p style="color: blue;">Hello</p>\`
      - **Verdict:** Use only for quick testing. It makes HTML messy and hard to maintain.
      
      ### 2. Internal CSS
      Written inside a \`<style>\` block in the HTML \`<head>\`.
      - **Verdict:** Good for single-page projects, but becomes overwhelming for large sites.
      
      ### 3. External CSS (The Standard)
      Written in a separate \`.css\` file and linked in the HTML \`<head>\`:
      \`<link rel="stylesheet" href="style.css">\`
      - **Verdict:** This is the professional standard. It allows you to style 100 different pages using just one CSS file.
            `,
            practical: "Move all the styles you've written so far into a file called 'style.css' and link it to your HTML. Verify that your page still looks the same."
          }
        ],
        challengePrompt: "Users say a page looks visually dull. Before adding complex styles, what CSS basics would you apply to improve clarity and design?",
        challengeGuidance: [
          "Increase 'line-height' for better readability.",
          "Add 'padding' to containers so text doesn't touch the edges.",
          "Use a consistent 'font-family' hierarchy (different styles for headings and body).",
          "Use 'margin' to create balanced white space between sections.",
          "Apply a subtle 'border' or 'background-color' to distinguish different content cards."
        ]
      },
      {
        id: "html-css-module-4",
        title: "Layout & Responsiveness",
        summary: "Master the art of modern web layout. This module takes you from basic element positioning to advanced tools like Flexbox and CSS Grid, ending with Media Queries to ensure your designs look flawless on everything from a smartphone to a wide-screen monitor.",
        topics: [
          {
            title: "Display Properties",
            description: "Understand block, inline, and inline-block elements.",
            keyPoints: [
              "Default display behaviors of HTML elements",
              "The difference between block and inline flow",
              "Using 'inline-block' for side-by-side elements with dimensions",
              "Introduction to 'display: none' for toggling visibility"
            ],
            content: `
      # The Flow of the Page
      Before moving to advanced layouts, you must understand how elements naturally sit next to each other. The \`display\` property is the most fundamental tool for controlling this behavior.
      
      
      
      ### The Three Pillars of Display
      1. **Block:** Elements like \`<div>\` and \`<h1>\` take up the full width and start on a new line. You can set their width and height.
      2. **Inline:** Elements like \`<span>\` and \`<a>\` only take up as much space as their content. They stay on the same line but **ignore** width and height settings.
      3. **Inline-Block:** The best of both worlds. Elements stay on the same line (like inline) but allow you to set a width and height (like block).
      
      ### Hiding Elements
      Setting \`display: none;\` removes an element from the page entirely—it won't take up any space, as if it were never in the HTML.
            `,
            practical: "Create three <div> elements and change their display property to 'inline'. Observe how they move from being stacked to sitting on one line."
          },
          {
            title: "Flexbox",
            description: "Create flexible layouts for aligning and distributing space.",
            keyPoints: [
              "The Flex Container vs. Flex Items",
              "Main axis and Cross axis alignment",
              "Justify-content and Align-items",
              "Flex-direction and responsive wrapping"
            ],
            content: `
      # One-Dimensional Layouts
      **Flexbox** (Flexible Box Module) was designed to lay out items in a single row or column. It is the gold standard for navigation bars, centered content, and equal-height cards.
      
      
      
      ### Core Concepts
      - **justify-content:** Aligns items along the horizontal line (e.g., center, space-between).
      - **align-items:** Aligns items along the vertical line (e.g., center, stretch).
      - **flex-direction:** Switches the layout from a row to a column.
      
      ### Why Use Flexbox?
      Flexbox calculates the space between items automatically. If you have three buttons and want them perfectly spaced out, Flexbox handles the math for you, regardless of the screen size.
            `,
            practical: "Build a navigation bar with a logo on the left and three links on the right using 'display: flex' and 'justify-content: space-between'."
          },
          {
            title: "CSS Grid",
            description: "Design complex layouts with rows and columns.",
            keyPoints: [
              "Two-dimensional layout: Rows AND Columns",
              "Defining grid-template-columns and rows",
              "The 'fr' (fractional) unit",
              "Gap property for spacing"
            ],
            content: `
      # Two-Dimensional Layouts
      While Flexbox is for rows **or** columns, **CSS Grid** is for rows **and** columns simultaneously. Use Grid for entire page layouts or complex photo galleries.
      
      
      
      ### Grid Basics
      - **grid-template-columns:** Define how many columns you want (e.g., \`1fr 2fr 1fr\`).
      - **fr unit:** A "fraction" of the available space. It’s more flexible than using percentages.
      - **gap:** The easiest way to add space between items without using margins.
      
      ### Grid vs. Flexbox
      - Use **Flexbox** for small components (buttons in a header).
      - Use **Grid** for the "big picture" (sidebar, header, main, and footer layout).
            `,
            practical: "Create a 3x3 photo gallery using 'display: grid' and 'grid-template-columns: repeat(3, 1fr)'."
          },
          {
            title: "Positioning",
            description: "Control element placement using relative, absolute, and fixed positioning.",
            keyPoints: [
              "Static (default) vs. Relative positioning",
              "Absolute positioning relative to a parent",
              "Fixed positioning (sticky headers)",
              "The Z-Index and the stacking context"
            ],
            content: `
      # Breaking the Flow
      Sometimes you need to take an element out of the natural page flow—like a "Back to Top" button that stays in the corner or a badge on a notification icon.
      
      ### Common Positions
      1. **Relative:** Moves an element slightly without affecting the space it originally took up.
      2. **Absolute:** Places an element exactly where you want it relative to its nearest "positioned" parent. Perfect for overlaying text on images.
      3. **Fixed:** Anchors an element to the browser window. It stays in the same spot even when you scroll.
      
      ### The Z-Index
      When elements overlap, \`z-index\` determines which one is on top. A higher number moves the element closer to the user.
            `,
            practical: "Create an image inside a div. Use 'position: relative' on the div and 'position: absolute' on a small piece of text to place that text in the bottom-right corner of the image."
          },
          {
            title: "Media Queries",
            description: "Make your website responsive across different screen sizes.",
            keyPoints: [
              "The '@media' rule syntax",
              "Breakpoints for Mobile, Tablet, and Desktop",
              "Mobile-First vs. Desktop-First design",
              "Testing responsiveness in DevTools"
            ],
            content: `
      # One Website, Many Devices
      **Media Queries** are the heart of Responsive Web Design. They allow you to apply different CSS rules based on the device's screen width.
      
      
      
      ### Syntax Example
      \`\`\`css
      /* Styles for Desktop */
      .sidebar { display: block; }
      
      /* Styles for Mobile (screens smaller than 768px) */
      @media (max-width: 768px) {
        .sidebar { display: none; }
      }
      \`\`\`
      
      ### Professional Insight
      Always build **Mobile-First**. Write your base styles for a small screen first, then use media queries to add complexity as the screen gets larger. It results in cleaner code and better performance on phones.
            `,
            practical: "Write a media query that changes your website's background color when the screen width is narrower than 600px."
          }
        ],
        challengePrompt: "Your layout breaks on mobile devices. How would you use Flexbox, Grid, and media queries to fix responsiveness?",
        challengeGuidance: [
          "Switch your Flexbox 'flex-direction' from 'row' to 'column' for mobile stacking.",
          "Change 'grid-template-columns' from '1fr 1fr' (2 columns) to '1fr' (1 column) on small screens.",
          "Use a media query to hide non-essential sidebars on mobile using 'display: none'.",
          "Ensure your font sizes and padding use flexible units (like 'rem' or '%') so they scale naturally."
        ]
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
