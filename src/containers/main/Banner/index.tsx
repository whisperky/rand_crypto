import { Flex, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import BannerAnim from "@/components/BannerAnim";
import { CryptoPriceDisplay } from "@/components/CryptoPriceDisplay";
import { BlackFridayBanner } from "@/components/BlackFridayBanner";
import { BannerImage, BgImg1 } from "@/components/icons";

const MotionFlex = motion.create(Flex);
const MotionText = motion.create(Text);

export const Banner = () => {
  return (
    <Flex
      position="relative"
      minHeight="100vh"
      py="120px"
      px="10%"
      color="white"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      overflow="hidden"
    >
      {/* <MotionFlex
        position="absolute"
        top="100px"
        right="0"
        borderTop="1px solid #00FFFF44"
        borderLeft="1px solid #00FFFF44"
        initial={{ width: 0, height: 0 }}
        animate={{
          width: "100%",
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />
      <MotionFlex
        position="absolute"
        bgGradient="to-r"
        gradientFrom="#00FFFF"
        gradientTo="#00FFFF77"
        width="20px"
        height="1px"
        zIndex={100}
        initial={{ top: "100px", right: "0" }}
        animate={{
          right: "100%",
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      /> */}

      <MotionFlex
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <CryptoPriceDisplay cryptos={["BTC", "ETH", "USDT", "XRP", "TON"]} />
      </MotionFlex>
      <Flex gap={6} w="100%" py="30px" zIndex="1">
        <Flex
          flexDirection="column"
          flex={1}
          gap={6}
          w="100%"
          py="30px"
          zIndex="1"
        >
          <BlackFridayBanner />
          <MotionText
            fontSize={["4xl", "5xl", "6xl"]}
            fontWeight="bold"
            py="10px"
            bgGradient="to-r"
            gradientFrom="cyan.400"
            gradientVia="blue.500"
            gradientTo="purple.600"
            lineHeight={1.2}
            bgClip="text"
            textAlign="left"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Rand Crypto
          </MotionText>
          <Flex gap={8} py="60px">
            <Flex
              flex={1}
              gap={8}
              direction="column"
              px="10px"
              alignItems="left"
              justifyContent="center"
            >
              <Text
                fontSize="md"
                fontWeight="400"
                color="#E0E0E0"
                textAlign="left"
                lineHeight={2}
                // bgGradient="to-r"
                // gradientFrom="cyan.400"
                // gradientVia="blue.500"
                // gradientTo="purple.600"
                // bgClip="text"
                // textShadow="0 0 10px rgba(0, 255, 255, 0.3)"
              >
                Buy and sell cryptocurrencies, trusted by 10M wallets <br />
                with over $30 billion in transactions.
              </Text>
              <MotionFlex
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 1 }}
              >
                <Button
                  size="lg"
                  bgGradient="to-r"
                  gradientFrom="cyan.400"
                  gradientTo="blue.500"
                  px="40px"
                  color="white"
                  borderRadius="full"
                  // _hover={{
                  //   bgGradient: "to-r",
                  //   gradientFrom: "cyan.500",
                  //   gradientTo: "blue.600",
                  // }}
                  boxShadow="0 0 20px rgba(0, 255, 255, 0.7)"
                  _active={{ transform: "scale(0.95)" }}
                >
                  Launching soon
                </Button>
              </MotionFlex>
            </Flex>
          </Flex>
        </Flex>
        <Flex flex={1} position="relative">
          <BannerImage />
          <Flex position="absolute" top="180px" right="150px">
            <BgImg1 />
          </Flex>
          <Flex position="absolute" top="180px" right="-350px">
            <BgImg1 />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
