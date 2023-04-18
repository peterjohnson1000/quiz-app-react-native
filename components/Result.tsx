import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp } from '@react-navigation/native';

interface Props {
    navigation: NavigationProp<Record<string, object>>;
}

const Result = ({ navigation, route }: Props) => {
    const { score } = route.params;
    return (
        <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
            <View>
                <Image source={require("/Users/admin/Desktop/React-Native/quizapp/assets/victory_image.png")} style={{ width: 300, height: 300 }} />
                <Text style={{ fontSize: 30, paddingBottom: 20, textAlign: "center" }}>Your Score is {score}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Home", {})}>
                    <Text style={{ fontSize: 15, backgroundColor: "#19376D", color: "white", borderRadius: 25, paddingHorizontal: 25, paddingVertical: 15 }}>Homepage</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Result;