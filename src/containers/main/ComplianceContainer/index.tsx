import { Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { GradBtn } from "@/components/Buttons";

import { COMPLIANCE_FEATURES } from "@/data/features";

const MotionFlex = motion.create(Flex);
const MotionGrid = motion.create(Grid);

export const ComplianceContainer = () => {
  return (
    <MotionFlex
      position="relative"
      direction="column"
      align="center"
      justify="center"
      textAlign="center"
      w="100%"
      pt="90px"
      pb="170px"
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
      <Text fontSize="18px" color="#E0E0E0" lineHeight="28px" px="30%" pb={8}>
        Experience the highest level of security and regulatory compliance in
        the cryptocurrency industry.
      </Text>

      <Flex
        position="absolute"
        direction="column"
        align="center"
        justify="center"
        gap={8}
        p="10"
        bottom="-190px"
        left="10%"
        right="10%"
        bg="white"
        borderRadius="2xl"
        boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.1)"
      >
        <MotionGrid
          templateColumns={{ base: "1fr", sm: "repeat(4, 1fr)" }}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
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
