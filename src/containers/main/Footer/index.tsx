import { Flex, Text, Button, Input, Image } from "@chakra-ui/react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import { BgEth, BgBtc } from "@/components/imgs";

export const Footer = () => {
  return (
    <Flex direction="column" color="white">
      <Flex
        position="relative"
        bgGradient="to-b"
        gradientFrom="#2B076E"
        gradientTo="#0D0D2B"
        w="100%"
        gap={10}
        px="10%"
        py="88px"
        align="stretch"
        direction="column"
      >
        {/* Subscription Banner */}
        <Flex
          position="relative"
          bg="blue.500"
          color="white"
          p="48px"
          borderRadius="3xl"
          align="center"
          justify="space-between"
          direction={{ base: "column", md: "row" }}
        >
          <Flex position="absolute" top="0px" left="30px">
            <BgEth />
          </Flex>
          <Flex position="absolute" bottom="0px" right="20px">
            <BgBtc />
          </Flex>

          <Flex direction="column" flexGrow={1} gap={4}>
            <Text fontSize="32px" fontWeight="bold">
              Start earning now
            </Text>
            <Text
              w={{ base: "100%", sm: "300px", md: "400px" }}
              fontSize="16px"
              fontWeight="regular"
              lineHeight="28px"
            >
              Join now with Rand Crypto to get the latest news and start mining
              now
            </Text>
          </Flex>
          <Flex mt={{ base: 4, md: 0 }} align="center" flexGrow={1}>
            <Input
              placeholder="Enter your email"
              variant="flushed"
              mr={2}
              borderBottom="1px solid #FFFFFF64"
              _focus={{
                outline: "none",
                borderBottom: "none",
                outlineWidth: "0",
              }}
              _active={{
                outline: "none",
                borderBottom: "none",
                outlineWidth: "0",
              }}
              _placeholder={{ color: "white" }}
            />
            <Button
              colorScheme="whiteAlpha"
              borderRadius="full"
              px="32px"
              py="14px"
              bg="white"
              color="black"
              fontSize="18px"
              lineHeight="27px"
              _hover={{
                bg: "#CCCCCC",
              }}
            >
              Subscribe
            </Button>
          </Flex>
        </Flex>
      </Flex>

      {/* Footer Links and Info */}
      <Flex
        direction="column"
        px="10%"
        py="57px"
        w="100%"
        justify="space-between"
        textAlign="center"
        bgClip="#0D0D2B"
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          alignItems="center"
          py={10}
          gap={10}
        >
          <Flex
            align="start"
            gap={4}
            flex={1}
            display={{ base: "none", lg: "flex" }}
          >
            <Image src="/img/logo-color.png" height="50px" alt="Rand Crypto" />
            <Text fontSize="2xl" fontWeight="bold" color="teal.400">
              Rand Crypto
            </Text>
          </Flex>

          <Flex
            direction={{ base: "column", lg: "row" }}
            flex={2}
            gap={10}
            justify="space-between"
          >
            <Flex
              direction="column"
              flex={1}
              align="start"
              gap={2}
              alignItems={{ base: "center", md: "start" }}
            >
              <Text fontSize="20px" fontWeight="bold">
                Quick Link
              </Text>
              <Link href="#">Home</Link>
              <Link href="#">Products</Link>
              <Link href="#">About</Link>
              <Link href="#">Features</Link>
              <Link href="#">Contact</Link>
            </Flex>

            <Flex
              direction="column"
              flex={1}
              align="start"
              gap={2}
              alignItems={{ base: "center", md: "start" }}
            >
              <Text fontSize="20px" fontWeight="bold">
                Resources
              </Text>
              <Link href="#">Download Whitepaper</Link>
              <Link href="#">Smart Token</Link>
              <Link href="#">Blockchain Explorer</Link>
              <Link href="#">Crypto API</Link>
              <Link href="#">Interest</Link>
            </Flex>
          </Flex>

          <Flex
            direction="column"
            flex={1}
            align="start"
            gap={8}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="32px" fontWeight="medium">
              We accept following payment systems
            </Text>
            <Flex gap={4} direction={{ sm: "row", md: "column", xl: "row" }}>
              <Flex p="24px" bg="#E0E0E008" borderRadius="md">
                <Image
                  src="/img/icons/logos_visa.png"
                  height="16px"
                  alt="Visa"
                />
              </Flex>
              <Flex px="24px" py="13px" bg="#E0E0E008" borderRadius="md">
                <Image
                  src="/img/icons/logos_mastercard.png"
                  height="38px"
                  alt="Mastercard"
                />
              </Flex>
              <Flex px="28px" py="12px" bg="#E0E0E008" borderRadius="md">
                <Image
                  src="/img/icons/logos_bitcoin.png"
                  height="40px"
                  alt="Bitcoin"
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* Social Icons */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          alignItems="center"
          mt={10}
        >
          <Text fontSize="16px" fontWeight="regular" lineHeight="28px">
            ©2024 Rand Crypto. All rights reserved
          </Text>

          <Flex justify="center" gap="32px" mt={4}>
            <FaFacebookF size="24px" cursor="pointer" />
            <FaInstagram size="24px" cursor="pointer" />
            <FaYoutube size="24px" cursor="pointer" />
            <FaTwitter size="24px" cursor="pointer" />
            <FaLinkedin size="24px" cursor="pointer" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
