import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { BsArrowRightCircle, BsChatDots } from "react-icons/bs";
type IconsProps = {};
import { GrAdd } from "react-icons/gr";

import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from "react-icons/io5";

const Icons: React.FC<IconsProps> = () => {
  return (
    <Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        align="center"
        borderRight="1px solid"
        borderColor="gray.200"
      >
        <Flex>
          <Icon
            ml={1.5}
            mr={1.5}
            borderRadius={4}
            padding={1}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
            as={BsArrowRightCircle}
            fontSize={20}
          />
        </Flex>
        <Flex>
          <Icon
            ml={1.5}
            mr={1.5}
            borderRadius={4}
            padding={1}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
            as={IoFilterCircleOutline}
            fontSize={22}
          />
        </Flex>
        <Flex>
          <Icon
            ml={1.5}
            mr={1.5}
            borderRadius={4}
            padding={1}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
            as={IoVideocamOutline}
            fontSize={22}
          />
        </Flex>
      </Flex>
      <>
        <Flex>
          <Icon
            ml={1.5}
            mr={1.5}
            borderRadius={4}
            padding={1}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
            as={BsChatDots}
            fontSize={22}
          />
        </Flex>
        <Flex>
          <Icon
            ml={1.5}
            mr={1.5}
            borderRadius={4}
            padding={1}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
            as={IoNotificationsOutline}
            fontSize={22}
          />
        </Flex>
        <Flex display={{ base: "none", md: "flex" }}>
          <Icon
            ml={1.5}
            mr={1.5}
            borderRadius={4}
            padding={1}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
            as={GrAdd}
            fontSize={22}
          />
        </Flex>
      </>
    </Flex>
  );
};
export default Icons;
