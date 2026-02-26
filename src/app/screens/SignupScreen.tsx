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

const SignupScreen: React.FC<any> = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSignup = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Alert.alert("Missing fields", "Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password mismatch", "Passwords do not match");
      return;
    }

    if (!acceptedTerms) {
      Alert.alert("Terms Required", "You must accept the terms and conditions");
      return;
    }

    // 🔐 Replace with signup logic
    console.log({
      firstName,
      lastName,
      email,
      password,
    });
  };

  const Input = ({
    label,
    ...props
  }: {
    label: string;
    [key: string]: any;
  }) => (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>← Back</Text>
        </TouchableOpacity>

        <View style={{ width: 24 }} />
      </View>

      {/* SCROLLABLE CONTENT */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <View style={styles.avatar}>
            <Ionicons name="person-add-outline" size={32} color="#FFFFFF" />
          </View>

          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>
            Join us and start managing your profile
          </Text>

          {/* FIRST NAME */}
          <Input
            label="First Name"
            value={firstName}
            onChangeText={setFirstName}
            placeholder="John"
          />

          {/* LAST NAME */}
          <Input
            label="Last Name"
            value={lastName}
            onChangeText={setLastName}
            placeholder="Doe"
          />

          {/* EMAIL */}
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* PASSWORD */}
          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            secureTextEntry
          />

          {/* CONFIRM PASSWORD */}
          <Input
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="••••••••"
            secureTextEntry
          />

          {/* TERMS */}
          <TouchableOpacity
            style={styles.termsRow}
            onPress={() => setAcceptedTerms((prev) => !prev)}
            activeOpacity={0.7}
          >
            <View style={[styles.radio, acceptedTerms && styles.radioActive]}>
              {acceptedTerms && (
                <Ionicons name="checkmark" size={14} color="#FFFFFF" />
              )}
            </View>

            <Text style={styles.termsText}>
              I accept the <Text style={styles.link}>Terms & Conditions</Text>
            </Text>
          </TouchableOpacity>

          {/* SIGN UP BUTTON */}
          <TouchableOpacity
            style={[styles.signupBtn, !acceptedTerms && { opacity: 0.6 }]}
            onPress={handleSignup}
            disabled={!acceptedTerms}
          >
            <Text style={styles.signupText}>Create Account</Text>
          </TouchableOpacity>

          {/* FOOTER */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={styles.loginLink}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  back: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#0F172A",
  },

  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },

  card: {
    backgroundColor: "#EEF2FF",
    padding: 24,
    borderRadius: 20,
    marginTop: 20,
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#6366F1",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: "900",
    color: "#0F172A",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#475569",
    textAlign: "center",
    marginBottom: 20,
  },

  inputGroup: {
    marginBottom: 14,
  },
  label: {
    fontSize: 13,
    fontWeight: "700",
    color: "#475569",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  termsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
    gap: 10,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#6366F1",
    alignItems: "center",
    justifyContent: "center",
  },
  radioActive: {
    backgroundColor: "#6366F1",
  },
  termsText: {
    fontSize: 13,
    color: "#334155",
  },
  link: {
    fontWeight: "900",
    color: "#2563EB",
  },

  signupBtn: {
    backgroundColor: "#2563EB",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  signupText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  footerText: {
    fontSize: 13,
    color: "#475569",
  },
  loginLink: {
    fontSize: 13,
    fontWeight: "900",
    color: "#2563EB",
  },
});
