import React, { useState } from "react";
import { Center, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { checkEnterCodeAction } from "../redux/slices/userReducer";
import FormController from "../components/FormController";
import BasicButton from "../components/BasicButton";

const EnterCodeScreen = (props) => {
  const { email } = props;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [code, setCode] = useState("");

  const userLoading = useSelector((state) => {
    return state?.user?.loading;
  });
  const userError = useSelector((state) => {
    return state?.user?.error;
  });

  return (
    <Center>
      <FormController
        label="Enter Code"
        message={"Code is incorrect!"}
        errorMessageShow={userError?.status === 400}
        value={code}
        onChangeText={setCode}
      />
      <BasicButton
        isDisabled={code === ""}
        isLoading={userLoading}
        onPress={() => {
          dispatch(
            checkEnterCodeAction({ email: email, enterCode: Number(code) })
          );
        }}
        discription="Enter Code"
      />
      <Button
        variant="link"
        onPress={() => {
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
