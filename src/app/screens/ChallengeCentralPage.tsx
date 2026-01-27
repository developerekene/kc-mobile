import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const challenges = [
    {
        id: "1",
        title: "Water Supply Crisis",
        urgency: "High",
        category: "Infrastructure",
        duration: "30–45 mins",
        difficulty: "Hard",

        shortDescription:
            "A growing city is facing severe water shortages due to climate change and aging infrastructure.",

        context:
            "Reservoir levels are critically low, pipe leakages are frequent, and population growth is putting pressure on limited resources.",

        objective:
            "Design a sustainable water distribution strategy that balances demand, cost, and long-term resilience.",

        skills: [
            "Critical Thinking",
            "Systems Design",
            "Resource Management",
            "Basic Programming Logic",
        ],

        learningOutcomes: {
            gameMode: [
                "Understand trade-offs in public policy decisions",
                "Learn how short-term actions affect long-term sustainability",
                "Practice decision-making under constraints",
            ],
            codingMode: [
                "Learn JavaScript variables and objects",
                "Understand conditional logic (if/else)",
                "Simulate real-world systems using code",
            ],
        },

        modes: ["GAME", "CODE"],

        // =========================
        // 🎮 GAME MODE
        // =========================
        gameplay: {
            initialState: {
                budget: 100,
                publicTrust: 70,
                sustainability: 50,
                waterReserve: 40, // %
                populationSatisfaction: 65,
            },

            metricsExplanation: {
                budget: "Funds available for city projects",
                publicTrust: "How much citizens trust leadership",
                sustainability: "Long-term water system health",
                waterReserve: "Remaining usable water supply",
                populationSatisfaction: "Daily quality of life",
            },

            winConditions: {
                sustainability: 75,
                publicTrust: 60,
                waterReserve: 50,
            },

            failConditions: {
                budget: 0,
                publicTrust: 20,
                waterReserve: 10,
            },

            decisions: [
                {
                    id: "decision-1",
                    phase: "Early Crisis",
                    prompt:
                        "Water levels have dropped to critical levels. What is your first move?",
                    options: [
                        {
                            id: "option-1",
                            label: "Introduce immediate water rationing",
                            impact: {
                                budget: +10,
                                publicTrust: -15,
                                sustainability: +10,
                                waterReserve: +5,
                                populationSatisfaction: -10,
                            },
                            feedback:
                                "Rationing slows water loss but frustrates citizens.",
                        },
                        {
                            id: "option-2",
                            label: "Repair leaking pipelines",
                            impact: {
                                budget: -30,
                                publicTrust: +10,
                                sustainability: +20,
                                waterReserve: +10,
                            },
                            feedback:
                                "Infrastructure repair improves efficiency but is costly.",
                        },
                    ],
                },

                {
                    id: "decision-2",
                    phase: "Public Response",
                    prompt:
                        "Public protests arise due to restrictions. How do you respond?",
                    options: [
                        {
                            id: "option-3",
                            label: "Launch a public education campaign",
                            impact: {
                                budget: -10,
                                publicTrust: +20,
                                populationSatisfaction: +10,
                            },
                            feedback:
                                "Transparency builds trust and calms the population.",
                        },
                        {
                            id: "option-4",
                            label: "Increase enforcement and penalties",
                            impact: {
                                publicTrust: -25,
                                sustainability: +5,
                                populationSatisfaction: -20,
                            },
                            feedback:
                                "Strict enforcement protects resources but damages morale.",
                        },
                    ],
                },
            ],
        },

        // =========================
        // 💻 CODING MODE (JavaScript)
        // =========================
        codingMode: {
            targetAudience: "Beginner",
            language: "JavaScript",

            narrative:
                "Instead of making decisions directly, you will write simple JavaScript code to control the city’s water system.",

            conceptsTaught: [
                "Variables",
                "Objects",
                "Functions",
                "Conditional Logic",
            ],

            initialCodeState: `
      let city = {
        budget: 100,
        publicTrust: 70,
        sustainability: 50,
        waterReserve: 40
      };
      `,

            tasks: [
                {
                    id: "code-task-1",
                    title: "Control Water Rationing",
                    lesson:
                        "Variables store data that can change over time.",

                    instruction:
                        "Write a function that applies water rationing and updates the city's stats.",

                    starterCode: `
      function applyRationing(city) {
        // Your code here
      }
      `,

                    expectedLogic:
                        "If rationing is applied, increase sustainability and waterReserve, but decrease publicTrust.",

                    solutionHint:
                        "Use city.propertyName += value",

                    sampleSolution: `
      function applyRationing(city) {
        city.sustainability += 10;
        city.waterReserve += 5;
        city.publicTrust -= 15;
      }
      `,
                },

                {
                    id: "code-task-2",
                    title: "Check Win or Fail Conditions",
                    lesson:
                        "Conditional statements allow programs to make decisions.",

                    instruction:
                        "Write a function that checks if the city has won or failed.",

                    starterCode: `
      function checkCityStatus(city) {
        // return "WIN", "FAIL", or "CONTINUE"
      }
      `,

                    expectedLogic:
                        "Use if/else conditions to compare values.",

                    sampleSolution: `
      function checkCityStatus(city) {
        if (city.waterReserve <= 10 || city.publicTrust <= 20) {
          return "FAIL";
        }
      
        if (city.sustainability >= 75 && city.publicTrust >= 60) {
          return "WIN";
        }
      
        return "CONTINUE";
      }
      `,
                },
            ],

            completionReward: {
                unlockedSkill: "JavaScript Basics",
                badge: "First Code Simulation",
            },
        },

        // =========================
        // 🏁 COMPLETION
        // =========================
        completion: {
            reflectionPrompt:
                "Which decision or line of code had the biggest impact on the city’s future?",

            rewards: {
                xp: 500,
                badges: ["Crisis Thinker", "Logic Builder"],
            },
        },
    }

    // {
    //     id: "2",
    //     title: "Traffic Management Puzzle",
    //     urgency: "Medium",
    //     category: "Urban Mobility",
    //     duration: "20–30 mins",
    //     difficulty: "Medium",
    //     shortDescription:
    //         "Daily traffic congestion is increasing commute times and pollution levels.",
    //     context:
    //         "The city has limited road expansion options and relies heavily on outdated traffic signal systems.",
    //     objective:
    //         "Optimize traffic flow using smarter routing, timing, and policy decisions.",
    //     skills: ["Logical Reasoning", "Optimization", "Data Analysis"],
    // },
    // {
    //     id: "3",
    //     title: "Urban Planning Dilemma",
    //     urgency: "High",
    //     category: "City Development",
    //     duration: "40–60 mins",
    //     difficulty: "Hard",
    //     shortDescription:
    //         "A new district must be developed while preserving green spaces and affordability.",
    //     context:
    //         "Investors want rapid development, residents want sustainability, and regulations are strict.",
    //     objective:
    //         "Propose a balanced urban plan that satisfies economic, environmental, and social needs.",
    //     skills: ["Strategic Thinking", "Trade-off Analysis", "Policy Design"],
    // },
];


const ChallengeCentralPage: React.FC<any> = ({ navigation }) => {


    const ChallengeCard = ({ item }: { item: any }) => {
        return (
            <View style={styles.challengeCard}>
                {/* Header */}
                <View style={styles.cardHeader}>
                    <Text style={styles.challengeTitle}>{item.title}</Text>

                    <View
                        style={[
                            styles.urgencyBadge,
                            item.urgency === "High" && styles.highUrgency,
                        ]}
                    >
                        <Text style={styles.urgencyText}>{item.urgency}</Text>
                    </View>
                </View>

                <Text style={styles.shortDescription}>{item.shortDescription}</Text>

                {/* Meta */}
                <View style={styles.metaRow}>
                    <Text style={styles.metaItem}>📌 {item.category}</Text>
                    <Text style={styles.metaItem}>⏱ {item.duration}</Text>
                    <Text style={styles.metaItem}>⚡ {item.difficulty}</Text>
                </View>

                {/* Modes */}
                <View style={styles.modeRow}>
                    {item.modes?.map((mode: string) => (
                        <View
                            key={mode}
                            style={[
                                styles.modeBadge,
                                mode === "GAME" && styles.gameMode,
                                mode === "CODE" && styles.codeMode,
                            ]}
                        >
                            <Text style={styles.modeText}>
                                {mode === "GAME" ? "🎮 Game Mode" : "💻 Coding Mode"}
                            </Text>
                        </View>
                    ))}
                </View>

                <Text style={styles.learningHint}>
                    Learn by making decisions or writing JavaScript
                </Text>

                {/* CTA */}
                <TouchableOpacity
                    style={styles.takeBtn}
                    onPress={() =>
                        navigation.navigate("ChallengeDetailScreen", {
                            challenge: item,
                        })
                    }
                >
                    <Text style={styles.takeBtnText}>Start Challenge →</Text>
                </TouchableOpacity>
            </View>
        );
    };




    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backArrow}>← Back</Text>
            </TouchableOpacity>
            <Text style={styles.header}>Mind Challenges</Text>
            <FlatList
                data={challenges}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ChallengeCard item={item} />}
                contentContainerStyle={{ paddingBottom: 100 }}
            />

        </SafeAreaView>
    );
};

export default ChallengeCentralPage;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#F8FAFC" },
    header: { fontSize: 24, fontWeight: "900", marginBottom: 16, color: "#0F172A" },
    challengeCard: { backgroundColor: "#DBEAFE", padding: 16, borderRadius: 14, marginBottom: 12 },
    challengeTitle: { fontSize: 18, fontWeight: "900", color: "#0F172A" },
    challengeUrgency: { fontSize: 12, color: "#475569", marginVertical: 6 },
    takeBtn: { backgroundColor: "#2563EB", padding: 12, borderRadius: 12, alignItems: "center", marginTop: 20 },
    takeBtnText: { color: "#fff", fontWeight: "700" },
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

    urgencyBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 999,
        backgroundColor: "#CBD5E1",
    },

    highUrgency: {
        backgroundColor: "#FCA5A5",
    },

    urgencyText: {
        fontSize: 12,
        fontWeight: "800",
        color: "#7F1D1D",
    },

    shortDescription: {
        marginTop: 8,
        fontSize: 14,
        color: "#334155",
        fontWeight: "600",
    },

    metaRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        marginTop: 10,
    },

    metaItem: {
        fontSize: 12,
        color: "#475569",
        fontWeight: "700",
    },

    skillRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginVertical: 12,
    },

    skillChip: {
        backgroundColor: "#DBEAFE",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 999,
    },

    skillText: {
        fontSize: 12,
        fontWeight: "800",
        color: "#1E40AF",
    },
    modeRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 8,
        gap: 8,
    },

    modeBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },

    gameMode: {
        backgroundColor: "#E0F2FE",
    },

    codeMode: {
        backgroundColor: "#ECFDF5",
    },

    modeText: {
        fontSize: 12,
        fontWeight: "600",
    },

    learningHint: {
        marginTop: 6,
        fontSize: 13,
        color: "#6B7280",
        fontStyle: "italic",
    },


});