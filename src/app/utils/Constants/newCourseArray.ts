const newCourseArray = [
  {
    color: "#E0E7FF",
    description: "Structure the web using semantic, accessible markup.",
    estimatedTime: "6–8 hours",
    id: "html",
    intro:
      "HTML is the backbone of every website. In this course, you'll learn how web pages are structured, how browsers interpret markup, and how to create clean, accessible documents that form a solid foundation for any web project.",
    level: "Beginner",
    title: "HTML",
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
          { id: "html-module-1-topic-1", title: "What is HTML?" },
          { id: "html-module-1-topic-2", title: "How the Web Works" },
          { id: "html-module-1-topic-3", title: "Your First HTML Page" },
          { id: "html-module-1-topic-4", title: "HTML Document Structure" },
          { id: "html-module-1-topic-5", title: "Browser Rendering Basics" },
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
          { id: "html-module-2-topic-1", title: "Headings and Paragraphs" },
          { id: "html-module-2-topic-2", title: "Semantic HTML Elements" },
          { id: "html-module-2-topic-3", title: "Inline vs Block Elements" },
          { id: "html-module-2-topic-4", title: "Anchors and Navigation" },
          {
            id: "html-module-2-topic-5",
            title: "Sectioning with Header, Main, and Footer",
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
          { id: "html-module-3-topic-1", title: "Embedding Images" },
          { id: "html-module-3-topic-2", title: "Audio and Video Elements" },
          {
            id: "html-module-3-topic-3",
            title: "Inline Styles and the Style Attribute",
          },
          {
            id: "html-module-3-topic-4",
            title: "Linking External Stylesheets",
          },
          { id: "html-module-3-topic-5", title: "Figures and Captions" },
        ],
      },
      {
        id: "html-module-4",
        title: "Lists, Tables & Forms",
        summary:
          "Handle structured data and collect user input in a clear, accessible way.",
        challengePrompt:
          "You need to collect user data accurately and safely. How do you design a form that's both usable and accessible?",
        topics: [
          { id: "html-module-4-topic-1", title: "Ordered and Unordered Lists" },
          { id: "html-module-4-topic-2", title: "Building Tables" },
          { id: "html-module-4-topic-3", title: "Form Elements and Inputs" },
          {
            id: "html-module-4-topic-4",
            title: "Labels, Fieldsets, and Accessibility",
          },
          { id: "html-module-4-topic-5", title: "Form Validation Attributes" },
        ],
      },
    ],
  },
  {
    color: "#DBEAFE",
    description: "Design beautiful, consistent, and responsive layouts.",
    estimatedTime: "7–9 hours",
    id: "css",
    intro:
      "CSS controls how websites look and feel. In this course, you'll learn how styles are applied, how layouts are built, and how to design responsive interfaces that work across all screen sizes.",
    level: "Beginner",
    title: "CSS",
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
          "A style isn't applying as expected. How do you determine whether it's a selector, specificity, or cascade issue?",
        topics: [
          { id: "css-module-1-topic-1", title: "What is CSS?" },
          { id: "css-module-1-topic-2", title: "Selectors and Combinators" },
          { id: "css-module-1-topic-3", title: "The Cascade and Inheritance" },
          { id: "css-module-1-topic-4", title: "Specificity Rules" },
          { id: "css-module-1-topic-5", title: "Linking CSS to HTML" },
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
          { id: "css-module-2-topic-1", title: "Colors and Backgrounds" },
          { id: "css-module-2-topic-2", title: "Typography and Fonts" },
          { id: "css-module-2-topic-3", title: "The Box Model" },
          { id: "css-module-2-topic-4", title: "Borders and Shadows" },
          {
            id: "css-module-2-topic-5",
            title: "Spacing with Margin and Padding",
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
          { id: "css-module-3-topic-1", title: "Normal Flow and Display" },
          {
            id: "css-module-3-topic-2",
            title: "Positioning: Static, Relative, Absolute, Fixed",
          },
          { id: "css-module-3-topic-3", title: "Flexbox Fundamentals" },
          { id: "css-module-3-topic-4", title: "CSS Grid Basics" },
          {
            id: "css-module-3-topic-5",
            title: "Choosing Between Flex and Grid",
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
          { id: "css-module-4-topic-1", title: "The Viewport Meta Tag" },
          { id: "css-module-4-topic-2", title: "Media Queries" },
          {
            id: "css-module-4-topic-3",
            title: "Fluid Layouts and Relative Units",
          },
          { id: "css-module-4-topic-4", title: "Responsive Images" },
          { id: "css-module-4-topic-5", title: "Mobile-First Design Strategy" },
        ],
      },
    ],
  },
];

export default newCourseArray;
