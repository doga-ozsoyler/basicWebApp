import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "../screens/Signin";
import EnterCodeScreen from "../screens/EnterCode";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="EnterCode" component={EnterCodeScreen} />
    </Stack.Navigator>
  );
};
