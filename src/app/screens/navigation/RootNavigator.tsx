import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import HomeScreen from "../HomeScreen";
import CourseDescriptionScreen from "../CourseDescriptionScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import your screens
const Stack = createNativeStackNavigator()

const RootNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            {/* <SafeAreaView style={styles.container}> */}
            <Stack.Navigator
                initialRouteName="CourseDescription"
                screenOptions={{
                    headerShown: false,
                }}
            >
                {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                <Stack.Screen name="CourseDescription" component={CourseDescriptionScreen} />
            </Stack.Navigator>
            {/* </SafeAreaView> */}
        </NavigationContainer>
    );
};

export default RootNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});