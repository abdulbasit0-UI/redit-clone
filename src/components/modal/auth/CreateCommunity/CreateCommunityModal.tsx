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
} from "@chakra-ui/react";
import React, { useState } from "react";

type CreateCommunityModalProps = {
  open: boolean;
  handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  handleClose,
}) => {
  const [communityName, setCommunityName] = useState("");
  const [charsRemaining, setCharsRemaining] = useState(21);
  const [communityType, setCommunityType] = useState("Public");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 21) {
      return;
    }
    setCommunityName(event.target.value);

    setCharsRemaining(21 - event.target.value.length);
  };
  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
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
              <Box>
                <Text fontSize={15} fontWeight={700} mt={4} mb={4}>
                  Community type
                </Text>
                <Stack>
                  <Checkbox>Public</Checkbox>
                  <Checkbox>Restricted</Checkbox>
                  <Checkbox>Private</Checkbox>
                </Stack>
              </Box>
            </ModalBody>
          </Box>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreateCommunityModal;
