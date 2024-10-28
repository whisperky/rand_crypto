import { useRef } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

import { PROCESS_STEPS } from "@/data/features";
import { ProcessCard } from "@/components/Cards/ProcessCard";

const MotionFlex = motion.create(Flex);

export const OurProcessContainer = () => {
  const processRef = useRef(null);
  const isInView = useInView(processRef, { once: true });

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
      <MotionFlex
        ref={processRef}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        gap={12}
        px={{ base: "20px", md: "0px" }}
      >
        {PROCESS_STEPS.map((step, index) => (
          <MotionFlex
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
          >
            <ProcessCard step={step} index={index} />
          </MotionFlex>
        ))}
      </MotionFlex>
    </Flex>
  );
};
