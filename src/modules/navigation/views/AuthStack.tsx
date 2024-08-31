import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootNavigatorParamList } from "../typings";
import Screen from "../src/constants";

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name='Login' component={Screen.Demo} />
            {/* <Stack.Screen name='Login' component={Screen.Demo} /> */}
            {/* <Stack.Screen name='Register' component={Screen.Register} /> */}

           
        </Stack.Navigator>
    );
  };