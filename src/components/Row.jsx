import { useState, useEffect, createContext } from "react";
import Select from "./Select";
import YearSelect from './YearSelect';
import ServiceSelect from './ServiceSelect';
import Text from "./Text";

const ChosenAaaData = createContext();

const Row = ({ sendChosenYear, yearSelectClass, handleChosenArray, options, chosenData }) => {


  const [offer, setOffer] = useState([]);
  const [years, setYears] = useState([]);
  //const [chosenArray, setChosenArray] = useState([]);
  //const [services, setServices] = useState([]);
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
        handleChosenArray(offerArr[i][1]);
        /*const servicesNames = chosenArray.map((item) => {
          return item.name;
        });*/
        //setServices(servicesNames);
        sendChosenYear(value);
      }
    }
  };

  

  const handleChosenService = (value) => {
    for (let i = 0; i < chosenData.length; i++) {
      if (chosenData[i].name === value) {
        setPriceValue(chosenData[i].price);
      }
    }
  };

  return (
    <>
      <ChosenAaaData.Provider value={"aa"}>
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
              options={options}
              selectedOption="Wybierz usługę"
              sendChosenValue={handleChosenService}
            />
          </td>
          <td>
            <Text textValue={`${priceValue} zł`} />
          </td>
        </tr>
      </ChosenAaaData.Provider>
    </>
  );
};

export default Row;
export {  ChosenAaaData };