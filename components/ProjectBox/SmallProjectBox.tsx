import React from "react";
import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";

type Props = { header: string; href: string; backgroundImageUrl: string };

const SmallProjectBox = (props: Props) => {
  const [hover, setHover] = React.useState(false);
  return (
    <Link href={props.href}>
      <Flex
        h="308px"
        backgroundImage={props.backgroundImageUrl}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        w="100%"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        color="white"
        position="relative"
        borderRadius="15px"
        overflow="hidden"
        cursor="pointer"
      >
        <Flex
          h="100%"
          w="100%"
          bg={hover ? "#E7816BCC" : "black"}
          opacity="0.5"
          _hover={{ bg: "#E7816BCC" }}
          position="absolute"
        />
        <Text
          variant="h2"
          textTransform="uppercase"
          zIndex="1"
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {props.header}
        </Text>
        <Text
          letterSpacing="5px"
          zIndex="1"
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          View Projects
        </Text>
      </Flex>
    </Link>
  );
};

export default SmallProjectBox;
