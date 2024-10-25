import { Flex, Text, List, Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LuCheckCircle } from "react-icons/lu";

const MotionFlex = motion.create(Flex);
const MotionText = motion.create(Text);

export const AML = () => {
  const amlFeatures = [
    "Advanced KYC/KYB procedures",
    "Real-time transaction monitoring",
    "Risk-based approach to customer due diligence",
    "Ongoing screening against global watchlists",
    "Suspicious activity reporting",
  ];

  return (
    <Flex
      py="50px"
      minHeight="100vh"
      bgGradient="linear(to-br, #0a1929, #1a365d)"
      color="white"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      position="relative"
      overflow="hidden"
    >
      <MotionFlex
        flexDirection="column"
        gap={8}
        w="100%"
        maxWidth="1200px"
        px="5%"
        zIndex="1"
      >
        <MotionText
          fontSize={["3xl", "4xl", "5xl"]}
          fontWeight="bold"
          bgGradient="to-r"
          gradientFrom="cyan.400"
          gradientVia="blue.500"
          gradientTo="purple.600"
          bgClip="text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Anti-Money Laundering (AML)
        </MotionText>

        <MotionText
          fontSize="xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          color="cyan.100"
        >
          Our robust AML program ensures the highest standards of compliance and
          security
        </MotionText>

        <Flex direction="column" gap={12} mt={6}>
          <Grid templateColumns="repeat(2, 1fr)" gap={12}>
            <Flex
              flex={1}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <MotionText
                fontSize="2xl"
                fontWeight="semibold"
                mb={6}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Key Features
              </MotionText>
              <List.Root gap="2" variant="plain" textAlign="left">
                {amlFeatures.map(
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
                        {feature}
                      </MotionFlex>
                    </List.Item>
                  )
                )}
              </List.Root>
            </Flex>
            <Flex></Flex>
          </Grid>
          <Grid templateColumns="repeat(2, 1fr)" gap={12}>
            <Flex></Flex>
            <Flex
              flex={1}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <MotionText
                fontSize="2xl"
                fontWeight="semibold"
                mb={6}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Our Commitment
              </MotionText>
              <MotionText
                fontSize="lg"
                textAlign="left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                At Rand Crypto, we are committed to maintaining the highest
                standards of AML compliance. Our sophisticated systems and
                dedicated team work tirelessly to prevent, detect, and report
                any suspicious activities, ensuring a safe and transparent
                trading environment for all our users.
              </MotionText>
            </Flex>
          </Grid>
        </Flex>
      </MotionFlex>
    </Flex>
  );
};
