import { useState, useEffect } from "react";
import {
  Flex,
  Input,
  Text,
  Button,
  Image,
  createListCollection,
} from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { FaExchangeAlt } from "react-icons/fa";

import { useRateContext } from "@/contexts";

import { IconCard } from "../IconCard";

const MotionFlex = motion.create(Flex);

const cryptoCollection = createListCollection({
  items: [
    { label: "USDT", value: "USDT" },
    { label: "BTC", value: "BTC" },
    { label: "ETH", value: "ETH" },
    { label: "XRP", value: "XRP" },
    { label: "TON", value: "TON" },
  ],
});

const zarCollection = createListCollection({
  items: [{ label: "ZAR", value: "ZAR" }],
});

const SelectValueItem = () => (
  <SelectValueText placeholder="USDT">
    {(items: Array<{ label: string }>) => {
      const { label } = items[0];
      return (
        <Flex alignItems="center" gap={2} px={2}>
          <IconCard
            icon={label as "BTC" | "ETH" | "TON" | "USDT" | "XRP"}
            size={7}
            padding={1}
            bgColor="#FFFFFF1A"
          />
          {label}
        </Flex>
      );
    }}
  </SelectValueText>
);

const SelectValueItemZar = () => (
  <SelectValueText placeholder="ZAR" fontSize={{ base: "12px", sm: "16px" }}>
    {(items: Array<{ label: string }>) => {
      const { label } = items[0];
      return (
        <Flex alignItems="center" gap={2} px={2}>
          <Image
            src={`/img/icons/${label.toLowerCase()}.png`}
            alt={label}
            width="28px"
            height="28px"
          />
          {label}
        </Flex>
      );
    }}
  </SelectValueText>
);

export const CryptoConverter = () => {
  const rates = useRateContext();

  const [amount, setAmount] = useState<string>("");
  const [fromCurrency, setFromCurrency] = useState("ZAR");
  const [toCurrency, setToCurrency] = useState("USDT");
  const [convertedAmount, setConvertedAmount] = useState<string>("");
  const [rate, setRate] = useState(0);

  const [fromCollection, setFromCollection] = useState(zarCollection);
  const [toCollection, setToCollection] = useState(cryptoCollection);

  useEffect(() => {
    if (fromCurrency === "ZAR") {
      setRate(rates[toCurrency as keyof typeof rates]);
    } else {
      setRate(rates[fromCurrency as keyof typeof rates]);
    }
  }, [rates]);

  useEffect(() => {
    const currentRate =
      toCurrency === "ZAR"
        ? rates[fromCurrency as keyof typeof rates]
        : rates[toCurrency as keyof typeof rates];

    console.log(rates, fromCurrency, toCurrency, rate, currentRate);
    // Skip if rate is not available
    if (!currentRate) return;

    setRate(currentRate);

    if (!amount || isNaN(Number(amount))) return;

    // Calculate conversion based on direction
    const converted =
      toCurrency === "ZAR"
        ? (Number(amount) * currentRate).toFixed(2)
        : (Number(amount) / currentRate).toFixed(6);

    setConvertedAmount(converted);
  }, [rates, fromCurrency, toCurrency, amount]);

  const handleAmountChange = (value: string) => {
    setAmount(value);
    if (value && !isNaN(Number(value))) {
      const converted = (Number(value) / rate).toFixed(6);
      setConvertedAmount(converted);
    } else {
      setConvertedAmount("");
    }
  };

  const switchCurrencies = () => {
    const tempCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);

    const tempCollection = fromCollection;
    setFromCollection(toCollection);
    setToCollection(tempCollection);

    if (amount && !isNaN(Number(amount))) {
      setAmount(convertedAmount);
      const newConverted = (Number(convertedAmount) * rate).toFixed(2);
      setConvertedAmount(newConverted);
    }
  };

  return (
    <MotionFlex
      direction="column"
      bg="rgba(255, 255, 255, 0.05)"
      backdropFilter="blur(10px)"
      borderRadius="xl"
      maxW={{ base: "100%", md: "300px", lg: "400px", xl: "500px" }}
      p={{ base: 2, sm: 4, md: 6 }}
      gap={4}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Text fontSize="xl" fontWeight="bold" color="cyan.300" textAlign="center">
        Quick Convert
      </Text>
      <Flex direction="column" gap={{ base: 0, md: 2, lg: 4 }} align="center">
        <Flex flex={1} gap={2} justifyContent="space-between">
          <Input
            value={amount}
            type="number"
            onChange={(e) => handleAmountChange(e.target.value)}
            placeholder="From"
            size="lg"
            bg="rgba(255, 255, 255, 0.05)"
            maxW={{ base: "150px", md: "200px" }}
            px={4}
            border="1px solid"
            borderColor="cyan.400"
            borderRadius="xl"
            _hover={{ borderColor: "cyan.300" }}
            _focus={{ borderColor: "cyan.200" }}
          />
          <SelectRoot
            collection={fromCollection}
            onValueChange={(e: any) => setFromCurrency(e.value[0])}
            defaultValue={[fromCurrency]}
            maxW={{ base: "120px", md: "140px" }}
            fontSize={{ base: "12px", sm: "16px" }}
            value={[fromCurrency]}
          >
            <SelectTrigger
              bg="rgba(255, 255, 255, 0.05)"
              borderColor="cyan.400"
              borderRadius="xl"
            >
              {fromCurrency === "ZAR" ? (
                <SelectValueItemZar />
              ) : (
                <SelectValueItem />
              )}
            </SelectTrigger>
            <SelectContent>
              {fromCollection.items.map((item) => (
                <SelectItem
                  item={item}
                  key={item.value}
                  w="100%"
                  fontSize={{ base: "12px", sm: "16px" }}
                >
                  {fromCurrency === "ZAR" ? (
                    <Image
                      src={`/img/icons/${item.value.toLowerCase()}.png`}
                      alt={item.value}
                      width="28px"
                      height="28px"
                    />
                  ) : (
                    <IconCard
                      icon={
                        item.value as "BTC" | "ETH" | "TON" | "USDT" | "XRP"
                      }
                      size={8}
                      padding={2}
                      bgColor="#FFFFFF1A"
                      borderColor="#00000044"
                    />
                  )}
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        </Flex>

        <Flex
          flex={1}
          gap={2}
          w="100%"
          px={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="sm" color="cyan.300">
            At {rate.toFixed(2)} ZAR
          </Text>
          <Button
            aria-label="Switch currencies"
            onClick={switchCurrencies}
            variant="ghost"
            color="cyan.300"
            _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
          >
            <FaExchangeAlt />
          </Button>
        </Flex>

        <Flex flex={1} gap={2}>
          <Input
            value={convertedAmount}
            readOnly
            placeholder="To"
            size="lg"
            maxW={{ base: "150px", md: "200px" }}
            bg="rgba(255, 255, 255, 0.05)"
            border="1px solid"
            borderColor="purple.400"
            px={4}
            borderRadius="xl"
            _hover={{ borderColor: "purple.300" }}
          />
          <SelectRoot
            collection={toCollection}
            onValueChange={(e: any) => setToCurrency(e.value[0])}
            defaultValue={[toCurrency]}
            maxW={{ base: "120px", md: "140px" }}
            fontSize={{ base: "12px", sm: "16px" }}
            value={[toCurrency]}
          >
            <SelectTrigger
              bg="rgba(255, 255, 255, 0.05)"
              borderColor="purple.400"
              borderRadius="xl"
            >
              {toCurrency === "ZAR" ? (
                <SelectValueItemZar />
              ) : (
                <SelectValueItem />
              )}
            </SelectTrigger>
            <SelectContent>
              {toCollection.items.map((item) => (
                <SelectItem
                  item={item}
                  key={item.value}
                  w="100%"
                  fontSize={{ base: "10px", sm: "16px" }}
                  gap={{ base: 1, sm: 2 }}
                >
                  {toCurrency === "ZAR" ? (
                    <Image
                      src={`/img/icons/${item.value.toLowerCase()}.png`}
                      alt={item.value}
                      width="28px"
                      height="28px"
                    />
                  ) : (
                    <IconCard
                      icon={
                        item.value as "BTC" | "ETH" | "TON" | "USDT" | "XRP"
                      }
                      size={8}
                      padding={2}
                      bgColor="#FFFFFF1A"
                      borderColor="#00000044"
                    />
                  )}
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        </Flex>
      </Flex>
    </MotionFlex>
  );
};
