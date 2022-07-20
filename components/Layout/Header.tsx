import React from "react";

import { Flex, Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import MaxWidth from "../MaxWidth";

const Header = () => {
  const router = useRouter();
  return (
    <MaxWidth>
      <Flex
        as="header"
        justifyContent="space-between"
        alignItems="center"
        my={{ base: "20px", lg: "64px" }}
        px={{ base: "24px" }}
      >
        <Link href="/">
          <Image src="/logo.svg" width="196px" height="24px" />
        </Link>

        <Flex display={{ md: "none" }}>
          <Image src="/hamburger.svg" width="24px" height="24px" />
        </Flex>
        <Flex
          textTransform="uppercase"
          fontSize="14px"
          lineHeight="14px"
          fontFamily="Jost"
          letterSpacing="2px"
          display={{ base: "none", md: "flex" }}
        >
          <Box
            as="span"
            mr={{ md: "42px", lg: "64px" }}
            _hover={{ textDecoration: "underline" }}
            opacity={router.pathname === "/company" ? "0.4" : undefined}
          >
            <Link href="">Our Company</Link>
          </Box>
          <Box
            as="span"
            mr={{ md: "42px", lg: "64px" }}
            _hover={{ textDecoration: "underline" }}
            opacity={router.pathname === "/locations" ? "0.4" : undefined}
          >
            <Link href="">Locations</Link>
          </Box>
          <Box
            as="span"
            _hover={{ textDecoration: "underline" }}
            opacity={router.pathname === "/contact" ? "0.4" : undefined}
          >
            <Link href="">Contact</Link>
          </Box>
        </Flex>
      </Flex>
    </MaxWidth>
  );
};

export default Header;
