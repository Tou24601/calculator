import { useState } from "react";
import Option from "../components/Option";
import {ChosenAaaData} from "../components/Row";

const Select = ({
  options,
  selectedOption,
  selectID,
  selectLabel,
  sendChosenValue,
  selectClass
}) => {

  const handleChange = (value) => {
    sendChosenValue(value);
    console.log(value)
  };

  let counter = 0;

  return (
    <div className="col-5">
      <select
        className={selectClass}
        id={selectID}
        name=""
        onChange={(e) => handleChange(e.target.value)}
      >
        <Option optionValue={selectedOption} optionTxt={selectedOption} />
        {options.map((item) => {
            counter++;
            return <Option optionValue={item} optionTxt={item} key={counter} />;
          }
        )}
      </select>
    </div>
  );
};
export default Select;
