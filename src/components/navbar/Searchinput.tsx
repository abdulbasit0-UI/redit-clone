import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  CheckboxIcon,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";

type SearchinputProps = {
  user?: User | null | undefined;
};

const Searchinput: React.FC<SearchinputProps> = ({ user }) => {
  return (
    <Flex flexGrow="1" mr="2" maxWidth={user ? "auto" : "600px"} align="center">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" mb="1" />
        </InputLeftElement>
        <Input
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          placeholder="Search Reddit"
          height="34px"
          bg="gray.50"
        />
      </InputGroup>
    </Flex>
  );
};
export default Searchinput;
