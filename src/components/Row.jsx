import { useState, useEffect } from "react";
import Select from "./Select";
import Text from "./Text";

const Row = () => {
    const [offer, setOffer] = useState([]);
    const [years, setYears] = useState([]);
    const [chosenArray, setChosenArray] = useState([]);
    const [services, setServices] = useState([]);
    const [priceValue, setPriceValue] = useState(0);
  
    useEffect(() => {
      fetch("http://localhost:5000/services")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setOffer(data);
        });
    }, []);
  
    useEffect(() => {
      setYears(Object.keys(offer));
    }, [offer]);
  
    let offerArr = Object.entries(offer);
  
    const handleChosenYear = (value) => {
      for (let i = 0; i < offerArr.length; i++) {
        if (offerArr[i][0] === value) {
            setChosenArray(offerArr[i][1]);
          const servicesNames = chosenArray.map((item) => {
            return item.name;
          });
          setServices(servicesNames);
        }
      }
    };
  
    const handleChosenService = (value) => {
      for (let i = 0; i < chosenArray.length; i++) {
          if (chosenArray[i].name === value) {
            setPriceValue(chosenArray[i].price)
          }
    }};

    return (
        <tr>
        <td scope="row">
          <Select
            options={years}
            selectedOption="Wybierz rok"
            sendChosenValue={handleChosenYear}
          />
        </td>
        <td>
          <Select
            options={services}
            selectedOption="Wybierz usługę"
            sendChosenValue={handleChosenService}
          />
        </td>
        <td>
          <Text textValue={`${priceValue} zł`} />
        </td>
      </tr>

    )
}

export default Row;