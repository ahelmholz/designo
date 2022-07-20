import { Box, Flex, FlexProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props extends FlexProps {}

const MaxWidth: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Flex w="100%" justifyContent="center" {...rest}>
      <Box maxW={{ base: "100%", md: "690px", lg: "1200px" }} w="100%">
        {children}
      </Box>
    </Flex>
  );
};

export default MaxWidth;
