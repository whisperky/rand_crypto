import { Button } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa6";

import { Size } from "@/data/types";

export const NextArrowBtn = ({ size = "md" }: { size?: Size }) => {
  return (
    <Button
      aria-label="Next"
      size={size}
      borderRadius="full"
      bg="transparent"
      color="blue.500"
      border="1px solid"
      borderColor="gray.300"
      _hover={{ bg: "gray.100" }}
      _active={{ bg: "gray.200" }}
      _focus={{ boxShadow: "none" }}
    >
      <FaChevronRight />
    </Button>
  );
};
