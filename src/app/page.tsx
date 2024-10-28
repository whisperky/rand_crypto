"use client";

import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";

import { Header } from "@/containers/main/Header";
import { Banner } from "@/containers/main/Banner";
import { AMLContainer } from "@/containers/main/AMLContainer";
import { ComplianceContainer } from "@/containers/main/ComplianceContainer";
import { OurProcessContainer } from "@/containers/main/OurProcessContainer";
import { OtcDeskContainer } from "@/containers/main/OtcDeskContainer";

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
      bgColor="#0D0D2B"
      // bgGradient="to-br"
      // gradientFrom="#0a1929"
      // gradientTo="#1a365d"
    >
      <Header />
      <Banner />
      <AMLContainer />
      <ComplianceContainer />
      <OurProcessContainer />
      <OtcDeskContainer />
    </Flex>
  );
}
