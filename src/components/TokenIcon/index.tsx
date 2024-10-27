import { Flex } from "@chakra-ui/react";
import { BTC, ETH, TON, USDT, XRP } from "../icons";

export const TokenIcon = ({
  color = "#FFFFFF1A",
  icon = "BTC",
}: {
  color?: string;
  icon?: "BTC" | "ETH" | "TON" | "USDT" | "XRP";
}) => {
  return (
    <Flex borderRadius="full" bgColor={color} p={4} width={20} height={20}>
      {icon === "BTC" && <BTC />}
      {icon === "ETH" && <ETH />}
      {icon === "TON" && <TON />}
      {icon === "USDT" && <USDT />}
      {icon === "XRP" && <XRP />}
    </Flex>
  );
};
