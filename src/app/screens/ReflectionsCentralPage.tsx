import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { courseQuestions } from "../utils/Constants/data";

// Map course IDs to colors and icons
const courseConfig: Record<
  string,
  { color: string; bg: string; icon: keyof typeof Ionicons.glyphMap }
> = {
  html: { color: "#6366F1", bg: "#E0E7FF", icon: "code-slash-outline" },
  css: { color: "#2563EB", bg: "#DBEAFE", icon: "color-palette-outline" },
  javascript: { color: "#D97706", bg: "#FEF3C7", icon: "logo-javascript" },
  criticalThinking: { color: "#0891B2", bg: "#ECFEFF", icon: "bulb-outline" },
};

const availableTests = Object.entries(courseQuestions).map(
  ([key, questions]) => ({
    id: key,
    title: key.replace(/([A-Z])/g, " $1").trim(),
    totalQuestions: questions.length,
    config: courseConfig[key] ?? {
      color: "#6366F1",
      bg: "#E0E7FF",
      icon: "help-outline",
    },
  }),
);

const ReflectionsCentralPage: React.FC<any> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>← Back</Text>
        </TouchableOpacity>
        <View style={{ width: 40 }} />
      </View>

      <Text style={styles.pageTitle}>Tests</Text>
      <Text style={styles.pageSubtitle}>
        Challenge yourself and measure your knowledge
      </Text>

      <FlatList
        data={availableTests}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: item.config.bg }]}>
            {/* Icon badge */}
            <View
              style={[styles.iconBadge, { backgroundColor: item.config.color }]}
            >
              <Ionicons name={item.config.icon} size={22} color="#fff" />
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <View style={styles.metaRow}>
                <Ionicons
                  name="help-circle-outline"
                  size={14}
                  color="#64748B"
                />
                <Text style={styles.metaText}>
                  {item.totalQuestions} Questions
                </Text>
                <View style={styles.dot} />
                <Ionicons name="time-outline" size={14} color="#64748B" />
                <Text style={styles.metaText}>
                  ~{item.totalQuestions * 30}s
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={[styles.startBtn, { backgroundColor: item.config.color }]}
              onPress={() =>
                navigation.navigate("TestScreen", { testId: item.id })
              }
            >
              <Text style={styles.startBtnText}>Start</Text>
              <Ionicons name="arrow-forward" size={14} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 8 }}
      />
    </SafeAreaView>
  );
};

export default ReflectionsCentralPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 4,
  },
  back: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#0F172A",
    marginBottom: 4,
  },
  pageSubtitle: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 18,
    marginBottom: 12,
    gap: 12,
  },
  iconBadge: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    flex: 1,
    gap: 6,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#0F172A",
    textTransform: "capitalize",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "600",
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#94A3B8",
    marginHorizontal: 4,
  },
  startBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 10,
  },
  startBtnText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 13,
  },
});

// import React from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { courseQuestions } from "../utils/Constants/data";

// const reflectionPrompts = [
//   "What assumption influenced your last decision the most?",
//   "Which solution felt the most counter-intuitive and why?",
//   "How did your perspective change after reviewing the data?",
// ];

// const availableTests = Object.entries(courseQuestions).map(
//   ([key, questions]) => ({
//     id: key,
//     title: key.replace(/([A-Z])/g, " $1").toUpperCase(),
//     totalQuestions: questions.length,
//   }),
// );

// const ReflectionsCentralPage: React.FC<any> = ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <TouchableOpacity
//         style={styles.backButton}
//         onPress={() => navigation.goBack()}
//       >
//         <Text style={styles.backArrow}>← Back</Text>
//       </TouchableOpacity>
//       <Text style={styles.header}>Your Reflections</Text>

//       <FlatList
//         data={availableTests}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.reflectionCard}>
//             <Text style={styles.reflectionText}>{item.title}</Text>

//             <Text style={styles.metaText}>{item.totalQuestions} Questions</Text>

//             <TouchableOpacity
//               style={styles.recordBtn}
//               onPress={() =>
//                 navigation.navigate("TestScreen", {
//                   testId: item.id,
//                 })
//               }
//               disabled={false}
//             >
//               {/* <Text style={styles.recordBtnText}>
//                                 Start Test →
//                             </Text> */}
//               <Text style={styles.recordBtnText}>Test Coming Soon</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         contentContainerStyle={{ paddingBottom: 100 }}
//       />
//     </SafeAreaView>
//   );
// };

// export default ReflectionsCentralPage;

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: "#F8FAFC" },
//   header: {
//     fontSize: 24,
//     fontWeight: "900",
//     marginBottom: 16,
//     color: "#0F172A",
//   },
//   reflectionCard: {
//     backgroundColor: "#E0E7FF",
//     padding: 16,
//     borderRadius: 14,
//     marginBottom: 12,
//   },
//   reflectionText: { fontSize: 14, color: "#0F172A", fontWeight: "700" },
//   recordBtn: {
//     marginTop: 8,
//     backgroundColor: "#2563EB",
//     padding: 10,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   recordBtnText: { color: "#fff", fontWeight: "700" },
//   backButton: {
//     marginBottom: 16,
//   },
//   backArrow: {
//     fontSize: 16,
//     fontWeight: "700",
//     color: "#0F172A",
//   },
//   metaText: {
//     color: "#6b7280",
//     fontSize: 14,
//     marginBottom: 12,
//   },
// });
