import React, { useState } from "react";
import { Center, Button } from "native-base";
import { signinAction } from "../redux/slices/userReducer";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import FormController from "../components/FormController";
import { validateEmail } from "../helpers/validation";

const SigninScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);

  const singinLoading = useSelector((state) => {
    return state?.user?.loading;
  });
  const signinError = useSelector((state) => {
    return state?.user?.error;
  });

  const handleEmailText = (text) => {
    setEmail(text);
    setEmailValidation(validateEmail(text));
  };

  return (
    <Center flex={1}>
      <FormController
        label="Enter Email"
        message={"Email is Not Correct!"}
        errorMessageShow={!emailValidation || signinError?.status === 404}
        value={email}
        onChangeText={handleEmailText}
      />
      <Button
        onPress={() => {
          //dispatch(signinAction(email));
          navigation.navigate("EnterCode", { email: email });
        }}
        margin={5}
        size="sm"
        isDisabled={email === ""}
        isLoading={singinLoading}
      >
        Sign in
      </Button>
    </Center>
  );
};

export default SigninScreen;
