import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { authModelState } from "../../../atoms/authModal";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../firebase/errors";
type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [modalState, setModelState] = useRecoilState(authModelState);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // update form state
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  //   Firebase Logic
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        placeholder="Email"
        type="email"
        onChange={onChange}
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />
      <Input
        required
        name="password"
        placeholder="Password"
        type="password"
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
        mb={2}
      />
      {error && (
        <Text color="red" textAlign="center" fontSize="10pt">
          {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
        </Text>
      )}
      <Button
        width="100%"
        mt={2}
        mb={2}
        isLoading={loading}
        height="36px"
        type="submit"
      >
        Login
      </Button>
      <Flex justifyContent="center" mb={2}>
        <Text fontSize="9pt" mr={1}>
          Forgot your password?
        </Text>
        <Text
          fontSize="9pt"
          color="blue.500"
          cursor="pointer"
          onClick={() =>
            setModelState((prev) => ({
              ...prev,
              view: "resetPassword",
            }))
          }
        >
          Reset
        </Text>
      </Flex>
      <Flex fontSize="9pt" justify="center">
        <Text mr={1}>New Here?</Text>
        <Text
          onClick={() =>
            setModelState((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
          color="blue.500"
          fontWeight="700"
          cursor="pointer"
        >
          Sign Up
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
