import React, { useState, useEffect } from "react";
import { Center } from "native-base";
import { signinAction } from "../redux/slices/userReducer";
import { useDispatch, useSelector } from "react-redux";
import FormController from "../components/FormController";
import { validateEmail } from "../helpers/validation";
import BasicButton from "../components/BasicButton";
import EnterCodeScreen from "./EnterCode";

const SigninScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);
  const [showCodeInput, setShowCodeInput] = useState(false);

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
    if (!userError && signinData && email !== "" && emailValidation) {
      setShowCodeInput(true);
    }
  }, [userError, signinData]);

  return (
    <Center flex={1} bg="#F1E4F2">
      <FormController
        label="Enter Email"
        message={"Email is Not Correct!"}
        errorMessageShow={!emailValidation || userError?.status === 404}
        value={email}
        isDisabled={showCodeInput}
        onChangeText={handleEmailText}
      />
      {showCodeInput ? (
        <EnterCodeScreen email={email} />
      ) : (
        <BasicButton
          isDisabled={email === "" || !emailValidation}
          isLoading={userLoading}
          onPress={() => {
            dispatch(signinAction(email));
          }}
          discription="Sign in"
        />
      )}
    </Center>
  );
};

export default SigninScreen;
