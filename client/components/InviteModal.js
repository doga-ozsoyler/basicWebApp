import React, { useState } from "react";
import { Modal } from "native-base";
import FormController from "./FormController";
import { validateEmail } from "../helpers/validation";
import { useDispatch, useSelector } from "react-redux";
import { createUserAction } from "../redux/slices/userReducer";
import showToast from "../hooks/showToast";
import LinkButton from "./LinkButton";
import BasicButton from "./BasicButton";
import CustomCheckbox from "./CustomCheckbox";

const InviteModal = (props) => {
  const { showModal, setShowModal } = props;
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);
  const [isAdmin, setIsAdmin] = useState("standart");
  const [show, setShow] = useState(false);

  const userLoading = useSelector((state) => {
    return state?.user?.loading;
  });
  const userError = useSelector((state) => {
    return state?.user?.error;
  });
  const createUserData = useSelector((state) => {
    return state?.user?.createUserData;
  });

  const handleEmailText = (text) => {
    setEmail(text);
    setEmailValidation(validateEmail(text));
  };

  showToast(createUserData, userError, show, setShow);

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content>
        <Modal.Body alignItems="center">
          <FormController
            label="Enter Email"
            message={
              userError?.status === 404
                ? "User already exist"
                : "Email is Not Correct!"
            }
            errorMessageShow={!emailValidation || userError?.status === 404}
            value={email}
            onChangeText={handleEmailText}
          />
          <CustomCheckbox
            onChange={() =>
              setIsAdmin(isAdmin === "admin" ? "standart" : "admin")
            }
            discription="Admin"
          />
          <BasicButton
            isDisabled={email === "" || !emailValidation}
            isLoading={userLoading}
            onPress={() => {
              dispatch(createUserAction({ email: email, status: isAdmin }));
              setShow(true);
            }}
            discription="Create"
          />
          <LinkButton
            onPress={() => {
              setShowModal(false);
              setEmail("");
              setEmailValidation(true);
            }}
            discription="Cancel"
          />
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default InviteModal;
