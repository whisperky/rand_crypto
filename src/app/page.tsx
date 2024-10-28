"use client";

import { useState, useEffect } from "react";
import { Flex, IconButton } from "@chakra-ui/react";

import { Header } from "@/containers/main/Header";
import { Banner } from "@/containers/main/Banner";
import { AMLContainer } from "@/containers/main/AMLContainer";
import { ComplianceContainer } from "@/containers/main/ComplianceContainer";
import { OurProcessContainer } from "@/containers/main/OurProcessContainer";
import { OtcDeskContainer } from "@/containers/main/OtcDeskContainer";
import { Footer } from "@/containers/main/Footer";

import Loading from "@/components/Loading";
import { FaArrowUp } from "react-icons/fa";

import { motion } from "framer-motion";

const MotionIconButton = motion.create(IconButton);

export default function Home() {
  const [isLoaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
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
      <div id="banner">
        <Banner />
      </div>
      <div id="aml">
        <AMLContainer />
      </div>
      <div id="compliance">
        <ComplianceContainer />
      </div>
      <div id="process">
        <OurProcessContainer />
      </div>
      <div id="otc">
        <OtcDeskContainer />
      </div>
      <div id="terms">
        <Footer />
      </div>

      {scrollY > 100 && (
        <MotionIconButton
          aria-label="Scroll to top"
          position="fixed"
          right="40px"
          bottom="80px"
          p="20px"
          width="60px"
          height="60px"
          borderRadius="full"
          border="1px solid #E0E0E0"
          colorScheme="teal"
          bg="#0D0D2B99"
          color="white"
          onClick={scrollToTop}
          zIndex={999}
          _hover={{
            bg: "#E0E0E099",
            "& > svg": {
              color: "black",
            },
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaArrowUp />
        </MotionIconButton>
      )}
    </Flex>
  );
}
