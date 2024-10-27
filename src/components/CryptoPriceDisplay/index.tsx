"use client";

import React, { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import axios from "axios";

const MotionText = motion.create(Text);

interface CryptoPriceDisplayProps {
  cryptos: string[];
}

export const CryptoPriceDisplay = ({ cryptos }: CryptoPriceDisplayProps) => {
  const [prices, setPrices] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${cryptos.join(",")}&vs_currencies=usd`
        );
        if (response.data) {
          const newPrices = Object.fromEntries(
            Object.entries(response.data).map(([key, value]: [string, any]) => [
              key.toUpperCase(),
              value.usd,
            ])
          );
          setPrices(newPrices);
        }
      } catch (error) {
        console.error("Error fetching crypto prices:", error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [cryptos]);

  return (
    <Flex gap={8} justifyContent="center" width="100%">
      {cryptos.map((crypto, index) => (
        <Flex key={index} direction="column" alignItems="center">
          <MotionText
            fontSize="lg"
            fontWeight="bold"
            color="cyan.300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {crypto}
          </MotionText>
          <MotionText
            fontSize="md"
            color="white"
            animation={`glow 2s infinite`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            $
            {prices[crypto]?.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }) || "0.00"}
          </MotionText>
        </Flex>
      ))}
    </Flex>
  );
};
