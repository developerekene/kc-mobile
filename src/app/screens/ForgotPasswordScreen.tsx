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

type Step = "email" | "otp" | "newPassword" | "success";

const ForgotPasswordScreen: React.FC<any> = ({ navigation }) => {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    if (!email) {
      Alert.alert("Missing field", "Please enter your email address");
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
    }, 1500);
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length < 4) {
      Alert.alert(
        "Invalid OTP",
        "Please enter the 6-digit code sent to your email",
      );
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("newPassword");
    }, 1200);
  };

  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert("Missing fields", "Please fill in both password fields");
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert("Mismatch", "Passwords do not match");
      return;
    }
    if (newPassword.length < 8) {
      Alert.alert("Too short", "Password must be at least 8 characters");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("success");
    }, 1500);
  };

  const renderStepContent = () => {
    switch (step) {
      case "email":
        return (
          <>
            <View style={styles.avatar}>
              <Ionicons name="lock-closed-outline" size={32} color="#FFFFFF" />
            </View>
            <Text style={styles.title}>Forgot Password?</Text>
            <Text style={styles.subtitle}>
              No worries! Enter your email and we'll send you a reset code.
            </Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                placeholder="you@example.com"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <TouchableOpacity style={styles.primaryBtn} onPress={handleSendOtp}>
              <Text style={styles.primaryBtnText}>
                {loading ? "Sending Code..." : "Send Reset Code"}
              </Text>
            </TouchableOpacity>
          </>
        );

      case "otp":
        return (
          <>
            <View style={styles.avatar}>
              <Ionicons name="mail-outline" size={32} color="#FFFFFF" />
            </View>
            <Text style={styles.title}>Check Your Email</Text>
            <Text style={styles.subtitle}>
              We sent a 6-digit code to{"\n"}
              <Text style={styles.emailHighlight}>{email}</Text>
            </Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Verification Code</Text>
              <TextInput
                placeholder="000000"
                style={[styles.input, styles.otpInput]}
                keyboardType="number-pad"
                maxLength={6}
                value={otp}
                onChangeText={setOtp}
              />
            </View>

            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={handleVerifyOtp}
            >
              <Text style={styles.primaryBtnText}>
                {loading ? "Verifying..." : "Verify Code"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={() => {
                setOtp("");
                handleSendOtp();
              }}
            >
              <Text style={styles.secondaryBtnText}>Resend Code</Text>
            </TouchableOpacity>
          </>
        );

      case "newPassword":
        return (
          <>
            <View style={styles.avatar}>
              <Ionicons name="key-outline" size={32} color="#FFFFFF" />
            </View>
            <Text style={styles.title}>New Password</Text>
            <Text style={styles.subtitle}>
              Create a strong password for your account.
            </Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>New Password</Text>
              <TextInput
                placeholder="••••••••"
                style={styles.input}
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                placeholder="••••••••"
                style={styles.input}
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>

            {/* Password strength hint */}
            <View style={styles.hintBox}>
              <Ionicons
                name="information-circle-outline"
                size={14}
                color="#6366F1"
              />
              <Text style={styles.hintText}>
                Use 8+ characters with letters, numbers & symbols
              </Text>
            </View>

            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={handleResetPassword}
            >
              <Text style={styles.primaryBtnText}>
                {loading ? "Resetting..." : "Reset Password"}
              </Text>
            </TouchableOpacity>
          </>
        );

      case "success":
        return (
          <>
            <View style={[styles.avatar, styles.successAvatar]}>
              <Ionicons name="checkmark-outline" size={36} color="#FFFFFF" />
            </View>
            <Text style={styles.title}>Password Reset!</Text>
            <Text style={styles.subtitle}>
              Your password has been updated successfully. You can now sign in
              with your new password.
            </Text>

            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.primaryBtnText}>Back to Login</Text>
            </TouchableOpacity>
          </>
        );
    }
  };

  // Step indicator dots
  const steps: Step[] = ["email", "otp", "newPassword", "success"];
  const currentStepIndex = steps.indexOf(step);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            if (step === "email") navigation.goBack();
            else if (step === "otp") setStep("email");
            else if (step === "newPassword") setStep("otp");
            else navigation.navigate("LoginScreen");
          }}
        >
          <Text style={styles.back}>← Back</Text>
        </TouchableOpacity>
        <View style={{ width: 24 }} />
      </View>

      {/* SCROLLABLE CONTENT */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* STEP DOTS */}
        {step !== "success" && (
          <View style={styles.stepDotsContainer}>
            {[0, 1, 2].map((i) => (
              <View
                key={i}
                style={[
                  styles.stepDot,
                  i <= currentStepIndex && i < 3 && styles.stepDotActive,
                ]}
              />
            ))}
          </View>
        )}

        {/* CARD */}
        <View style={styles.card}>{renderStepContent()}</View>

        {/* Bottom link back to login */}
        {step !== "success" && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>Remember your password?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={styles.loginLink}> Sign in</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 50,
  },

  /* HEADER */
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

  /* STEP DOTS */
  stepDotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 8,
    marginTop: 4,
  },
  stepDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#CBD5E1",
  },
  stepDotActive: {
    backgroundColor: "#6366F1",
    width: 24,
  },

  /* SCROLL */
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },

  /* CARD */
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
  successAvatar: {
    backgroundColor: "#22C55E",
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
    lineHeight: 20,
  },
  emailHighlight: {
    fontWeight: "700",
    color: "#6366F1",
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
  otpInput: {
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 12,
    textAlign: "center",
    color: "#0F172A",
  },

  hintBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#E0E7FF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 14,
  },
  hintText: {
    fontSize: 12,
    color: "#4338CA",
    flex: 1,
  },

  primaryBtn: {
    backgroundColor: "#2563EB",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },
  primaryBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
  },

  secondaryBtn: {
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 8,
    borderWidth: 1.5,
    borderColor: "#6366F1",
  },
  secondaryBtnText: {
    color: "#6366F1",
    fontSize: 15,
    fontWeight: "700",
  },

  /* FOOTER */
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
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
