import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import Modal from "./Modal";

const CreateProject: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Modal
      onSubmit={() => {
        console.log("create project");
      }}
    >
      <CustomInput
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        title="Название проекта:"
      />
    </Modal>
  );
};

export default CreateProject;
