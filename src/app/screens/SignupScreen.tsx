import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { authService } from "../redux/configration/auth.service";

// 1. REBUILT INPUT COMPONENT (Defined OUTSIDE to prevent focus loss)
const CustomInput = ({ label, value, onChangeText, ...props }: any) => (
  <View style={styles.inputGroup}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}              // Explicitly controlled
      onChangeText={onChangeText} // Direct function call
      placeholderTextColor="#94A3B8"
      {...props}
    />
  </View>
);

const SignupScreen: React.FC<any> = ({ navigation }) => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSignup = async () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return Alert.alert("Error", "Please fill all fields");
    }

    if (password !== confirmPassword) {
      return Alert.alert("Error", "Passwords do not match");
    }

    await authService.handleUserRegistration(formData).then(() => {
      navigation.navigate("Home");
    })
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>← Back</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{ paddingBottom: 60 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <View style={styles.avatar}>
            <Ionicons name="person-add-outline" size={32} color="#FFFFFF" />
          </View>

          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join us and start managing your profile</Text>

          {/* 4. INPUTS USING THE SINGLE FUNCTION */}
          <CustomInput
            label="First Name"
            placeholder="John"
            value={formData.firstName}
            onChangeText={(text: string) => handleInputChange("firstName", text)}
          />

          <CustomInput
            label="Last Name"
            placeholder="Doe"
            value={formData.lastName}
            onChangeText={(text: string) => handleInputChange("lastName", text)}
          />

          <CustomInput
            label="Email"
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={formData.email}
            onChangeText={(text: string) => handleInputChange("email", text)}
          />

          <CustomInput
            label="Password"
            placeholder="••••••••"
            secureTextEntry
            value={formData.password}
            onChangeText={(text: string) => handleInputChange("password", text)}
          />

          <CustomInput
            label="Confirm Password"
            placeholder="••••••••"
            secureTextEntry
            value={formData.confirmPassword}
            onChangeText={(text: string) => handleInputChange("confirmPassword", text)}
          />

          <TouchableOpacity
            style={styles.termsRow}
            onPress={() => setAcceptedTerms(!acceptedTerms)}
          >
            <View style={[styles.radio, acceptedTerms && styles.radioActive]}>
              {acceptedTerms && <Ionicons name="checkmark" size={14} color="#FFFFFF" />}
            </View>
            <Text style={styles.termsText}>I accept the Terms & Conditions</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.signupBtn, !acceptedTerms && { opacity: 0.6 }]}
            onPress={handleSignup}
            disabled={!acceptedTerms}
          >
            <Text style={styles.signupText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;

// --- STYLES (Kept exactly as you had them) ---
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", paddingTop: 50 },
  header: { paddingHorizontal: 16, marginBottom: 12 },
  back: { fontSize: 16, fontWeight: "700", color: "#0F172A" },
  scrollContainer: { flex: 1, paddingHorizontal: 16 },
  card: { backgroundColor: "#EEF2FF", padding: 24, borderRadius: 20, marginTop: 20 },
  avatar: { width: 72, height: 72, borderRadius: 36, backgroundColor: "#6366F1", alignItems: "center", justifyContent: "center", alignSelf: "center", marginBottom: 12 },
  title: { fontSize: 22, fontWeight: "900", color: "#0F172A", textAlign: "center" },
  subtitle: { fontSize: 14, color: "#475569", textAlign: "center", marginBottom: 20 },
  inputGroup: { marginBottom: 14 },
  label: { fontSize: 13, fontWeight: "700", color: "#475569", marginBottom: 6 },
  input: { backgroundColor: "#FFFFFF", borderRadius: 12, padding: 14, fontSize: 14, borderWidth: 1, borderColor: "#E5E7EB", color: "#0F172A" },
  termsRow: { flexDirection: "row", alignItems: "center", marginVertical: 14, gap: 10 },
  radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: "#6366F1", alignItems: "center", justifyContent: "center" },
  radioActive: { backgroundColor: "#6366F1" },
  termsText: { fontSize: 13, color: "#334155" },
  signupBtn: { backgroundColor: "#2563EB", padding: 16, borderRadius: 14, alignItems: "center" },
  signupText: { color: "#FFFFFF", fontSize: 16, fontWeight: "900" },
});