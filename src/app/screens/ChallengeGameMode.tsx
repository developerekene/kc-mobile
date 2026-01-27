import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type CityStats = {
    budget: number;
    publicTrust: number;
    sustainability: number;
    waterReserve: number;
    populationSatisfaction: number;
};

const ChallengeGameMode: React.FC = ({ route, navigation }: any) => {
    const { challenge } = route.params;
    const [currentDecisionIndex, setCurrentDecisionIndex] = useState<number | null>(null);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [gameEnded, setGameEnded] = useState(false);
    const [state, setState] = useState<CityStats>(challenge.gameplay.initialState);



    // -----------------------------
    // Helper: Apply decision impacts
    // -----------------------------
    const applyDecision = (impact: any, feedbackText: string) => {
        setState((prev: any) => ({
            ...prev,
            ...Object.keys(impact).reduce(
                (acc, key) => ({ ...acc, [key]: (prev[key] ?? 0) + impact[key] }),
                {}
            ),
        }));
        setFeedback(feedbackText);
    };

    // -----------------------------
    // Helper: Check win/fail conditions
    // -----------------------------
    const checkGameStatus = (): "WIN" | "FAIL" | "CONTINUE" => {
        const { winConditions, failConditions } = challenge.gameplay;

        // Cast to typed entries
        const failEntries = Object.entries(failConditions) as [keyof CityStats, number][];
        const winEntries = Object.entries(winConditions) as [keyof CityStats, number][];

        // Check fail conditions
        const failed = failEntries.some(([key, value]) => {
            const stat = state[key];
            return stat <= value;
        });
        if (failed) return "FAIL";

        // Check win conditions
        const won = winEntries.every(([key, value]) => {
            const stat = state[key];
            return stat >= value;
        });
        if (won) return "WIN";

        return "CONTINUE";
    };


    // -----------------------------
    // Helper: Progress to next decision
    // -----------------------------
    const nextDecision = () => {
        setFeedback(null);
        if (currentDecisionIndex === null) {
            setCurrentDecisionIndex(0);
        } else if (currentDecisionIndex < challenge.gameplay.decisions.length - 1) {
            setCurrentDecisionIndex(currentDecisionIndex + 1);
        } else {
            setGameEnded(true);
        }
    };

    // -----------------------------
    // Handle option selection
    // -----------------------------
    const handleOptionSelect = (option: any) => {
        applyDecision(option.impact, option.feedback);

        setTimeout(() => {
            const status = checkGameStatus();
            if (status === "WIN") {
                alert("🎉 Congratulations! You successfully managed the city!");
                setGameEnded(true);
            } else if (status === "FAIL") {
                alert("⚠️ Game Over! Your city has failed. Try again!");
                setGameEnded(true);
            } else {
                nextDecision();
            }
        }, 500);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* BACK */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.back}>← Back</Text>
            </TouchableOpacity>

            <ScrollView contentContainerStyle={{ paddingBottom: 160 }}>
                {/* HEADER */}
                <Text style={styles.title}>🎮 Game Mode</Text>
                <Text style={styles.subtitle}>{challenge.title}</Text>

                {/* CITY STATS */}
                <View style={styles.statsCard}>
                    <Text style={styles.statsTitle}>City Stats</Text>
                    {Object.entries(state).map(([key, value]) => {
                        const numValue = value as number; // <- cast to number
                        return (
                            <View key={key} style={styles.statRow}>
                                <Text style={styles.statKey}>{key}</Text>
                                <View style={styles.progressBar}>
                                    <View
                                        style={[
                                            styles.progressFill,
                                            {
                                                width: `${Math.min(numValue, 100)}%`, // width expects `${number}%`
                                                backgroundColor: getStatColor(key, numValue),
                                            },
                                        ]}
                                    />
                                </View>
                                <Text style={styles.statValue}>{numValue}</Text>
                            </View>
                        );
                    })}
                </View>


                {/* FEEDBACK / DECISION */}
                {feedback && (
                    <View style={styles.hintCard}>
                        <Text style={styles.hintTitle}>Feedback</Text>
                        <Text style={styles.hintText}>{feedback}</Text>
                    </View>
                )}

                {/* DECISION MODAL */}
                {currentDecisionIndex !== null && !gameEnded && (
                    <View style={styles.decisionCard}>
                        <Text style={styles.decisionTitle}>Decision Phase</Text>
                        <Text style={styles.decisionPrompt}>
                            {challenge.gameplay.decisions[currentDecisionIndex].prompt}
                        </Text>
                        {challenge.gameplay.decisions[currentDecisionIndex].options.map((option: any) => (
                            <TouchableOpacity
                                key={option.id}
                                style={styles.optionBtn}
                                onPress={() => handleOptionSelect(option)}
                            >
                                <Text style={styles.optionText}>{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

                {/* START GAME BUTTON */}
                {currentDecisionIndex === null && !gameEnded && (
                    <View style={styles.startButtonWrapper}>
                        <TouchableOpacity style={styles.primaryBtn} onPress={nextDecision}>
                            <Text style={styles.primaryText}>Let's Play</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* GAME END */}
                {gameEnded && (
                    <View style={styles.endCard}>
                        <Text style={styles.endTitle}>🏁 Game Over</Text>
                        <Text style={styles.endText}>
                            You can restart the challenge or go back to review your stats.
                        </Text>
                        <TouchableOpacity style={styles.primaryBtn} onPress={() => {
                            setState(challenge.gameplay.initialState);
                            setCurrentDecisionIndex(null);
                            setFeedback(null);
                            setGameEnded(false);
                        }}>
                            <Text style={styles.primaryText}>Restart</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

// -----------------------------
// Helper: Progress bar color
// -----------------------------
const getStatColor = (key: string, value: number) => {
    switch (key) {
        case "budget": return value > 50 ? "#34D399" : value > 20 ? "#FBBF24" : "#F87171";
        case "publicTrust": return value > 60 ? "#34D399" : value > 30 ? "#FBBF24" : "#F87171";
        case "sustainability": return value > 60 ? "#34D399" : value > 30 ? "#FBBF24" : "#F87171";
        case "waterReserve": return value > 40 ? "#34D399" : value > 20 ? "#FBBF24" : "#F87171";
        case "populationSatisfaction": return value > 60 ? "#34D399" : value > 30 ? "#FBBF24" : "#F87171";
        default: return "#2563EB";
    }
};

export default ChallengeGameMode;

// -----------------------------
// Styles
// -----------------------------
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#F8FAFC" },

    back: { fontSize: 16, fontWeight: "700", color: "#0F172A", marginBottom: 12 },

    title: { fontSize: 24, fontWeight: "900", color: "#0F172A" },
    subtitle: { fontSize: 16, fontWeight: "700", color: "#475569", marginBottom: 16 },

    statsCard: { backgroundColor: "#FFFFFF", borderRadius: 16, padding: 16, marginBottom: 24, borderWidth: 1, borderColor: "#E2E8F0" },
    statsTitle: { fontSize: 18, fontWeight: "900", marginBottom: 12, color: "#0F172A" },
    statRow: { marginBottom: 12 },
    statKey: { fontSize: 14, fontWeight: "600", color: "#334155", marginBottom: 4 },
    statValue: { fontSize: 12, fontWeight: "700", color: "#1E40AF", textAlign: "right" },
    progressBar: { height: 10, backgroundColor: "#E5E7EB", borderRadius: 8, overflow: "hidden", marginBottom: 4 },
    progressFill: { height: "100%", borderRadius: 8 },

    hintCard: { backgroundColor: "#EFF6FF", padding: 16, borderRadius: 16, marginBottom: 24 },
    hintTitle: { fontSize: 16, fontWeight: "900", marginBottom: 8, color: "#0F172A" },
    hintText: { fontSize: 14, fontWeight: "600", color: "#475569" },

    decisionCard: { backgroundColor: "#F1F5F9", padding: 16, borderRadius: 16, marginBottom: 32 },
    decisionTitle: { fontSize: 16, fontWeight: "900", color: "#0F172A", marginBottom: 8 },
    decisionPrompt: { fontSize: 14, fontWeight: "600", color: "#334155", marginBottom: 8 },
    optionBtn: { backgroundColor: "#FFFFFF", padding: 12, borderRadius: 12, marginBottom: 6, borderWidth: 1, borderColor: "#E2E8F0" },
    optionText: { fontSize: 14, fontWeight: "700", color: "#0F172A" },

    startButtonWrapper: { marginTop: 24, alignItems: "center" },

    endCard: { backgroundColor: "#DBEAFE", padding: 16, borderRadius: 16, alignItems: "center", marginTop: 32 },
    endTitle: { fontSize: 18, fontWeight: "900", color: "#0F172A", marginBottom: 8 },
    endText: { fontSize: 14, fontWeight: "600", color: "#334155", marginBottom: 12 },

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
    primaryBtn: { backgroundColor: "#2563EB", padding: 16, borderRadius: 14, alignItems: "center" },
    primaryText: { color: "#FFFFFF", fontSize: 16, fontWeight: "800" },
});