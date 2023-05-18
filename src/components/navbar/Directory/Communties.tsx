import React, { useState } from "react";
import CreateCommunityModal from "../../modal/auth/CreateCommunity/CreateCommunityModal";
import { Flex, Icon, MenuItem } from "@chakra-ui/react";
import { GrAd, GrAdd } from "react-icons/gr";

type CommuntiesProps = {};

const Communties: React.FC<CommuntiesProps> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CreateCommunityModal />
      <MenuItem
        width="100%"
        fontSize="10pt"
        _hover={{ bg: "gray.100" }}
        onClick={() => {}}
      >
        <Flex align="center">
          <Icon fontSize={20} mr={2} as={GrAdd} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};
export default Communties;
