import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { WebView } from "react-native-webview";
import { getVideoId } from "../../utils/Constants/videoLibrary";
import YoutubeIframe from "react-native-youtube-iframe";

type Props = {
  route: any;
  navigation: any;
};

const { width: W } = Dimensions.get("window");
const VIDEO_HEIGHT = (W * 9) / 16;

// ── Placeholder video map (swap these out when backend is ready) ──
const PLACEHOLDER_VIDEOS: Record<string, string[]> = {
  default: ["dQw4w9WgXcQ", "dQw4w9WgXcQ", "dQw4w9WgXcQ", "dQw4w9WgXcQ"],
};

const buildIframeHtml = (videoId: string) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; background: #000; }
        iframe { width: 100%; height: 100vh; border: none; }
      </style>
    </head>
    <body>
      <iframe
     
                src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&autoplay=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </body>
  </html>
`;

//    src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1"

const LessonVideoMode: React.FC<Props> = ({ route, navigation }) => {
  const { module, course } = route.params;
  const topics = module.topics;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentTopic = topics[selectedIndex];
  //   const videoId = getVideoId(course.title, selectedIndex);

  const courseKey = course.title.toLowerCase().replace(/\s+/g, "-");
  const moduleKey = module.title.toLowerCase().replace(/\s+/g, "-");
  const videoId = getVideoId(courseKey, moduleKey, selectedIndex);

  // ADD THIS
  console.log("courseKey:", courseKey);
  console.log("moduleKey:", moduleKey);
  console.log("videoId:", videoId);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={[styles.header, { backgroundColor: course.color }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{module.title}</Text>
        <Text style={styles.headerSubtitle}>🎬 Video Mode</Text>
      </View>

      {/* IFRAME VIDEO */}
      {/* <View style={styles.videoWrapper}>
        <WebView
          key={videoId} // remount on video change
          source={{ html: buildIframeHtml(videoId) }}
          allowsInlineMediaPlayback
          mediaPlaybackRequiresUserAction={false}
          style={styles.webview}
          allowsFullscreenVideo
          javaScriptEnabled
          originWhitelist={["*"]}
          scrollEnabled={false}
        />
      </View> */}
      {/* <YoutubeIframe
        height={VIDEO_HEIGHT}
        width={W}
        videoId={videoId}
        play={true}
      /> */}
      <YoutubeIframe
        key={videoId} // ← remounts player when topic changes
        height={VIDEO_HEIGHT}
        width={W}
        videoId={videoId}
        play={false} // ← let user press play manually
      />

      {/* NOW PLAYING */}
      <View style={styles.nowPlaying}>
        <Text style={styles.nowPlayingLabel}>▶ NOW PLAYING</Text>
        <Text style={styles.nowPlayingTitle}>{currentTopic.title}</Text>
        {currentTopic.description ? (
          <Text style={styles.nowPlayingDesc}>{currentTopic.description}</Text>
        ) : null}
      </View>

      {/* TOPIC LIST */}
      <ScrollView contentContainerStyle={styles.listContent}>
        <Text style={styles.listHeading}>All Topics</Text>
        {topics.map((topic: any, index: number) => {
          const isActive = index === selectedIndex;
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              style={[styles.topicCard, isActive && styles.topicCardActive]}
              onPress={() => setSelectedIndex(index)}
            >
              <View style={[styles.badge, isActive && styles.badgeActive]}>
                <Text
                  style={[styles.badgeText, isActive && styles.badgeTextActive]}
                >
                  {index + 1}
                </Text>
              </View>
              <Text
                style={[styles.topicTitle, isActive && styles.topicTitleActive]}
              >
                {topic.title}
              </Text>
              {isActive && (
                <View style={styles.playingPill}>
                  <Text style={styles.playingPillText}>Playing</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* PREV / NEXT */}
      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.navBtn, selectedIndex === 0 && styles.navBtnDisabled]}
          disabled={selectedIndex === 0}
          activeOpacity={0.8}
          onPress={() => setSelectedIndex((i) => i - 1)}
        >
          <Text style={styles.navBtnText}>← Prev</Text>
        </TouchableOpacity>

        <Text style={styles.navCount}>
          {selectedIndex + 1} / {topics.length}
        </Text>

        <TouchableOpacity
          style={[
            styles.navBtn,
            selectedIndex === topics.length - 1 && styles.navBtnDisabled,
          ]}
          disabled={selectedIndex === topics.length - 1}
          activeOpacity={0.8}
          onPress={() => setSelectedIndex((i) => i + 1)}
        >
          <Text style={styles.navBtnText}>Next →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LessonVideoMode;

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
  headerTitle: { fontSize: 26, fontWeight: "800", color: "#0F172A" },
  headerSubtitle: { fontSize: 14, color: "#334155", marginTop: 4 },

  videoWrapper: {
    width: W,
    height: VIDEO_HEIGHT,
    backgroundColor: "#000",
  },
  webview: { flex: 1, backgroundColor: "#000" },

  nowPlaying: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  nowPlayingLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: "#2563EB",
    letterSpacing: 1,
    marginBottom: 4,
  },
  nowPlayingTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#0F172A",
  },
  nowPlayingDesc: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 4,
    lineHeight: 18,
  },

  listContent: { padding: 16, paddingBottom: 100 },
  listHeading: {
    fontSize: 12,
    fontWeight: "700",
    color: "#94A3B8",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 10,
  },

  topicCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  topicCardActive: {
    backgroundColor: "#EFF6FF",
    borderColor: "#2563EB",
  },
  badge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  badgeActive: { backgroundColor: "#2563EB" },
  badgeText: { fontSize: 13, fontWeight: "700", color: "#64748B" },
  badgeTextActive: { color: "#fff" },
  topicTitle: { flex: 1, fontSize: 15, fontWeight: "700", color: "#0F172A" },
  topicTitleActive: { color: "#2563EB" },
  playingPill: {
    backgroundColor: "#DBEAFE",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  playingPillText: { fontSize: 11, fontWeight: "700", color: "#2563EB" },

  navBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
  },
  navBtn: {
    backgroundColor: "#2563EB",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  navBtnDisabled: { backgroundColor: "#CBD5E1" },
  navBtnText: { color: "#fff", fontWeight: "700", fontSize: 14 },
  navCount: { fontSize: 13, fontWeight: "700", color: "#64748B" },
});

// This screen is a simplified video lessons coming from the backend.
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Dimensions,
// } from "react-native";
// import { WebView } from "react-native-webview";

// type Props = {
//   route: any;
//   navigation: any;
// };

// const { width } = Dimensions.get("window");
// const VIDEO_HEIGHT = (width * 9) / 16; // 16:9 aspect ratio

// const LessonVideoMode: React.FC<Props> = ({ route, navigation }) => {
//   const { module, course } = route.params;
//   const topics = module.topics;

//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const currentTopic = topics[selectedIndex];

//   // Expects topic.videoId to be a YouTube video ID e.g. "dQw4w9WgXcQ"
//   const youtubeEmbedUrl = `https://www.youtube.com/embed/${currentTopic.videoId}?rel=0&modestbranding=1`;

//   return (
//     <View style={styles.container}>
//       {/* HEADER */}
//       <View style={[styles.header, { backgroundColor: course.color }]}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text style={styles.backText}>← Back</Text>
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>{module.title}</Text>
//         <Text style={styles.headerSubtitle}>Video Mode</Text>
//       </View>

//       {/* VIDEO PLAYER */}
//       <View style={styles.videoWrapper}>
//         {currentTopic.videoId ? (
//           <WebView
//             style={styles.webview}
//             source={{ uri: youtubeEmbedUrl }}
//             allowsFullscreenVideo
//             javaScriptEnabled
//           />
//         ) : (
//           <View style={styles.videoPlaceholder}>
//             <Text style={styles.videoPlaceholderIcon}>🎬</Text>
//             <Text style={styles.videoPlaceholderText}>No video available</Text>
//           </View>
//         )}
//       </View>

//       {/* CURRENT TOPIC INFO */}
//       <View style={styles.topicInfo}>
//         <Text style={styles.topicInfoIndex}>
//           {selectedIndex + 1} / {topics.length}
//         </Text>
//         <Text style={styles.topicInfoTitle}>{currentTopic.title}</Text>
//         {currentTopic.description ? (
//           <Text style={styles.topicInfoDesc}>{currentTopic.description}</Text>
//         ) : null}
//       </View>

//       {/* TOPIC LIST */}
//       <ScrollView contentContainerStyle={styles.listContent}>
//         <Text style={styles.listHeading}>Topics</Text>
//         {topics.map((topic: any, index: number) => {
//           const isActive = index === selectedIndex;
//           return (
//             <TouchableOpacity
//               key={index}
//               activeOpacity={0.7}
//               style={[styles.topicCard, isActive && styles.topicCardActive]}
//               onPress={() => setSelectedIndex(index)}
//             >
//               <View
//                 style={[styles.topicBadge, isActive && styles.topicBadgeActive]}
//               >
//                 <Text
//                   style={[
//                     styles.topicBadgeText,
//                     isActive && styles.topicBadgeTextActive,
//                   ]}
//                 >
//                   {index + 1}
//                 </Text>
//               </View>
//               <View style={{ flex: 1 }}>
//                 <Text
//                   style={[
//                     styles.topicCardTitle,
//                     isActive && styles.topicCardTitleActive,
//                   ]}
//                 >
//                   {topic.title}
//                 </Text>
//               </View>
//               {isActive && <Text style={styles.playingBadge}>▶ Playing</Text>}
//             </TouchableOpacity>
//           );
//         })}
//       </ScrollView>

//       {/* PREV / NEXT NAVIGATION */}
//       <View style={styles.navBar}>
//         <TouchableOpacity
//           style={[styles.navBtn, selectedIndex === 0 && styles.navBtnDisabled]}
//           disabled={selectedIndex === 0}
//           onPress={() => setSelectedIndex((i) => i - 1)}
//         >
//           <Text style={styles.navBtnText}>← Prev</Text>
//         </TouchableOpacity>

//         <Text style={styles.navProgress}>
//           {selectedIndex + 1} of {topics.length}
//         </Text>

//         <TouchableOpacity
//           style={[
//             styles.navBtn,
//             selectedIndex === topics.length - 1 && styles.navBtnDisabled,
//           ]}
//           disabled={selectedIndex === topics.length - 1}
//           onPress={() => setSelectedIndex((i) => i + 1)}
//         >
//           <Text style={styles.navBtnText}>Next →</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default LessonVideoMode;

// const { width: W } = Dimensions.get("window");

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#F8FAFC" },

//   // Header
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
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: "800",
//     color: "#0F172A",
//   },
//   headerSubtitle: {
//     fontSize: 14,
//     color: "#334155",
//     marginTop: 4,
//   },

//   //  Video
//   videoWrapper: {
//     width: W,
//     height: (W * 9) / 16,
//     backgroundColor: "#0F172A",
//   },
//   webview: { flex: 1 },
//   videoPlaceholder: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#1E293B",
//   },
//   videoPlaceholderIcon: { fontSize: 40 },
//   videoPlaceholderText: {
//     color: "#94A3B8",
//     marginTop: 8,
//     fontSize: 14,
//     fontWeight: "600",
//   },

//   // Current topic info
//   topicInfo: {
//     padding: 16,
//     paddingBottom: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: "#E2E8F0",
//   },
//   topicInfoIndex: {
//     fontSize: 12,
//     fontWeight: "700",
//     color: "#2563EB",
//     marginBottom: 4,
//     textTransform: "uppercase",
//     letterSpacing: 0.8,
//   },
//   topicInfoTitle: {
//     fontSize: 18,
//     fontWeight: "800",
//     color: "#0F172A",
//   },
//   topicInfoDesc: {
//     fontSize: 13,
//     color: "#64748B",
//     marginTop: 4,
//     lineHeight: 18,
//   },

//   // Topic list
//   listContent: { padding: 16, paddingBottom: 100 },
//   listHeading: {
//     fontSize: 13,
//     fontWeight: "700",
//     color: "#94A3B8",
//     textTransform: "uppercase",
//     letterSpacing: 0.8,
//     marginBottom: 10,
//   },
//   topicCard: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     padding: 14,
//     borderRadius: 14,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: "#E2E8F0",
//   },
//   topicCardActive: {
//     backgroundColor: "#EFF6FF",
//     borderColor: "#2563EB",
//   },
//   topicBadge: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: "#E2E8F0",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 12,
//   },
//   topicBadgeActive: { backgroundColor: "#2563EB" },
//   topicBadgeText: {
//     fontSize: 13,
//     fontWeight: "700",
//     color: "#64748B",
//   },
//   topicBadgeTextActive: { color: "#fff" },
//   topicCardTitle: {
//     fontSize: 15,
//     fontWeight: "700",
//     color: "#0F172A",
//   },
//   topicCardTitleActive: { color: "#2563EB" },
//   playingBadge: {
//     fontSize: 11,
//     fontWeight: "700",
//     color: "#2563EB",
//     backgroundColor: "#DBEAFE",
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//     borderRadius: 20,
//   },

//   // Bottom nav
//   navBar: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: 16,
//     backgroundColor: "#fff",
//     borderTopWidth: 1,
//     borderTopColor: "#E2E8F0",
//   },
//   navBtn: {
//     backgroundColor: "#2563EB",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 12,
//   },
//   navBtnDisabled: { backgroundColor: "#CBD5E1" },
//   navBtnText: { color: "#fff", fontWeight: "700", fontSize: 14 },
//   navProgress: {
//     fontSize: 13,
//     fontWeight: "700",
//     color: "#64748B",
//   },
// });
