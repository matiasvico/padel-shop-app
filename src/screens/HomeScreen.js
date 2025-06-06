import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryScreen from './CategoryScreen';
import SettingScreen from './SettingScreen';
import CartScreen from './CartScreen';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function InicioTab({ navigation }) {
    return (
        <View style={style.container}>
            <View style={style.textLogo}>
                <Text style={style.title}>Bienvenidos a Padel Shop</Text>
                <Text style={style.slogan}>Tu tienda de pádel 100% online</Text>
                <Image
                    source={require("../../assets/logo.png")}
                    style={style.img}
                    resizeMode='contain'
                />
            </View>
            <View style={style.buttonContainer}>


                <TouchableOpacity
                    style={style.button}
                    onPress={() => navigation.navigate('PRODUCTOS')}
                >
                    <Text style={style.buttonText}>Ver productos</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}


const HomeScreen = ({ navigation }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#0d6efd',
                tabBarInactiveTintColor: '#aaa',
                tabBarStyle: {
                    backgroundColor: '#111',
                    borderTopWidth: 0,
                    elevation: 5,
                    height: 60,
                    paddingBottom: 5
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold',
                    fontSize: 12
                }
            }}>
            <Tab.Screen
                name='INICIO'
                component={InicioTab}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name='PRODUCTOS'
                component={CategoryScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="storefront" color={color} size={size} />
                    )
                }}

            />
            <Tab.Screen
                name='CARRITO'
                component={CartScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="shopping-cart" color={color} size={size} />
                    )
                }} />
            <Tab.Screen
                name='INFO'
                component={SettingScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="info" color={color} size={size} />
                    )
                }} />
        </Tab.Navigator>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        backgroundColor: "#202024"
    },
    textLogo: {
        alignItems: 'center'
    },
    img: {
        width: 90,
        height: 90,
        marginBottom: 30,
        backgroundColor: '#202024'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
        color: "#EEE"
    },
    slogan: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: "#EEE"
    },
    buttonContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    button: {
        backgroundColor: '#0d6efd',
        paddingVertical: 14,
        paddingHorizontal: 35,
        borderRadius: 16,
        elevation: 7
    },
    buttonText: {
        color: '#eee',
        fontWeight: '500',
        fontSize: 18,
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})

export default HomeScreen;