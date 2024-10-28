import { useRef } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { LuArrowRight, LuArrowUp } from "react-icons/lu";

import { GradBtn } from "@/components/Buttons";

import { BitcoinColor } from "@/components/icons";
import { BgImg4 } from "@/components/imgs/BgImg4";
import { BgImg5 } from "@/components/imgs/BgImg5";

const MotionFlex = motion.create(Flex);
const MotionText = motion.create(Text);

export const OtcDeskContainer = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const isSection1InView = useInView(section1Ref, { once: true });
  const isSection2InView = useInView(section2Ref, { once: true });

  return (
    <Flex
      position="relative"
      direction="column"
      pt="120px"
      pb="70px"
      px="10%"
      bg="#2B076E"
      color="white"
      overflow="hidden"
    >
      <Flex position="absolute" top="0px" left="200px">
        <BgImg4 />
      </Flex>
      <Flex position="absolute" bottom="0px" right="0px">
        <BgImg5 />
      </Flex>

      {/* Header Section */}
      <MotionFlex
        direction="column"
        align="center"
        mb={16}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Text fontSize="16px" color="#00F0FF" fontWeight="500" mb={4}>
          INSTITUTIONAL GRADE
        </Text>
        <MotionText
          fontSize="36px"
          fontWeight="bold"
          textAlign="center"
          bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          mb={6}
        >
          OTC Trading Desk
        </MotionText>
        <Text
          fontSize="16px"
          color="#E0E0E0"
          textAlign="center"
          maxW="600px"
          lineHeight="26px"
        >
          Execute large trades seamlessly with our professional OTC desk
          service. Perfect for high-volume traders and institutional clients.
        </Text>
      </MotionFlex>

      <MotionFlex
        ref={section1Ref}
        position="relative"
        color="white"
        pt="40px"
        pb="120px"
        gap={12}
        borderRadius="lg"
        align="center"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        initial={{ opacity: 0, x: -50 }}
        animate={
          isSection1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
        }
        transition={{ duration: 0.8 }}
      >
        {/* Left Side: Text and Button */}
        <Flex
          direction="column"
          flex={4}
          align="start"
          alignItems={{ base: "center", md: "start" }}
          gap={8}
          w={{ base: "100%", md: "40%" }}
          mt={{ base: 8, md: 0 }}
        >
          <Text fontSize="36px" fontWeight="bold">
            💎 Competitive Pricing
          </Text>
          <Text
            fontSize="16px"
            textAlign={{ base: "center", md: "start" }}
            color="#E0E0E0"
            fontWeight="400"
            lineHeight="26px"
          >
            Best-in-class pricing for bulk transactions with minimal slippage,
            backed by our advanced algorithmic trading systems and deep
            liquidity pools. We offer competitive rates for institutional-sized
            orders across all major cryptocurrencies.
          </Text>

          <GradBtn content="Learn More" py="25px" />
        </Flex>

        <Flex flex={1} />

        {/* Right Side: Image Placeholder */}
        <MotionFlex
          position="relative"
          flex={6}
          w={{ base: "100%", md: "50%" }}
          h="320px"
          initial={{ opacity: 0, x: 50 }}
          animate={
            isSection1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Flex
            direction="column"
            w="100%"
            p="40px"
            bg="#35068C"
            borderRadius="lg"
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Flex gap={4}>
                <BitcoinColor />
                <Flex direction="column">
                  <Flex gap={3} alignItems="baseline">
                    <Text fontSize="16px" fontWeight="bold">
                      Bitcoin
                    </Text>
                    <Text fontSize="14px" color="#E0E0E0">
                      BTC
                    </Text>
                  </Flex>
                  <Text fontSize="12px" fontWeight="300">
                    0.00040 BTC
                  </Text>
                </Flex>
              </Flex>
              <Text fontSize="14px" color="#00F0FF" fontWeight="400">
                +125%
              </Text>
            </Flex>
            <Image src="/img/price.png" alt="OTC Desk Chart" />
          </Flex>

          <Flex
            direction="column"
            position="absolute"
            w="180px"
            bottom="-100px"
            left="100px"
            p="20px"
            gap={2}
            bgColor="#491F98"
            borderRadius="lg"
          >
            <Text
              fontSize="20px"
              fontWeight="400"
              className="font-inter"
              color="white"
              lineHeight="28px"
            >
              Increase in Trade{" "}
            </Text>
            <Flex fontSize="24px" fontWeight="bold" alignItems="center" gap={2}>
              +75%
              <LuArrowUp color="#00F0FF" />
            </Flex>
            <Text fontSize="16px" fontWeight="regular">
              Sell option
            </Text>
          </Flex>

          <Flex
            direction="column"
            position="absolute"
            w="180px"
            bottom="-50px"
            right="100px"
            p="20px"
            gap={2}
            bgColor="#491F98"
            borderRadius="lg"
          >
            <Text
              fontSize="20px"
              fontWeight="400"
              className="font-inter"
              color="white"
              lineHeight="28px"
            >
              $15.32
            </Text>
            <Text fontSize="16px" fontWeight="regular">
              Price in dollar
            </Text>
          </Flex>
        </MotionFlex>
      </MotionFlex>

      <MotionFlex
        ref={section2Ref}
        position="relative"
        color="white"
        pt="40px"
        pb={{ base: "70px", md: "120px" }}
        gap={12}
        borderRadius="lg"
        align="center"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        initial={{ opacity: 0, x: 50 }}
        animate={
          isSection2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
        }
        transition={{ duration: 0.8 }}
      >
        {/* Right Side: Image Placeholder */}
        <MotionFlex
          position="relative"
          flex={6}
          w={{ base: "100%", md: "50%" }}
          initial={{ opacity: 0, x: -50 }}
          animate={
            isSection2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image src="/img/statistic.png" alt="OTC Desk Chart" w="90%" />
        </MotionFlex>

        <Flex flex={1} />

        <Flex
          direction="column"
          flex={4}
          align="start"
          alignItems={{ base: "center", md: "start" }}
          gap={8}
          w={{ base: "100%", md: "40%" }}
          mt={{ base: 8, md: 0 }}
        >
          <Text fontSize="36px" fontWeight="bold">
            💧 Deep Liquidity
          </Text>
          <Text
            fontSize="16px"
            textAlign={{ base: "center", md: "start" }}
            color="#E0E0E0"
            fontWeight="400"
            lineHeight="26px"
          >
            Access to extensive liquidity pools for large-volume trades with
            minimal market impact. Our deep order books and diverse liquidity
            sources ensure smooth execution of institutional-sized orders.
          </Text>

          <GradBtn content="Learn More" py="25px" />
        </Flex>
      </MotionFlex>

      {/* CTA Section */}
      <MotionFlex
        direction="column"
        align="center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <GradBtn
          content={
            <>
              Contact OTC Desk
              <LuArrowRight />
            </>
          }
          py="27px"
        />
      </MotionFlex>
    </Flex>
  );
};
