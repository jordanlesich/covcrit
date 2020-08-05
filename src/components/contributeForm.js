import React from "react";
import Select from "../components/select";
import TextBox from "../components/textBox";
import Input from "../components/input";
import FeedbackIcon from "@material-ui/icons/Feedback";

const ContributeForm = () => {
  return (
    <div>
      <form>
        <h3>Contribute!</h3>
        <GroupAddIcon />
        <Select />
        <Select />
        <Input />
        <Input />
        <TextBox cols={25} />
      </form>
    </div>
  );
};

export default ContributeForm;
