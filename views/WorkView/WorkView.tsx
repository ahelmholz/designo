import { Flex, Grid, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import MaxWidth from "../../components/MaxWidth";
import { SmallProjectBox } from "../../components/ProjectBox";
import ProjectCard, { Variant } from "../../components/ProjectCard/ProjectCard";
import WorkHeader from "../../components/WorkHeader/WorkHeader";

interface Props {
  workHeader: {
    title: string;
    body: string;
  };
  projects: {
    imageUrl: string;
    title: string;
    body: string;
  }[];
  projectBoxOne: {
    header: string;
    href: string;
    backgroundImageUrl: string;
  };
  projectBoxTwo: {
    header: string;
    href: string;
    backgroundImageUrl: string;
  };
}
const WorkView: React.FC<Props> = ({
  workHeader,
  projects,
  projectBoxOne,
  projectBoxTwo,
}) => {
  const variant: Variant | undefined = useBreakpointValue({
    base: "vertical",
    md: "horizontal",
    lg: "vertical",
  });
  return (
    <>
      <WorkHeader title={workHeader.title} body={workHeader.body} />
      <MaxWidth>
        <Grid
          gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
          px={{ base: "24px" }}
          pt={{ base: "96px" }}
          gridRowGap={{ base: "40px", lg: "32px" }}
          gridColumnGap={{ lg: "30px" }}
        >
          {projects.map((props, i) => (
            <ProjectCard variant={variant || "vertical"} key={i} {...props} />
          ))}
        </Grid>
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          mt={{ base: "96px", md: "120px", lg: "160px" }}
          rowGap="24px"
          columnGap="30px"
        >
          <SmallProjectBox {...projectBoxOne} />
          <SmallProjectBox {...projectBoxTwo} />
        </Flex>
      </MaxWidth>
    </>
  );
};

export default WorkView;
