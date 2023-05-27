import { useState, useEffect } from "react";
import Select from "./Select";
import Text from "./Text";

const Row = ({ sendChosenYear, yearSelectClass, handleChosenYear }) => {
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
    //i tu context z wartością roku, żeby przekazać ją do rowu? czy dać to do całego table? chyba do całego table
  };

  const chooseServicesArray = (anothervalue) => {
    for (let i = 0; i < offerArr.length; i++) {
      if (offerArr[i][0] === value) {
        setChosenArray(offerArr[i][1]);
        const servicesNames = chosenArray.map((item) => {
          return item.name;
        });
        setServices(servicesNames);
        sendChosenYear(value);
      }
    }
  };

  const handleChosenService = (value) => {
    for (let i = 0; i < chosenArray.length; i++) {
      if (chosenArray[i].name === value) {
        setPriceValue(chosenArray[i].price);
      }
    }
  };

  return (
    <tr>
      <td scope="row">
        <Select
          selectClass={yearSelectClass}
          options={years}
          selectedOption="Wybierz rok"
          sendChosenValue={handleChosenYear}
        />
      </td>
      <td>
        <Select
          selectClass={"form-select"}
          options={services}
          selectedOption="Wybierz usługę"
          sendChosenValue={handleChosenService}
        />
      </td>
      <td>
        <Text textValue={`${priceValue} zł`} />
      </td>
    </tr>
  );
};

export default Row;
