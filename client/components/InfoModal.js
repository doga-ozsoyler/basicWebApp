import React from "react";
import { Button, Modal, Text } from "native-base";

const InfoModal = (props) => {
  const { showModal, setShowModal, infoText } = props;

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content>
        <Modal.Body alignItems="center">
          <Text fontSize="md" m={5}>
            {infoText}
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button
            size="sm"
            onPress={() => {
              setShowModal(false);
            }}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default InfoModal;
