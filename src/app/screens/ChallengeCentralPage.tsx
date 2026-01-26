import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const challenges = [
    { id: "1", title: "Water Supply Crisis", urgency: "High" },
    { id: "2", title: "Traffic Management Puzzle", urgency: "Medium" },
    { id: "3", title: "Urban Planning Dilemma", urgency: "High" },
];

const ChallengeCentralPage: React.FC<any> = ({ navigation }) => {

    const ChallengeCard = ({ item }: { item: any }) => (
        <View style={styles.challengeCard}>
            <Text style={styles.challengeTitle}>{item.title}</Text>
            <Text style={styles.challengeUrgency}>Urgency: {item.urgency}</Text>
            <TouchableOpacity style={styles.takeBtn}>
                <Text style={styles.takeBtnText}>Take Challenge →</Text>
            </TouchableOpacity>
        </View>
    );

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
    challengeCard: { backgroundColor: "#EFF6FF", padding: 16, borderRadius: 14, marginBottom: 12 },
    challengeTitle: { fontSize: 18, fontWeight: "900", color: "#0F172A" },
    challengeUrgency: { fontSize: 12, color: "#475569", marginVertical: 6 },
    takeBtn: { backgroundColor: "#2563EB", padding: 12, borderRadius: 12, alignItems: "center" },
    takeBtnText: { color: "#fff", fontWeight: "700" },
    backButton: {
        marginBottom: 16,
    },
    backArrow: {
        fontSize: 16,
        fontWeight: "700",
        color: "#0F172A",
    },
});