import React from "react";
import { Flex } from "@chakra-ui/react";
import MaxWidth from "@components/MaxWidth";

import ContactForm from "./components/ContactForm";
import LocationIcon from "./components/LocationIcon";

const ContactUsView = () => {
  return (
    <MaxWidth>
      <ContactForm />
      <Flex
        mt={{ base: "120px", lg: "160px" }}
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={{ lg: "space-around" }}
        gap={{ base: "48px", md: "80px", lg: 0 }}
      >
        <LocationIcon
          name="Canada"
          imageUrl="/icon_canada.svg"
          href="/locations#canada"
        />
        <LocationIcon
          name="Australia"
          imageUrl="/icon_australia.svg"
          href="/locations#australia"
        />
        <LocationIcon
          name="United Kingdom"
          imageUrl="/icon_united_kingdom.svg"
          href="/locations#uk"
        />
      </Flex>
    </MaxWidth>
  );
};

export default ContactUsView;
