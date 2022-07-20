import { Box, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MaxWidth: React.FC<Props> = (props) => {
  return (
    <Flex w="100%" justifyContent="center">
      <Box maxW={{ base: "100%", md: "690px", lg: "1200px" }} w="100%">
        {props.children}
      </Box>
    </Flex>
  );
};

export default MaxWidth;
