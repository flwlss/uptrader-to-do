import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import Modal from "./Modal";

interface ICreateProject {
  closeModal: () => void;
}

const CreateProject: React.FC<ICreateProject> = ({ closeModal }) => {
  const [newProject, setNewProject] = useState({
    title: "",
  });

  return (
    <Modal
      closeModal={closeModal}
      onSubmit={() => {
        console.log("my project", newProject);
      }}
    >
      <CustomInput
        onChange={(e) => {
          setNewProject({ title: e.target.value });
        }}
        value={newProject.title}
        title="Название проекта:"
      />
    </Modal>
  );
};

export default CreateProject;
