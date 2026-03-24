import { View, Text, StyleSheet } from "react-native";
import React from "react";

const LessonVideoMode = () => {
  return (
    <View>
      <Text style={styles.title}>LessonVideoMode</Text>
    </View>
  );
};

export default LessonVideoMode;

const styles = StyleSheet.create({
  title: {
    backgroundColor: "#F8FAFC",
    color: "#0F172A",
    fontSize: 24,
    fontWeight: "900",
    padding: 16,
  },
});
