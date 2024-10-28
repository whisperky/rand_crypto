import { Flex, Text } from "@chakra-ui/react";

import { PROCESS_STEPS } from "@/data/features";
import { ProcessCard } from "@/components/Cards/ProcessCard";

export const OurProcessContainer = () => {
  return (
    <Flex
      direction="column"
      align="center"
      pt="300px"
      pb="120px"
      px="10%"
      bg="#FAFBFF"
      color="white"
    >
      <Text fontSize="36px" fontWeight="bold" mb={10} color="#0D0D2B">
        Our Process
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        gap={12}
        px="20"
      >
        {PROCESS_STEPS.map((step, index) => (
          <ProcessCard key={index} step={step} index={index} />
        ))}
      </Flex>
    </Flex>
  );
};
