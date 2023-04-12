import React, { useEffect, useState } from "react";
import { Center, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, logoutAction } from "../redux/slices/userReducer";
import InviteModal from "../components/InviteModal";
import LinkButton from "../components/LinkButton";
import BasicButton from "../components/BasicButton";

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
        <BasicButton
          onPress={() => setShowModal(true)}
          discription="Invite User"
        />
      ) : (
        <></>
      )}
      <LinkButton
        onPress={() => {
          dispatch(logoutAction());
        }}
        discription="Logout"
      />
    </Center>
  );
};

export default HomeScreen;
