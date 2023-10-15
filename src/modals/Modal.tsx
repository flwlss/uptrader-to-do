import React from "react";
import CustomButton from "../components/CustomButton";

interface Modal {
  children: JSX.Element;
  onSubmit: () => void;
}

const Modal: React.FC<Modal> = (props) => {
  return (
    <div className="modalBackground">
      <form
        className="modal"
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit();
        }}
      >
        <div className="modal__close" />
        {props.children}
        <CustomButton styles={{ width: 500, marginTop: 20 }} title="Создать" />
      </form>
    </div>
  );
};

export default Modal;
