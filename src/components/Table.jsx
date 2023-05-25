import { useState, useEffect } from 'react';
import Select from './Select';

const Table = () => {
    const [services, setServices] = useState([])
    const [years, setYears] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/services")
        .then(response => {
            return response.json()
        })
        .then((data) => {
            setServices(data)
        }) 
    }, [])

    useEffect(() => {
        console.log(services)
        setYears(Object.keys(services));
        console.log(years)
    }, [services])

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Rok</th>
          <th scope="col">Usługa</th>
          <th scope="col">Cena</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><Select options={years} /></th>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;