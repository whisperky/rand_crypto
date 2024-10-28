import { Flex } from "@chakra-ui/react";
import { BTC, ETH, TON, USDT, XRP } from "../icons";
import { FaUsers, FaGem, FaLock } from "react-icons/fa";
import { IoWaterSharp } from "react-icons/io5";

export const IconCard = ({
  icon = "BTC",
  size = 20,
  padding = 4,
  bgColor = "#FFFFFF1A",
}: {
  icon?: "BTC" | "ETH" | "TON" | "USDT" | "XRP" | "👥" | "💧" | "💎" | "🔒";
  size?: number;
  padding?: number;
  bgColor?: string;
}) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      borderRadius="full"
      bgColor={bgColor}
      p={padding}
      width={size}
      height={size}
    >
      {icon === "BTC" && <BTC />}
      {icon === "ETH" && <ETH />}
      {icon === "TON" && <TON />}
      {icon === "USDT" && <USDT />}
      {icon === "XRP" && <XRP />}
      {icon === "👥" && <FaUsers size={40} />}
      {icon === "💧" && <IoWaterSharp size={40} />}
      {icon === "💎" && <FaGem size={40} />}
      {icon === "🔒" && <FaLock size={40} />}
    </Flex>
  );
};
