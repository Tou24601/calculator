import { useState, useEffect } from "react";
import Table from "./Table";
import Button from "./Button";
import Text from "./Text";

const Main = () => {

  const handleYearChange = (value) => {
    let chosenYear = value;
    return chosenYear;
  };

  return (
    <div className="container">
      <Table sendChosenYear={handleYearChange} />
    </div>
  );
};

export default Main;
