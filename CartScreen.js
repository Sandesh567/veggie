import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { cartItems } from "..";
import React from "react";
import CartCard from "../components/CartCard";

export default function CartScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginHorizontal: 5 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    style={{ borderRadius: 70 }}
                    <ChevronLeftIcon size="30" color="red" />
                </TouchableOpacity>
                <View style={{ marginHorizontal: 5, flex: 1 }}>
                    <Text style={{ fontSize: 18, paddingVertical: 10 }}>
                        Your <Text style={{ fontWeight: "bold" }}>cart</Text>
                    </Text>
                    <View>
                        {
                            cartItems.map((fruit, index) => <CartCard fruit={fruit} key={index} />)
                        }
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingVertical: 4, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16 }}>
                            Total Price:
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize17 }}>
                                520.80
                            </Text>
                        </Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginHorizontal: 7 }}>
                        <TouchableOpacity style={{
                            backgroundColor: 'orange', opacity: 0.8, shadowColor: 'orange',
                            shadowRadius: 25, shadowOffset: { width: 0, height: 15 },
                            shadowOpacity: 0.4, padding: 3, flex: 1, borderRadius: 60
                        }}>
                            <Text style={{ fontSize: 18, alignItems: 'center', color: 'white', fontWeight: 'bold' }}>
                                Payment
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
