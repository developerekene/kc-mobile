import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from "react-native";

type Props = {
  route: any;
  navigation: any;
};

const ModuleOverviewScreen: React.FC<Props> = ({ route, navigation }) => {
  const { module, course } = route.params;
  const [showModeModal, setShowModeModal] = useState(false);
  const startMode = (mode: "TEXT" | "VIDEO") => {
    setShowModeModal(false);

    navigation.navigate(
      mode === "TEXT" ? "LessonPlayerScreen" : "LessonVideoMode",
      { module, course },
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={[styles.header, { backgroundColor: course.color }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.courseTitle}>{module.title}</Text>
        <Text style={styles.courseSubtitle}>Module Overview</Text>
      </View>

      {/* MODULE TOPICS */}
      <FlatList
        data={module.topics}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => (
          <View style={styles.topicCard}>
            <Text style={styles.topicIndex}>{index + 1}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.topicText}>{item.title}</Text>
              {/* <Text style={styles.topicDescription}>{item.description}</Text> */}
            </View>
          </View>
        )}
      />

      {/* START MODULE BUTTON */}
      <View style={styles.bottomCTA}>
        <TouchableOpacity
          style={[styles.primaryButton, { backgroundColor: "#2563EB" }]}
          // onPress={() =>
          //   navigation.navigate("LessonPlayerScreen", { module, course })
          // }
          onPress={() => setShowModeModal(true)}
        >
          <Text style={styles.primaryButtonText}>Start Module</Text>
        </TouchableOpacity>
      </View>
      {/* MODE SELECT MODAL */}
      <Modal
        animationType="slide"
        transparent
        visible={showModeModal}
        onRequestClose={() => setShowModeModal(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowModeModal(false)}
        />

        <View style={styles.modalSheet}>
          <Text style={styles.modalTitle}>Select Mode</Text>

          <TouchableOpacity
            style={styles.modeBtn}
            activeOpacity={0.7}
            onPress={() => startMode("TEXT")}
          >
            <Text style={styles.modeBtnTitle}> Text Mode</Text>
            <Text style={styles.modeBtnDesc}>
              Make strategic decisions and manage resources
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modeBtn}
            activeOpacity={0.7}
            onPress={() => startMode("VIDEO")}
          >
            <Text style={styles.modeBtnTitle}> Video Mode</Text>
            <Text style={styles.modeBtnDesc}>
              Solve the challenge using JavaScript logic
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ModuleOverviewScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC" },

  header: {
    padding: 24,
    paddingTop: 60,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  backText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 12,
  },

  courseTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#0F172A",
  },

  courseSubtitle: {
    fontSize: 14,
    color: "#334155",
    marginTop: 4,
  },

  listContent: {
    padding: 20,
    paddingBottom: 140,
  },

  topicCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  topicIndex: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    marginRight: 12,
    lineHeight: 32,
  },

  topicText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
  },

  topicDescription: {
    fontSize: 14,
    color: "#334155",
    marginTop: 4,
  },

  bottomCTA: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
  },

  primaryButton: { padding: 16, borderRadius: 12, alignItems: "center" },
  primaryButtonText: { color: "#fff", fontWeight: "700", fontSize: 16 },

  // modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  modalSheet: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 16,
    color: "#0F172A",
  },

  modeBtn: {
    backgroundColor: "#F1F5F9",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    cursor: "pointer",
  },

  modeBtnTitle: {
    fontSize: 16,
    fontWeight: "900",
    color: "#0F172A",
  },

  modeBtnDesc: {
    fontSize: 13,
    fontWeight: "600",
    color: "#475569",
    marginTop: 4,
  },
});

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
// } from "react-native";

// type Props = {
//   route: any;
//   navigation: any;
// };

// const ModuleOverviewScreen: React.FC<Props> = ({ route, navigation }) => {
//   const { module, course } = route.params;
//   const [showModeModal, setShowModeModal] = useState(false);
//   const startMode = (mode: "TEXT" | "VIDEO") => {
//     setShowModeModal(false);

//     navigation.navigate(
//       mode === "TEXT" ? "ChallengeTextMode" : "ChallengeVideoMode",
//       { challenge },
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* HEADER */}
//       <View style={[styles.header, { backgroundColor: course.color }]}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text style={styles.backText}>← Back</Text>
//         </TouchableOpacity>

//         <Text style={styles.courseTitle}>{module.title}</Text>
//         <Text style={styles.courseSubtitle}>Module Overview</Text>
//       </View>

//       {/* MODULE TOPICS */}
//       <FlatList
//         data={module.topics}
//         keyExtractor={(item, index) => index.toString()}
//         contentContainerStyle={styles.listContent}
//         renderItem={({ item, index }) => (
//           <View style={styles.topicCard}>
//             <Text style={styles.topicIndex}>{index + 1}</Text>
//             <View style={{ flex: 1 }}>
//               <Text style={styles.topicText}>{item.title}</Text>
//               {/* <Text style={styles.topicDescription}>{item.description}</Text> */}
//             </View>
//           </View>
//         )}
//       />

//       {/* START MODULE BUTTON */}
//       <View style={styles.bottomCTA}>
//         <TouchableOpacity
//           style={[styles.primaryButton, { backgroundColor: "#2563EB" }]}
//           onPress={() =>
//             navigation.navigate("LessonPlayerScreen", { module, course })
//           }
//         >
//           <Text style={styles.primaryButtonText}>Start Module</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ModuleOverviewScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#F8FAFC" },

//   header: {
//     padding: 24,
//     paddingTop: 60,
//     borderBottomLeftRadius: 24,
//     borderBottomRightRadius: 24,
//   },

//   backText: {
//     fontSize: 14,
//     fontWeight: "600",
//     color: "#0F172A",
//     marginBottom: 12,
//   },

//   courseTitle: {
//     fontSize: 26,
//     fontWeight: "800",
//     color: "#0F172A",
//   },

//   courseSubtitle: {
//     fontSize: 14,
//     color: "#334155",
//     marginTop: 4,
//   },

//   listContent: {
//     padding: 20,
//     paddingBottom: 140,
//   },

//   topicCard: {
//     flexDirection: "row",
//     alignItems: "flex-start",
//     backgroundColor: "#fff",
//     padding: 16,
//     borderRadius: 14,
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: "#E2E8F0",
//   },

//   topicIndex: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: "#2563EB",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "#fff",
//     fontWeight: "700",
//     textAlign: "center",
//     marginRight: 12,
//     lineHeight: 32,
//   },

//   topicText: {
//     fontSize: 16,
//     fontWeight: "700",
//     color: "#0F172A",
//   },

//   topicDescription: {
//     fontSize: 14,
//     color: "#334155",
//     marginTop: 4,
//   },

//   bottomCTA: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 20,
//     backgroundColor: "#fff",
//     borderTopWidth: 1,
//     borderTopColor: "#E2E8F0",
//   },

//   primaryButton: { padding: 16, borderRadius: 12, alignItems: "center" },
//   primaryButtonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
// });
