import React from "react";
import { Flex } from "@chakra-ui/react";
import Lottie from "lottie-react";

import crypto_animation from "@/animations/crypto_animation.json";

interface BannerAnimProps {
  mode: "dark" | "light";
}

const BannerAnim = ({ mode }: BannerAnimProps) => {
  return (
    <Flex
      className={`absolute flex top-0 left-[50%] -translate-x-1/2 items-center justify-center ${mode}:bg-gray-900`}
    >
      <Lottie
        animationData={crypto_animation}
        loop={true}
        className="w-[400px]"
        autoplay={true}
      />
    </Flex>
  );
};

export default BannerAnim;
