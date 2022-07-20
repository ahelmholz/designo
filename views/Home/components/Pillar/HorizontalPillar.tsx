import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  imageUrl: string;
  title: string;
  body: string;
};

const HorizontalPillar = (props: Props) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" mt="32px">
      <Image src={props.imageUrl} height="202px" width="202px" />
      <Box w="calc(100% - 220px - 48px)">
        <Text variant="h3" mt={{ base: "40px" }}>
          {props.title}
        </Text>
        <Text w="90%" mt={{ base: "32px" }}>
          {props.body}
        </Text>
      </Box>
    </Flex>
  );
};

export default HorizontalPillar;
