import React from "react";
import { VStack, HStack, Text, Alert } from "native-base";

const SuccessAlert = () => {
  return (
    <Alert w="100%" status={"success"}>
      <VStack space={2} flexShrink={1} w="100%">
        <HStack flexShrink={1} space={2} justifyContent="space-between">
          <HStack space={2} flexShrink={1}>
            <Alert.Icon mt="1" />
            <Text fontSize="md" color="coolGray.800">
              User successfully created and invitation sended!
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </Alert>
  );
};

export default SuccessAlert;
