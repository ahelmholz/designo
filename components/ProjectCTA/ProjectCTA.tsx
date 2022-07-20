import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

import MaxWidth from "../../components/MaxWidth";
import { useRouter } from "next/router";

const ProjectCTA = () => {
  const router = useRouter();
  return (
    <MaxWidth>
      <Flex
        h={{ base: "380px", md: "350px", lg: "292px" }}
        w={{ base: "calc(100% - 48px)", md: "100%", lg: "calc(100% - 48px)" }}
        ml={{ base: "24px", md: "0", lg: "24px" }}
        pos="relative"
      >
        <Flex
          flexDir={{ base: "column" }}
          alignItems={{ base: "center" }}
          bg="peach.500"
          h={{ base: "380px", md: "350px", lg: "292px" }}
          w="100%"
          pos="absolute"
          bottom={{ base: "-150px" }}
          borderRadius={{ base: "15px" }}
          p={{ base: "64px 24px" }}
          color="white"
          gap={{ base: "24px" }}
        >
          <Text variant="h2" textAlign="center">
            Let’s talk about your project
          </Text>
          <Text textAlign="center" maxW={{ base: "80%" }}>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </Text>
          <Button
            color="black"
            textTransform="uppercase"
            onClick={() => {
              router.push("/contact-us");
            }}
          >
            Get in touch
          </Button>
        </Flex>
      </Flex>
    </MaxWidth>
  );
};

export default ProjectCTA;
