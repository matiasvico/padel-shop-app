import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AuthNavigator from "./AuthNavigator"
import HomeScreen from "../screens/HomeScreen";

const RootStack = () => {
    const user = useSelector(state => state.auth.value.email)
    const localId = useSelector(state => state.auth.value.localId)

    return (
        <NavigationContainer>
            {
                user ? <HomeScreen /> : <AuthNavigator />
            }
        </NavigationContainer>
    )
}

export default RootStack