import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../Screens/LoginScreen";
import RegistroScreen from "../Screens/RegistroScreen";
import ProductosScreen from "../Screens/ProductosScreen";
import CarritoScreen from "../Screens/CarritoScreen";
import CuentaScreen from "../Screens/CuentaScreen"
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: () => (
                        <Entypo name="home" size={24} color="black" />
                    ),
                    headerTitle: 'Inicio'
                }}
            />
            <Tab.Screen name="Productos" component={ProductosScreen}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: () => (
                        <Entypo name="shop" size={24} color="black" />

                    ),
                    headerTitle: 'Inicio'
                }}
            />
            <Tab.Screen name="Carrito" component={CarritoScreen}
                options={{
                    tabBarLabel: 'Carrito',
                    tabBarIcon: () => (
                        <Entypo name="shopping-cart" size={24} color="black" />
                    ),
                    headerTitle: 'Carrito'
                }}
            />
            <Tab.Screen name="Cuenta" component={CuentaScreen}
                options={{
                    tabBarLabel: 'Cuenta',
                    tabBarIcon: () => (
                        <FontAwesome name="user" size={24} color="black" />
                    ),
                    headerTitle: 'Cuenta'
                }}
            />
        </Tab.Navigator>
    )
}

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registro" component={RegistroScreen} />
            <Stack.Screen name="HOMETAB" component={MyTabs} />
        </Stack.Navigator>
    )
}

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}