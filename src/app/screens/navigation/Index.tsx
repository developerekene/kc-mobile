import { StyleSheet } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../HomeScreen';
import CourseDescription from '../CourseDescriptionScreen';
import CoursePlayerScreen from '../CoursePlayerScreen';
import ModuleOverviewScreen from '../ModuleOverviewScreen';
import LessonPlayerScreen from '../LessonPlayerScreen';
import CoursesCentralPage from '../CoursesCentralPage';
import ChallengeCentralPage from '../ChallengeCentralPage';
import ReflectionsCentralPage from '../ReflectionsCentralPage';
import CityMapPage from '../CityMapPage';
import ProfileScreen from '../ProfileScreen';

const Stack = createNativeStackNavigator()

const Index: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="CourseDescription"
                    component={CourseDescription}
                />
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
                <Stack.Screen
                    name="CityMapPage"
                    component={CityMapPage}
                />
                <Stack.Screen
                    name="ProfileScreen"
                    component={ProfileScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Index