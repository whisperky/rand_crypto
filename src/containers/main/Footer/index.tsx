import { Flex, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <Flex direction="column" color="white">
      {/* Footer Links and Info */}
      <Flex
        direction="column"
        px="10%"
        py={{ base: "10px", md: "57px" }}
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
            flex={2}
            display={{ base: "flex", md: "none", lg: "flex" }}
            justifyItems={{ base: "center", sm: "flex-start" }}
            alignItems="center"
          >
            <Image
              src="/img/logo-color.png"
              height="50px"
              alt="Rand Crypto"
              alignSelf="center"
            />
            <Text
              fontSize="2xl"
              fontWeight="regular"
              color="#6ac0c0"
              className="font-audiowide"
            >
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
          </Flex>

          <Flex
            direction="column"
            flex={3}
            align="start"
            gap={8}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="32px" fontWeight="medium">
              We accept following payment systems
            </Text>
            <Flex gap={4} direction={{ sm: "row", md: "row", xl: "row" }}>
              <Link href="https://www.visa.com.au/" target="_blank">
                <Flex
                  w="96px"
                  h="64px"
                  alignItems="center"
                  justifyContent="center"
                  bg="#E0E0E008"
                  borderRadius="md"
                  _hover={{
                    bg: "#E0E0E016",
                  }}
                >
                  <Image
                    src="/img/icons/logos_visa.png"
                    height="16px"
                    alt="Visa"
                  />
                </Flex>
              </Link>
              <Link href="https://www.mastercard.com.au/" target="_blank">
                <Flex
                  w="96px"
                  h="64px"
                  alignItems="center"
                  justifyContent="center"
                  bg="#E0E0E008"
                  borderRadius="md"
                  _hover={{
                    bg: "#E0E0E016",
                  }}
                >
                  <Image
                    src="/img/icons/logos_mastercard.png"
                    height="38px"
                    alt="Mastercard"
                  />
                </Flex>
              </Link>
              <Link href="https://bitcoin.org/" target="_blank">
                <Flex
                  w="96px"
                  h="64px"
                  alignItems="center"
                  justifyContent="center"
                  bg="#E0E0E008"
                  borderRadius="md"
                  _hover={{
                    bg: "#E0E0E016",
                  }}
                >
                  <Image
                    src="/img/icons/logos_bitcoin.png"
                    height="40px"
                    alt="Bitcoin"
                  />
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Flex>

        {/* Social Icons */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          alignItems="center"
          mt={10}
          mb={{ base: 10, md: 0 }}
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
