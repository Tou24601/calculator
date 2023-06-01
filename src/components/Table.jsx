import { useState, useEffect } from "react";
import Row from "./Row";

const Table = ({sendChosenYear, rows}) => {

  const [offer, setOffer] = useState([]);
  const [offerArr, setOfferArr] = useState([]);
  const [years, setYears] = useState([]);
  const [chosenData, setChosenData] = useState([]);
  const [services, setServices] = useState([]);
  const [serviesNamesList, setServicesNamesList] = useState([]);
  const [objectsList, setObjectsList] = useState([]);
  //const [priceValue, setPriceValue] = useState(0);

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
    setOfferArr(Object.entries(offer))
  }, [offer]);

  //do poprawki
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

  

/*  const handleChosenService = (value) => {
    for (let i = 0; i < chosenData.length; i++) {
      if (chosenData[i].name === value) {
        setPriceValue(chosenData[i].price)
        console.log(chosenData[i].price)
      }
    }
  };*/

  const handleChosenArray = (value) => {
    setChosenData(value)
  }

  useEffect(() => {
    const servicesNames = chosenData.map((item) => {
      return item.name;
    });
    setServices(servicesNames)
  }, [chosenData])

  //dlaczego nie stworzyć tego elementu w row, żeby przy edycji się zmieniał?
const getObject = (value) => {
  for (let x = 0; x < objectsList.length; x++) {
    if (value.id === objectsList[x].id) {
      console.log(objectsList[x])
    }
  }

  //let newPricesList = [...pricesList, priceValue];
  //setPricesList(newPricesList)

}
  
   /*const getPrice = (value) => {
    setPriceValue(value)
   // console.log(value)
   }*/

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
            <Row sendChosenYear={sendChosenYear} yearSelectClass="form-select" handleChosenArray={handleChosenArray} options={services} chosenData={chosenData} years={years} handleChosenYear={handleChosenYear} sendObject={getObject} />
            {rows.map((item) => {
               return <Row key={item} yearSelectClass="form-select nonvisible" handleChosenArray={handleChosenArray} options={services} chosenData={chosenData}  years={years} handleChosenYear={handleChosenYear} sendObject={getObject} /> 
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
