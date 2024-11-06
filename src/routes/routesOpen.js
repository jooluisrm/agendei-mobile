import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login/login";
import Account from "../screens/account/account";

function RoutesOpen() {

    const Stack = createNativeStackNavigator();

    return <>
        <Stack.Navigator>
            <Stack.Screen name="login" component={Login}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen name="account" component={Account}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    </>;
}

export default RoutesOpen;