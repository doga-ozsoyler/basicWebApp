import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Input, Center, Button } from "native-base";

const SigninScreen = () => {
  const [email, setEmail] = useState("");

  return (
    <Center flex={1}>
      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        w="300"
      />
      <Button margin={5} size="sm">
        Sign in
      </Button>
    </Center>
  );
};

export default SigninScreen;
