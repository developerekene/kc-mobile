import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Modal,
    Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChallengeDetailScreen = ({ route, navigation }: any) => {
    const { challenge } = route.params;
    const [showModeModal, setShowModeModal] = useState(false);

    const startMode = (mode: "GAME" | "CODE") => {
        setShowModeModal(false);

        navigation.navigate(
            mode === "GAME" ? "ChallengeGameMode" : "ChallengeCodingMode",
            { challenge }
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.back}>← Back</Text>
            </TouchableOpacity>

            <ScrollView contentContainerStyle={{ paddingBottom: 160 }}>
                <Text style={styles.title}>{challenge.title}</Text>

                <View style={styles.metaRow}>
                    <Text style={styles.metaBadge}>📌 {challenge.category}</Text>
                    <Text style={styles.metaBadge}>⏱ {challenge.duration}</Text>
                    <Text style={styles.metaBadge}>⚡ {challenge.difficulty}</Text>
                </View>

                <Text style={styles.description}>
                    {challenge.shortDescription}
                </Text>

                <Text style={styles.sectionTitle}>Scenario</Text>
                <Text style={styles.body}>{challenge.context}</Text>

                <Text style={styles.sectionTitle}>Your Objective</Text>
                <Text style={styles.body}>{challenge.objective}</Text>

                <Text style={styles.sectionTitle}>Skills You’ll Build</Text>
                <View style={styles.skillRow}>
                    {challenge.skills.map((skill: string) => (
                        <View key={skill} style={styles.skillChip}>
                            <Text style={styles.skillText}>{skill}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* CTA */}
            <View style={styles.bottomCTA}>
                <TouchableOpacity
                    style={styles.primaryBtn}
                    onPress={() => setShowModeModal(true)}
                >
                    <Text style={styles.primaryText}>Choose Start Mode</Text>
                </TouchableOpacity>
            </View>

            {/* MODE SELECT MODAL */}
            <Modal
                animationType="slide"
                transparent
                visible={showModeModal}
                onRequestClose={() => setShowModeModal(false)}
            >
                <Pressable
                    style={styles.modalOverlay}
                    onPress={() => setShowModeModal(false)}
                />

                <View style={styles.modalSheet}>
                    <Text style={styles.modalTitle}>Select Mode</Text>

                    <TouchableOpacity
                        style={styles.modeBtn}
                        onPress={() => startMode("GAME")}
                    >
                        <Text style={styles.modeBtnTitle}>🎮 Game Mode</Text>
                        <Text style={styles.modeBtnDesc}>
                            Make strategic decisions and manage resources
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.modeBtn}
                        onPress={() => startMode("CODE")}
                    >
                        <Text style={styles.modeBtnTitle}>💻 Coding Mode</Text>
                        <Text style={styles.modeBtnDesc}>
                            Solve the challenge using JavaScript logic
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default ChallengeDetailScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8FAFC",
        padding: 16,
    },

    back: {
        fontSize: 16,
        fontWeight: "700",
        color: "#0F172A",
        marginBottom: 12,
    },

    title: {
        fontSize: 28,
        fontWeight: "900",
        color: "#0F172A",
    },

    metaRow: {
        flexDirection: "row",
        gap: 8,
        marginVertical: 12,
        flexWrap: "wrap",
    },

    metaBadge: {
        backgroundColor: "#E0E7FF",
        color: "#3730A3",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 999,
        fontSize: 12,
        fontWeight: "800",
    },

    description: {
        fontSize: 16,
        fontWeight: "600",
        color: "#334155",
        lineHeight: 22,
        marginBottom: 16,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: "900",
        color: "#0F172A",
        marginTop: 24,
        marginBottom: 8,
    },

    body: {
        fontSize: 15,
        fontWeight: "600",
        color: "#475569",
        lineHeight: 22,
    },

    skillRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginTop: 8,
    },

    skillChip: {
        backgroundColor: "#DBEAFE",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 999,
    },

    skillText: {
        fontSize: 12,
        fontWeight: "800",
        color: "#1E40AF",
    },

    modeCard: {
        backgroundColor: "#FFFFFF",
        padding: 16,
        borderRadius: 16,
        marginTop: 12,
        borderWidth: 1,
        borderColor: "#E2E8F0",
    },

    modeTitle: {
        fontSize: 16,
        fontWeight: "900",
        marginBottom: 8,
        color: "#0F172A",
    },

    modeBullet: {
        fontSize: 14,
        fontWeight: "600",
        color: "#334155",
        marginBottom: 4,
    },

    bottomCTA: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: "#E2E8F0",
    },

    primaryBtn: {
        backgroundColor: "#2563EB",
        padding: 16,
        borderRadius: 14,
        alignItems: "center",
    },

    primaryText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "800",
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
    },

    modalSheet: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },

    modalTitle: {
        fontSize: 18,
        fontWeight: "900",
        marginBottom: 16,
        color: "#0F172A",
    },

    modeBtn: {
        backgroundColor: "#F1F5F9",
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
    },

    modeBtnTitle: {
        fontSize: 16,
        fontWeight: "900",
        color: "#0F172A",
    },

    modeBtnDesc: {
        fontSize: 13,
        fontWeight: "600",
        color: "#475569",
        marginTop: 4,
    },

});
