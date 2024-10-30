import { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { IconCard } from "../IconCard";
import { motion } from "framer-motion";

const MotionText = motion.create(Text);

interface StatisticDisplayProps {
  title?: string;
  content: string;
  value: number;
  unit?: string;
  delay?: number; // Add delay prop
}

export const StatisticDisplay = ({
  title,
  content,
  value,
  unit,
  delay = 0.4,
}: StatisticDisplayProps) => {
  const [displayPrice, setDisplayPrice] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Start animation after the delay
    const timeoutId = setTimeout(() => {
      setShouldAnimate(true);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [delay]);

  useEffect(() => {
    if (!shouldAnimate) return;

    const duration = 3000;
    const steps = 60;
    const increment = Number((value / steps).toFixed(0));
    let current = Number((value / 3).toFixed(0));

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayPrice(value);
        clearInterval(timer);
      } else {
        setDisplayPrice(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, shouldAnimate]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return Math.floor(num / 1000000) + "M";
    } else if (num >= 1000) {
      return Math.floor(num / 1000) + "K";
    }
    return Math.floor(num).toString();
  };

  return (
    <Flex direction="column" alignItems="center">
      <Flex gap={{ base: 12, lg: 6 }} alignItems="center">
        <IconCard icon={content as "👥" | "💧" | "💎"} size={20} />
        <Flex direction="column">
          <MotionText
            fontSize="36px"
            fontWeight="500"
            color="white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {unit}
            {displayPrice ? formatNumber(displayPrice) : "1k"}
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
            {title}
          </MotionText>
        </Flex>
      </Flex>
    </Flex>
  );
};
