import { useState, useEffect } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionFlex = motion.create(Flex);
const MotionText = motion.create(Text);

export const Header = () => {
  const features = [
    "AML",
    "Compliance",
    "Our Process",
    "OTC Desk",
    "Terms & Conditions",
  ];
  const [isScrolled, setIsScrolled] = useState(false); // Add this state

  // Add this useEffect hook
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MotionFlex
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      height="100px"
      align="center"
      justify="space-between"
      wrap="wrap"
      px="10%"
      color="black"
      zIndex={10}
      bg={isScrolled ? "#0a0f1833" : "#0a0f1800"} // Update this line
      backdropFilter={isScrolled ? "blur(15px)" : "none"}
      className="transition-all duration-500"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 1 }}
    >
      <Flex align="center" gap={4} height="100%">
        <Image
          src="/img/logo-color.png"
          alt="Company Logo"
          width={10}
          height={10}
          objectFit="contain"
        />
        <MotionText
          as="h2"
          fontWeight="bold"
          fontSize="2xl"
          color="cyan"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
          //   data-state="open"
          //   _open={{
          //     animation: "glow 3s ease-in-out infinite",
          //   }}
          letterSpacing="1px"
          textStyle="1.5rem"
        >
          Rand Crypto
        </MotionText>
      </Flex>
      <Flex height="full" color="white">
        {features.map((feature, index) => (
          <MotionText
            key={feature}
            width="180px"
            fontSize="16px"
            fontWeight="400"
            cursor="pointer"
            alignContent="center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * (index + 1), duration: 0.3 }}
            position="relative"
            textAlign="center"
            _hover={{
              color: "cyan.400",
              borderBottom: "5px solid cyan",
              transition: "all 0.1s ease-in-out",
            }}
          >
            {feature}
          </MotionText>
        ))}
      </Flex>

      {/* <Flex gap={8}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          <Button
            px={6}
            bg="cyan.400"
            _hover={{ bg: "cyan" }}
            data-state="open"
            _open={{
              animation: "box-glow 3s ease-in-out infinite",
            }}
          >
            Connect Wallet
          </Button>
        </motion.div>
      </Flex> */}
    </MotionFlex>
  );
};
