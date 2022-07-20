import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type Props = {
  imageUrl: string;
  title: string;
  body: string;
};

const VerticalPillar = (props: Props) => {
  return (
    <Flex flexDir="column" alignItems="center" mt={{ base: "80px", md: "0" }}>
      <Image src={props.imageUrl} height="202px" width="202px" />
      <Text variant="h3" mt={{ base: "48px" }}>
        {props.title}
      </Text>
      <Text textAlign="center" w="90%" mt={{ base: "32px" }}>
        {props.body}
      </Text>
    </Flex>
  );
};

export default VerticalPillar;
