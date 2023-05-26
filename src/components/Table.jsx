import { useState, useEffect } from "react";
import Row from "./Row";

const Table = () => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Rok</th>
            <th scope="col">Usługa</th>
            <th scope="col">Cena</th>
          </tr>
        </thead>
        <tbody>
            <Row />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
