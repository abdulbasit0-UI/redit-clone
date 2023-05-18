import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  Icon,
  Flex,
  MenuDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { TiHome } from "react-icons/ti";
import Communties from "./Communties";
const Directory: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius="4px"
        mr={2}
        ml={{ base: 0, md: 1 }}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex
          align="center"
          justify="space-between"
          width={{ base: "auto", md: "200px" }}
        >
          <Flex align="center">
            <Icon fontSize={24} mr={{ base: 1, md: 2 }} as={TiHome} />
            <Flex display={{ base: "none", md: "flex" }}>
              <Text fontWeight={600} fontSize="10pt">
                Home
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <Communties />
      </MenuList>
    </Menu>
  );
};
export default Directory;
