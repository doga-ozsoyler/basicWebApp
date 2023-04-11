import React, { useState } from "react";
import { Input, Center, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

const EnterCodeScreen = (props) => {
  const navigation = useNavigation();
  const [code, setCode] = useState("");

  console.log(props?.route?.params?.email);

  return (
    <Center flex={1}>
      <Input value={code} onChangeText={setCode} placeholder="Code" w="300" />
      <Button
        onPress={() => {
          console.log("Enter Code");
        }}
        marginTop={5}
        size="sm"
      >
        Enter Code
      </Button>
      <Button
        variant="link"
        onPress={() => {
          console.log("Enter Code");
          navigation.navigate("Signin");
        }}
        size="sm"
      >
        Go Back
      </Button>
    </Center>
  );
};

export default EnterCodeScreen;
