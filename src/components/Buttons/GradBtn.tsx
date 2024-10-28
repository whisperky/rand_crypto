import { ReactNode } from "react";
import { Button } from "@chakra-ui/react";

export const GradBtn = ({
  content,
  px = "30px",
  py = "20px",
  ...props
}: {
  content: ReactNode;
  px?: string;
  py?: string;
}) => {
  return (
    <Button
      size="lg"
      bgGradient="to-r"
      gradientFrom="cyan.400"
      gradientTo="blue.500"
      px={px}
      py={py}
      color="white"
      borderRadius="full"
      {...props}
      _hover={{
        bgGradient: "to-r",
        gradientFrom: "cyan.500",
        gradientTo: "blue.600",
      }}
      //   boxShadow="0 0 20px rgba(0, 255, 255, 0.7)"
      _active={{ transform: "scale(0.95)" }}
    >
      {content}
    </Button>
  );
};
