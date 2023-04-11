import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import store from "./redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./navigation/Stack";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <StackNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
