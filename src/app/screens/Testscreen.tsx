import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { courseQuestions } from "../utils/Constants/data";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SECONDS_PER_QUESTION = 30;

// ─── Types ───────────────────────────────────────────────────────────────────

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

const courseConfig: Record<
  string,
  { color: string; bg: string; label: string }
> = {
  html: { color: "#6366F1", bg: "#E0E7FF", label: "HTML" },
  css: { color: "#2563EB", bg: "#DBEAFE", label: "CSS" },
  javascript: { color: "#D97706", bg: "#FEF3C7", label: "JavaScript" },
  criticalThinking: {
    color: "#0891B2",
    bg: "#ECFEFF",
    label: "Critical Thinking",
  },
};

const getGrade = (score: number, total: number) => {
  const pct = (score / total) * 100;
  if (pct >= 90)
    return {
      letter: "A",
      label: "Excellent!",
      color: "#16A34A",
      bg: "#DCFCE7",
    };
  if (pct >= 75)
    return {
      letter: "B",
      label: "Great job!",
      color: "#2563EB",
      bg: "#DBEAFE",
    };
  if (pct >= 60)
    return {
      letter: "C",
      label: "Good effort!",
      color: "#D97706",
      bg: "#FEF3C7",
    };
  if (pct >= 40)
    return {
      letter: "D",
      label: "Keep practicing",
      color: "#EA580C",
      bg: "#FFEDD5",
    };
  return { letter: "F", label: "Try again", color: "#DC2626", bg: "#FEE2E2" };
};

// ─── Intro Screen ─────────────────────────────────────────────────────────────

const IntroScreen: React.FC<{
  testId: string;
  totalQuestions: number;
  onStart: () => void;
  onBack: () => void;
}> = ({ testId, totalQuestions, onStart, onBack }) => {
  const cfg = courseConfig[testId] ?? {
    color: "#6366F1",
    bg: "#E0E7FF",
    label: testId,
  };

  return (
    <View style={styles.introContainer}>
      <TouchableOpacity onPress={onBack} style={styles.backBtn}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <View style={[styles.introBadge, { backgroundColor: cfg.bg }]}>
        <Text style={[styles.introBadgeText, { color: cfg.color }]}>
          {cfg.label}
        </Text>
      </View>

      <Text style={styles.introTitle}>Knowledge Test</Text>
      <Text style={styles.introSubtitle}>
        Test your understanding of {cfg.label} with {totalQuestions} questions.
      </Text>

      <View style={styles.introStatsRow}>
        <View style={styles.introStat}>
          <Ionicons name="help-circle-outline" size={22} color={cfg.color} />
          <Text style={styles.introStatValue}>{totalQuestions}</Text>
          <Text style={styles.introStatLabel}>Questions</Text>
        </View>
        <View style={[styles.introStatDivider, { backgroundColor: cfg.bg }]} />
        <View style={styles.introStat}>
          <Ionicons name="time-outline" size={22} color={cfg.color} />
          <Text style={styles.introStatValue}>{SECONDS_PER_QUESTION}s</Text>
          <Text style={styles.introStatLabel}>Per Question</Text>
        </View>
        <View style={[styles.introStatDivider, { backgroundColor: cfg.bg }]} />
        <View style={styles.introStat}>
          <Ionicons name="trophy-outline" size={22} color={cfg.color} />
          <Text style={styles.introStatValue}>10pts</Text>
          <Text style={styles.introStatLabel}>Per Correct</Text>
        </View>
      </View>

      <View style={[styles.introRuleCard, { backgroundColor: cfg.bg }]}>
        <Text style={[styles.introRuleTitle, { color: cfg.color }]}>
          How it works
        </Text>
        {[
          "Each question has one correct answer",
          `You have ${SECONDS_PER_QUESTION} seconds per question`,
          "Unanswered questions count as wrong",
          "Review your answers at the end",
        ].map((rule, i) => (
          <View key={i} style={styles.introRuleRow}>
            <View
              style={[styles.introRuleDot, { backgroundColor: cfg.color }]}
            />
            <Text style={styles.introRuleText}>{rule}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={[styles.startTestBtn, { backgroundColor: cfg.color }]}
        onPress={onStart}
      >
        <Text style={styles.startTestBtnText}>Start Test</Text>
        <Ionicons name="arrow-forward" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

// ─── Results Screen ───────────────────────────────────────────────────────────

const ResultsScreen: React.FC<{
  testId: string;
  questions: Question[];
  userAnswers: (number | null)[];
  timeTaken: number;
  onRetry: () => void;
  onBack: () => void;
}> = ({ testId, questions, userAnswers, timeTaken, onRetry, onBack }) => {
  const cfg = courseConfig[testId] ?? {
    color: "#6366F1",
    bg: "#E0E7FF",
    label: testId,
  };
  const score = userAnswers.filter(
    (a, i) => a === questions[i].correctAnswer,
  ).length;
  const grade = getGrade(score, questions.length);
  const [showReview, setShowReview] = useState(false);

  const mins = Math.floor(timeTaken / 60);
  const secs = timeTaken % 60;

  return (
    <ScrollView
      style={styles.resultsScroll}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      {/* Grade card */}
      <View style={[styles.gradeCard, { backgroundColor: grade.bg }]}>
        <Text style={[styles.gradeLetter, { color: grade.color }]}>
          {grade.letter}
        </Text>
        <Text style={[styles.gradeLabel, { color: grade.color }]}>
          {grade.label}
        </Text>
        <Text style={styles.gradeScore}>
          {score}/{questions.length} correct
        </Text>
      </View>

      {/* Stats row */}
      <View style={styles.statsRow}>
        <View style={[styles.statBox, { backgroundColor: cfg.bg }]}>
          <Text style={[styles.statVal, { color: cfg.color }]}>
            {Math.round((score / questions.length) * 100)}%
          </Text>
          <Text style={styles.statLbl}>Accuracy</Text>
        </View>
        <View style={[styles.statBox, { backgroundColor: "#F1F5F9" }]}>
          <Text style={[styles.statVal, { color: "#0F172A" }]}>
            {mins > 0 ? `${mins}m ${secs}s` : `${secs}s`}
          </Text>
          <Text style={styles.statLbl}>Time Taken</Text>
        </View>
        <View style={[styles.statBox, { backgroundColor: "#F1F5F9" }]}>
          <Text style={[styles.statVal, { color: "#0F172A" }]}>
            {score * 10}
          </Text>
          <Text style={styles.statLbl}>Points</Text>
        </View>
      </View>

      {/* Action buttons */}
      <View style={styles.resultsActions}>
        <TouchableOpacity
          style={[styles.retryBtn, { backgroundColor: cfg.color }]}
          onPress={onRetry}
        >
          <Ionicons name="refresh-outline" size={16} color="#fff" />
          <Text style={styles.retryBtnText}>Retry Test</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backToListBtn} onPress={onBack}>
          <Text style={styles.backToListText}>Back to Tests</Text>
        </TouchableOpacity>
      </View>

      {/* Review toggle */}
      <TouchableOpacity
        style={styles.reviewToggle}
        onPress={() => setShowReview(!showReview)}
      >
        <Text style={styles.reviewToggleText}>
          {showReview ? "Hide" : "Review"} Answers
        </Text>
        <Ionicons
          name={showReview ? "chevron-up" : "chevron-down"}
          size={18}
          color="#0F172A"
        />
      </TouchableOpacity>

      {/* Answer review */}
      {showReview &&
        questions.map((q, i) => {
          const userAns = userAnswers[i];
          const isCorrect = userAns === q.correctAnswer;
          const isUnanswered = userAns === null;

          return (
            <View
              key={i}
              style={[
                styles.reviewCard,
                {
                  backgroundColor: isCorrect
                    ? "#DCFCE7"
                    : isUnanswered
                      ? "#F1F5F9"
                      : "#FEE2E2",
                },
              ]}
            >
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewNum}>Q{i + 1}</Text>
                <Ionicons
                  name={
                    isCorrect
                      ? "checkmark-circle"
                      : isUnanswered
                        ? "time-outline"
                        : "close-circle"
                  }
                  size={20}
                  color={
                    isCorrect ? "#16A34A" : isUnanswered ? "#64748B" : "#DC2626"
                  }
                />
              </View>
              <Text style={styles.reviewQuestion}>{q.question}</Text>

              {q.options.map((opt, j) => {
                const isCorrectOpt = j === q.correctAnswer;
                const isUserOpt = j === userAns;

                return (
                  <View
                    key={j}
                    style={[
                      styles.reviewOption,
                      isCorrectOpt && styles.reviewOptionCorrect,
                      isUserOpt && !isCorrect && styles.reviewOptionWrong,
                    ]}
                  >
                    {isCorrectOpt && (
                      <Ionicons name="checkmark" size={14} color="#16A34A" />
                    )}
                    {isUserOpt && !isCorrect && (
                      <Ionicons name="close" size={14} color="#DC2626" />
                    )}
                    {!isCorrectOpt && !isUserOpt && (
                      <View style={styles.reviewOptionDot} />
                    )}
                    <Text
                      style={[
                        styles.reviewOptionText,
                        isCorrectOpt && { color: "#16A34A", fontWeight: "700" },
                        isUserOpt &&
                          !isCorrect && { color: "#DC2626", fontWeight: "700" },
                      ]}
                    >
                      {opt}
                    </Text>
                  </View>
                );
              })}
            </View>
          );
        })}
    </ScrollView>
  );
};

// ─── Main TestScreen ──────────────────────────────────────────────────────────

const TestScreen: React.FC<any> = ({ navigation, route }) => {
  const { testId } = route.params;
  const questions: Question[] =
    (courseQuestions as Record<string, Question[]>)[testId] ?? [];
  const cfg = courseConfig[testId] ?? {
    color: "#6366F1",
    bg: "#E0E7FF",
    label: testId,
  };

  type Phase = "intro" | "test" | "results";
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(SECONDS_PER_QUESTION);
  const [totalTimeTaken, setTotalTimeTaken] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);
  const progressAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  // ── Timer logic ──────────────────────────────────────────────────────────
  const startTimer = useCallback(() => {
    setTimeLeft(SECONDS_PER_QUESTION);
    progressAnim.setValue(1);
    Animated.timing(progressAnim, {
      toValue: 0,
      duration: SECONDS_PER_QUESTION * 1000,
      useNativeDriver: false,
    }).start();

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          handleTimeout();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }, [currentIndex]);

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    progressAnim.stopAnimation();
  };

  const handleTimeout = () => {
    // Mark as unanswered, move on
    setUserAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = null;
      return next;
    });
    advanceQuestion();
  };

  // ── Advance to next question ──────────────────────────────────────────────
  const advanceQuestion = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      if (isLastQuestion) {
        setTotalTimeTaken(
          Math.floor((Date.now() - startTimeRef.current) / 1000),
        );
        setPhase("results");
      } else {
        setCurrentIndex((i) => i + 1);
        setSelectedOption(null);
        setShowFeedback(false);
        fadeAnim.setValue(1);
      }
    });
  }, [isLastQuestion, currentIndex]);

  // ── Start test ────────────────────────────────────────────────────────────
  const handleStart = () => {
    setUserAnswers(Array(questions.length).fill(null));
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    startTimeRef.current = Date.now();
    setPhase("test");
  };

  // ── When phase becomes test, start timer ─────────────────────────────────
  useEffect(() => {
    if (phase === "test") {
      startTimer();
    }
    return () => stopTimer();
  }, [phase, currentIndex]);

  // ── Option selected ───────────────────────────────────────────────────────
  const handleSelectOption = (index: number) => {
    if (showFeedback) return;
    stopTimer();
    setSelectedOption(index);
    setShowFeedback(true);

    setUserAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = index;
      return next;
    });

    setTimeout(() => advanceQuestion(), 1000);
  };

  // ── Option styling ────────────────────────────────────────────────────────
  const getOptionStyle = (index: number) => {
    if (!showFeedback) return styles.option;
    if (index === currentQuestion.correctAnswer)
      return [styles.option, styles.optionCorrect];
    if (index === selectedOption && index !== currentQuestion.correctAnswer)
      return [styles.option, styles.optionWrong];
    return [styles.option, styles.optionDim];
  };

  const getOptionTextStyle = (index: number) => {
    if (!showFeedback) return styles.optionText;
    if (index === currentQuestion.correctAnswer)
      return [styles.optionText, styles.optionTextCorrect];
    if (index === selectedOption && index !== currentQuestion.correctAnswer)
      return [styles.optionText, styles.optionTextWrong];
    return [styles.optionText, styles.optionTextDim];
  };

  const timerColor =
    timeLeft <= 10 ? "#DC2626" : timeLeft <= 20 ? "#D97706" : cfg.color;

  // ─── Render ──────────────────────────────────────────────────────────────
  if (questions.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <View style={styles.emptyState}>
          <Ionicons name="alert-circle-outline" size={48} color="#94A3B8" />
          <Text style={styles.emptyText}>
            No questions found for this test.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* INTRO */}
      {phase === "intro" && (
        <IntroScreen
          testId={testId}
          totalQuestions={questions.length}
          onStart={handleStart}
          onBack={() => navigation.goBack()}
        />
      )}

      {/* RESULTS */}
      {phase === "results" && (
        <>
          <View style={styles.resultsHeader}>
            <Text style={styles.pageTitle}>Results</Text>
            <View style={[styles.courseBadge, { backgroundColor: cfg.bg }]}>
              <Text style={[styles.courseBadgeText, { color: cfg.color }]}>
                {cfg.label}
              </Text>
            </View>
          </View>
          <ResultsScreen
            testId={testId}
            questions={questions}
            userAnswers={userAnswers}
            timeTaken={totalTimeTaken}
            onRetry={handleStart}
            onBack={() => navigation.goBack()}
          />
        </>
      )}

      {/* TEST */}
      {phase === "test" && (
        <>
          {/* Top bar */}
          <View style={styles.topBar}>
            <TouchableOpacity
              onPress={() => {
                stopTimer();
                navigation.goBack();
              }}
            >
              <Text style={styles.backText}>✕</Text>
            </TouchableOpacity>

            {/* Progress dots */}
            <View style={styles.progressDots}>
              {questions.map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.progressDot,
                    {
                      backgroundColor:
                        i < currentIndex
                          ? userAnswers[i] === questions[i].correctAnswer
                            ? "#16A34A"
                            : "#DC2626"
                          : i === currentIndex
                            ? cfg.color
                            : "#E2E8F0",
                      width: i === currentIndex ? 20 : 8,
                    },
                  ]}
                />
              ))}
            </View>

            {/* Timer */}
            <View style={[styles.timerBadge, { borderColor: timerColor }]}>
              <Text style={[styles.timerText, { color: timerColor }]}>
                {timeLeft}s
              </Text>
            </View>
          </View>

          {/* Timer bar */}
          <View style={styles.timerBarTrack}>
            <Animated.View
              style={[
                styles.timerBarFill,
                {
                  backgroundColor: timerColor,
                  width: progressAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0%", "100%"],
                  }),
                },
              ]}
            />
          </View>

          {/* Question */}
          <Animated.View style={[styles.questionArea, { opacity: fadeAnim }]}>
            <Text style={styles.questionCounter}>
              Question {currentIndex + 1} of {questions.length}
            </Text>
            <Text style={styles.questionText}>{currentQuestion.question}</Text>

            {/* Options */}
            <View style={styles.optionsContainer}>
              {currentQuestion.options.map((opt, i) => (
                <TouchableOpacity
                  key={i}
                  style={getOptionStyle(i)}
                  onPress={() => handleSelectOption(i)}
                  activeOpacity={showFeedback ? 1 : 0.7}
                >
                  <View style={styles.optionLetter}>
                    <Text style={styles.optionLetterText}>
                      {["A", "B", "C", "D"][i]}
                    </Text>
                  </View>
                  <Text style={getOptionTextStyle(i)}>{opt}</Text>
                  {showFeedback && i === currentQuestion.correctAnswer && (
                    <Ionicons
                      name="checkmark-circle"
                      size={20}
                      color="#16A34A"
                    />
                  )}
                  {showFeedback &&
                    i === selectedOption &&
                    i !== currentQuestion.correctAnswer && (
                      <Ionicons name="close-circle" size={20} color="#DC2626" />
                    )}
                </TouchableOpacity>
              ))}
            </View>
          </Animated.View>
        </>
      )}
    </SafeAreaView>
  );
};

export default TestScreen;

// ─── Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  // ── Intro
  introContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  backBtn: {
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
  },
  introBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
    marginBottom: 16,
  },
  introBadgeText: {
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  introTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#0F172A",
    marginBottom: 8,
  },
  introSubtitle: {
    fontSize: 14,
    color: "#64748B",
    lineHeight: 20,
    marginBottom: 24,
  },
  introStatsRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  introStat: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  introStatValue: {
    fontSize: 18,
    fontWeight: "900",
    color: "#0F172A",
  },
  introStatLabel: {
    fontSize: 11,
    color: "#94A3B8",
    fontWeight: "600",
  },
  introStatDivider: {
    width: 1,
    height: 40,
    marginHorizontal: 8,
    backgroundColor: "#E2E8F0",
  },
  introRuleCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    gap: 10,
  },
  introRuleTitle: {
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 4,
  },
  introRuleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  introRuleDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  introRuleText: {
    fontSize: 13,
    color: "#475569",
    fontWeight: "500",
  },
  startTestBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 17,
    borderRadius: 16,
  },
  startTestBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },

  // ── Test UI
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  progressDots: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 12,
  },
  progressDot: {
    height: 8,
    borderRadius: 4,
  },
  timerBadge: {
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    minWidth: 52,
    alignItems: "center",
  },
  timerText: {
    fontSize: 14,
    fontWeight: "900",
  },
  timerBarTrack: {
    height: 4,
    backgroundColor: "#E2E8F0",
    marginHorizontal: 16,
    borderRadius: 2,
    overflow: "hidden",
    marginBottom: 4,
  },
  timerBarFill: {
    height: 4,
    borderRadius: 2,
  },
  questionArea: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  questionCounter: {
    fontSize: 12,
    fontWeight: "700",
    color: "#94A3B8",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "900",
    color: "#0F172A",
    lineHeight: 28,
    marginBottom: 24,
  },
  optionsContainer: {
    gap: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 1,
  },
  optionCorrect: {
    borderColor: "#16A34A",
    backgroundColor: "#DCFCE7",
  },
  optionWrong: {
    borderColor: "#DC2626",
    backgroundColor: "#FEE2E2",
  },
  optionDim: {
    opacity: 0.45,
  },
  optionLetter: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },
  optionLetterText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#64748B",
  },
  optionText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    color: "#0F172A",
  },
  optionTextCorrect: {
    color: "#16A34A",
    fontWeight: "800",
  },
  optionTextWrong: {
    color: "#DC2626",
    fontWeight: "800",
  },
  optionTextDim: {
    color: "#94A3B8",
  },

  // ── Results
  resultsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#0F172A",
  },
  courseBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  courseBadgeText: {
    fontSize: 12,
    fontWeight: "800",
  },
  resultsScroll: {
    flex: 1,
    paddingHorizontal: 16,
  },
  gradeCard: {
    borderRadius: 20,
    padding: 28,
    alignItems: "center",
    marginBottom: 16,
  },
  gradeLetter: {
    fontSize: 72,
    fontWeight: "900",
    lineHeight: 80,
  },
  gradeLabel: {
    fontSize: 18,
    fontWeight: "800",
    marginTop: 4,
  },
  gradeScore: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 6,
    fontWeight: "600",
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
  },
  statBox: {
    flex: 1,
    borderRadius: 14,
    padding: 14,
    alignItems: "center",
    gap: 4,
  },
  statVal: {
    fontSize: 20,
    fontWeight: "900",
  },
  statLbl: {
    fontSize: 11,
    color: "#94A3B8",
    fontWeight: "600",
  },
  resultsActions: {
    gap: 10,
    marginBottom: 16,
  },
  retryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 16,
    borderRadius: 14,
  },
  retryBtnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800",
  },
  backToListBtn: {
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#E2E8F0",
    backgroundColor: "#fff",
  },
  backToListText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
  },
  reviewToggle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#E2E8F0",
    marginBottom: 12,
  },
  reviewToggleText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#0F172A",
  },
  reviewCard: {
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    gap: 8,
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reviewNum: {
    fontSize: 12,
    fontWeight: "800",
    color: "#94A3B8",
    textTransform: "uppercase",
  },
  reviewQuestion: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
    lineHeight: 20,
  },
  reviewOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 4,
  },
  reviewOptionCorrect: {},
  reviewOptionWrong: {},
  reviewOptionDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#CBD5E1",
  },
  reviewOptionText: {
    fontSize: 13,
    color: "#475569",
    flex: 1,
    fontWeight: "500",
  },

  // ── Empty / Error
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  emptyText: {
    fontSize: 15,
    color: "#64748B",
    fontWeight: "600",
  },
});
