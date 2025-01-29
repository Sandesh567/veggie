import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import StarRating from 'react-native-star-rating';

export default function Product(props) {
    let fruit = props.route.params;
    const navigation = useNavigation();
    return (
        <View style={{ display: "flex", flex: 1, backgroundColor: fruit.color }}>
            <SafeAreaView>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: 'rgba(255,255,255,0.2', borderColor: 'grey', borderRadius: 60 }}
                        onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size="30" color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{
                    display: 'flex', flexDirection: 'row',
                    justifyContent: 'center', marginTop: 5, paddingBottom: 10,
                    shadowColor: fruit.shadow,
                    shadowRadius: 50,
                    shadowOffset: { width: 0, height: 50 },
                    shadowOpacity: 0.9
                }}>
                    <Image source={fruit.image} style={{ width: 290, height: 290 }} />
                </View>
            </SafeAreaView>
            <View style={{ borderTopLeftRadius: 45, borderTopRightRadius: 45, flex: 1 }}>
                <Text style={{ marginTop: 8, fontSize: 22, fontWeight: 'bold' }}>
                    {fruit.name}
                </Text>
                <View style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <Text style={{ fontWeight: 'semibold' }}>{fruit.desc}</Text>
                    <Text style={{ fontWeight: 'semibold' }}>Sold</Text>
                    <Text style={{ fontWeight: 'bold' }}>239</Text>
                </View>
                <StarRating
                    disabled={true}
                    starSize={18}
                    containerStyle={{ width: 120 }}
                    maxStars={5}
                    rating={fruit.stars}
                    emptyStarColor="white"
                    fullStar={require('../assets/images/star.png')}
                />
                <View style={{ height: 165 }}>
                    <Text style={{ letterSpacing: 9, paddingTop: 12, paddingBottom: 12 }}>
                        Black grapes are small, sweet fruits with a deep blueish-purple color.
                        They are high in antioxidants and contain many vitamins and minerals.
                        Black grapes have many potential health benefits,including:Brain health,
                        Skin and hair health, Heart health, Bone health, Immune system, Cancer prevention, Sleep
                    </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18 }}>${fruit.price}</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Cart')}
                        style={{
                            backgroundColor: fruit.shadow, opacity: 0.6, shadowColor: fruit.shadow,
                            shadowRadius: 25, shadowOffset: { width: 0, height: 15 }, shadowOpacity: 0.9,
                            borderRadius: 70, flex: 1, padding: 3, marginLeft: 6
                        }}>
                        <Text style={{ fontSize: 21, color: 'white', fontWeight: 'bold' }}>
                            Add To Cart
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}


/*00-1
import { Text, TouchableOpacity, View, Image } from "react-native";
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
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: 'rgba(255,255,255,0.2', borderColor: 'grey', borderRadius: 60 }}
                        onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size="30" color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{
                    display: 'flex', flexDirection: 'row',
                    justifyContent: 'center', marginTop: 5, paddingBottom: 10,
                    shadowColor: fruit.shadow,
                    shadowRadius: 50,
                    shadowOffset: { width: 0, height: 50 },
                    shadowOpacity: 0.7
                }}>
                    <Image source={fruit.image} style={{ width: 290, height: 290 }} />

                </View>
            </SafeAreaView>
        </View>
    )
}
*/
