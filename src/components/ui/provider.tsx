"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { RateProvider } from "@/contexts";

export function Provider(props: React.PropsWithChildren) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
        <RateProvider>{props.children}</RateProvider>
      </ColorModeProvider>
    </ChakraProvider>
  );
}
