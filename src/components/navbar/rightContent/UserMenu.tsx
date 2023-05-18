import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Icon,
  Flex,
  MenuDivider,
  Text,
} from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";
import React from "react";
import { FaRedditSquare } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { MdLogin } from "react-icons/md";
import { auth } from "../../../firebase/clientApp";
import { useRecoilState } from "recoil";
import { authModelState } from "../../../atoms/authModal";
import { IoSparkles } from "react-icons/io5";

type UserMenuProps = {
  user?: User | null | undefined;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const [modalState, setModalState] = useRecoilState(authModelState);
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius="4px"
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex align="center">
          <Flex align="center">
            {user ? (
              <>
                <Icon
                  fontSize={24}
                  mr={1}
                  color="gray.300"
                  as={FaRedditSquare}
                />
                <Flex
                  display={{ base: "none", lg: "flex" }}
                  flexDirection="column"
                  fontSize="8pt"
                  alignItems="flex-start"
                  mr={8}
                >
                  <Text fontWeight={700}>
                    {user?.displayName || user?.email?.split("@")[0]}
                  </Text>
                  <Flex alignItems="center">
                    <Icon as={IoSparkles} color="brand.100" mr={1} />
                    <Text color="gray.400">1 karma</Text>
                  </Flex>
                </Flex>
              </>
            ) : (
              <Icon as={VscAccount} color="gray.400" fontSize={24} mr={1} />
            )}
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        {user ? (
          <>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
            >
              <Flex align="center">
                <Icon as={CgProfile} fontSize={20} mr={2} />
                Profile
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={() => signOut(auth)}
            >
              <Flex align="center">
                <Icon as={MdLogin} fontSize={20} mr={2} />
                Logout
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={() => setModalState({ open: true, view: "login" })}
            >
              <Flex align="center">
                <Icon as={CgProfile} fontSize={20} mr={2} />
                Login / Sign up
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
