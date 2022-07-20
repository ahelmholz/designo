import { Flex } from "@chakra-ui/react";
import React from "react";
import MaxWidth from "../../../../components/MaxWidth";
import { VerticalPillar, HorizontalPillar } from "../Pillar";

const Pillars = () => {
  return (
    <>
      <MaxWidth>
        <Flex
          flexDir="column"
          display={{ base: "none", md: "flex", lg: "none" }}
        >
          <HorizontalPillar
            imageUrl="/passionate.svg"
            title="PASSIONATE"
            body="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
          />
          <HorizontalPillar
            imageUrl="/resourcefull.svg"
            title="RESOURCEFUL"
            body="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
          />
          <HorizontalPillar
            imageUrl="/friendly.svg"
            title="FRIENDLY"
            body=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
          />
        </Flex>
      </MaxWidth>
      <MaxWidth>
        <Flex
          display={{ base: "flex", md: "none", lg: "flex" }}
          flexDir={{ base: "column", lg: "row" }}
          justifyContent={{ lg: "space-between" }}
          mt={{ lg: "160px" }}
        >
          <VerticalPillar
            imageUrl="/passionate.svg"
            title="PASSIONATE"
            body="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
          />
          <VerticalPillar
            imageUrl="/resourcefull.svg"
            title="RESOURCEFUL"
            body="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
          />
          <VerticalPillar
            imageUrl="/friendly.svg"
            title="FRIENDLY"
            body=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
          />
        </Flex>
      </MaxWidth>
    </>
  );
};

export default Pillars;
