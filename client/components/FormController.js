import React from "react";
import { Box, FormControl, Input, Text } from "native-base";

const FormController = (props) => {
  const { label, message, errorMessageShow, value, onChangeText } = props;
  return (
    <Box style={{ marginBottom: errorMessageShow ? 0 : 15 }}>
      <FormControl isInvalid={errorMessageShow}>
        <FormControl.Label>
          <Text bold color="#684F8C">
            {label}
          </Text>
        </FormControl.Label>

        <Input
          borderWidth={2}
          borderColor="#684F8C"
          _hover={{ borderColor: "#A993BF" }}
          focusOutlineColor="#684F8C"
          value={value}
          onChangeText={onChangeText}
          placeholder={label}
          w="300"
        />
        <FormControl.ErrorMessage>{message}</FormControl.ErrorMessage>
      </FormControl>
    </Box>
  );
};

export default FormController;
