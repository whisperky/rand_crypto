import { Input } from "@chakra-ui/react";

interface FormInputProps {
  placeholder: string;
  mr?: number;
  px?: number;
  borderBottom?: string;
  fontSize?: string;
}

export const FormInput = ({
  placeholder,
  mr,
  px,
  borderBottom,
  fontSize,
}: FormInputProps) => {
  return (
    <Input
      placeholder={placeholder}
      variant="flushed"
      mr={mr}
      px={px}
      borderBottom={borderBottom}
      fontSize={fontSize}
      _focus={{
        outline: "none",
        borderBottom: "none",
        outlineWidth: "0",
      }}
      _active={{
        outline: "none",
        borderBottom: "none",
        outlineWidth: "0",
      }}
      _placeholder={{ color: "white" }}
    />
  );
};
