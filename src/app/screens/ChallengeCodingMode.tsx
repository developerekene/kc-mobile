import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChallengeCodingMode: React.FC = ({ navigation, route }: any) => {
    const { challenge } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.back}>← Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Coding Mode</Text>
            <Text style={styles.subtitle}>{challenge.title}</Text>

            <View style={styles.card}>
                <Text style={styles.label}>Starting Code:</Text>
                <Text style={styles.codeBlock}>
                    {challenge.codingMode.initialCodeState}
                </Text>
            </View>

            <Text style={styles.hint}>
                You’ll write JavaScript logic here to control the city.
            </Text>
        </SafeAreaView>
    );
};

export default ChallengeCodingMode;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#0F172A" },
    title: { fontSize: 24, fontWeight: "900", color: "#E5E7EB" },
    back: { fontSize: 16, fontWeight: "700", color: "#ffffff", marginBottom: 12 },
    subtitle: {
        fontSize: 14,
        fontWeight: "700",
        color: "#94A3B8",
        marginBottom: 16,
    },
    card: {
        backgroundColor: "#020617",
        padding: 16,
        borderRadius: 12,
    },
    label: {
        fontSize: 12,
        fontWeight: "700",
        color: "#38BDF8",
        marginBottom: 8,
    },
    codeBlock: {
        fontFamily: "monospace",
        fontSize: 13,
        color: "#E5E7EB",
    },
    hint: {
        marginTop: 24,
        fontSize: 14,
        color: "#CBD5F5",
    },
});
