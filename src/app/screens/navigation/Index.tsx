import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../HomeScreen";

// Courses
import CourseDescription from "../CourseDescriptionScreen";
import CoursePlayerScreen from "../courses/CoursePlayerScreen";
import ModuleOverviewScreen from "../courses/ModuleOverviewScreen";
import LessonPlayerScreen from "../courses/LessonPlayerScreen";
import CoursesCentralPage from "../CoursesCentralPage";
import LessonVideoMode from "../courses/LessonVideoMode";

import ChallengeCentralPage from "../ChallengeCentralPage";
import ReflectionsCentralPage from "../ReflectionsCentralPage";
import CityMapPage from "../CityMapPage";
import ProfileScreen from "../ProfileScreen";
import ChallengeDetailScreen from "../ChallengeDetailScreen";
import ChallengeGameMode from "../ChallengeGameMode";
import ChallengeCodingMode from "../ChallengeCodingMode";
import LoginScreen from "../LoginScreen";
import SignupScreen from "../SignupScreen";
import ForgotPasswordScreen from "../ForgotPasswordScreen";
import TestScreen from "../Testscreen";

const Stack = createNativeStackNavigator();

const Index: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CourseDescription" component={CourseDescription} />
        <Stack.Screen
          name="CoursePlayerScreen"
          component={CoursePlayerScreen}
        />
        <Stack.Screen
          name="ModuleOverviewScreen"
          component={ModuleOverviewScreen}
        />
        <Stack.Screen
          name="LessonPlayerScreen"
          component={LessonPlayerScreen}
        />

        <Stack.Screen name="LessonVideoMode" component={LessonVideoMode} />
        <Stack.Screen
          name="CoursesCentralPage"
          component={CoursesCentralPage}
        />
        <Stack.Screen
          name="ChallengeCentralPage"
          component={ChallengeCentralPage}
        />
        <Stack.Screen
          name="ReflectionsCentralPage"
          component={ReflectionsCentralPage}
        />
        <Stack.Screen name="CityMapPage" component={CityMapPage} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen
          name="ChallengeDetailScreen"
          component={ChallengeDetailScreen}
        />
        <Stack.Screen name="ChallengeGameMode" component={ChallengeGameMode} />
        <Stack.Screen
          name="ChallengeCodingMode"
          component={ChallengeCodingMode}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name="TestScreen" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
