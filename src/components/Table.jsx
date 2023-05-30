import { useState, useEffect } from "react";
import Row from "./Row";

const Table = ({sendChosenYear, rows}) => {

  const [chosenData, setChosenData] = useState([]);
  const [services, setServices] = useState([]);

  const handleChosenArray = (value) => {
    setChosenData(value)
    console.log(value)
    console.log(chosenData)
  }

/*  useEffect(() => {
    const servicesNames = chosenData.map((item) => {
      return item.name;
    });
    setServices(servicesNames)
  }, [chosenData])*/

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Rok</th>
            <th scope="col">Usługa</th>
            <th scope="col">Cena</th>
          </tr>
        </thead>
        <tbody>
            <Row sendChosenYear={sendChosenYear} yearSelectClass="form-select" handleChosenArray={handleChosenArray} options={services} chosenData={chosenData} />
            {rows.map((item) => {
               return <Row key={item} yearSelectClass="form-select nonvisible" handleChosenArray={handleChosenArray} options={services} chosenData={chosenData} /> 
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
