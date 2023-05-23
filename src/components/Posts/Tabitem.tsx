import React from "react";
import { tabItem } from "./NewPostForm";
import { Flex, Icon, Text } from "@chakra-ui/react";
type TabitemProps = {
  item: tabItem;
  selected: boolean;
  setSelectedTab: (value: string) => void;
};

const Tabitem: React.FC<TabitemProps> = ({
  item,
  selected,
  setSelectedTab,
}) => {
  return (
    <Flex
      justify="center"
      align="center"
      flexGrow="1"
      p="14px 0"
      cursor="pointer"
      fontWeight={700}
      _hover={{ bg: "gray.50" }}
      color={selected ? "blue.500" : "gray.500"}
      borderWidth={selected ? "0px 1px 2px 0px" : "0px 1px 1px 0"}
      borderBottomColor={selected ? "blue.500" : "gray.200"}
      onClick={() => {
        setSelectedTab(item.title);
      }}
    >
      <Flex align="center" height="20px" mr={2}>
        <Icon as={item.icon} />
      </Flex>
      <Text>{item.title}</Text>
    </Flex>
  );
};
export default Tabitem;
