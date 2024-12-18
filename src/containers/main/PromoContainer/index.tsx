"use client";

import React, { useRef } from "react";
import { Flex } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

import { StatisticDisplay } from "@/components/StatisticDisplay";

import { AD_FEATURES } from "@/data/features";

const MotionFlex = motion.create(Flex);

export const PromoContainer = () => {
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
      pt={{ base: "10px", lg: "50px" }}
      ref={ref}
    >
      {Array.from({ length: Math.ceil(AD_FEATURES.length / 3) }).map(
        (_, rowIndex) => (
          <Flex
            key={rowIndex}
            gap={12}
            justifyContent="center"
            width="100%"
            direction={{ base: "column", lg: "row" }}
          >
            {AD_FEATURES.slice(rowIndex * 3, (rowIndex + 1) * 3).map(
              (feature, columnIndex) => (
                <MotionFlex
                  key={feature.title}
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
                  <StatisticDisplay
                    title={feature.title}
                    content={feature.icon}
                    value={feature.value}
                    unit={feature.unit}
                    delay={(rowIndex * 3 + columnIndex) * 0.2}
                  />
                </MotionFlex>
              )
            )}
          </Flex>
        )
      )}
    </Flex>
  );
};
