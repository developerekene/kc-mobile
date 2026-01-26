import React from "react";
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
    const lessonContent = module.topics;

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
                {lessonContent.map((topic: any, index: number) => (
                    <View key={index} style={styles.lessonCard}>
                        <Text style={styles.lessonIndex}>{index + 1}</Text>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.lessonTopicTitle}>{topic.title}</Text>
                            <Text style={styles.lessonText}>{topic.description}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* NEXT LESSON BUTTON */}
            {/* <View style={styles.bottomCTA}>
                <TouchableOpacity
                    style={[styles.primaryButton, { backgroundColor: course.color }]}
                    onPress={() => alert("Next lesson placeholder")}
                >
                    <Text style={styles.primaryButtonText}>Next Lesson</Text>
                </TouchableOpacity>
            </View> */}
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
        color: "red",
        marginBottom: 6,
    },

    lessonText: {
        fontSize: 15,
        color: "green",
        lineHeight: 22,
    },

    bottomCTA: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#E2E8F0",
    },

    primaryButton: { padding: 16, borderRadius: 12, alignItems: "center" },
    primaryButtonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});