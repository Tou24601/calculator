import { useState, useEffect } from "react";
import Row from "./Row";

const Table = ({sendChosenYear, rows}) => {

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
            <Row sendChosenYear={sendChosenYear} yearSelectClass="form-select" />
            {rows.map((item) => {
               return <Row key={item} yearSelectClass="form-select nonvisible" /> 
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
