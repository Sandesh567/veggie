import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/solid";

export default function Product(props) {
    let fruit = props.route.params;
    const navigation = useNavigation();
    return (
        <View style={{ display: "flex", flex: 1, backgroundColor: fruit.color }}>
            <SafeAreaView>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size="30" color="white" />
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}
