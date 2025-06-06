import { StyleSheet, Text, View, TextInput, Pressable, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";



const textInputWidth = Dimensions.get('window').width * 0.7

const LoginScreen = ({ navigation }) => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()


    const [triggerLogin, result] = useLoginMutation()

    useEffect(() => {
        if (result.email) {
            dispatch(setUser({ email: result.email, localId: result.localId }))
        }
    }, [])

    const onSubmit = () => {
        triggerLogin({ email, password })
    }

    useEffect(() => {
        if (result.status == "fulfilled") {
            dispatch(setUser(result.data))
        }
    }, [result])


    return (
        <View style={style.container}>
            <Text style={style.title}>Padel Shop</Text>
            <Text style={style.subTitle}>Inicia sesión</Text>
            <View style={style.inputContainer}>
                <TextInput
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor="#EBEBEB"
                    placeholder="ejemplo@correo.com"
                    style={style.textInput}
                />
                <TextInput
                    onChangeText={(text) => setPassword(text)}
                    placeholderTextColor="#EBEBEB"
                    placeholder="Ingresa tu contraseña"
                    style={style.textInput}
                    secureTextEntry
                />
            </View>
            <View style={style.footTextContainer}>
                <Text style={style.whiteText}>¿Todavía no tienes cuenta?</Text>
                <Pressable onPress={() => navigation.navigate('Signup')}>
                    <Text style={{ ...style.whiteText, ...style.underLineText }}>
                        Regístrate
                    </Text>
                </Pressable>
            </View>
            <Pressable
                style={style.btn}
                onPress={onSubmit}
            >
                <Text style={style.btnText}>
                    Iniciar sesión
                </Text>
            </Pressable>
        </View>
    )
}

export default LoginScreen

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c0feae"
    },
    title: {
        fontSize: 26,
        fontWeight: "700"
    },
    subTitle: {
        fontSize: 18,
        fontWeight: "500",
        letterSpacing: 3
    },
    inputContainer: {
        gap: 16,
        margin: 16,
        marginTop: 48,
        alignItems: "center"
    },
    textInput: {
        padding: 10,
        paddingLeft: 16,
        borderRadius: 10,
        backgroundColor: "#444",
        width: textInputWidth,
        color: "#fff"
    },
    footTextContainer: {
        flexDirection: "row",
        gap: 8
    },
    whiteText: {
        color: "#444",
        fontWeight: "500"
    },
    underLineText: {
        textDecorationLine: "underline",
        color: "#0d6efd"
    },
    strongText: {
        fontWeight: "900",
        fontSize: 16
    },
    btn: {
        padding: 16,
        paddingHorizontal: 26,
        borderRadius: 12,
        marginTop: 42,
        backgroundColor: '#1d5d0a'
    },
    btnText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#fff",
        textTransform: "uppercase"
    },
    guestOptionContainer: {
        alignItems: "center",
        marginTop: 64
    }
})