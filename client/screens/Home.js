import React, { useEffect, useState } from "react";
import { Button, Center, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, logoutAction } from "../redux/slices/userReducer";
import InviteModal from "../components/InviteModal";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const userInfo = useSelector((state) => {
    return state?.user?.userInfo?.userInfo;
  });

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <Center flex={1} bg="#F1E4F2">
      <InviteModal showModal={showModal} setShowModal={setShowModal} />
      <Text color="#684F8C" fontSize="5xl" bold>
        Welcome
      </Text>
      {userInfo?.status === "admin" ? (
        <Button
          bg="#6F96A6"
          _hover={{ bg: "#4D6873" }}
          _pressed={{ bg: "#60818F" }}
          marginTop={5}
          onPress={() => setShowModal(true)}
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
