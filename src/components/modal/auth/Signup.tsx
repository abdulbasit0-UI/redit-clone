import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { authModelState } from "../../../atoms/authModal";
import { auth } from "../../../firebase/clientApp";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FIREBASE_ERRORS } from "../../../firebase/errors";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  const [error, setError] = useState("");
  const [modalState, setModelState] = useRecoilState(authModelState);
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // update form state
    setSignupForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) setError("");
    if (signupForm.password !== signupForm.confirmPassword) {
      setError("passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(signupForm.email, signupForm.password);
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
      <Input
        required
        name="confirmPassword"
        placeholder="Confirm Password"
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
      {error ||
        (userError && (
          <Text color="red" textAlign="center" fontSize="10pt">
            {error ||
              FIREBASE_ERRORS[
                userError.message as keyof typeof FIREBASE_ERRORS
              ]}
          </Text>
        ))}
      <Button
        width="100%"
        isLoading={loading}
        mt={2}
        mb={2}
        height="36px"
        type="submit"
      >
        Sign Up
      </Button>
      <Flex fontSize="9pt" justify="center">
        <Text mr={1}>Already a redditor?</Text>
        <Text
          onClick={() =>
            setModelState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
          color="blue.500"
          fontWeight="700"
          cursor="pointer"
        >
          Login
        </Text>
      </Flex>
    </form>
  );
};
export default Signup;
