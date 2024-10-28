import { useRef } from "react";
import { Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

import { GradBtn } from "@/components/Buttons";

import { COMPLIANCE_FEATURES } from "@/data/features";

const MotionFlex = motion.create(Flex);
const MotionGrid = motion.create(Grid);

export const ComplianceContainer = () => {
  const featuresRef = useRef(null);
  const isInView = useInView(featuresRef, { once: true });

  return (
    <MotionFlex
      position="relative"
      direction="column"
      align="center"
      justify="center"
      textAlign="center"
      w="100%"
      pt={{ base: "90px", sm: "80px", md: "150px" }}
      pb={{ base: "440px", sm: "360px", md: "320px", lg: "180px", xl: "170px" }}
      px="10%"
      color="white"
      gap={8}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Text fontSize="36px" fontWeight="bold" color="white">
        World-Class Compliance Standards
      </Text>
      <Text
        fontSize="18px"
        color="#E0E0E0"
        lineHeight="28px"
        px={{ base: "6px", sm: "6px", md: "10%", lg: "30%" }}
        pb={8}
      >
        Experience the highest level of security and regulatory compliance in
        the cryptocurrency industry.
      </Text>

      <Flex
        ref={featuresRef}
        position="absolute"
        direction="column"
        align="center"
        justify="center"
        gap={8}
        px={{ base: "2px", md: "4px", lg: "8px", xl: "10px" }}
        pt={{ base: "4px", md: "8px", lg: "12px", xl: "16px" }}
        pb="40px"
        bottom="-190px"
        left={{ base: "2%", md: "5%", lg: "10%" }}
        right={{ base: "2%", md: "5%", lg: "10%" }}
        bg="white"
        borderRadius="2xl"
        boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.1)"
      >
        <MotionGrid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          mt={4}
        >
          {COMPLIANCE_FEATURES.map((feature, index) => (
            <GridItem key={index}>
              <MotionFlex
                direction="column"
                gap={3}
                p={6}
                align="center"
                borderRadius="xl"
                bg="rgba(255, 255, 255, 0.05)"
                backdropFilter="blur(10px)"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ delay: index * 0.2, duration: 0.6 }}
                _hover={{
                  bg: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-5px)",
                }}
              >
                <feature.icon size={24} color="#00A3FF" />
                <Text fontSize="18px" fontWeight="600" color="#0D0D2B">
                  {feature.title}
                </Text>
                <Text fontSize="14px" color="#828282">
                  {feature.description}
                </Text>
              </MotionFlex>
            </GridItem>
          ))}
        </MotionGrid>

        <GradBtn content="Learn More About Compliance" px="40px" py="30px" />
      </Flex>
    </MotionFlex>
  );
};
