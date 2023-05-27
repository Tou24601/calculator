import { useState, useEffect } from "react";
import Table from "./Table";
import Button from "./Button";

const Main = () => {

    const [rows, setRows] = useState([])
    const [counter, setCounter] = useState(0);


    const handleYearChange = (value) => {
        let chosenYear = value;
        return chosenYear;
    }

    const handleAddClick = () => {
        let newRows = [...rows, counter];
        setRows(newRows);
        let newCounter = counter + 1
        setCounter(newCounter)
    }

  return (
    <>
      <Table sendChosenYear={handleYearChange} rows={rows} />
      <Button buttonValue="+ Dodaj usługę" handleClick={handleAddClick} />
    </>
  );
};

export default Main;
