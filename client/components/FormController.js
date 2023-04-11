import React from "react";
import { Box, FormControl, Input } from "native-base";

const FormController = (props) => {
  const { label, message, errorMessageShow, value, onChangeText } = props;
  return (
    <Box style={{ marginBottom: errorMessageShow ? 0 : 15 }}>
      <FormControl isInvalid={errorMessageShow}>
        <FormControl.Label>{label}</FormControl.Label>
        <Input
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
