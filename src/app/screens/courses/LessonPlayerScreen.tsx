import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

type Props = {
  route: any;
  navigation: any;
};

const LessonPlayerScreen: React.FC<Props> = ({ route, navigation }) => {
  const { module, course } = route.params;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={[styles.header, { backgroundColor: course.color }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.lessonTitle}>{module.title}</Text>
        <Text style={styles.lessonSubtitle}>Lesson Content</Text>
      </View>

      {/* LESSON CONTENT */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {module.topics.map((topic: any, index: number) => {
          const isExpanded = expandedIndex === index;
          return (
            <View key={index} style={styles.lessonCard}>
              <TouchableOpacity onPress={() => toggleExpand(index)}>
                <Text style={styles.lessonIndex}>{index + 1}</Text>
                <Text style={styles.lessonTopicTitle}>{topic.title}</Text>
                <Text style={styles.lessonText}>{topic.description}</Text>
              </TouchableOpacity>

              {isExpanded && (
                <View style={styles.expandedContent}>
                  {/* Key Points */}
                  {topic.keyPoints && topic.keyPoints.length > 0 && (
                    <View style={styles.section}>
                      <Text style={styles.sectionTitle}>Key Points</Text>
                      {topic.keyPoints.map((point: string, i: number) => (
                        <Text key={i} style={styles.bullet}>
                          • {point}
                        </Text>
                      ))}
                    </View>
                  )}

                  {/* Content */}
                  {topic.content && (
                    <View style={styles.section}>
                      <Text style={styles.sectionTitle}>Lesson</Text>
                      <Text style={styles.contentText}>{topic.content}</Text>
                    </View>
                  )}

                  {/* Practical */}
                  {topic.practical && (
                    <View style={styles.section}>
                      <Text style={styles.sectionTitle}>Try This</Text>
                      <Text style={styles.practicalText}>{topic.practical}</Text>
                    </View>
                  )}
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default LessonPlayerScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC" },

  header: {
    padding: 24,
    paddingTop: 60,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  backText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 12,
  },

  lessonTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#0F172A",
  },

  lessonSubtitle: {
    fontSize: 14,
    color: "#334155",
    marginTop: 4,
  },

  contentContainer: {
    padding: 20,
    paddingBottom: 140,
  },

  lessonCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  lessonIndex: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#2563EB",
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 32,
    marginBottom: 12,
  },

  lessonTopicTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 6,
  },

  lessonText: {
    fontSize: 14,
    color: "#334155",
    lineHeight: 20,
  },

  expandedContent: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    paddingTop: 12,
  },

  section: {
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 6,
  },

  bullet: {
    fontSize: 13,
    color: "#334155",
    marginBottom: 4,
  },

  contentText: {
    fontSize: 13,
    color: "#334155",
    lineHeight: 20,
  },

  practicalText: {
    fontSize: 13,
    color: "#1E40AF",
    fontWeight: "600",
  },
});