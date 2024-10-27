import { Button } from "@chakra-ui/react";

export const GradBtn = ({ text }: { text: string }) => {
  return (
    <Button
      size="lg"
      bgGradient="to-r"
      gradientFrom="cyan.400"
      gradientTo="blue.500"
      px="40px"
      color="white"
      borderRadius="full"
      _hover={{
        bgGradient: "to-r",
        gradientFrom: "cyan.500",
        gradientTo: "blue.600",
      }}
      //   boxShadow="0 0 20px rgba(0, 255, 255, 0.7)"
      _active={{ transform: "scale(0.95)" }}
    >
      {text}
    </Button>
  );
};
