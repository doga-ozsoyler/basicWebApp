import React, { useState } from "react";
import { Input, Center, Button } from "native-base";
import { signinAction } from "../redux/slices/userReducer";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import FormController from "../components/FormController";

const SigninScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);

  const validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  };

  const handleEmailText = (text) => {
    setEmail(text);
    setEmailValidation(validateEmail(text));
  };

  return (
    <Center flex={1}>
      <FormController
        label="Enter Email"
        message={"Email is Not Correct!"}
        errorMessageShow={!emailValidation}
        value={email}
        onChangeText={handleEmailText}
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
