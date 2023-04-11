import React from "react";
import { Button, Center, Text } from "native-base";
import { useDispatch } from "react-redux";
import { logoutAction } from "../redux/slices/userReducer";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Center flex={1}>
      <Text fontSize="3xl" bold>
        Welcome
      </Text>
      <Button marginTop={5}>Invite User</Button>
      <Button
        variant="link"
        onPress={() => {
          dispatch(logoutAction());
        }}
      >
        Logout
      </Button>
    </Center>
  );
};

export default HomeScreen;
