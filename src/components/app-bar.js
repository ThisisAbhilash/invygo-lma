import React from "react";
import {
  Flex, Image, Text, useToast
} from "@chakra-ui/core";
export default () => {
  window.localStorage.setItem('darkMode', false);
  const toast = useToast();

  function updateOnlineStatus() {
    toast({
      title: "Connectivity",
      description: navigator.onLine ? "You are online" : "You are offline",
      status: navigator.onLine ? "success" : 'warning',
      duration: 3000,
      isClosable: true,
    });
  }
  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  return (
    <Flex
      bg="#253047"
      width='100%'
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Image
          src="favicon.png"
          size={34}
          pl={2}
        />
        <Text pl={3} color="white">
          Invygo Last Mile
        </Text>
      </Flex>
    </Flex>
  );
}