import Reacr from "react";

interface ICustomSelect {
  options: string[];
  title: string;
}

const CustomSelect: React.FC<ICustomSelect> = (props) => {
  return (
    <>
      <label>{props.title}</label>
      <select className="customSelect">
        {props.options.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </>
  );
};

export default CustomSelect;
