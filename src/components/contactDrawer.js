import React, { useState } from "react";
import styled from "styled-components";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";

import Select from "../components/select";
import TextBox from "../components/textBox";
import Input from "../components/input";
import Button from "../components/button";
import Drawer from "../components/drawer";

import { fadeIn, fadeOut } from "../anims";

const StyledContactDrawer = styled.div`
  form {
    animation: ${props => (props.isFading ? fadeIn : fadeOut)} 0.2s ease-in-out
      both;
  }
`;
const ContactDrawer = ({ toggleDrawer }) => {
  const [formType, setFormType] = useState(null);
  const [isFading, setIsFading] = useState(false);

  const handleTabChange = e => {
    if (formType === null) {
      setIsFading(!isFading);
      setTimeout(setFormType(e.target.value), 200);
    }
    if (formType !== null) {
      setIsFading(!isFading);
      setTimeout(setFormType(e.target.value), 200);
      setTimeout(setIsFading(!isFading), 200);
      setTimeout(setFormType(!isFading), 400);
    }
  };

  const ContributeForm = (
    <form>
      <h3>Contribute!</h3>
      <GroupAddIcon />
      <Select />
      <Select />
      <Input />
      <Input />
      <TextBox cols={25} />
    </form>
  );
  const FeedBackForm = (
    <form>
      <h3>Contribute!</h3>
      <FeedbackIcon />
      <Select />
      <Select />
      <Input />
      <Input />
      <TextBox cols={25} />
    </form>
  );

  return (
    <Drawer toggleDrawer={toggleDrawer}>
      <StyledContactDrawer isFading={isFading}>
        <h1>Test</h1>
        <Button
          value="contribute"
          fn={handleTabChange}
          text="Contribute"
        ></Button>
        <Button value="feedback" fn={handleTabChange} text="Feedback"></Button>
        <Button value="questions" fn={handleTabChange} text="Questions">
          Questions
        </Button>
        <div>
          {formType === "contribute" && ContributeForm}
          {formType === "feedback" && FeedBackForm}
        </div>
      </StyledContactDrawer>
    </Drawer>
  );
};

export default ContactDrawer;
