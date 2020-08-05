import React from "react";
import styled from "styled-components";

import TabMenu from "../components/tabMenu";
import WarnCard from "../components/warnCard";
import Drawer from "../components/drawer";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

import { fadeIn, fadeOut } from "../anims";

const StyledContactDrawer = styled.div``;
const ContactDrawer = ({ toggleDrawer }) => {
  return (
    <Drawer toggleDrawer={toggleDrawer}>
      <StyledContactDrawer>
        <TabMenu
          title="What is the purpose of your Message?"
          tabType="buttons"
          changeAnim="fadeTween"
          options={[
            {
              value: "contribute",
              tabText: "Contribute",
              render: (
                <WarnCard
                  title="Contributing to COVCrit"
                  textBlocks={[
                    "COVCritic's purpose is to cut through the noise and deliver valuable information to the public. We do this by putting critical thinking first. Any verdicts assigned to pundits, organizations, and claims will be based off the available data.",
                    "We're looking for volunteers who work hard, strive for objectivity, and can handle rational debate in a calm, collected manner.",
                    "If this sounds reasonable to you, we ask that you read the contributing section before continuing",
                  ]}
                  icon={<GroupAddIcon className="icon" />}
                />
              ),
            },
            {
              value: "feedback",
              tabText: "Feedback",
              render: <WarnCard />,
            },
            {
              value: "subscribe",
              tabText: "Subscribe",
              render: <WarnCard />,
            },
          ]}
        />
      </StyledContactDrawer>
    </Drawer>
  );
};

export default ContactDrawer;
