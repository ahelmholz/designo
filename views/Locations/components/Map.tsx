import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  mapUrl: {
    base: string;
    md: string;
    lg: string;
  };
};

const Map = (props: Props) => {
  return (
    <Flex
      backgroundImage={props.mapUrl}
      backgroundPosition="center"
      backgroundSize="cover"
      h={{ base: "326px" }}
      w={{ base: "100%", lg: "" }}
    >
      &nbsp;
    </Flex>
  );
};

export default Map;
