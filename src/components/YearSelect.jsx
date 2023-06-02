import { useState, useEffect, createContext } from "react";
import Select from "../components/Select";

const YearSelect = ({sendChosenValue, selectClass, options, selectedOption}) => {
    /*const [chosenYear, setChosenYear] = useState()
  const handleYearChange = (value) => {
    setChosenYear(value)
  }*/
  
    return (
    <>
      <Select sendChosenValue={sendChosenValue} options={options} selectedOption={selectedOption} />
    </>
  );
};

export default YearSelect;
