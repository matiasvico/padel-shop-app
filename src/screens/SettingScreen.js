import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import { useDispatch } from 'react-redux';
import { clearUser } from '../features/auth/authSlice';
import { MaterialIcons } from '@expo/vector-icons';


const SettingScreen = () => {

    const dispatch = useDispatch();


    return (
        <View style={style.container}>
            <View style={style.card}>
                <Text style={style.titleMap}>Pasa a conocer nuestro local</Text>
                <Text style={style.titleMap}>Aqui tienes nuestra localizacion</Text>
                <MapView style={style.map}
                    initialRegion={{
                        latitude: -34.6038,
                        longitude: -58.3817,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                    }}>
                    <Marker
                        coordinate={{ latitude: -34.6038, longitude: -58.3817 }}
                        title='Buenos Aires'
                        description='Capital Argetina'
                    />
                </MapView>
            </View>
            <TouchableOpacity
                onPress={() => dispatch(clearUser())}
                style={style.btnSalir}>
                <MaterialIcons name="logout" size={20} color="#eee" style={{ marginRight: 8 }} />
                <Text style={style.btnText}>Cerrar sesión</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: "#202024",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    card: {
        backgroundColor: "#aee3fb",
        padding: 20,
        width: "100%",
        maxWidth: 500,
        borderRadius:10
    },
    titleMap: {
        fontSize: 18,
        color: "#333",
        textAlign: "center",
        lineHeight: 24,
        padding: 4
    },
    map: {
        height: 250,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        marginTop: 40
    },
    btnSalir: {
        flexDirection: "row",
    },
    btnText: {
        color: "#eee"
    }

})


export default SettingScreen