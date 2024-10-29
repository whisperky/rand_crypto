import { useState, useEffect } from "react";
import {
  Flex,
  Input,
  Text,
  Button,
  //   createListCollection,
} from "@chakra-ui/react";
// import {
//   SelectContent,
//   SelectItem,
//   SelectRoot,
//   SelectTrigger,
//   SelectValueText,
// } from "@/components/ui/select";
import { motion } from "framer-motion";
import axios from "axios";
import { FaExchangeAlt } from "react-icons/fa";

const MotionFlex = motion.create(Flex);

// const collection = createListCollection({
//   items: [
//     { label: "ZAR", value: "ZAR" },
//     { label: "USD", value: "USD" },
//   ],
// });

export const CryptoConverter = () => {
  const [amount, setAmount] = useState<string>("");
  const [fromCurrency, setFromCurrency] = useState("ZAR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState<string>("");
  const [rate, setRate] = useState(0);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await axios.get("/api/get-exchange-rate");
        setRate((response.data.rate * 103) / 100);
      } catch (error) {
        console.error("Error fetching rate:", error);
        // Fallback to a default rate if API fails
        setRate(0.053);
      }
    };

    fetchRate();
  }, [fromCurrency, toCurrency]);

  const handleAmountChange = (value: string) => {
    setAmount(value);
    if (value && !isNaN(Number(value))) {
      const converted = (Number(value) * rate).toFixed(2);
      setConvertedAmount(converted);
    } else {
      setConvertedAmount("");
    }
  };

  const switchCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <MotionFlex
      direction="column"
      bg="rgba(255, 255, 255, 0.05)"
      backdropFilter="blur(10px)"
      borderRadius="xl"
      maxW={{ base: "100%", md: "300px", lg: "400px", xl: "500px" }}
      p={6}
      gap={4}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Text fontSize="xl" fontWeight="bold" color="cyan.300" textAlign="center">
        Quick Convert
      </Text>
      <Flex gap={{ base: 0, md: 2, lg: 4 }} align="center">
        <Flex flex={1} direction="column" gap={2}>
          <Input
            value={amount}
            type="number"
            onChange={(e) => handleAmountChange(e.target.value)}
            placeholder={`${fromCurrency}`}
            size="lg"
            bg="rgba(255, 255, 255, 0.05)"
            px={4}
            border="1px solid"
            borderColor="cyan.400"
            borderRadius="xl"
            _hover={{ borderColor: "cyan.300" }}
            _focus={{ borderColor: "cyan.200" }}
          />
          {/* <SelectRoot
            collection={collection}
            value={["ZAR", "USD"]}
            onValueChange={(e: any) => setFromCurrency(e.value)}
          >
            <SelectTrigger
              bg="rgba(255, 255, 255, 0.05)"
              borderColor="cyan.400"
            >
              <SelectValueText />
            </SelectTrigger>
            <SelectContent>
              <SelectItem item={fromCurrency} key="ZAR">
                ZAR
              </SelectItem>
              <SelectItem item={toCurrency} key="USD">
                USD
              </SelectItem>
            </SelectContent>
          </SelectRoot> */}
        </Flex>

        <Button
          aria-label="Switch currencies"
          onClick={switchCurrencies}
          variant="ghost"
          color="cyan.300"
          _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
        >
          <FaExchangeAlt />
        </Button>

        <Flex flex={1} direction="column" gap={2}>
          <Input
            value={convertedAmount}
            readOnly
            placeholder={toCurrency}
            size="lg"
            bg="rgba(255, 255, 255, 0.05)"
            border="1px solid"
            borderColor="purple.400"
            px={4}
            borderRadius="xl"
            _hover={{ borderColor: "purple.300" }}
          />
          {/* <SelectRoot
            collection={collection}
            value={["USD", "ZAR"]}
            onValueChange={(e: any) => setToCurrency(e.value)}
          >
            <SelectTrigger
              bg="rgba(255, 255, 255, 0.05)"
              borderColor="purple.400"
            >
              <SelectValueText />
            </SelectTrigger>
            <SelectContent>
              <SelectItem item={toCurrency} key="USD">
                USD
              </SelectItem>
              <SelectItem item={toCurrency} key="ZAR">
                ZAR
              </SelectItem>
            </SelectContent>
          </SelectRoot> */}
        </Flex>
      </Flex>
    </MotionFlex>
  );
};
