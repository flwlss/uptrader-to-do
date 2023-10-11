import React from "react";

interface ICustomButtonProps {
  onClick: () => void;
  title: string;
}

const CustomButton: React.FC<ICustomButtonProps> = (props) => {
  return (
    <button className="customButton" onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default CustomButton;
