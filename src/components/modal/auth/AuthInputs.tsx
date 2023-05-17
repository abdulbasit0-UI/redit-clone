import { Flex } from "@chakra-ui/react";
import React from "react";
import { authModelState } from "../../../atoms/authModal";
import { useRecoilState } from "recoil";
import Login from "./Login";
type AuthInputsProps = {};

const AuthInputs: React.FC<AuthInputsProps> = () => {
  const [modalState, setModalState] = useRecoilState(authModelState);
  return (
    <Flex direction="column" align="center" width="100%" mt={4}>
      {modalState.view === "login" && <Login />}
      {/* {modalState.view === "signup" && <SignUp />} */}
    </Flex>
  );
};
export default AuthInputs;
