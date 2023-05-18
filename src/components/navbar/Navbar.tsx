import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import Searchinput from "./Searchinput";
import RightContent from "./rightContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Flex bg="white" h="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" height="36px" />
        <Image
          src="/images/redditText.svg"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <Searchinput />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
