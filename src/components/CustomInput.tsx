import React, { useState } from "react";

interface ICustomInputProps {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<ICustomInputProps> = (props) => {
  const [error, setError] = useState(false);

  return (
    <>
      <label>{props.title}</label>
      <input
        onInput={() => {
          setError(false);
        }}
        onInvalid={() => {
          setError(true);
        }}
        onChange={props.onChange}
        value={props.value}
        required
        className={error ? "customInput customInputError" : "customInput"}
      />
    </>
  );
};

export default CustomInput;
