import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Animated
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const KnowledgeCityHome: React.FC = () => {
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const activeChallenge = {
    title: "Water Supply Crisis",
    description:
      "A section of the city’s water system has contamination. Fast fixes risk long-term shortages; careful approaches may endanger health temporarily.",
    urgency: "High",
  };

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const reflectionPrompt =
    "Which assumption influenced your last decision the most?";

  const courses = [
    {
      id: "html",
      title: "HTML",
      level: "Beginner",
      description: "Structure the web using semantic markup.",
      intro:
        "HTML is the foundation of every website. In this course, you’ll learn how web pages are structured and how browsers interpret content.",
      estimatedTime: "6–8 hours",
      color: "#E0E7FF",

      outcomes: [
        "Understand how web pages are structured",
        "Write clean, semantic HTML",
        "Build accessible, well-organized pages",
      ],

      modules: [
        {
          id: "html-module-1",
          title: "Getting Started",
          summary:
            "Learn what HTML is, how it works, and how to write your first page.",
          challengePrompt:
            "A simple webpage is displaying incorrectly across browsers. Where would you start investigating?",
          topics: [
            "What is HTML?",
            "How the Web Works",
            "HTML Document Structure",
            "HTML Editors",
            "Your First HTML Page",
          ],
        },

        {
          id: "html-module-2",
          title: "Core Elements",
          summary:
            "Explore the essential building blocks used to structure content.",
          challengePrompt:
            "A page looks cluttered and confusing. Which elements would help improve clarity?",
          topics: [
            "HTML Elements",
            "HTML Attributes",
            "Headings",
            "Paragraphs",
            "Text Formatting",
            "Quotations",
          ],
        },

        {
          id: "html-module-3",
          title: "Styling & Media",
          summary:
            "Learn how HTML works with styles, images, and visual elements.",
          challengePrompt:
            "Users complain that the page is visually dull. What structural changes can you make before adding CSS?",
          topics: [
            "Inline Styles",
            "HTML Colors",
            "Links",
            "Images",
            "Image Accessibility (alt text)",
          ],
        },

        {
          id: "html-module-4",
          title: "Lists, Tables & Forms",
          summary:
            "Handle structured data and user input effectively.",
          challengePrompt:
            "You need to collect user data safely and clearly. Which elements should you use?",
          topics: [
            "Lists",
            "Tables",
            "Forms",
            "Input Types",
            "Form Labels & Accessibility",
          ],
        },
      ],
    },

    {
      id: "css",
      title: "CSS",
      level: "Beginner",
      description: "Design beautiful, responsive layouts.",
      intro:
        "CSS controls how websites look and feel. This course teaches you how to style content and create layouts that adapt to different screens.",
      estimatedTime: "7–9 hours",
      color: "#DBEAFE",

      outcomes: [
        "Style content confidently",
        "Understand layout systems",
        "Create responsive designs",
      ],

      modules: [
        {
          id: "css-module-1",
          title: "CSS Fundamentals",
          summary:
            "Learn how CSS works and how styles are applied.",
          challengePrompt:
            "A style isn’t applying as expected. How do you diagnose the issue?",
          topics: [
            "What is CSS?",
            "CSS Syntax",
            "Selectors",
            "Specificity",
            "Comments",
          ],
        },

        {
          id: "css-module-2",
          title: "Visual Styling",
          summary:
            "Control color, spacing, and typography.",
          challengePrompt:
            "A page looks inconsistent. Which CSS properties would you adjust first?",
          topics: [
            "Colors",
            "Backgrounds",
            "Borders",
            "Margins",
            "Padding",
            "Text Styling",
            "Fonts",
          ],
        },

        {
          id: "css-module-3",
          title: "Layout Systems",
          summary:
            "Learn how elements are positioned on the page.",
          challengePrompt:
            "A layout breaks on mobile. Which layout system would fix it?",
          topics: [
            "Box Model",
            "Display",
            "Position",
            "Flexbox",
            "Grid",
          ],
        },

        {
          id: "css-module-4",
          title: "Responsive Design",
          summary:
            "Make layouts adapt to different devices.",
          challengePrompt:
            "Users on phones report usability issues. What responsive techniques apply?",
          topics: [
            "Media Queries",
            "Responsive Units",
            "Mobile-First Design",
          ],
        },
      ],
    },

    {
      id: "javascript",
      title: "JavaScript",
      level: "Beginner",
      description: "Add logic and interactivity to the web.",
      intro:
        "JavaScript brings web pages to life. You’ll learn how to think logically, handle events, and manipulate content dynamically.",
      estimatedTime: "10–12 hours",
      color: "#FEF3C7",

      outcomes: [
        "Write basic programs",
        "Handle user interactions",
        "Manipulate web content dynamically",
      ],

      modules: [
        {
          id: "js-module-1",
          title: "Programming Basics",
          summary:
            "Understand how programming logic works.",
          challengePrompt:
            "A script is failing silently. Where do you start debugging?",
          topics: [
            "What is JavaScript?",
            "Variables",
            "Data Types",
            "Operators",
            "Comments",
          ],
        },

        {
          id: "js-module-2",
          title: "Control Flow",
          summary:
            "Control how code runs using logic.",
          challengePrompt:
            "Different users see different results. How do you control program flow?",
          topics: [
            "Conditional Statements",
            "Loops",
            "Logical Operators",
          ],
        },

        {
          id: "js-module-3",
          title: "Functions & Data",
          summary:
            "Organize code and manage data.",
          challengePrompt:
            "Code duplication is increasing. What abstraction would help?",
          topics: [
            "Functions",
            "Parameters",
            "Arrays",
            "Objects",
          ],
        },

        {
          id: "js-module-4",
          title: "Interactivity & DOM",
          summary:
            "React to user actions and update content.",
          challengePrompt:
            "A button should update content dynamically. How do you approach it?",
          topics: [
            "Events",
            "DOM Selection",
            "DOM Manipulation",
            "Basic Error Handling",
            "Intro to ES6",
          ],
        },
      ],
    },
  ];

  const CourseCard = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        style={[styles.courseCard, { backgroundColor: item.color }]}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.courseTitle}>{item.title}</Text>
          <Text style={styles.courseLevel}>{item.level}</Text>
        </View>

        <Text style={styles.courseDescription}>{item.description}</Text>

        <View style={styles.cardMeta}>
          <Text style={styles.courseMeta}>⏱ {item.estimatedTime}</Text>
          <Text style={styles.courseMeta}>📚 {item.modules.length} Modules</Text>
        </View>

        {item.outcomes && item.outcomes.length > 0 && (
          <View style={styles.outcomes}>
            {item.outcomes.slice(0, 2).map((outcome: string, index: number) => (
              <Text key={index} style={styles.outcomeText}>• {outcome}</Text>
            ))}
          </View>
        )}

        <View style={styles.courseFooter}>
          <Text style={styles.courseAction}>Start Learning →</Text>
        </View>
      </TouchableOpacity>
    );
  };


  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 90 }}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={26} color="#0F172A" />
        </TouchableOpacity>

        <Text style={styles.appTitle}>Knowledge City</Text>

        <TouchableOpacity style={styles.avatar}>
          <Ionicons name="person" size={26} color="#0F172A" />
        </TouchableOpacity>
      </View>

      {/* HERO CARD */}
      <View style={styles.heroCard}>
        <Text style={styles.heroLabel}>Hello there</Text>
        <Text style={styles.crisisTitle}>Ekene Okoli</Text>
        <Text style={styles.crisisMessage}>
          Are you ready to strengthen your critical thinking today?
        </Text>
      </View>

      {/* WELCOME */}
      <View style={styles.welcome}>
        <Text style={styles.welcomeSub}>Empower your Learning Journey!</Text>
        <Text style={styles.welcomeText}>
          Whether you're a student, educator, or professional, our platform is designed to deliver an engaging and seamless learning experience.
        </Text>
      </View>

      {/* COURSES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Start Learning as a Beginner</Text>
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CourseCard item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 16 }}
        />
      </View>

      {/* QUICK ACTIONS */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.quickCard}>
          <Ionicons name="book-outline" size={20} color="#0F172A" />
          <Text style={styles.quickText}>My Courses</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickCard}>
          <Ionicons name="flash-outline" size={20} color="#0F172A" />
          <Text style={styles.quickText}>Challenge</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickCard}>
          <Ionicons name="journal-outline" size={20} color="#0F172A" />
          <Text style={styles.quickText}>Reflections</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickCard}>
          <Ionicons name="map-outline" size={20} color="#0F172A" />
          <Text style={styles.quickText}>City Map</Text>
        </TouchableOpacity>
      </View>

      {/* ACTIVE CHALLENGE */}
      <View style={styles.challengeCard}>
        <Text style={styles.sectionTitle}>Active Challenge</Text>
        <Text style={styles.courseTitle}>{activeChallenge.title}</Text>
        <Text style={styles.crisisMessage}>{activeChallenge.description}</Text>
        <Text style={[styles.courseMeta, { marginTop: 6 }]}>
          Urgency: {activeChallenge.urgency}
        </Text>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>Enter Situation Room →</Text>
        </TouchableOpacity>
      </View>

      {/* RECOMMENDED NEXT COURSE */}
      {/* RECOMMENDED NEXT COURSE */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommended Next Course</Text>

        <Animated.View style={[styles.recommendedCard, { transform: [{ scale: pulseAnim }] }]}>
          <Text style={styles.recommendedTitle}>Critical Thinking</Text>
          <Text style={styles.recommendedLevel}>Beginner</Text>
          <Text style={styles.recommendedTime}>Estimated Time: 7–9 hours</Text>

          <TouchableOpacity style={styles.recommendedBtn}>
            <Text style={styles.recommendedBtnText}>Start Course →</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>



      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements & Streaks</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.badgeCard}>
            <Ionicons name="checkmark-circle-outline" size={24} color="#10B981" />
            <Text style={styles.badgeText}>Modules Completed: 12</Text>
          </View>
          <View style={styles.badgeCard}>
            <Ionicons name="flame-outline" size={24} color="#F59E0B" />
            <Text style={styles.badgeText}>7-Day Streak</Text>
          </View>
          <View style={styles.badgeCard}>
            <Ionicons name="time-outline" size={24} color="#3B82F6" />
            <Text style={styles.badgeText}>Total Hours: 24</Text>
          </View>
        </ScrollView>
      </View>

      {/* REFLECTION */}
      <View style={styles.reflectionCard}>
        <Text style={styles.reflectionTitle}>Reflection</Text>
        <Text style={styles.reflectionText}>{reflectionPrompt}</Text>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>Reflect Now →</Text>
        </TouchableOpacity>
      </View>

      {/* PROGRESS OVERVIEW */}
      {/* <View style={styles.section}>
        <Text style={styles.sectionTitle}>Learning Progress</Text>
        {courses.map((course) => (
          <View key={course.id} style={styles.progressCard}>
            <Text style={styles.courseTitle}>{course.title}</Text>
            <View style={styles.progressBarBackground}>
              <View
                style={[
                  styles.progressBarFill,
                  { width: `${Math.floor(Math.random() * 100)}%` },
                ]}
              />
            </View>
            <Text style={styles.courseMeta}>{course.modules.length} Modules</Text>
          </View>
        ))}
      </View> */}
    </ScrollView>
  );
};

export default KnowledgeCityHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 40,
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  appTitle: {
    color: "#0F172A",
    fontSize: 18,
    fontWeight: "900",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#E0E7FF",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontWeight: "900",
    color: "#1E293B",
  },

  /* Welcome */
  welcome: {
    marginBottom: 20,
  },
  welcomeText: {
    color: "#64748B",
    fontSize: 14,
  },
  welcomeSub: {
    color: "#0F172A",
    fontSize: 22,
    fontWeight: "900",
    marginTop: 4,
  },

  /* Hero Card */
  heroCard: {
    backgroundColor: "#EEF2FF",
    padding: 20,
    borderRadius: 16,
    marginBottom: 18,
  },
  heroLabel: {
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase",
    color: "#475569",
  },
  crisisTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: "#0F172A",
    marginTop: 8,
  },
  crisisMessage: {
    fontSize: 16,
    marginTop: 6,
    color: "#1E293B",
  },

  alertDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#EF4444",
  },

  /* Badge Cards (Achievements/Streaks) */
  badgeCard: {
    backgroundColor: "#F8FAFC",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  badgeText: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: "700",
    color: "#0F172A",
    textAlign: "center",
  },
  primaryBtn: {
    marginTop: 16,
    backgroundColor: "#0F172A",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  primaryBtnText: {
    color: "#FFFFFF",
    fontWeight: "800",
  },

  /* Quick Actions */
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  quickCard: {
    backgroundColor: "#F8FAFC",
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  quickText: {
    marginTop: 6,
    fontWeight: "700",
    color: "#0F172A",
  },

  /* Sections */
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: "#0F172A",
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 10,
  },

  signalCard: {
    backgroundColor: "#F8FAFC",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  signalLabel: {
    fontWeight: "700",
    color: "#0F172A",
  },
  signalValue: {
    color: "#475569",
    marginTop: 4,
  },

  /* Reflection */
  reflectionCard: {
    backgroundColor: "#0F172A",
    padding: 16,
    borderRadius: 14,
  },
  reflectionTitle: {
    color: "#E0E7FF",
    fontWeight: "800",
  },
  reflectionText: {
    color: "#F8FAFC",
    marginTop: 6,
    fontSize: 14,
  },
  courseCard: {
    width: 240,
    padding: 16,
    borderRadius: 16,
    marginRight: 12,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  courseTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#0F172A",
  },

  courseLevel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#475569",
  },

  courseDescription: {
    fontSize: 14,
    color: "#334155",
    marginTop: 6,
  },

  cardMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  courseMeta: {
    fontSize: 12,
    color: "#475569",
  },

  outcomes: {
    marginTop: 8,
  },

  outcomeText: {
    fontSize: 12,
    color: "#0F172A",
  },

  courseFooter: {
    marginTop: 12,
  },

  courseAction: {
    fontWeight: "800",
    color: "#0F172A",
  },

  /* Active Challenge Card */
  challengeCard: {
    backgroundColor: "#EFF6FF", // very light blue for emphasis
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#DBEAFE",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  /* Recommended Card with shadow & animation */
  recommendedCard: {
    backgroundColor: "#EFF6FF",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#DBEAFE",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  recommendedTitle: { fontSize: 18, fontWeight: "900", color: "#0F172A" },
  recommendedLevel: { fontSize: 12, fontWeight: "700", color: "#475569", marginTop: 2 },
  recommendedTime: { fontSize: 12, color: "#475569", marginTop: 2 },
  recommendedBtn: {
    marginTop: 12,
    backgroundColor: "#6366F1",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  recommendedBtnText: { color: "#FFFFFF", fontWeight: "700" },

  /* Progress Card */
  progressCard: {
    backgroundColor: "#F8FAFC",
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 4,
    marginTop: 8,
    overflow: "hidden",
  },
  progressBarFill: {
    height: 8,
    backgroundColor: "#6366F1",
    borderRadius: 4,
  },

});
