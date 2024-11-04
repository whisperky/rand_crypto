import { useState, useEffect } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";

const MotionFlex = motion.create(Flex);
const MotionText = motion.create(Text);

export const Header = () => {
  const features = [
    { id: "aml", label: "AML" },
    { id: "compliance", label: "Compliance" },
    { id: "process", label: "Our Process" },
    { id: "otc", label: "OTC Desk" },
    { id: "terms", label: "Terms & Conditions" },
  ];
  const [isScrolled, setIsScrolled] = useState(false); // Add this state
  const [isOpen, setIsOpen] = useState(false); // Add mobile menu state

  // Add this useEffect hook
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MotionFlex
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      height={{ base: "70px", md: "100px" }} // Adjust height for mobile
      align="center"
      justify="space-between"
      wrap="wrap"
      px={{ base: "3%", md: "5%", lg: "2.8%", xl: "10%" }} // Adjust padding for mobile
      color="black"
      zIndex={10}
      bg={isOpen ? "#0a0f18f0" : "#0a0f1833"} // Update this line
      backdropFilter={isScrolled ? "blur(15px)" : "none"}
      className="transition-all duration-500"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 1 }}
    >
      <Flex
        align="center"
        gap={{ base: 2, md: 4 }}
        height="100%"
        onClick={() => handleScroll("banner")}
        _hover={{ cursor: "pointer" }}
      >
        <Image
          src="/img/logo-color.png"
          alt="Company Logo"
          width={{ base: 8, md: 10 }}
          height={{ base: 8, md: 10 }}
          objectFit="contain"
        />
        <MotionText
          as="h2"
          fontWeight="bold"
          fontSize={{ base: "xl", md: "2xl" }}
          color="#6ac0c0"
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
          className="font-audiowide"
        >
          Rand Crypto
        </MotionText>
      </Flex>

      {/* Mobile menu button */}
      <Flex
        display={{ base: "flex", lg: "none" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMenu size={24} color="#e5e7eb" />
      </Flex>

      {/* Navigation menu */}
      <Flex
        height={{ base: "auto", md: "full" }}
        color="white"
        position={{ base: "absolute", md: "static" }}
        top={{ base: "70px", md: "auto" }}
        left={0}
        right={0}
        bg={{ base: isScrolled ? "#0a0f18f0" : "#0a0f18f0", md: "transparent" }}
        flexDirection={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "flex" : "none", lg: "flex" }}
        backdropFilter={{ base: "blur(15px)", lg: "none" }}
      >
        {features.map((feature, index) => (
          <MotionText
            key={feature.id}
            onClick={() => {
              handleScroll(feature.id);
              setIsOpen(false);
            }}
            width={{ base: "100%", md: "150px", lg: "145px", xl: "155px" }}
            py={{ base: 4, md: 0 }}
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
            {feature.label}
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
