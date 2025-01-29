import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from "../screens/Product";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();


export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
                <Stack.Screen name="Product" options={{ headerShown: false }} component={Product} />
                <Stack.Screen name="Cart" options={{ headerShown: false }} component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

