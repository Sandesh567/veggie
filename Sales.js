import { TouchableOpacity, View, Image, Text } from "react-native"

function Sales({ fruit }) {
    return (
        <View style={{ marginRight: 6 }}>
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: -49, zIndex: -20 }}>
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
                backgroundColor: fruit.color(0.4), height: 75, width: 80,
                borderRadius: 30, display: 'flex', justifyContent: 'flex-end',
                alignItems: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', alignItems: 'center', color: 'black', letterSpacing: 2 }}>
                    ${fruit.price}
                </Text>
            </View>
        </View>
    )
}

export default Sales

// 18:32
