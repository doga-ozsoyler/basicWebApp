import React from "react";
import { Button } from "native-base";

const LinkButton = (props) => {
  const { onPress, discription } = props;

  return (
    <Button variant="link" onPress={onPress} colorScheme="violet">
      {discription}
    </Button>
  );
};

export default LinkButton;
