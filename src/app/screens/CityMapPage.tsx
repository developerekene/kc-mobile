import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CityMapPage: React.FC<any> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backArrow}>← Back</Text>
            </TouchableOpacity>
            <Text style={styles.header}>City Map</Text>

            <View style={styles.mapPlaceholder}>
                <Text style={{ color: "#64748B" }}>Map Placeholder 🗺️</Text>
            </View>

            <TouchableOpacity style={styles.exploreBtn}>
                <Text style={styles.exploreBtnText}>Explore Learning Hubs →</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default CityMapPage;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#F8FAFC", justifyContent: "center" },
    header: { fontSize: 24, fontWeight: "900", marginBottom: 16, color: "#0F172A" },
    mapPlaceholder: { flex: 1, borderRadius: 16, borderWidth: 2, borderColor: "#E2E8F0", justifyContent: "center", alignItems: "center", marginBottom: 16 },
    exploreBtn: { backgroundColor: "#2563EB", padding: 14, borderRadius: 12, alignItems: "center" },
    exploreBtnText: { color: "#fff", fontWeight: "700" },
    backButton: {
        marginBottom: 16,
    },
    backArrow: {
        fontSize: 16,
        fontWeight: "700",
        color: "#0F172A",
    },
});