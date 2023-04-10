import { StyleSheet, View } from "react-native";
import SigninScreen from "./screens/Signin";
import { NativeBaseProvider } from "native-base";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <View style={styles.container}>
          <SigninScreen />
        </View>
      </NativeBaseProvider>
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
