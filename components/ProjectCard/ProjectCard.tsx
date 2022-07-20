import React from "react";
import { Flex, FlexProps, Text } from "@chakra-ui/react";

export type Variant = "vertical" | "horizontal";

interface Props extends FlexProps {
  variant: Variant;
  imageUrl: string;
  title: string;
  body: string;
}

const ProjectCard: React.FC<Props> = ({
  imageUrl,
  variant,
  title,
  body,
  ...rest
}) => {
  return (
    <Flex
      backgroundImage={imageUrl}
      h={{ base: "478px" }}
      borderRadius="15px"
      pos="relative"
      {...rest}
    >
      <Flex
        pos="absolute"
        bottom="0"
        right="0"
        bg="#FDF3F0"
        w={variant === "vertical" ? "100%" : "50%"}
        h={variant === "vertical" ? "160px" : "100%"}
        borderBottomRightRadius="15px"
        borderBottomLeftRadius={variant === "vertical" ? "15px" : 0}
        borderTopRightRadius={variant === "vertical" ? 0 : "15px"}
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        gap="16px"
      >
        <Text variant="h3" color="peach.500" textTransform="uppercase">
          {title}
        </Text>
        <Text color="black" maxW={{ base: "70%" }} textAlign="center">
          {body}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
