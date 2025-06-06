import { StyleSheet, Text, View, TextInput, Pressable, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import { useSignupMutation } from "../../services/authService";


import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";


const textInputWidth = Dimensions.get('window').width * 0.7

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const dispatch = useDispatch()


    const [triggerSignUp, result] = useSignupMutation()

    const onSubmit = () => {
        triggerSignUp({ email, password })
    }

    useEffect(() => {
        if (result.status == "fulfilled") {
            // navigation.navigate("Login")
            dispatch(setUser(result.data))
        }

        if (result.status === 'rejected') {
            const errorCode = result?.error?.data?.error?.message;

            if (errorCode === "EMAIL_EXISTS") {
                alert("El usuario ya está registrado.");
            } else {
                alert("Ocurrió un error al registrarse.");
            }
        }
    }, [result])


    return (
        <View style={style.container}>
            <Text style={style.title}>Únete a Padel Shop</Text>
            <Text style={style.subTitle}>Registrate</Text>
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
                <TextInput
                    onChangeText={(text) => setConfirmPassword(text)}
                    placeholderTextColor="#EBEBEB"
                    placeholder="Confima tu contraseña"
                    style={style.textInput}
                    secureTextEntry
                />
            </View>
            <View style={style.footTextContainer}>
                <Text style={style.whiteText}>¿Ya tienes una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={
                        {
                            ...style.whiteText,
                            ...style.underLineText
                        }
                    }>
                        Inicia sesión
                    </Text>
                </Pressable>
            </View>
            <Pressable
                style={style.btn}
                onPress={onSubmit}
            >
                <Text style={style.btnText}>
                    Crear Cuenta
                </Text>
            </Pressable>
        </View>
    )
}

export default SignupScreen

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c0feae"
    },
    title: {
        fontSize: 24
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "700",
        letterSpacing: 2
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