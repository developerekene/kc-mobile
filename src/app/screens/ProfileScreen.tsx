import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { logoutUser } from "../redux/slice/user";

const ProfileScreen: React.FC<any> = ({ navigation }) => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);

    const fullName =
        `${user.firstName} ${user.middleName || ""} ${user.lastName}`.trim();

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 120 }}>
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#0F172A" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Profile</Text>

                <TouchableOpacity>
                    <Ionicons name="create-outline" size={22} color="#0F172A" />
                </TouchableOpacity>
            </View>

            {/* PROFILE CARD */}
            <View style={styles.profileCard}>
                {user?.isLoggedIn ? (
                    <>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>
                                {user.initials || "U"}
                            </Text>
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
                                onPress={() => navigation.navigate("Login")}
                            >
                                <Text style={styles.loginText}>Login</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.signupBtn}
                                onPress={() => navigation.navigate("Signup")}
                            >
                                <Text style={styles.signupText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </View>


            {/* PERSONAL INFO */}
            <Section title="Personal Information">
                <InfoRow label="Gender" value={user.gender} />
                <InfoRow label="Date of Birth" value={user.dateOfBirth} />
                <InfoRow label="Nationality" value={user.country} />
            </Section>

            {/* CONTACT INFO */}
            <Section title="Contact Information">
                <InfoRow label="Primary Email" value={user.email} />
                <InfoRow label="Secondary Email" value={user.secondaryEmail} />
                <InfoRow label="Phone" value={user.phone} />
                <InfoRow label="City" value={user.city} />
                <InfoRow label="State" value={user.state} />
            </Section>

            {/* WORK INFO */}
            <Section title="Work Information">
                <InfoRow label="Position" value={user.position} />
                <InfoRow label="Department" value={user.department} />
                <InfoRow label="Employee ID" value={user.employeeId} />
                <InfoRow label="Work Location" value={user.workLocation} />
                <InfoRow label="Employment Status" value={user.employmentStatus} />
            </Section>

            {/* PERFORMANCE */}
            <Section title="Performance Snapshot">
                <MetricRow label="Performance Score" value={`${user.performanceScore}%`} />
                <MetricRow label="Attendance Rate" value={`${user.attendanceRate}%`} />
                <MetricRow label="Training Progress" value={`${user.trainingProgress}%`} />
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
                        <Text key={index} style={styles.listItem}>• {cert}</Text>
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
        </ScrollView>
    );
};

const Section = ({ title, children }: any) => (
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {children}
    </View>
);

const InfoRow = ({ label, value }: any) => (
    <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value || "-"}</Text>
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

});

