import { useState } from "react";
import Option from "../components/Option";

const Select = ({
  options,
  selectedOption,
  selectID,
  selectLabel,
  sendChosenValue,
  selectClass
}) => {
  const [chosenValue, setChosenValue] = useState("");

  const handleChange = (value) => {
    setChosenValue(value);
    sendChosenValue(value);
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
