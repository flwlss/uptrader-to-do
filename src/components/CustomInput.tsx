import React from "react";

interface ICustomInputProps {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<ICustomInputProps> = (props) => {
  return (
    <>
      <label>{props.title}</label>
      <input
        onChange={props.onChange}
        value={props.value}
        required
        className="customInput"
      />
    </>
  );
};

export default CustomInput;
