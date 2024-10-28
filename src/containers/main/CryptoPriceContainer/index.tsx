"use client";

import React, { useState, useEffect, useRef } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import axios from "axios";

import { TokenIcon } from "@/components/TokenIcon";
import { CryptoPriceDisplay } from "@/components/CryptoPriceDisplay";

const MotionFlex = motion.create(Flex);

interface CryptoPriceContainerProps {
  cryptos: string[];
}

export const CryptoPriceContainer = ({
  cryptos,
}: CryptoPriceContainerProps) => {
  const [prices, setPrices] = useState<Record<string, number>>({});

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  //   useEffect(() => {
  //     const fetchPrices = async () => {
  //       try {
  //         const response = await axios.get(
  //           `https://api.coingecko.com/api/v3/simple/price?ids=${cryptos.join(",")}&vs_currencies=usd`
  //         );
  //         if (response.data) {
  //           const newPrices = Object.fromEntries(
  //             Object.entries(response.data).map(([key, value]: [string, any]) => [
  //               key.toUpperCase(),
  //               value.usd,
  //             ])
  //           );
  //           setPrices(newPrices);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching crypto prices:", error);
  //       }
  //     };

  //     fetchPrices();
  //     const interval = setInterval(fetchPrices, 60000); // Update every minute

  //     return () => clearInterval(interval);
  //   }, [cryptos]);

  return (
    <Flex
      direction="column"
      gap={16}
      alignItems="center"
      width="100%"
      pt="50px"
      ref={ref}
    >
      {Array.from({ length: Math.ceil(cryptos.length / 3) }).map(
        (_, rowIndex) => (
          <Flex key={rowIndex} gap={8} justifyContent="center" width="100%">
            {cryptos
              .slice(rowIndex * 3, (rowIndex + 1) * 3)
              .map((crypto, columnIndex) => (
                <MotionFlex
                  key={crypto}
                  flex={1}
                  direction="column"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 20,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: inView ? (rowIndex * 3 + columnIndex) * 0.2 : 0,
                  }}
                >
                  <CryptoPriceDisplay
                    crypto={crypto as "BTC" | "ETH" | "TON" | "USDT" | "XRP"}
                    price={prices[crypto] || 1000}
                    delay={(rowIndex * 3 + columnIndex) * 0.2}
                  />
                </MotionFlex>
              ))}
          </Flex>
        )
      )}
    </Flex>
  );
};
