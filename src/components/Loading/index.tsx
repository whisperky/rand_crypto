import React from "react";
import { Flex } from "@chakra-ui/react";
import Lottie from "lottie-react";

import loadingJson from "@/animations/rand_crypto_animation.json";

interface LoadingProps {
  mode: "dark" | "light";
}

const Loading = ({ mode }: LoadingProps) => {
  return (
    <Flex
      className={`fixed inset-0 flex items-center justify-center ${mode}:bg-gray-900 bg-[#1a365d]`}
    >
      <Lottie
        animationData={loadingJson}
        loop={true}
        className="w-72 h-72"
        autoplay={true}
      />
    </Flex>
  );
};

export default Loading;
