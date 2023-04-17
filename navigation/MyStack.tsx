import React from "react";
import { View } from "react-native/types"
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Result from "../components/Result";

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
            <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default MyStack;