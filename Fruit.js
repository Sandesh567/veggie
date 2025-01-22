import { Text, View, Image } from "react-native"
import React from "react"
function Fruit({ fruit }) {
    return (
        <View style={{ width: 250, borderRadius: 40, backgroundColor: fruit.color(1), margin: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Image source={fruit.image} style={{ width: 280, height: 180 }} />
            </View>

            <View>
                <Text>
                    {fruit.name}
                </Text>
                <Text>
                    {fruit.price}
                </Text>
            </View>
        </View>
    )
}

export default Fruit;
