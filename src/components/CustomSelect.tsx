import React from "react";

interface ICustomSelect {
  options: string[];
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: React.FC<ICustomSelect> = (props) => {
  return (
    <>
      <label>{props.title}</label>
      <select onChange={props.onChange} className="customSelect">
        {props.options.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </>
  );
};

export default CustomSelect;
