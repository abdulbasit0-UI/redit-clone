import { Flex, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiPoll } from "react-icons/bi";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import Tabitem from "./Tabitem";
type NewPostFormProps = {};

const formTabs = [
  {
    title: "Post",
    icon: IoDocumentText,
  },
  {
    title: "Image & Video",
    icon: IoImageOutline,
  },

  {
    title: "Link",
    icon: BsLink45Deg,
  },
  {
    title: "Poll",
    icon: BiPoll,
  },
  {
    title: "Talk",
    icon: BsMic,
  },
];

export type tabItem = {
  title: string;
  icon: typeof Icon.arguments;
};

const NewPostForm: React.FC<NewPostFormProps> = () => {
  const [selectedTabs, setSelectedTabs] = useState(formTabs[0].title);
  return (
    <Flex direction="column" bg="white" borderRadius="4" mt="2">
      <Flex width="100%">
        {formTabs.map((item) => {
          return (
            <>
              <Tabitem
                item={item}
                selected={item.title === selectedTabs}
                setSelectedTab={setSelectedTabs}
              />
            </>
          );
        })}
      </Flex>
    </Flex>
  );
};
export default NewPostForm;
