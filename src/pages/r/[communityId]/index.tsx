import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../../firebase/clientApp";
import { Community } from "../../../atoms/communitiesAtom";
import safeJsonStringify from "safe-json-stringify";
import CommunityNotFound from "../../../components/Community/NotFound";
import Header from "../../../components/Community/Header";
import PageContent from "../../../components/Layout/PageContent";
import CreatePostLink from "../../../components/Community/CreatePostLink";
type CommunityPageProps = {
  communityData: Community;
};

const CommunityPage: React.FC<CommunityPageProps> = ({ communityData }) => {
  if (!communityData) {
    return <CommunityNotFound />;
  }

  return (
    <>
      <Header communityData={communityData} />
      <PageContent>
        <>
          <CreatePostLink />
        </>
        <>
          <div>RHS</div>
        </>
      </PageContent>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const communtyDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );
    const communityDoc = await getDoc(communtyDocRef);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
            )
          : "",
      },
    };
  } catch (error) {
    console.log("Server Error:" + error);
  }
}

export default CommunityPage;
