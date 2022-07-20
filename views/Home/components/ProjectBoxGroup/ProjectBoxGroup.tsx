import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import {
  SmallProjectBox,
  LargeProjectBox,
} from "../../../../components/ProjectBox";
import MaxWidth from "../../../../components/MaxWidth";

type Props = {};

const ProjectBoxGroup = (props: Props) => {
  return (
    <MaxWidth>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        mt={{ base: "120px", lg: "160px" }}
        mx={{ base: "24px", md: "0", lg: "24px" }}
      >
        <Box w="50%" display={{ base: "none", lg: "initial" }}>
          <LargeProjectBox
            href="/projects/web-design"
            header="Web Design"
            backgroundImageUrl="/webdesign.png"
          />
        </Box>
        <Box w="30px" display={{ base: "none", lg: "initial" }} />
        <Flex flexDir="column" w={{ base: "100%", lg: "50%" }}>
          <Box display={{ base: "initial", lg: "none" }}>
            <SmallProjectBox
              href="/projects/web-design"
              header="Web Design"
              backgroundImageUrl="/webdesign.png"
            />
            <Box h="24px">&nbsp;</Box>
          </Box>
          <SmallProjectBox
            header="App Design"
            href="/projects/app-design"
            backgroundImageUrl="/appdesign.png"
          />
          <Box h="24px">&nbsp;</Box>
          <SmallProjectBox
            header="Graphic Design"
            href="/projects/graphic-design"
            backgroundImageUrl="/graphicdesign.png"
          />
        </Flex>
      </Flex>
    </MaxWidth>
  );
};

export default ProjectBoxGroup;
