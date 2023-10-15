import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomSelect from "../components/CustomSelect";
import Modal from "./Modal";

interface ICreateTask {
  closeModal: () => void;
  status?: string;
}

const CreateTask: React.FC<ICreateTask> = ({ closeModal, status }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "low",
    status: status,
  });

  return (
    <Modal
      closeModal={closeModal}
      onSubmit={() => {
        console.log("my task", newTask);
      }}
    >
      <>
        <CustomInput
          value={newTask.title}
          onChange={(e) => {
            setNewTask({ ...newTask, title: e.target.value });
          }}
          title="Заголовок:"
        />
        <CustomInput
          value={newTask.description}
          onChange={(e) => {
            setNewTask({ ...newTask, description: e.target.value });
          }}
          title="Описание:"
        />
        <CustomSelect
          value={newTask.priority}
          onChange={(e) => {
            setNewTask({ ...newTask, priority: e.target.value });
          }}
          title="Приоритет:"
          options={["low", "medium", "high"]}
        />
      </>
    </Modal>
  );
};

export default CreateTask;
