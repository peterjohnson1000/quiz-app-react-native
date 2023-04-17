import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp } from '@react-navigation/native';

interface Props {
    navigation: NavigationProp<Record<string, object>>;
}

const Home = ({ navigation }: Props) => {
    return (
        <View style={{ alignItems: "center", flex: 1, justifyContent: "space-between", paddingVertical: 30 }}>
            <Text style={{ fontSize: 30, paddingBottom: 20 }}>Quizzler</Text>
            <View style={{}}>
                <Image source={require("/Users/admin/Desktop/React-Native/quizapp/assets/homepage_image.png")} style={{ width: 300, height: 300 }} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Quiz", { /* params */ })}>
                <Text style={{ backgroundColor: "#19376D", color: "white", padding: 10, paddingHorizontal: 160, paddingVertical: 20, borderRadius: 25, textAlign: "center", fontWeight: "bold", fontSize: 15 }}>Start</Text>
            </TouchableOpacity>
        </View >
    );
};

export default Home;