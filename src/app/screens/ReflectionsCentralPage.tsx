import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { courseQuestions } from "../utils/Constants/data";

const reflectionPrompts = [
    "What assumption influenced your last decision the most?",
    "Which solution felt the most counter-intuitive and why?",
    "How did your perspective change after reviewing the data?",
];

const availableTests = Object.entries(courseQuestions).map(
    ([key, questions]) => ({
        id: key,
        title: key.replace(/([A-Z])/g, " $1").toUpperCase(),
        totalQuestions: questions.length,
    })
);

const ReflectionsCentralPage: React.FC<any> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backArrow}>← Back</Text>
            </TouchableOpacity>
            <Text style={styles.header}>Your Reflections</Text>

            <FlatList
                data={availableTests}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.reflectionCard}>
                        <Text style={styles.reflectionText}>
                            {item.title}
                        </Text>

                        <Text style={styles.metaText}>
                            {item.totalQuestions} Questions
                        </Text>

                        <TouchableOpacity
                            style={styles.recordBtn}
                            onPress={() =>
                                navigation.navigate("TestScreen", {
                                    testId: item.id,
                                })
                            }
                            disabled={true}
                        >
                            {/* <Text style={styles.recordBtnText}>
                                Start Test →
                            </Text> */}
                            <Text style={styles.recordBtnText}>
                                Test Coming Soon
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
                contentContainerStyle={{ paddingBottom: 100 }}
            />

        </SafeAreaView>
    );
};

export default ReflectionsCentralPage;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#F8FAFC" },
    header: { fontSize: 24, fontWeight: "900", marginBottom: 16, color: "#0F172A" },
    reflectionCard: { backgroundColor: "#E0E7FF", padding: 16, borderRadius: 14, marginBottom: 12 },
    reflectionText: { fontSize: 14, color: "#0F172A", fontWeight: "700" },
    recordBtn: { marginTop: 8, backgroundColor: "#2563EB", padding: 10, borderRadius: 10, alignItems: "center" },
    recordBtnText: { color: "#fff", fontWeight: "700" },
    backButton: {
        marginBottom: 16,
    },
    backArrow: {
        fontSize: 16,
        fontWeight: "700",
        color: "#0F172A",
    },
    metaText: {
        color: "#6b7280",
        fontSize: 14,
        marginBottom: 12,
    },
});