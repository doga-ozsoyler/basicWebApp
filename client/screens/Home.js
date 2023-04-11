import React, { useEffect } from "react";
import { Button, Center, Text, Heading } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, logoutAction } from "../redux/slices/userReducer";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => {
    return state?.user?.userInfo?.userInfo;
  });
  console.log(userInfo);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <Center flex={1} bg="#44803F">
      <Text color="white" fontSize="5xl" bold>
        Welcome
      </Text>
      {userInfo.status === "admin" ? (
        <Button marginTop={5}>Invite User</Button>
      ) : (
        <></>
      )}
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
