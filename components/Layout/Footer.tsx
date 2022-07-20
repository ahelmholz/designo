import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  lineOne: string;
  lineTwo: string;
};

const Location = (props: Props) => {
  return (
    <Flex flexDir="column" opacity="0.5" alignItems={{ base: "center" }}>
      <Text fontWeight="500">
        <strong>{props.title}</strong>
      </Text>
      <Text>{props.lineOne}</Text>
      <Text>{props.lineTwo}</Text>
    </Flex>
  );
};

const SocialIcon = (props: { url: string; imageUrl: string }) => {
  return (
    <Link href={props.url}>
      <Image src={props.imageUrl} height="24px" width="24px" />
    </Link>
  );
};

const Footer = () => {
  return (
    <Flex
      as="footer"
      mt={{ base: "120px" }}
      h={{ base: "625px", md: "335px", lg: "320px" }}
      w={{ base: "100%" }}
      bg="black.500"
      color="white"
      flexDir="column"
      py={{ base: "64px", md: "80px", lg: "72px" }}
      px={{ base: "24px" }}
    >
      <Flex
        flexDir={{ base: "column", md: "row" }}
        w="100%"
        justifyContent={{ md: "space-between" }}
        alignItems={{ md: "center" }}
      >
        <Image src="/logoWhite.svg" height="27px" width="202px" />
        <Flex
          display={{ base: "flex", md: "none" }}
          bg="white"
          opacity="0.1"
          h="1px"
          w="100%"
          my={{ base: "32px" }}
        >
          &nbsp;
        </Flex>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justifyContent="center"
          fontSize="14px"
          lineHeight="14px"
          letterSpacing="2px"
          textAlign="center"
          textTransform="uppercase"
          gap="32px"
        >
          <Link href="">Our Company</Link>
          <Link href="">Locations</Link>
          <Link href="">Contact</Link>
        </Flex>
      </Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        bg="white"
        opacity="0.1"
        h="1px"
        w="100%"
        my={{ base: "32px" }}
      >
        &nbsp;
      </Flex>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justifyContent={{ md: "space-between" }}
      >
        <Flex
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: "40px", lg: "120px" }}
          mt={{ base: "40px" }}
        >
          <Location
            title="Designo Central Office"
            lineOne="3886 Wellington Street"
            lineTwo="Toronto, Ontario M9C 3J5"
          />
          <Location
            title="Contact Us (Central Office)"
            lineOne="P : +1 253-863-8967"
            lineTwo="M : contact@designo.co"
          />
        </Flex>
        <Flex
          justifyContent="center"
          gap="16px"
          mt={{ base: "40px" }}
          alignSelf="flex-end"
        >
          <SocialIcon imageUrl="/facebook_icon.svg" url="" />
          <SocialIcon imageUrl="/youtube_icon.svg" url="" />
          <SocialIcon imageUrl="/twitter_icon.svg" url="" />
          <SocialIcon imageUrl="/pinterst_icon.svg" url="" />
          <SocialIcon imageUrl="/instagram_icon.svg" url="" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
