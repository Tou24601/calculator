import { useState, useEffect, createContext } from "react";
import Select from "./Select";
import Text from "./Text";

const ChosenData = createContext([]);

const Row = ({ sendChosenYear, yearSelectClass }) => {


  const [offer, setOffer] = useState([]);
  const [years, setYears] = useState([]);
  const [chosenArray, setChosenArray] = useState([]);
  const [services, setServices] = useState([]);
  const [priceValue, setPriceValue] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5001/services")
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
        console.log(chosenArray)
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
    <>
      <ChosenData.Provider value={chosenArray}>
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
      </ChosenData.Provider>
    </>
  );
};

export default Row;
export {  ChosenData };