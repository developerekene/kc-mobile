export type VideoLibrary = {
  [courseKey: string]: {
    [moduleKey: string]: string[]; // array of YouTube video IDs per topic
  };
};

export const VIDEO_LIBRARY: VideoLibrary = {
  html: {
    "getting-started": [
      "ok-plXXHlWw", // What is HTML?
      "hJHvdBlSxug", // How the web works
      "ZEZOrZLLoW0", // HTML Document structure
      "UTuW-7D7Z9M", // HTML Editors & Development Tools
      "-USAeFpVf_A", // Creating Your First HTML Page
    ],
    "core-elements": [
      "YPzFPoqwTmI", // HTML elements Explained
      "DuIr0whfFRA", // HTML Attributes & Best Practices
      "UfaDJ8QyBSM", // Headings & Content Hierarchy
      "Crh63Zed0YA", // Paragraphs & Text Flow
      "cTPzNDwxugQ", // Text Formatting & Emphasis
      "wI40AxTfbho", // Quotations & Citations
    ],
    "styling-&-media": [
      "MaLSXxwlYno", // Inline styles and when to avoid them
      "DviCC1ofgq8", // HTML Colors & Visual Meaning
      "DiSvq5SgLMI", // Links & Navigation
      "IdgeA0KanBI", // Image & Media Embedding
      "8ELxvmNm5WA", // Image Accessibilty (alt text & SEO)
    ],
    "lists,-tables-&-forms": [
      "qiT-ol-VRW0", // Ordered & Unordered Lists
      "6uA_Nc4UDS4", // Tables for structured data
      "O14Wb3N4wDQ", // Forms & User input
      "hbPly-L02n8", // HTML input Types
      "Mt-e0DpxGXE", // Form labels, validation & Accessibility
    ],
  },

  css: {
    "css-fundamentals": [
      "yfoY53QXEnI", // What is CSS
      "1PnVor36_40", // CSS Syntax & Rules
      "l1mER1bV0N0", // Selectors & Targeting Elements
      "l1mER1bV0N0", // Specificity & Cascade
      "l1mER1bV0N0", // CSS Comments & Organization
    ],
    "visual-styling": [
      "1Rs2ND1ryYc", // Color Theory & Usage
      "rg7Fvvl3taU", // Backgrounds & Gradients
      "phWxA89Dy94", // Border & Shadows
      "phWxA89Dy94", // Margins & Padding
      "phWxA89Dy94", // Text Styling
      "phWxA89Dy94", // Fonts & Readability
    ],
    "layout-systems": [
      "JJSoEo8JSnc", // CSS Box Model
      "EiNiSFIPIQE", // Dispay Property
      "srvUrASNj0s", // Positioning Elements
      "srvUrASNj0s", // Flexbox Layout System
      "srvUrASNj0s", // CSS Grid Layout
    ],
    "responsive-design": [
      "srvUrASNj0s", // Media queries
      "ZYV6dYtz4HA", // Responsive Units (%, rem, vh,vw)
      "bn-DQCifeQQ", // Mobile First Design Principles
    ],
  },

  javascript: {
    "Programing-Basics": [
      "Bry8J78Awq0", // What is Javascript
      "hdI2bqOjy3c", // Variables & Constants
      "9Ld-aOyq-GM", // Javascript Data Types
      "9Ld-aOyq-GM", // operators & Expressions
      "9Ld-aOyq-GM", // Comments & Code Readability
    ],
    "control-flow": [
      "IsG4Xd6LlsM", // Conditional statements (if/else)
      "s9wW2PpJsmQ", // Loops (for, while, do-while)
      "cuEtnrL9-H0", // Logical Operators
    ],
    "Functions-&-Data": [
      "0ik6X4DJKCc", // Functions & Reusability
      "y17RuWkWdn8", // Parameters & return values
      "wK2cBMcDTss", // Arrays & Collections
      "wK2cBMcDTss", // Objects & data modeling
    ],
    "Interactivity-dom": [
      "PoRJizbergM", // Events & event listeners
      "DHvZLI7Db8E", // DOM Selection Methods
      "V_Kr9OSfDeU", // Dom manipulation
      "V_Kr9OSfDeU", // Basic Error Handling
      "V_Kr9OSfDeU", // Introduction to ES6 features (let/const, arrow functions, template literals
    ],
  },

  "critical-thinking": {
    "foundations-of-criticalthinking": [
      "Bry8J78Awq0", // What is critical thinking?
      "dItUGF8GdTw", // Thinking vs. reacting
      "6OLPL5p0fMg", // Questions that drive thinking
      "6OLPL5p0fMg", // Clarity, accuracy, and relevance
      "6OLPL5p0fMg", // Intellectual Curiosity
    ],
    "logical-&-reasoning": [
      "iFTRuRFH9oI", // Arguments & Conclusions
      "tB6-lbsMEtI", // Deductive vs Inductive reasoning
      "7ENuEy6UJWI", // Cause vs Correlation
      "7ENuEy6UJWI", // Recognizing weak arguments
    ],
    "biases-&-logical-fallacies": [
      "vKB0RCyICKE", // Cognitive Biases
      "o7T3wDcFpGI", // Emotional Reasoning
      "L1kbrlZRDvU", // Common Logical Fallacies
      "L1kbrlZRDvU", // Social Influence & groupthink
    ],
    " problem-solving-&-decision-making": [
      "NKEhdsnKKHs", // Defining the real problem
      "RB7odSPMSXA", // Evaluating evidence
      "Unzc731iCUY", // weighing options & trade offs
      "Unzc731iCUY", // decision making framework
      "Unzc731iCUY", // Reflecting & learning from outcomes
    ],
  },
};

// Helper to get a video ID safely
export const getVideoId = (
  courseKey: string,
  moduleKey: string,
  topicIndex: number,
): string => {
  const course = VIDEO_LIBRARY[courseKey];
  if (!course) return "gmuTjeQUbTM"; // fallback

  const moduleVideos = course[moduleKey];
  if (!moduleVideos) return "gmuTjeQUbTM"; // fallback

  return moduleVideos[topicIndex] ?? moduleVideos[0];
};

// ── Build iframe HTML for WebView
export const buildIframeHtml = (videoId: string): string => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; background: #000; }
        iframe { width: 100%; height: 100vh; border: none; display: block; }
      </style>
    </head>
    <body>
      <iframe
        src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </body>
  </html>
`;
