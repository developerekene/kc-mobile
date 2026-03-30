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
      "uyew1a8ToHQ", // CSS Syntax & Rules
      "1h5StQJ8hww", // Selectors & Targeting Elements
      "JYKizzvy1yc", // Specificity & Cascade
      "-cW1Ud36lcw", // CSS Comments & Organization
    ],
    "visual-styling": [
      "4Ypuns-Jq20", // Color Theory & Usage
      "cWgb42tUYPA", // Backgrounds & Gradients
      "8SeFSmvx3AA", // Border & Shadows
      "EhbZGV2dqZ4", // Margins & Padding
      "Y5TYDo9Qcv4", // Text Styling
      "GTIblRyol3Q", // Fonts & Readability
    ],
    "layout-systems": [
      "rIO5326FgPE", // CSS Box Model
      "9T8uxp5hQ60", // Dispay Property
      "7ZXsPj43heo", // Positioning Elements
      "phWxA89Dy94", // Flexbox Layout System
      "8p0OblRuhd0", // CSS Grid Layout
    ],
    "responsive-design": [
      "n9yI6fjkrfE", // Media queries
      "N5wpD9Ov_To", // Responsive Units (%, rem, vh,vw)
      "p3k_IrXLNRc", // Mobile First Design Principles
    ],
  },

  javascript: {
    "Programing-Basics": [
      "upDLs1sn7g4", // What is Javascript
      "XgSjoHgy3Rk", // Variables & Constants
      "fD0t_DKREbE", // Javascript Data Types
      "mesu75PTDC8", // operators & Expressions
      "hYmMBiw720w", // Comments & Code Readability
    ],
    "control-flow": [
      "IsG4Xd6LlsM", // Conditional statements (if/else)
      "s9wW2PpJsmQ", // Loops (for, while, do-while)
      "-L41L0IZuv4?si", // Logical Operators
    ],
    "Functions-&-Data": [
      "N8ap4k_1QEQ", // Functions & Reusability
      "e-_mDyqm2oU", // Parameters & return values
      "oigfaZ5ApsM", // Arrays & Collections
      "rLPwCAqyCAE", // Objects & data modeling
    ],
    "Interactivity-dom": [
      "XF1_MlZ5l6M", // Events & event listeners
      "VW8kNAous88", // DOM Selection Methods
      "y17RuWkWdn8", // Dom manipulation
      "cFTFtuEQ-10", // Basic Error Handling
      "NCwa_xi0Uuc", // Introduction to ES6 features (let/const, arrow functions, template literals
    ],
  },

  "critical-thinking": {
    "foundations-of-critical-thinking": [
      "-eEBuqwY-nE", // What is critical thinking?
      "BB9-csCiooU", // Thinking vs. reacting
      "AmAbX3PxhGs", // Questions that drive thinking
      "TQcqjN1lZi0", // Clarity, accuracy, and relevance
      "TY-DzKMRekc", // Intellectual Curiosity
    ],
    "logical-&-reasoning": [
      "NUetb_Tsz2E", // Arguments & Conclusions
      "jX3OXwpEpl8", // Deductive vs Inductive reasoning
      "U-_f8RQIIiw", // Cause vs Correlation
      "vwjXF-KFpXU", // Recognizing weak arguments
    ],
    "biases-&-logical-fallacies": [
      "vKB0RCyICKE", // Cognitive Biasesa
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
