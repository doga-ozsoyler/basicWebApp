import React, { useState } from "react";
import { Input, Center, Button } from "native-base";

const EnterCodeScreen = (props) => {
  const [code, setCode] = useState("");

  console.log(props?.route?.params?.email);

  return (
    <Center flex={1}>
      <Input value={code} onChangeText={setCode} placeholder="Code" w="300" />
      <Button
        onPress={() => {
          console.log("Enter Code");
        }}
        margin={5}
        size="sm"
      >
        Enter Code
      </Button>
    </Center>
  );
};

export default EnterCodeScreen;
