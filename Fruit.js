import { Text, View, Image, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { HeartIcon } from "react-native-heroicons/solid";
function Fruit({ fruit }) {
    const [isFavourite, setIsFavourite] = useState(false);
    return (
        <View style={{ width: 250, borderRadius: 40, backgroundColor: fruit.color(1), margin: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    onPress={() => setIsFavourite(!isFavourite)}
                    style={{
                        borderRadius: 80, padding: 3, marginRight: 11,
                        marginTop: 7, backgroundColor: 'rgba(255, 7, 7, 0.3)'
                    }}>
                    <HeartIcon size="25" color={isFavourite ? fruit.shadow : 'white'} />
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Image source={fruit.image} style={{ width: 280, height: 180 }} />
            </View>

            <View>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                    {fruit.name}
                </Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                    {fruit.price}
                </Text>
            </View>
        </View>
    )
}

export default Fruit;
