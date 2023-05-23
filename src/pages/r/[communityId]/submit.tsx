import React from "react";
import PageContent from "../../../components/Layout/PageContent";
import { Box, Text } from "@chakra-ui/react";
import NewPostForm from "../../../components/Posts/NewPostForm";

const SubmitPostPage: React.FC = () => {
  return (
    <PageContent>
      <>
        <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
          <Text>Create a Post</Text>
        </Box>
        <NewPostForm />
      </>
      <></>
    </PageContent>
  );
};
export default SubmitPostPage;
