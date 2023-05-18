import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { authModelState } from "../../../atoms/authModal";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import ResetPassword from "./ResetPassword";

const AuthModel: React.FC = () => {
  const [modalState, setModelState] = useRecoilState(authModelState);
  const [user, loading, error] = useAuthState(auth);
  const handleClose = () => {
    setModelState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  useEffect(() => {
    if (user) handleClose();
  }, [user]);

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {modalState.view === "login" && "Login"}
            {modalState.view === "signup" && "Sign Up"}
            {modalState.view === "resetPassword" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pb={6}
          >
            <Flex
              align="center"
              justify="center"
              width="70%"
              direction="column"
            >
              {modalState.view === "login" || modalState.view === "signup" ? (
                <>
                  <OAuthButtons />
                  <Text color="gray.400" fontWeight="700">
                    OR
                  </Text>
                  <AuthInputs />
                </>
              ) : (
                <ResetPassword />
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModel;
