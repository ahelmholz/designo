import React from "react";

import { Button, Flex, Input, Text } from "@chakra-ui/react";

const FormText = () => {
  return (
    <Flex flexDir="column" w={{ lg: "60%" }}>
      <Text variant="h1">Contact Us</Text>
      <Text mt={{ base: "24px", md: "32px" }}>
        Ready to take it to the next level? Let’s talk about your project or
        idea and find out how we can help your business grow. If you are looking
        for unique digital experiences that’s relatable to your users, drop us a
        line.
      </Text>
    </Flex>
  );
};

const FormComponent = () => {
  return (
    <Flex
      flexDir="column"
      w={{ lg: "40%" }}
      gap={{ base: "24px" }}
      mt={{ base: "40px" }}
    >
      <Input
        variant="flushed"
        placeholder="Name"
        color="white"
        _placeholder={{ color: "white" }}
        size="lg"
      />
      <Input
        variant="flushed"
        placeholder="Email"
        color="white"
        _placeholder={{ color: "white" }}
        size="lg"
      />
      <Input
        variant="flushed"
        placeholder="Phone"
        color="white"
        _placeholder={{ color: "white" }}
        size="lg"
      />
      <Input
        variant="flushed"
        placeholder="Message"
        color="white"
        _placeholder={{ color: "white" }}
        size="lg"
      />
      <Button variant="light" w="152px" mt="24px" alignSelf="flex-end">
        Submit
      </Button>
    </Flex>
  );
};
const ContactForm = () => {
  return (
    <Flex
      bg="peach.500"
      px={{ base: "52px", md: "56px", lg: "96px" }}
      alignItems={{ lg: "center" }}
      h={{ base: "711px", lg: "480px" }}
      gap={{ lg: "95px" }}
      color="white"
      borderRadius={{ md: "32px" }}
      flexDir={{ base: "column", lg: "row" }}
      justifyContent={{ base: "center" }}
    >
      <FormText />
      <FormComponent />
    </Flex>
  );
};

export default ContactForm;
