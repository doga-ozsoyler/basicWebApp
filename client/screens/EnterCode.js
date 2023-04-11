import React, { useState } from "react";
import { Center, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { checkEnterCodeAction } from "../redux/slices/userReducer";
import FormController from "../components/FormController";

const EnterCodeScreen = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { email } = props?.route?.params;
  const [code, setCode] = useState("");

  const userLoading = useSelector((state) => {
    return state?.user?.loading;
  });
  const userError = useSelector((state) => {
    return state?.user?.error;
  });
  const token = useSelector((state) => {
    return state?.user?.token;
  });

  console.log(userLoading);
  console.log(userError);
  console.log(token);

  return (
    <Center flex={1}>
      <FormController
        label="Enter Code"
        message={"Code is incorrect!"}
        errorMessageShow={userError?.status === 400}
        value={code}
        onChangeText={setCode}
      />
      <Button
        isDisabled={code === ""}
        isLoading={userLoading}
        onPress={() => {
          dispatch(
            checkEnterCodeAction({ email: email, enterCode: Number(code) })
          );
        }}
        marginTop={5}
        size="sm"
      >
        Enter Code
      </Button>
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
