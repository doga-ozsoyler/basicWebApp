import React, { useState } from "react";
import { Center } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { checkEnterCodeAction } from "../redux/slices/userReducer";
import FormController from "./FormController";
import BasicButton from "./BasicButton";
import LinkButton from "./LinkButton";

const EnterCode = (props) => {
  const { email, setShowCodeInput } = props;
  const dispatch = useDispatch();
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
      <LinkButton
        onPress={() => setShowCodeInput(false)}
        discription="Cancel"
      />
    </Center>
  );
};

export default EnterCode;
