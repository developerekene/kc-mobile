import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";

type Props = {
    route: any;
    navigation: any;
};

const CoursePlayerScreen: React.FC<Props> = ({ route, navigation }) => {
    const { course } = route.params;

    return (
        <View style={styles.container}>

            {/* HEADER */}
            <View style={[styles.header, { backgroundColor: course.color }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>← Back</Text>
                </TouchableOpacity>

                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseSubtitle}>
                    {course.level} · {course.modules.length} Modules
                </Text>

                {/* PROGRESS */}
                <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: "0%" }]} />
                    </View>
                    <Text style={styles.progressText}>0% Complete</Text>
                </View>
            </View>

            {/* MODULE LIST */}
            <FlatList
                data={course.modules}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={styles.moduleCard}
                        onPress={() =>
                            navigation.navigate("ModuleOverviewScreen", {
                                module: item,
                                course,
                            })
                        }
                    >
                        <View style={styles.moduleIndex}>
                            <Text style={styles.moduleIndexText}>{index + 1}</Text>
                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={styles.moduleTitle}>{item.title}</Text>
                            <Text style={styles.moduleSummary}>{item.summary}</Text>
                        </View>

                        <Text style={styles.moduleArrow}>›</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default CoursePlayerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8FAFC",
    },

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

    courseTitle: {
        fontSize: 26,
        fontWeight: "800",
        color: "#0F172A",
    },

    courseSubtitle: {
        fontSize: 14,
        color: "#334155",
        marginTop: 4,
    },

    progressContainer: {
        marginTop: 16,
    },

    progressBar: {
        height: 8,
        backgroundColor: "#E5E7EB",
        borderRadius: 999,
        overflow: "hidden",
    },

    progressFill: {
        height: "100%",
        backgroundColor: "#2563EB",
    },

    progressText: {
        fontSize: 12,
        marginTop: 6,
        color: "#475569",
    },

    listContent: {
        padding: 20,
    },

    moduleCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 14,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#E2E8F0",
    },

    moduleIndex: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#2563EB",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    moduleIndexText: {
        color: "#fff",
        fontWeight: "700",
    },

    moduleTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#0F172A",
    },

    moduleSummary: {
        fontSize: 13,
        color: "#64748B",
        marginTop: 4,
    },

    moduleArrow: {
        fontSize: 22,
        fontWeight: "700",
        color: "#94A3B8",
        marginLeft: 8,
    },
});
