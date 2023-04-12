import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "../screens/Signin";
import HomeScreen from "../screens/Home";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const token = useSelector((state) => {
    return state?.user?.token;
  });

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {token ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="Signin" component={SigninScreen} />
      )}
    </Stack.Navigator>
  );
};
