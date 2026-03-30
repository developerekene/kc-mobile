import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import newCourseArray from "../utils/Constants/newCourseArray";

const CoursesCentralPage: React.FC<any> = ({ navigation }) => {


    const CourseCard = ({ item }: { item: any }) => {
        return (
            <TouchableOpacity
                style={[styles.courseCard, { backgroundColor: item.color }]}
                onPress={() =>
                    navigation.navigate("CourseDescription", { course: item })
                }
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
        <SafeAreaView style={styles.container}>
            {/* BACK ARROW */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backArrow}>← Back</Text>
            </TouchableOpacity>
            <Text style={styles.header}>All Courses</Text>
            <FlatList
                data={newCourseArray}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CourseCard item={item} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 16 }}
            />

            <TouchableOpacity style={styles.createBtn} onPress={() => {
                // Toast.show({
                //     type: "success",
                //     text1: "Coming Soon",
                //     text2: `This feature is coming soon for Mentors alone`,
                // });
                navigation.navigate("CreateCoursePage")
            }}>
                <Text style={styles.createBtnText}>+ Create New Course</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default CoursesCentralPage;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#F8FAFC" },
    header: { fontSize: 24, fontWeight: "900", marginBottom: 16, color: "#0F172A" },
    courseCard: { padding: 16, borderRadius: 14, marginBottom: 12 },
    courseTitle: { fontSize: 18, fontWeight: "900", color: "#0F172A" },
    courseLevel: { fontSize: 12, fontWeight: "700", color: "#475569" },
    courseDescription: { fontSize: 14, marginTop: 6, color: "#334155" },
    // courseMeta: { fontSize: 12, color: "#475569", marginTop: 4 },
    createBtn: { marginTop: 16, backgroundColor: "#2563EB", padding: 14, borderRadius: 12, alignItems: "center" },
    createBtnText: { color: "#fff", fontWeight: "700" },
    backButton: {
        marginBottom: 16,
    },

    backArrow: {
        fontSize: 16,
        fontWeight: "700",
        color: "#0F172A",
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
});