import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

interface IRates {
  [key: string]: number;
}

const RateContextDefaultValues: IRates = {
  BTC: 0,
  ETH: 0,
  XRP: 0,
  TON: 0,
  USDT: 0,
};

const RateContext = createContext(RateContextDefaultValues);

export const RateProvider = ({ children }: { children: React.ReactNode }) => {
  const [rates, setRates] = useState(RateContextDefaultValues);

  useEffect(() => {
    const fetchPrices = async () => {
      const cryptos = ["BTC", "ETH", "XRP", "TON", "USDT"];
      if (cryptos.length === 0) return;
      for (const crypto of cryptos) {
        const response = await axios.get(`/api/get-price?symbol=${crypto}`);
        const data = response.data;
        setRates((prevRates) => ({
          ...prevRates,
          [crypto]: (data.price * 103) / 100,
        }));
      }
    };

    fetchPrices();
  }, []);

  return <RateContext.Provider value={rates}>{children}</RateContext.Provider>;
};

export const useRateContext = () => {
  return useContext(RateContext);
};
