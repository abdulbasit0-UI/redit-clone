import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Divider,
  Text,
  Input,
  Stack,
  Checkbox,
  Flex,
  Icon,
} from "@chakra-ui/react";
import {
  doc,
  getDoc,
  runTransaction,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import {
  BsEyeFill,
  BsFillEyeFill,
  BsFillPersonFill,
  BsPersonFill,
} from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { auth, firestore } from "../../../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";

type CreateCommunityModalProps = {
  open: boolean;
  handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  handleClose,
}) => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [communityName, setCommunityName] = useState("");
  const [charsRemaining, setCharsRemaining] = useState(21);
  const [communityType, setCommunityType] = useState("public");
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 21) {
      return;
    }
    setCommunityName(event.target.value);

    setCharsRemaining(21 - event.target.value.length);
  };

  const onCommunityTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCommunityType(event.target.name);
  };

  const handleCreateCommunity = async () => {
    // Validate the Community Name
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(communityName) || communityName.length < 3) {
      throw new Error(
        "Community Names must be at least 3 characters and can only contain letters, numbers or underscores"
      );
    }

    setLoading(true);

    try {
      const communityDocRef = doc(firestore, "communities", communityName);

      await runTransaction(firestore, async (transaction) => {
        const communityDoc = await transaction.get(communityDocRef);
        if (communityDoc.exists()) {
          throw new Error("Name already exists");
        }
        transaction.set(communityDocRef, {
          creatorID: user?.uid,
          createdAt: serverTimestamp(),
          numberOfMembers: 1,
          privacy: communityType,
        });

        transaction.set(
          doc(firestore, `users/${user?.uid}/communitySnippets`, communityName),
          {
            communityId: communityName,
            isModertor: true, 
          }
        );
      });
    } catch (error: any) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <>
      <Modal isOpen={open} onClose={handleClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display="flex"
            flexDirection="column"
            fontSize={15}
            padding={3}
          >
            Create a Communtity
          </ModalHeader>
          <Box pr={3} pl={3}>
            <Divider />
            <ModalCloseButton />
            <ModalBody display="flex" flexDirection="column">
              <Text fontSize={15} fontWeight={700}>
                Name
              </Text>
              <Text fontSize={11} color="gray.500">
                Community names including capitalization cannot be changed
              </Text>
              <Text
                position="relative"
                color="gray.400"
                top="28px"
                left="10px"
                width="20px"
              >
                r/
              </Text>
              <Input
                position="relative"
                name="communityName"
                value={communityName}
                size="sm"
                pl="22px"
                onChange={handleChange}
              />

              <Text
                fontSize="9pt"
                color={charsRemaining === 0 ? "red" : "gray.500"}
              >
                {charsRemaining} Characters remaining
              </Text>
              <Text fontSize="9pt" color="red" pt={1}>
                {error}
              </Text>
              <Box>
                <Text fontSize={15} fontWeight={700} mt={4} mb={4}>
                  Community type
                </Text>
                <Stack>
                  <Checkbox
                    onChange={onCommunityTypeChange}
                    name="public"
                    isChecked={communityType === "public"}
                  >
                    <Flex align="center">
                      <Icon as={BsFillPersonFill} color="gray.500" mr="2" />
                      <Text fontSize="10pt" mr={1}>
                        Public
                      </Text>
                      <Text fontSize="8pt" color="gray.400">
                        Anyone can view, post, and comment to this community
                      </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    onChange={onCommunityTypeChange}
                    name="restricted"
                    isChecked={communityType === "restricted"}
                  >
                    <Flex align="center">
                      <Icon as={BsFillEyeFill} color="gray.500" mr="2" />
                      <Text fontSize="10pt" mr={1}>
                        Restricted
                      </Text>
                      <Text fontSize="8pt" color="gray.400">
                        Anyone can view this community, but only approved users
                        can post
                      </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    onChange={onCommunityTypeChange}
                    isChecked={communityType === "private"}
                    name="private"
                  >
                    <Flex align="center">
                      <Icon as={HiLockClosed} color="gray.500" mr="2" />
                      <Text fontSize="10pt" mr={1}>
                        Private
                      </Text>
                      <Text fontSize="8pt" color="gray.400">
                        Only approved users can view and submit to this
                        community
                      </Text>
                    </Flex>
                  </Checkbox>
                </Stack>
              </Box>
            </ModalBody>
          </Box>
          <ModalFooter bg="gray.100" borderRadius="0px 0px 10px 10px">
            <Button
              variant="outline"
              colorScheme="blue"
              height="30px"
              mr={3}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              height="30px"
              isLoading={loading}
              onClick={handleCreateCommunity}
            >
              Create Community
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreateCommunityModal;
