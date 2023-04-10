import React, { useState } from "react";
import { Input, Center, Button } from "native-base";
import { signinAction } from "../redux/slices/userReducer";
import { useDispatch } from "react-redux";
import InfoModal from "../components/InfoModal";

const SigninScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <Center flex={1}>
      <InfoModal
        showModal={showModal}
        setShowModal={setShowModal}
        infoText="Click the link in email to sign in"
      />
      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        w="300"
      />
      <Button
        onPress={() => {
          dispatch(signinAction(email));
          setShowModal(true);
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
