import { useMemo, useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { TokenIcon } from "../TokenIcon";
import { motion } from "framer-motion";

const MotionText = motion.create(Text);

interface CryptoPriceDisplayProps {
  crypto: "BTC" | "ETH" | "TON" | "USDT" | "XRP";
  price: number;
}

export const CryptoPriceDisplay = ({
  crypto,
  price,
}: CryptoPriceDisplayProps) => {
  const [displayPrice, setDisplayPrice] = useState(0); // Add this state

  useEffect(() => {
    // Animate from 0 to target price
    const duration = 3000; // 1 second animation
    const steps = 60;
    const increment = price / steps;
    let current = price / 3;

    const timer = setInterval(() => {
      current += increment;
      if (current >= price) {
        setDisplayPrice(price);
        clearInterval(timer);
      } else {
        setDisplayPrice(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [price]);

  return (
    <Flex direction="column" alignItems="center">
      <Flex gap={6} alignItems="center">
        <TokenIcon icon={crypto as "BTC" | "ETH" | "TON" | "USDT" | "XRP"} />
        <Flex direction="column">
          <MotionText
            fontSize="36px"
            fontWeight="500"
            color="white"
            // animation={`glow 2s infinite`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            $
            {displayPrice?.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }) || "1000.00"}
          </MotionText>
          <MotionText
            className="font-rubik"
            fontSize="md"
            fontWeight="400"
            color="white"
            textAlign="left"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {crypto}
          </MotionText>
        </Flex>
      </Flex>
    </Flex>
  );
};
