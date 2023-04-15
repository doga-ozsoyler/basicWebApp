import React from "react";
import { Button } from "native-base";

const BasicButton = (props) => {
  const { isDisabled, isLoading, onPress, discription } = props;

  return (
    <Button
      bg="#6F96A6"
      _hover={{ bg: "#4D6873" }}
      _pressed={{ bg: "#60818F" }}
      marginTop={5}
      isDisabled={isDisabled}
      isLoading={isLoading}
      onPress={onPress}
    >
      {discription}
    </Button>
  );
};

export default BasicButton;
