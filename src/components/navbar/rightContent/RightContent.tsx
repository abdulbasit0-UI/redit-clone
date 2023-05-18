import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";
import AuthModel from "../../modal/auth/AuthModel";
import { User, signOut } from "firebase/auth";
import { auth } from "../../../firebase/clientApp";
import Icons from "./Icons";

type RightContentProps = {
  user?: User | null | undefined;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModel />
      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButtons />}
      </Flex>
    </>
  );
};
export default RightContent;
