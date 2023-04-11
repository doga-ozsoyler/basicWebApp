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
    <Center flex={1} bg="#F1E4F2">
      <Text color="#684F8C" fontSize="5xl" bold>
        Welcome
      </Text>
      {userInfo.status === "admin" ? (
        <Button
          bg="#6F96A6"
          _hover={{ bg: "#4D6873" }}
          _pressed={{ bg: "#6A8F9E" }}
          colorScheme="violet"
          marginTop={5}
        >
          Invite User
        </Button>
      ) : (
        <></>
      )}
      <Button
        variant="link"
        colorScheme="violet"
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
