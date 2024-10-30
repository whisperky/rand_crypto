"use client";

import React from "react";
import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import { IconCard } from "@/components/IconCard";
import { useRateContext } from "@/contexts";

const MotionText = motion.create(Text);

interface CryptoWidgetProps {
  cryptos: string[];
}

export const CryptoWidget = ({ cryptos }: CryptoWidgetProps) => {
  const rates = useRateContext();

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      position="relative"
      gap={8}
      justifyContent="space-between"
      width={{ base: "100%", md: "100%", xl: "90%" }}
      mx="auto"
      borderRadius="full"
      border="1px solid #333"
      py="12px"
      px={{ base: "6px", md: "4px", lg: "12px", xl: "48px" }}
    >
      {isMobile ? (
        <Marquee gradientWidth="100%">
          {cryptos.map((crypto, index) => (
            <Flex key={index} gap={4} pr={12}>
              <IconCard
                icon={crypto as "BTC" | "ETH" | "TON" | "USDT" | "XRP"}
                size={10}
                padding={2}
                bgColor="#FAFBFF"
              />
              <Flex
                direction="column"
                alignItems="left"
                textAlign="left"
                flex={1}
              >
                <MotionText
                  fontSize="16px"
                  color="white"
                  animation={`glow 2s infinite`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  R{" "}
                  {rates[crypto as keyof typeof rates]?.toLocaleString(
                    undefined,
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }
                  ) || "0.00"}
                </MotionText>
                <MotionText
                  fontSize="12px"
                  fontWeight="regular"
                  color="cyan.300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {crypto}
                </MotionText>
              </Flex>
            </Flex>
          ))}
        </Marquee>
      ) : (
        <>
          {cryptos.map((crypto, index) => (
            <Flex key={index} gap={4}>
              <IconCard
                icon={crypto as "BTC" | "ETH" | "TON" | "USDT" | "XRP"}
                size={10}
                padding={2}
                bgColor="#FAFBFF"
              />
              <Flex
                direction="column"
                alignItems="left"
                textAlign="left"
                flex={1}
              >
                <MotionText
                  fontSize="16px"
                  color="white"
                  animation={`glow 2s infinite`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  R{" "}
                  {rates[crypto as keyof typeof rates]?.toLocaleString(
                    undefined,
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }
                  )}
                </MotionText>
                <MotionText
                  fontSize="12px"
                  fontWeight="regular"
                  color="cyan.300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {crypto}
                </MotionText>
              </Flex>
            </Flex>
          ))}
        </>
      )}
    </Flex>
  );
};
