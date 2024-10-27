import { Flex, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import BannerAnim from "@/components/BannerAnim";
import { CryptoPriceDisplay } from "@/components/CryptoPriceDisplay";

const MotionFlex = motion.create(Flex);
const MotionText = motion.create(Text);

export const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome to Rand Crypto",
      "The Future of Finance",
      "Decentralized. Secure. Fast.",
    ],
    loop: 0,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <Flex
      position="relative"
      py="150px"
      minHeight="100vh"
      color="white"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      overflow="hidden"
    >
      <MotionFlex
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
      />

      <MotionFlex
        position="absolute"
        top="920px"
        left="0"
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
        bgGradient="to-l"
        gradientFrom="#00FFFF"
        gradientTo="#00FFFF77"
        width="20px"
        height="1px"
        zIndex={100}
        initial={{ top: "920px", left: "0" }}
        animate={{
          left: "100%",
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      <MotionFlex
        position="absolute"
        top="1050px"
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
        initial={{ top: "1050px", right: "0" }}
        animate={{
          right: "100%",
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      <MotionFlex
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgImage="url('/img/crypto-background.jpg')"
        bgSize="cover"
        opacity={0.2}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <Flex
        flexDirection="column"
        gap={6}
        w="100%"
        py="50px"
        px="10%"
        zIndex="1"
      >
        <MotionFlex
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <CryptoPriceDisplay cryptos={["BTC", "ETH", "USDT", "XRP", "TON"]} />
        </MotionFlex>

        <MotionText
          h="90px"
          fontSize={["4xl", "5xl", "6xl"]}
          fontWeight="bold"
          bgGradient="to-r"
          gradientFrom="cyan.400"
          gradientVia="blue.500"
          gradientTo="purple.600"
          bgClip="text"
          // initial={{ opacity: 0, y: -50 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1 }}
          // textShadow="0 0 20px rgba(0, 255, 255, 0.5)"
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            top: "-2px",
            right: "-2px",
            bottom: "-2px",
            left: "-2px",
            background:
              "linear-gradient(45deg, cyan.400, blue.500, purple.600)",
            filter: "blur(10px)",
            opacity: 0.7,
            zIndex: -1,
          }}
        >
          {text}
          <Cursor cursorStyle="" />
        </MotionText>
        <MotionText
          fontSize="2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          color="cyan"
          // data-state="open"
          // _open={{
          //   animation: "glow 1s ease-in-out infinite",
          // }}
        >
          Your gateway to the future of finance
        </MotionText>
        <Flex gap={8} height="500px">
          <Flex
            flex={1}
            gap={8}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize="lg"
              fontWeight="medium"
              color="white"
              px="150px"
              // bgGradient="to-r"
              // gradientFrom="cyan.400"
              // gradientVia="blue.500"
              // gradientTo="purple.600"
              // bgClip="text"
              textShadow="0 0 10px rgba(0, 255, 255, 0.3)"
            >
              Experience the revolution of digital assets, where innovation
              meets security. Our platform empowers you to navigate the world of
              cryptocurrencies with confidence. Join us in shaping the future of
              finance, one block at a time, as we build a decentralized
              ecosystem that puts financial freedom in your hands.
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
                // _hover={{
                //   bgGradient: "to-r",
                //   gradientFrom: "cyan.500",
                //   gradientTo: "blue.600",
                // }}
                boxShadow="0 0 20px rgba(0, 255, 255, 0.5)"
                _active={{ transform: "scale(0.95)" }}
              >
                Launching soon
              </Button>
            </MotionFlex>
          </Flex>
          <Flex flex={1} position="relative">
            <BannerAnim mode="dark" />
          </Flex>
          {/* <MotionFlex
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Icon fontSize="2xl" color="pink.700">
                <GrBitcoin />
              </Icon>
            </MotionFlex>
            <MotionFlex
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <Icon fontSize="2xl" color="pink.700">
                <FaEthereum />
              </Icon>
            </MotionFlex>
            <MotionFlex
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <Icon fontSize="2xl" color="yellow.400">
                <SiDogecoin />
              </Icon>
            </MotionFlex> */}
        </Flex>
      </Flex>
    </Flex>
  );
};
