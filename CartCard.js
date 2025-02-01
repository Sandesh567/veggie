import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MinusIcon, PlusIcon } from "react-native-heroicons/solid";

export default function CartCard({ fruit }) {
    return (
        <View style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
            , alignItems: 'center', marginBottom: 5, marginVertical: 5
        }}>
            <View style={{ marginLeft: 8 }}>
                <TouchableOpacity

                    style={{ display: 'flex', flexDirection: 'row', marginBottom: 8, marginLeft: 9, zIndex: -20 }}>
                    <Image

                        source={fruit.image}
                        style={{
                            height: 65, width: 65,
                            shadowColor: fruit.shadow,
                            overflow: 'visible',
                            shadowRadius: 15,
                            shadowOffset: { width: 0, height: 25 },
                            shadowOpacity: 0.4
                        }} />
                </TouchableOpacity>
                <View style={{
                    backgroundColor: fruit.color(0.4), height: 60, width: 60,
                    borderRadius: 30, display: 'flex', justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                </View>
            </View>
            <View style={{ flex: 1, marginVertical: 1 }}>
                <Text style={{ fontWeight: 'bold' }}>
                    {fruit.name}
                </Text>
                <Text style={{ fontWeight: 'heavy', color: 'yellow' }}>${fruit.price}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ padding: 1, borderRadius: 40 }}>
                    <PlusIcon size="15" color="white" />
                </TouchableOpacity>
                <Text>{fruit.qty}</Text>
                <TouchableOpacity style={{ padding: 1, borderRadius: 40 }}>
                    <MinusIcon size="15" color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
