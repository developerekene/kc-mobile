import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type Props = {
  route: any;
  navigation: any;
};

const CourseDescriptionScreen: React.FC<Props> = ({ route, navigation }) => {
  const { course } = route.params;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* HEADER */}
      <View style={[styles.header, { backgroundColor: course.color }]}>
        <Text style={styles.title}>{course.title}</Text>
        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>{course.level}</Text>
        </View>
        <Text style={styles.description}>{course.description}</Text>
      </View>

      {/* INTRO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Course Overview</Text>
        <Text style={styles.text}>{course.intro}</Text>
      </View>

      {/* META INFO */}
      <View style={styles.metaRow}>
        <View style={styles.metaBox}>
          <Text style={styles.metaLabel}>Estimated Time</Text>
          <Text style={styles.metaValue}>{course.estimatedTime}</Text>
        </View>

        <View style={styles.metaBox}>
          <Text style={styles.metaLabel}>Modules</Text>
          <Text style={styles.metaValue}>{course.modules.length}</Text>
        </View>
      </View>

      {/* OUTCOMES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What You’ll Learn</Text>
        {course.outcomes.map((item: string, index: number) => (
          <Text key={index} style={styles.listItem}>• {item}</Text>
        ))}
      </View>

      {/* MODULE PREVIEW */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Course Modules</Text>

        {course.modules.map((module: any) => (
          <View key={module.id} style={styles.moduleCard}>
            <Text style={styles.moduleTitle}>{module.title}</Text>
            <Text style={styles.moduleSummary}>{module.summary}</Text>
          </View>
        ))}
      </View>

      {/* ACTION BUTTONS */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate("CoursePlayer", { course })}
        >
          <Text style={styles.primaryButtonText}>Start Course</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.secondaryButtonText}>Back</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default CourseDescriptionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    padding: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0F172A",
  },

  levelBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#111827",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    marginVertical: 10,
  },

  levelText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  description: {
    fontSize: 16,
    color: "#334155",
    marginTop: 8,
  },

  section: {
    padding: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },

  text: {
    fontSize: 15,
    color: "#475569",
    lineHeight: 22,
  },

  metaRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },

  metaBox: {
    alignItems: "center",
  },

  metaLabel: {
    fontSize: 13,
    color: "#64748B",
  },

  metaValue: {
    fontSize: 16,
    fontWeight: "700",
  },

  listItem: {
    fontSize: 15,
    marginBottom: 6,
    color: "#334155",
  },

  moduleCard: {
    backgroundColor: "#F8FAFC",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  moduleTitle: {
    fontWeight: "700",
    fontSize: 16,
  },

  moduleSummary: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
  },

  buttonRow: {
    padding: 20,
  },

  primaryButton: {
    backgroundColor: "#2563EB",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 10,
  },

  primaryButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  secondaryButton: {
    padding: 14,
    alignItems: "center",
  },

  secondaryButtonText: {
    color: "#2563EB",
    fontWeight: "600",
  },
});
