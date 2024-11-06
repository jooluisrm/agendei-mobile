import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/main/main";
import Services from "../screens/services/services";
import Schedule from "../screens/shedule/shedule";
import { COLORS } from "../constants/theme";

function RoutesPrivate() {

    const Stack = createNativeStackNavigator();

    return <>
        <Stack.Navigator>
            <Stack.Screen name="main" component={Main}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen name="services" component={Services}
                options={{
                    headerTitle: "Serviços",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTintColor: COLORS.white,
                    headerStyle: {
                        backgroundColor: COLORS.blue
                    }
                }}
            />

            <Stack.Screen name="schedule" component={Schedule}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    </>;
}

export default RoutesPrivate;