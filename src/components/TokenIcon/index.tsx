import { Flex } from "@chakra-ui/react";
import { BTC, ETH, TON, USDT, XRP } from "../icons";

export const TokenIcon = ({
  color = "#FFFFFF1A",
  icon = "BTC",
  size = 20,
  padding = 4,
}: {
  color?: string;
  icon?: "BTC" | "ETH" | "TON" | "USDT" | "XRP";
  size?: number;
  padding?: number;
}) => {
  return (
    <Flex
      borderRadius="full"
      bgColor={color}
      p={padding}
      width={size}
      height={size}
    >
      {icon === "BTC" && <BTC />}
      {icon === "ETH" && <ETH />}
      {icon === "TON" && <TON />}
      {icon === "USDT" && <USDT />}
      {icon === "XRP" && <XRP />}
    </Flex>
  );
};
