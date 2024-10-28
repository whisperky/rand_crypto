import { Box, Text, Button } from "@chakra-ui/react";

export const BlackFridayBanner = () => {
  return (
    <Box
      w="fit-content"
      bg="#FFFFFF1A"
      p={1}
      paddingRight={5}
      fontWeight="400"
      borderRadius="full"
      display="inline-flex"
      alignItems="center"
    >
      <Button
        size="sm"
        bg="white"
        color="#0f0d32"
        borderRadius="full"
        fontWeight="bold"
        px={4}
        _hover={{ bg: "#e0e0e0" }}
        _focus={{ boxShadow: "none" }}
      >
        75% SAVE
      </Button>
      <Text color="white" ml={3} fontSize="sm">
        For the Black Friday weekend
      </Text>
    </Box>
  );
};
