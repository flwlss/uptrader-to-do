import React from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import CustomSelect from "../components/CustomSelect";
import Modal from "./Modal";

const CreateTask: React.FC = () => {
  return (
    <Modal
      onSubmit={() => {
        console.log("create task");
      }}
    >
      <>
        <CustomInput value="123" onChange={() => {}} title="Заголовок:" />
        <CustomInput value="321" onChange={() => {}} title="Описание:" />
        <CustomSelect title="Приоритет:" options={["low", "medium", "high"]} />
        <CustomSelect
          title="Текущий статус:"
          options={["queue", "development", "done"]}
        />
      </>
    </Modal>
  );
};

export default CreateTask;
