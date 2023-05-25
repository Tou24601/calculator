import { useState, useEffect } from 'react';
import Select from './Select';
import Text from './Text';

const Table = () => {
    const [offer, setOffer] = useState([])
    const [years, setYears] = useState([])
    const [services, setServices] = useState([])
    const [prices, setprices] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/services")
        .then(response => {
            return response.json()
        })
        .then((data) => {
            setOffer(data)
        }) 
    }, [])

    useEffect(() => {
        setYears(Object.keys(offer));
    }, [offer])

    const handleChosenYear = (value) => {
        let offerArr = Object.entries(offer);
        for (let i = 0; i < offerArr.length; i++) {
            if (offerArr[i][0] === value) {
                const servicesNames = offerArr[i][1].map((item) => {
                    return item.name
                })
                setServices(servicesNames)

                const servicesPrices = offerArr[i][1].map((item) => {
                    return item.price
                })

                setprices(servicesPrices)
            } 
        }

    }

    const handleChosenService = (value) => {
        console.log(value)
    }

  return (
    <div className='container'><table className="table">
      <thead>
        <tr>
          <th scope="col">Rok</th>
          <th scope="col">Usługa</th>
          <th scope="col">Cena</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row"><Select options={years} selectedOption="Wybierz rok" sendChosenValue={handleChosenYear} /></td>
          <td><Select options={services} selectedOption="Wybierz usługę" sendChosenValue={handleChosenService} /></td>
          <td><Text textValue="heloł zł" /></td>
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
    </div>
  );
};

export default Table;