export type VideoLibrary = {
  [courseKey: string]: {
    [moduleKey: string]: string[]; // array of YouTube video IDs per topic
  };
};

export const VIDEO_LIBRARY: VideoLibrary = {
  html: {
    "getting-started": [
      "ok-plXXHlWw", // What is HTML?
      "UB1O30fR-EE", // How the web works
      "PlxWf493en4", // Your first webpage
    ],
    "core-elements": [
      "MDLn5-zSQQI", // HTML headings, paragraphs, text
      "bWPMSSsVdPk", // Links and images
      "uin9O0tSB9c", // Lists and tables
    ],
    "styling-and-media": [
      "yfoY53QXEnI", // HTML & CSS intro
      "mU6anWqZJcc", // HTML media elements
      "Rk4ygBp3EeM", // Audio, video, iframes
    ],
    "lists-tables-forms": [
      "E5MEzC0prd4", // HTML tables deep dive
      "fNcJuPIZ2kg", // HTML forms
      "YwbIeMCM0PI", // Form validation basics
    ],
  },

  css: {
    "css-fundamentals": [
      "yfoY53QXEnI", // CSS basics
      "1PnVor36_40", // CSS selectors
      "l1mER1bV0N0", // CSS specificity & cascade
    ],
    "visual-styling": [
      "1Rs2ND1ryYc", // Colors & backgrounds
      "rg7Fvvl3taU", // Typography in CSS
      "phWxA89Dy94", // Box model explained
    ],
    "layout-systems": [
      "JJSoEo8JSnc", // Flexbox crash course
      "EiNiSFIPIQE", // CSS Grid layout
      "srvUrASNj0s", // Flexbox vs Grid
    ],
    "responsive-design": [
      "srvUrASNj0s", // Media queries
      "ZYV6dYtz4HA", // Mobile-first design
      "bn-DQCifeQQ", // Responsive layout techniques
    ],
  },

  javascript: {
    "js-fundamentals": [
      "W6NZfCO5SIk", // JavaScript intro
      "hdI2bqOjy3c", // Variables & data types
      "9Ld-aOyq-GM", // Functions & scope
    ],
    "control-flow": [
      "IsG4Xd6LlsM", // If statements & conditionals
      "s9wW2PpJsmQ", // Loops in JavaScript
      "cuEtnrL9-H0", // Switch statements
    ],
    "dom-manipulation": [
      "0ik6X4DJKCc", // DOM intro
      "y17RuWkWdn8", // Selecting & modifying elements
      "wK2cBMcDTss", // Events & listeners
    ],
    "async-javascript": [
      "PoRJizbergM", // Callbacks explained
      "DHvZLI7Db8E", // Promises
      "V_Kr9OSfDeU", // Async/Await
    ],
  },

  "critical-thinking": {
    "foundations-of-thinking": [
      "HnJ1bqXUnIM", // What is critical thinking?
      "dItUGF8GdTw", // Logical reasoning basics
      "6OLPL5p0fMg", // Identifying assumptions
    ],
    "logical-fallacies": [
      "iFTRuRFH9oI", // Common logical fallacies
      "tB6-lbsMEtI", // Ad hominem & strawman
      "7ENuEy6UJWI", // Confirmation bias
    ],
    "problem-solving": [
      "vKB0RCyICKE", // Problem-solving frameworks
      "o7T3wDcFpGI", // Design thinking intro
      "L1kbrlZRDvU", // Root cause analysis
    ],
    argumentation: [
      "NKEhdsnKKHs", // Building strong arguments
      "RB7odSPMSXA", // Debate techniques
      "Unzc731iCUY", // Evaluating evidence
    ],
  },

  python: {
    "python-basics": [
      "rfscVS0vtbw", // Python intro
      "_uQrJ0TkZlc", // Variables & types
      "9Os0o3wzS_I", // Functions in Python
    ],
    "data-structures": [
      "W8KRzm-HUcc", // Lists & tuples
      "daefaLgNkw0", // Dictionaries
      "r3R3h5ly-kk", // Sets explained
    ],
    "oop-python": [
      "ZDa-Z5JzLYM", // Classes & objects
      "Ej_02ICOIgs", // Inheritance
      "pTB0EiLXUC8", // Encapsulation & polymorphism
    ],
    "file-handling": [
      "Uh2ebFW8OYM", // Reading & writing files
      "N4mEqu7yFqM", // CSV files with Python
      "9KJ-XeQ6ZlI", // JSON in Python
    ],
  },

  "web-development": {
    "internet-basics": [
      "x3c1ih2NJEg", // How the internet works
      "AYdF7b3nMto", // DNS explained
      "iDbyYGrswtg", // HTTP & HTTPS
    ],
    "version-control": [
      "RGOj5yH7evk", // Git crash course
      "USjZcfj8yxE", // GitHub basics
      "HkdAHXoRtos", // Branching & merging
    ],
    "apis-and-json": [
      "GZvSYJDk-us", // What is an API?
      "7YcW25PHnAA", // REST APIs explained
      "iiADhChRriM", // Working with JSON
    ],
    deployment: [
      "l134cBALZGk", // Web hosting explained
      "zQyrhjEAqLs", // Deploying with Vercel
      "uEVmD6n8Il0", // Environment variables & config
    ],
  },
};

// ── Helper to get a video ID safely ──────────────────────────────
export const getVideoId = (
  courseKey: string,
  moduleKey: string,
  topicIndex: number,
): string => {
  const course = VIDEO_LIBRARY[courseKey];
  if (!course) return "dQw4w9WgXcQ"; // fallback

  const moduleVideos = course[moduleKey];
  if (!moduleVideos) return "dQw4w9WgXcQ"; // fallback

  return moduleVideos[topicIndex] ?? moduleVideos[0];
};

// ── Build iframe HTML for WebView ─────────────────────────────────
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
