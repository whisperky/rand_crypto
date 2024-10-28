import { useRef } from "react";
import { Flex, Text, List } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { LuCheckCircle } from "react-icons/lu";

import { GradBtn } from "@/components/Buttons";
import { AmlImage, BgImg1, BgImg2, BgImg3 } from "@/components/imgs";

import { AML_FEATURES } from "@/data/features";

const MotionFlex = motion.create(Flex);

export const AMLContainer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      position="relative"
      color="white"
      pt="40px"
      pb="60px"
      px="10%"
      borderRadius="lg"
      align="center"
      justify="space-between"
    >
      <Flex position="absolute" top="200px" left="-500px">
        <BgImg1 />
      </Flex>
      <Flex position="absolute" top="300px" right="0px">
        <BgImg2 />
      </Flex>
      <Flex position="absolute" top="-150px" right="0px">
        <BgImg3 />
      </Flex>

      {/* Left Side: Image Placeholder */}
      <MotionFlex
        ref={ref}
        position="relative"
        w={{ base: "100%", md: "50%" }}
        h="350px"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 20,
        }}
        transition={{
          duration: 0.5,
          delay: inView ? 0.2 : 0,
        }}
      >
        <AmlImage />
      </MotionFlex>

      {/* Right Side: Text and Button */}
      <Flex
        direction="column"
        align="start"
        gap={4}
        w={{ base: "100%", md: "40%" }}
        mt={{ base: 8, md: 0 }}
      >
        <Text fontSize="36px" fontWeight="bold">
          Anti-Money Laundering (AML)
        </Text>
        <Text
          w={{ base: "100%", md: "300px", lg: "400px" }}
          fontSize="16px"
          color="#E0E0E0"
          fontWeight="400"
          lineHeight="26px"
        >
          Our robust AML program ensures the highest standards of compliance and
          security
        </Text>

        <List.Root gap="2" variant="plain" textAlign="left">
          {AML_FEATURES.map(
            (feature, index): React.ReactNode => (
              <List.Item key={index}>
                <MotionFlex
                  alignItems="center"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <List.Indicator asChild color="green.500">
                    <LuCheckCircle />
                  </List.Indicator>
                  <Text
                    fontSize="14px"
                    color="#E0E0E0"
                    fontWeight="400"
                    lineHeight="18px"
                  >
                    {feature}
                  </Text>
                </MotionFlex>
              </List.Item>
            )
          )}
        </List.Root>
        <GradBtn content="Learn More" />
      </Flex>
    </Flex>
  );
};
