"use client";

import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";

import { Header } from "@/containers/main/Header";
import { Banner } from "@/containers/main/Banner";
import { AML } from "@/containers/main/AML";

import Loading from "@/components/Loading";

export default function Home() {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) return <Loading mode="dark" />;

  return (
    <Flex
      direction="column"
      minHeight="100vh"
      bgGradient="to-br"
      gradientFrom="#0a1929"
      gradientTo="#1a365d"
    >
      <Header />
      <Banner />
      <AML />
    </Flex>
  );
}
