import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  name: string;
  imageUrl: string;
  href: string;
}

const LocationIcon: React.FC<Props> = ({ name, imageUrl, href }) => {
  const router = useRouter();
  return (
    <Flex flexDir="column" alignItems="center">
      <Image src={imageUrl} height="200px" width="200px" />
      <Text variant="h3" textTransform="uppercase" mt="48px" mb="32px">
        {name}
      </Text>
      <Button
        variant="primary"
        textTransform="uppercase"
        onClick={() => {
          router.push(href);
        }}
      >
        See Location
      </Button>
    </Flex>
  );
};

export default LocationIcon;
