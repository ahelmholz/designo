import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  phone: string;
  email: string;
  officeName: string;
  locationName: string;
  address: {
    lineOne: string;
    lineTwo: string;
  };
};

const LocationDetails = (props: Props) => {
  return (
    <Flex
      h="326px"
      bg="#FDF3F0"
      borderRadius={{ md: "15px" }}
      px={{ md: "75px", lg: "95px" }}
      flexDir="column"
      justifyContent="center"
    >
      <Text variant="h1" color="peach.500" textAlign={{base:"center", md: "left"}}>
        {props.locationName}
      </Text>
      <Flex flexDir={{base: "column", md: "row"}} pt={{base: "24px"}} justifyContent={{ md: "flex-start"}} alignItems={{base: "center"}}>
        <Flex flexDir="column" w={{md: "50%"}}>
          <Text textAlign={{base: "center", md: "left"}}>
            <strong>{props.officeName}</strong>
          </Text>
          <Text textAlign={{base: "center", md: "left"}}>{props.address.lineOne}</Text>
          <Text textAlign={{base: "center", md: "left"}}>{props.address.lineTwo}</Text>
        </Flex>
        <Flex flexDir="column" mt={{base: "24px", md: "0"}}>
          <Text textAlign={{base: "center", md: "left"}}>
            <strong>Contact</strong>
          </Text>
          <Text textAlign={{base: "center", md: "left"}}>P: {props.phone}</Text>
          <Text textAlign={{base: "center", md: "left"}}>M: {props.email}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LocationDetails;
