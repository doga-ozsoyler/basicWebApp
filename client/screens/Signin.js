import React, { useState, useEffect } from "react";
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

  const userLoading = useSelector((state) => {
    return state?.user?.loading;
  });
  const userError = useSelector((state) => {
    return state?.user?.error;
  });
  const signinData = useSelector((state) => {
    return state?.user?.signinData;
  });

  const handleEmailText = (text) => {
    setEmail(text);
    setEmailValidation(validateEmail(text));
  };

  useEffect(() => {
    if (!userError && signinData) {
      navigation.navigate("EnterCode", { email: email });
    }
  }, [userError, signinData]);

  return (
    <Center flex={1}>
      <FormController
        label="Enter Email"
        message={"Email is Not Correct!"}
        errorMessageShow={!emailValidation || userError?.status === 404}
        value={email}
        onChangeText={handleEmailText}
      />
      <Button
        onPress={() => {
          dispatch(signinAction(email));
          console.log("here");
        }}
        margin={5}
        size="sm"
        isDisabled={email === "" || !emailValidation}
        isLoading={userLoading}
      >
        Sign in
      </Button>
    </Center>
  );
};

export default SigninScreen;
