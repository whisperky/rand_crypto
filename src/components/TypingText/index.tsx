import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const MotionText = motion.create(Text);

export const TypingText = ({ text = ["Rand Crypto"] }: { text: string[] }) => {
  const [typedText] = useTypewriter({
    words: text,
    loop: 0,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <MotionText
      fontSize={["4xl", "5xl", "6xl"]}
      fontWeight="bold"
      bgGradient="to-r"
      gradientFrom="cyan.400"
      gradientVia="blue.500"
      gradientTo="purple.600"
      bgClip="text"
      // initial={{ opacity: 0, y: -50 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 1 }}
      // textShadow="0 0 20px rgba(0, 255, 255, 0.5)"
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        top: "-2px",
        right: "-2px",
        bottom: "-2px",
        left: "-2px",
        background: "linear-gradient(45deg, cyan.400, blue.500, purple.600)",
        filter: "blur(10px)",
        opacity: 0.7,
        zIndex: -1,
      }}
    >
      {typedText}
      <Cursor cursorStyle="" />
    </MotionText>
  );
};
