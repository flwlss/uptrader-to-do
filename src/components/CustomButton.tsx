import React, { CSSProperties } from "react";

interface ICustomButtonProps {
  onClick?: () => void;
  title: string;
  style?: CSSProperties;
}

const CustomButton: React.FC<ICustomButtonProps> = (props) => {
  return (
    <button
      style={props.style}
      className="customButton"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default CustomButton;
