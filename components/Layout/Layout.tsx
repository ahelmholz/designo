import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import Header from "./Header";

interface Props {}

// @ts-ignore
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Flex w="100vw" justify="center">
      <Box
        as="main"
        maxW={{ base: "100%", md: "690px", lg: "1200px" }}
        mx={{ base: "24px" }}
        w="100%"
      >
        <Header />
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
