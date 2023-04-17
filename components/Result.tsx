import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp } from '@react-navigation/native';

interface Props {
    navigation: NavigationProp<Record<string, object>>;
}

const Result = ({ navigation }: Props) => {
    return (
        <View style={{ alignItems: "center" }}>
            <Text>Hello World</Text>
            <View>
                <Image source={require("/Users/admin/Desktop/React-Native/quizapp/assets/homepage_image.png")} style={{ width: 300, height: 300 }} />
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Home", {})}>
                    <Text>Homepage</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Result;