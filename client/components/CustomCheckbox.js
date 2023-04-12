import React from "react";
import { Text, Checkbox, Box } from "native-base";

const CustomCheckbox = (props) => {
  const { onChange, discription } = props;

  return (
    <Box w="80%" alignItems="flex-start">
      <Checkbox
        colorScheme="purple"
        _checked={{ borderColor: "#684F8C", bg: "#684F8C" }}
        alignSelf="flex-end"
        onChange={onChange}
        value={`${discription}`}
      >
        <Text fontSize="sm" color="dark.300">
          {discription}
        </Text>
      </Checkbox>
    </Box>
  );
};

export default CustomCheckbox;
