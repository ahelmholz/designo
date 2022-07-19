import React from "react";

import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const Hero = () => {
  return (
    <Flex
      w={{ base: "calc(100% + 48px)", md: "100%" }}
      ml={{ base: "-24px", md: "0" }}
      flexDir={{ base: "column", lg: "row" }}
      alignItems={{ md: "center", lg: "flex-end" }}
      bg="peach.500"
      borderRadius={{ md: "15px" }}
      color="white"
      px={{ md: "60px", lg: "90px" }}
      h={{ md: "843px", lg: "640px" }}
      overflow="hidden"
    >
      <Flex
        flexDir="column"
        h="100%"
        justifyContent="center"
        alignItems={{ base: "center", lg: "flex-start" }}
        w={{ lg: "56%" }}
      >
        <Text
          variant="h1"
          textAlign={{ base: "center", lg: "left" }}
          pt={{ base: "80px", md: "60px", lg: "0" }}
        >
          Award-winning custom designs and digital branding solutions
        </Text>
        <Text
          variant="h3"
          textAlign={{ base: "center", lg: "left" }}
          py={{ base: "24px", md: "20px", lg: "40px" }}
        >
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </Text>
        <Button variant="light" w="152px">
          Learn More
        </Button>
      </Flex>
      {/* Tablet */}
      <Flex
        w="100%"
        justifyContent="center"
        display={{ base: "flex", lg: "none" }}
      >
        <Image src="/iphone.png" height="542px" width="500px" />
      </Flex>
      {/* Desktop */}
      <Flex
        w="44%"
        justifyContent="flex-end"
        display={{ base: "none", lg: "flex" }}
      >
        <Image src="/iphone.png" height="542px" width="400px" />
      </Flex>
    </Flex>
  );
};

export default Hero;
