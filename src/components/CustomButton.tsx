import React, { CSSProperties } from "react";

interface ICustomButtonProps {
  onClick?: () => void;
  title: string;
  styles?: CSSProperties;
}

const CustomButton: React.FC<ICustomButtonProps> = (props) => {
  return (
    <button
      style={props.styles}
      className="customButton"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default CustomButton;
