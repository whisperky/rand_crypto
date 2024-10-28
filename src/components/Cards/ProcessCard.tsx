import { useState } from "react";
import { Text, Flex } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

import { GradBtn, NextArrowBtn } from "@/components/Buttons";
import { PROCESS_STEPS } from "@/data/features";

const MotionFlex = motion.create(Flex);

export const ProcessCard = ({
  step,
  index,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <MotionFlex
      direction="column"
      flex={1}
      align="center"
      px={6}
      py={12}
      gap={4}
      borderRadius="xl"
      bg="white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      _hover={{
        bg: "#2B076E",
        transform: "translateY(-5px)",
        color: "white",
        "& svg": { color: "white" },
        "& p": { color: "white !important" },
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Flex mb={4}>
        <step.icon size={50} color="#00A3FF" />
      </Flex>
      <Text fontSize="28px" fontWeight="600" mb={2} color="#0D0D2B">
        {step.title}
      </Text>
      <Text
        fontSize="16px"
        color="#828282"
        textAlign="center"
        px="10"
        pb="15px"
        fontWeight="regular"
      >
        {step.description}
      </Text>
      <Flex position="relative" w="full" h="50px" justify="center">
        <MotionFlex
          position="absolute"
          initial={{ opacity: 0, y: -20, display: "none" }}
          animate={
            isHover
              ? { opacity: 1, y: 0, display: "block" }
              : { opacity: 0, y: -20, display: "none" }
          }
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <GradBtn
            px="20px"
            py="25px"
            content={
              <>
                Get Started{" "}
                <Flex
                  bg="white"
                  border="1px solid"
                  borderColor="white"
                  borderRadius="full"
                  p={1}
                >
                  <FaChevronRight color="#3671E9" />
                </Flex>
              </>
            }
          />
        </MotionFlex>
        <MotionFlex
          position="absolute"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isHover
              ? { opacity: 0, y: 20, display: "none" }
              : { opacity: 1, y: 0, display: "block" }
          }
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <NextArrowBtn size="lg" />
        </MotionFlex>
      </Flex>
    </MotionFlex>
  );
};
