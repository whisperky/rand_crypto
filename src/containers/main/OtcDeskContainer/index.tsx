import { useRef } from "react";
import { Flex, Text, Image, Button } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { LuArrowRight, LuArrowUp } from "react-icons/lu";

import { GradBtn } from "@/components/Buttons";

import { BitcoinColor } from "@/components/icons";
import { FormInput } from "@/components/Inputs";
import { BgEth, BgBtc, BgImg4, BgImg5 } from "@/components/imgs";

const MotionFlex = motion.create(Flex);
const MotionText = motion.create(Text);

export const OtcDeskContainer = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const isSection1InView = useInView(section1Ref, { once: true });
  const isSection2InView = useInView(section2Ref, { once: true });

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex direction="column">
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
            textAlign={{ base: "center", md: "start" }}
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
              liquidity pools. We offer competitive rates for
              institutional-sized orders across all major cryptocurrencies.
            </Text>

            <GradBtn content="Learn More" py="25px" />
          </Flex>

          <Flex flex={1} />

          {/* Right Side: Image Placeholder */}
          <MotionFlex
            position="relative"
            flex={6}
            w={{ base: "100%", md: "50%" }}
            h={{ base: "auto", xl: "320px" }}
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
                      <Text
                        fontSize="14px"
                        color="#E0E0E0"
                        display={{ base: "none", md: "block" }}
                      >
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
              display={{ base: "none", xl: "block" }}
              w="180px"
              bottom="-100px"
              left="15%"
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
              <Flex
                fontSize="24px"
                fontWeight="bold"
                alignItems="center"
                gap={2}
              >
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
              display={{ base: "none", xl: "block" }}
              w="180px"
              bottom="-50px"
              right="15%"
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
            <Image
              src="/img/statistic.png"
              alt="OTC Desk Chart"
              w={{ base: "100%", lg: "90%" }}
            />
          </MotionFlex>

          <Flex flex={1} />

          <Flex
            direction="column"
            flex={4}
            align="start"
            alignItems={{ base: "center", md: "start" }}
            textAlign={{ base: "center", md: "start" }}
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
            onClick={() => handleScroll("contact")}
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

      <Flex
        id="contact"
        position="relative"
        bgGradient="to-b"
        gradientFrom="#2B076E"
        gradientTo="#0D0D2B"
        w="100%"
        gap={10}
        px={{ base: "3%", md: "10%" }}
        py="88px"
        align="stretch"
        direction="column"
      >
        {/* Subscription Banner */}
        <Flex
          position="relative"
          bg="blue.500"
          color="white"
          px={{ base: "24px", md: "48px" }}
          py="48px"
          borderRadius="3xl"
          align="center"
          gap={{ base: 8, lg: 0 }}
          justify="space-between"
          direction={{ base: "column", lg: "row" }}
        >
          <Flex position="absolute" top="0px" left="30px">
            <BgEth />
          </Flex>
          <Flex position="absolute" bottom="0px" right="20px">
            <BgBtc />
          </Flex>

          <Flex direction="column" flexGrow={1} gap={4}>
            <Text fontSize="32px" fontWeight="bold">
              High Volume OTC Desk
            </Text>
            <Text
              w={{
                base: "100%",
                sm: "100%",
                lg: "350px",
                xl: "550px",
              }}
              fontSize="14px"
              fontWeight="regular"
              lineHeight="28px"
            >
              Exclusive high-volume trading solution for those looking for deep
              asset support, zero slippage and immediate execution on orders of
              any size
            </Text>
            <Text
              w={{
                base: "100%",
                sm: "100%",
                lg: "350px",
                xl: "550px",
              }}
              fontSize="14px"
              fontWeight="regular"
              lineHeight="28px"
            >
              The famed Rand Crypto OTC Desk is South Africa`&apos;`s deepest
              digital asset liquidity venue. A bespoke 1:1 trading experience
              reserved for high-volume players.
            </Text>
            <Text
              w={{
                base: "100%",
                sm: "100%",
                lg: "350px",
                xl: "550px",
              }}
              fontSize="14px"
              fontWeight="regular"
              lineHeight="28px"
            >
              A private trading experience that takes place off of open
              orderbooks.
            </Text>
          </Flex>
          <Flex
            direction={{ base: "column" }}
            mt={{ base: 4, lg: 0 }}
            px={{ base: 4, lg: 8 }}
            w={{ base: "100%", md: "90%", lg: "auto" }}
            gap={6}
            align="center"
          >
            <Text fontSize="28px" fontWeight="regular">
              Request OTC Access
            </Text>
            <Flex
              direction={{ base: "column", md: "row" }}
              w="100%"
              gap={4}
              fontSize="14px"
            >
              <FormInput
                placeholder="First Name"
                px={2}
                mr={2}
                borderBottom="1px solid #FFFFFF64"
                fontSize="14px"
              />
              <FormInput
                placeholder="Last Name"
                px={2}
                mr={2}
                borderBottom="1px solid #FFFFFF64"
                fontSize="14px"
              />
            </Flex>
            <FormInput
              placeholder="Contact Number"
              borderBottom="1px solid #FFFFFF64"
              mr={2}
              px={2}
              fontSize="14px"
            />
            <FormInput
              placeholder="Enter your email"
              mr={2}
              px={2}
              borderBottom="1px solid #FFFFFF64"
              fontSize="14px"
            />
            <Button
              colorScheme="whiteAlpha"
              borderRadius="full"
              px="32px"
              py="14px"
              bg="white"
              color="black"
              fontSize="16px"
              lineHeight="27px"
              _hover={{
                bg: "#CCCCCC",
                color: "black",
              }}
            >
              Request a Call
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
