import React, { useState } from "react";
import { Input, Center, Button } from "native-base";
import { signinAction } from "../redux/slices/userReducer";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

const SigninScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  return (
    <Center flex={1}>
      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        w="300"
      />
      <Button
        onPress={() => {
          //dispatch(signinAction(email));
          navigation.navigate("EnterCode");
        }}
        margin={5}
        size="sm"
      >
        Sign in
      </Button>
    </Center>
  );
};

export default SigninScreen;
