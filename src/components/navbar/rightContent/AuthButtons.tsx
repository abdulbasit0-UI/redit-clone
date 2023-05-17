import { Button } from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { authModelState } from "../../../atoms/authModal";

const AuthButtons: React.FC = () => {
  const [modelState, setModelState] = useRecoilState(authModelState);
  return (
    <>
      <Button
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        variant="outline"
        mr={2}
        onClick={() => setModelState({ open: true, view: "login" })}
      >
        Login In
      </Button>
      <Button
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => setModelState({ open: true, view: "signup" })}
      >
        Sign Up
      </Button>
    </>
  );
};
export default AuthButtons;
