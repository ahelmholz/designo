import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import MaxWidth from "../MaxWidth";

type Props = {
  title: string;
  body: string;
};

const WorkHeader = (props: Props) => {
  return (
    <MaxWidth>
      <Flex
        flexDir="column"
        bg="peach.500"
        w={{ base: "100%", lg: "calc(100% - 48px)" }}
        ml={{ lg: "24px" }}
        h={{ base: "320px", md: "250px" }}
        borderRadius={{ md: "15px" }}
        justifyContent="center"
        alignItems="center"
        color="white"
        mt={{ md: "64px" }}
      >
        <Text variant="h1">{props.title}</Text>
        <Text
          mt="24px"
          textAlign="center"
          maxWidth={{ base: "75%", lg: "40%" }}
        >
          {props.body}
        </Text>
      </Flex>
    </MaxWidth>
  );
};

export default WorkHeader;
