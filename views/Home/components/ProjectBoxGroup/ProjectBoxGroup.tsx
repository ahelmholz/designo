import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import {
  SmallProjectBox,
  LargeProjectBox,
} from "../../../../components/ProjectBox";

type Props = {};

const ProjectBoxGroup = (props: Props) => {
  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      mt={{ base: "120px", lg: "160px" }}
    >
      <Box w="50%" display={{ base: "none", lg: "initial" }}>
        <LargeProjectBox
          href="/projects/webdesign"
          header="Web Design"
          backgroundImageUrl="/webdesign.png"
        />
      </Box>
      <Box w="30px" display={{ base: "none", lg: "initial" }} />
      <Flex flexDir="column" w={{ base: "100%", lg: "50%" }}>
        <Box display={{ base: "initial", lg: "none" }}>
          <SmallProjectBox
            href="/projects/webdesign"
            header="Web Design"
            backgroundImageUrl="/webdesign.png"
          />
          <Box h="24px">&nbsp;</Box>
        </Box>
        <SmallProjectBox
          header="App Design"
          href="/projects/app_design"
          backgroundImageUrl="/appdesign.png"
        />
        <Box h="24px">&nbsp;</Box>
        <SmallProjectBox
          header="Graphic Design"
          href="/projects/graphic_design"
          backgroundImageUrl="/graphicdesign.png"
        />
      </Flex>
    </Flex>
  );
};

export default ProjectBoxGroup;
