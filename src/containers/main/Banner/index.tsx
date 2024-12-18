import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { BlackFridayBanner } from "@/components/BlackFridayBanner";
import { BannerImage, BgImg1 } from "@/components/imgs";
import { GradBtn } from "@/components/Buttons";

import { PromoContainer } from "@/containers/main/PromoContainer";
import { CryptoWidget } from "@/containers/CryptoWidget";
import { CryptoConverter } from "@/components/CryptoConverter";

const MotionFlex = motion.create(Flex);
const MotionText = motion.create(Text);

export const Banner = () => {
  return (
    <Flex
      position="relative"
      minHeight="100vh"
      pt="120px"
      pb="80px"
      px={{ base: "6px", md: "10px", lg: "5%", xl: "10%" }}
      color="white"
      flexDirection="column"
      alignItems="center"
      textAlign={{ base: "center", sm: "left" }}
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

      <Flex w="100%" px={{ base: "6px", md: "10px", lg: "5%", xl: "8.2%" }}>
        <CryptoWidget cryptos={["BTC", "ETH", "USDT", "XRP", "TON"]} />
      </Flex>

      <Flex
        gap={6}
        direction={{ base: "column", md: "row" }}
        w="100%"
        justifyContent="space-between"
        px={{ base: "10%", md: "8%", lg: "8%", xl: "5%" }}
        py={{ base: "30px", md: "50px" }}
        zIndex="1"
      >
        <Flex
          flexDirection="column"
          flex={1}
          gap={6}
          alignItems={{ base: "center", sm: "flex-start" }}
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
            textAlign={{ base: "center", sm: "left" }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Rand Crypto
          </MotionText>

          <CryptoConverter />

          <Text fontSize="md" fontWeight="400" color="#E0E0E0" lineHeight={2}>
            Buy and sell cryptocurrencies, trusted by 10M wallets <br />
            with over $30 billion in transactions.
          </Text>
          <MotionFlex
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <GradBtn content="Launching soon" />
          </MotionFlex>
        </Flex>
        <MotionFlex
          flex={1}
          position="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <BannerImage />
          <Flex position="absolute" top="180px" right="100px">
            <BgImg1 />
          </Flex>
          <Flex position="absolute" top="180px" right="-400px">
            <BgImg1 />
          </Flex>
        </MotionFlex>
      </Flex>

      <MotionFlex
        width="100%"
        py={{ base: 0, lg: "50px" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <PromoContainer />
      </MotionFlex>
    </Flex>
  );
};
