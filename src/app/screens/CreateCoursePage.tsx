import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

const CreateCoursePage: React.FC<any> = ({ navigation }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [level, setLevel] = useState("Beginner");
    const [color, setColor] = useState("#2563EB");
    const [estimatedTime, setEstimatedTime] = useState("");
    const [modules, setModules] = useState<string[]>([]);
    const [newModule, setNewModule] = useState("");
    const [outcomes, setOutcomes] = useState<string[]>([]);
    const [newOutcome, setNewOutcome] = useState("");

    const addModule = () => {
        if (newModule.trim() !== "") {
            setModules([...modules, newModule.trim()]);
            setNewModule("");
        }
    };

    const addOutcome = () => {
        if (newOutcome.trim() !== "") {
            setOutcomes([...outcomes, newOutcome.trim()]);
            setNewOutcome("");
        }
    };

    const saveCourse = () => {
        if (!title || !description) {
            Toast.show({
                type: "error",
                text1: "Missing Fields",
                text2: "Please provide at least a title and description",
            });
            return;
        }

        const newCourse = {
            id: Date.now().toString(),
            title,
            description,
            level,
            color,
            estimatedTime,
            modules,
            outcomes,
        };

        // Placeholder: in real app, save to backend or state
        Toast.show({
            type: "success",
            text1: "Course Created",
            text2: `Course "${title}" was created successfully!`,
        });

        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                {/* BACK BUTTON */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backArrow}>← Back</Text>
                </TouchableOpacity>

                <Text style={styles.header}>Create New Course</Text>

                {/* Title */}
                <Text style={styles.label}>Course Title</Text>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Enter course title"
                    style={styles.input}
                />

                {/* Description */}
                <Text style={styles.label}>Description</Text>
                <TextInput
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Enter course description"
                    multiline
                    style={[styles.input, { height: 80 }]}
                />

                {/* Level */}
                <Text style={styles.label}>Level</Text>
                <TextInput
                    value={level}
                    onChangeText={setLevel}
                    placeholder="Beginner / Intermediate / Advanced"
                    style={styles.input}
                />

                {/* Color */}
                <Text style={styles.label}>Course Color</Text>
                <TextInput
                    value={color}
                    onChangeText={setColor}
                    placeholder="#2563EB"
                    style={styles.input}
                />

                {/* Estimated Time */}
                <Text style={styles.label}>Estimated Time</Text>
                <TextInput
                    value={estimatedTime}
                    onChangeText={setEstimatedTime}
                    placeholder="e.g., 3h 30m"
                    style={styles.input}
                />

                {/* Modules */}
                <Text style={styles.label}>Modules</Text>
                <View style={{ flexDirection: "row", marginBottom: 8 }}>
                    <TextInput
                        value={newModule}
                        onChangeText={setNewModule}
                        placeholder="Add module"
                        style={[styles.input, { flex: 1, marginRight: 8 }]}
                    />
                    <TouchableOpacity onPress={addModule} style={styles.addBtn}>
                        <Text style={styles.addBtnText}>Add</Text>
                    </TouchableOpacity>
                </View>
                {modules.length > 0 && (
                    <FlatList
                        data={modules}
                        keyExtractor={(_, i) => i.toString()}
                        renderItem={({ item, index }) => (
                            <Text style={styles.listItem}>• {item}</Text>
                        )}
                    />
                )}

                {/* Outcomes */}
                <Text style={styles.label}>Learning Outcomes</Text>
                <View style={{ flexDirection: "row", marginBottom: 8 }}>
                    <TextInput
                        value={newOutcome}
                        onChangeText={setNewOutcome}
                        placeholder="Add outcome"
                        style={[styles.input, { flex: 1, marginRight: 8 }]}
                    />
                    <TouchableOpacity onPress={addOutcome} style={styles.addBtn}>
                        <Text style={styles.addBtnText}>Add</Text>
                    </TouchableOpacity>
                </View>
                {outcomes.length > 0 && (
                    <FlatList
                        data={outcomes}
                        keyExtractor={(_, i) => i.toString()}
                        renderItem={({ item }) => <Text style={styles.listItem}>• {item}</Text>}
                    />
                )}

                {/* Save Button */}
                <TouchableOpacity style={[styles.createBtn, { marginTop: 24 }]} onPress={saveCourse}>
                    <Text style={styles.createBtnText}>Save Course</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CreateCoursePage;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#F8FAFC" },
    header: { fontSize: 24, fontWeight: "900", marginBottom: 16, color: "#0F172A" },
    backButton: { marginBottom: 16 },
    backArrow: { fontSize: 16, fontWeight: "700", color: "#0F172A" },
    label: { fontSize: 14, fontWeight: "700", color: "#0F172A", marginBottom: 6 },
    input: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E2E8F0",
        marginBottom: 12,
    },
    addBtn: {
        backgroundColor: "#2563EB",
        paddingHorizontal: 16,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    addBtnText: { color: "#fff", fontWeight: "700" },
    listItem: { fontSize: 13, color: "#0F172A", marginBottom: 4 },
    createBtn: { backgroundColor: "#2563EB", padding: 14, borderRadius: 12, alignItems: "center" },
    createBtnText: { color: "#fff", fontWeight: "700" },
});