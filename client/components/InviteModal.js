import React, { useState } from "react";
import { Button, Modal, Text } from "native-base";
import FormController from "./FormController";
import { validateEmail } from "../helpers/validation";

const InviteModal = (props) => {
  const { showModal, setShowModal } = props;
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);

  const handleEmailText = (text) => {
    setEmail(text);
    setEmailValidation(validateEmail(text));
  };

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content>
        <Modal.Body alignItems="center">
          <FormController
            label="Enter Email"
            message={"Email is Not Correct!"}
            errorMessageShow={!emailValidation}
            value={email}
            onChangeText={handleEmailText}
          />
          <Button
            bg="#6F96A6"
            _hover={{ bg: "#4D6873" }}
            _pressed={{ bg: "#60818F" }}
            marginTop={5}
            onPress={() => {
              setShowModal(false);
            }}
          >
            OK
          </Button>
          <Button
            variant="link"
            colorScheme="violet"
            onPress={() => {
              setShowModal(false);
              setEmail("");
              setEmailValidation(true);
            }}
          >
            Cancel
          </Button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default InviteModal;
