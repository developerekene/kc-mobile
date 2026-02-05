import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { logoutUser } from "../redux/slice/user";

const ProfileScreen: React.FC<any> = ({ navigation }) => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);

    const fullName =
        `${user.firstName} ${user.middleName || ""} ${user.lastName}`.trim();

    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        if (user?.isLoggedIn) setIsEditing((prev) => !prev);
    };

    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.back}>← Back</Text>
                    {/* <Ionicons name="arrow-back" size={24} color="#0F172A" /> */}
                </TouchableOpacity>

                {/* <Text style={styles.headerTitle}>Profile</Text> */}

                {user?.isLoggedIn && (
                    <TouchableOpacity onPress={toggleEdit}>
                        <Ionicons
                            name={isEditing ? "checkmark-outline" : "create-outline"}
                            size={22}
                            color="#0F172A"
                        />
                    </TouchableOpacity>
                )}
            </View>

            {/* PROFILE CARD */}
            <View style={styles.profileCard}>
                {user?.isLoggedIn ? (
                    <>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>{user.initials || "U"}</Text>
                        </View>

                        <Text style={styles.name}>{fullName || "Unnamed User"}</Text>
                        <Text style={styles.role}>{user.role || "Member"}</Text>

                        <Text style={styles.email}>{user.email}</Text>
                    </>
                ) : (
                    <>
                        <View style={[styles.avatar, styles.guestAvatar]}>
                            <Text style={styles.avatarText}>👤</Text>
                        </View>

                        <Text style={styles.name}>Welcome!</Text>
                        <Text style={styles.role}>Sign in to access your profile</Text>

                        <View style={styles.authActions}>
                            <TouchableOpacity
                                style={styles.loginBtn}
                                onPress={() => navigation.navigate("LoginScreen")}
                            >
                                <Text style={styles.loginText}>Login</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.signupBtn}
                                onPress={() => navigation.navigate("SignupScreen")}
                            >
                                <Text style={styles.signupText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </View>

            {/* SCROLLABLE INFORMATION */}
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={{ paddingBottom: 120 }}
            >
                {user?.isLoggedIn && (
                    <>
                        {/* PERSONAL INFO */}
                        <Section title="Personal Information">
                            <InfoRow
                                label="Gender"
                                value={user.gender}
                                editable={isEditing}
                                keyName="gender"
                            />
                            <InfoRow
                                label="Date of Birth"
                                value={user.dateOfBirth}
                                editable={isEditing}
                                keyName="dateOfBirth"
                            />
                            <InfoRow
                                label="Nationality"
                                value={user.country}
                                editable={isEditing}
                                keyName="country"
                            />
                        </Section>

                        {/* CONTACT INFO */}
                        <Section title="Contact Information">
                            <InfoRow
                                label="Primary Email"
                                value={user.email}
                                editable={isEditing}
                                keyName="email"
                            />
                            <InfoRow
                                label="Secondary Email"
                                value={user.secondaryEmail}
                                editable={isEditing}
                                keyName="secondaryEmail"
                            />
                            <InfoRow
                                label="Phone"
                                value={user.phone}
                                editable={isEditing}
                                keyName="phone"
                            />
                            <InfoRow
                                label="City"
                                value={user.city}
                                editable={isEditing}
                                keyName="city"
                            />
                            <InfoRow
                                label="State"
                                value={user.state}
                                editable={isEditing}
                                keyName="state"
                            />
                        </Section>

                        {/* WORK INFO */}
                        <Section title="Work Information">
                            <InfoRow
                                label="Position"
                                value={user.position}
                                editable={isEditing}
                                keyName="position"
                            />
                            <InfoRow
                                label="Department"
                                value={user.department}
                                editable={isEditing}
                                keyName="department"
                            />
                            <InfoRow
                                label="Employee ID"
                                value={user.employeeId}
                                editable={isEditing}
                                keyName="employeeId"
                            />
                            <InfoRow
                                label="Work Location"
                                value={user.workLocation}
                                editable={isEditing}
                                keyName="workLocation"
                            />
                            <InfoRow
                                label="Employment Status"
                                value={user.employmentStatus}
                                editable={isEditing}
                                keyName="employmentStatus"
                            />
                        </Section>

                        {/* PERFORMANCE */}
                        <Section title="Performance Snapshot">
                            <MetricRow
                                label="Performance Score"
                                value={`${user.performanceScore}%`}
                            />
                            <MetricRow label="Attendance Rate" value={`${user.attendanceRate}%`} />
                            <MetricRow
                                label="Training Progress"
                                value={`${user.trainingProgress}%`}
                            />
                            <MetricRow label="Active Tasks" value={user.activeTasks} />
                        </Section>

                        {/* SKILLS */}
                        <Section title="Skills">
                            {user.skills.length === 0 ? (
                                <Text style={styles.emptyText}>No skills added yet</Text>
                            ) : (
                                <View style={styles.chips}>
                                    {user.skills.map((skill: string, index: number) => (
                                        <View key={index} style={styles.chip}>
                                            <Text style={styles.chipText}>{skill}</Text>
                                        </View>
                                    ))}
                                </View>
                            )}
                        </Section>

                        {/* CERTIFICATIONS */}
                        <Section title="Certifications">
                            {user.certifications.length === 0 ? (
                                <Text style={styles.emptyText}>No certifications added</Text>
                            ) : (
                                user.certifications.map((cert: string, index: number) => (
                                    <Text key={index} style={styles.listItem}>
                                        • {cert}
                                    </Text>
                                ))
                            )}
                        </Section>

                        {/* LOGOUT */}
                        <TouchableOpacity
                            style={styles.logoutBtn}
                            onPress={() => dispatch(logoutUser())}
                        >
                            <Ionicons name="log-out-outline" size={20} color="#EF4444" />
                            <Text style={styles.logoutText}>Logout</Text>
                        </TouchableOpacity>
                    </>
                )}
            </ScrollView>
        </View>
    );
};

// Editable InfoRow
const InfoRow = ({ label, value, editable, keyName }: any) => {
    const [text, setText] = useState(value);
    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            {editable ? (
                <TextInput
                    style={[styles.value, { borderBottomWidth: 1, borderColor: "#CBD5E1" }]}
                    value={text}
                    onChangeText={setText}
                />
            ) : (
                <Text style={styles.value}>{value || "-"}</Text>
            )}
        </View>
    );
};

const Section = ({ title, children }: any) => (
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {children}
    </View>
);

const MetricRow = ({ label, value }: any) => (
    <View style={styles.metricRow}>
        <Text style={styles.metricLabel}>{label}</Text>
        <Text style={styles.metricValue}>{value}</Text>
    </View>
);

export default ProfileScreen;


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FFFFFF", padding: 16, paddingTop: 50 },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 24,
    },
    back: {
        fontSize: 16,
        fontWeight: "700",
        color: "#0F172A",
        marginBottom: 12,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "900",
        color: "#0F172A",
    },

    profileCard: {
        backgroundColor: "#EEF2FF",
        padding: 20,
        borderRadius: 16,
        alignItems: "center",
        marginBottom: 24,
    },
    avatar: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: "#6366F1",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    avatarText: {
        color: "#FFFFFF",
        fontSize: 28,
        fontWeight: "900",
    },
    name: {
        fontSize: 20,
        fontWeight: "900",
        color: "#0F172A",
    },
    role: {
        fontSize: 14,
        fontWeight: "700",
        color: "#475569",
        marginTop: 2,
    },
    email: {
        fontSize: 13,
        color: "#334155",
        marginTop: 4,
    },

    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "900",
        color: "#0F172A",
        marginBottom: 10,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E7EB",
    },
    label: {
        fontSize: 13,
        fontWeight: "700",
        color: "#475569",
    },
    value: {
        fontSize: 13,
        color: "#0F172A",
        fontWeight: "700",
    },

    metricRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#F8FAFC",
        padding: 12,
        borderRadius: 12,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: "#E2E8F0",
    },
    metricLabel: { fontSize: 13, color: "#475569", fontWeight: "700" },
    metricValue: { fontSize: 13, color: "#0F172A", fontWeight: "900" },

    chips: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    chip: {
        backgroundColor: "#EEF2FF",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 999,
    },
    chipText: {
        fontSize: 12,
        fontWeight: "700",
        color: "#0F172A",
    },

    listItem: {
        fontSize: 14,
        color: "#0F172A",
        marginBottom: 6,
    },

    emptyText: {
        fontSize: 13,
        color: "#64748B",
        fontStyle: "italic",
    },

    logoutBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        marginTop: 20,
        padding: 14,
        borderRadius: 12,
        backgroundColor: "#FEE2E2",
    },
    logoutText: {
        color: "#EF4444",
        fontWeight: "900",
        fontSize: 14,
    },
    guestAvatar: {
        backgroundColor: "#CBD5E1",
    },

    authActions: {
        flexDirection: "row",
        gap: 12,
        marginTop: 16,
    },

    loginBtn: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: "#2563EB",
    },

    loginText: {
        color: "#FFFFFF",
        fontWeight: "800",
        fontSize: 14,
    },

    signupBtn: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: "#E5E7EB",
    },

    signupText: {
        color: "#0F172A",
        fontWeight: "800",
        fontSize: 14,
    },
    scrollContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
        backgroundColor: "#FFFFFF",
    },
});

