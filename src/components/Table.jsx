import { useState, useEffect } from "react";
import Row from "./Row";
import Button from "./Button";
import Text from "./Text";

const Table = ({
  sendChosenYear,
  sendItem,
  pricesSum,
  itemsList,
  isDekoderFree,
}) => {
  const [offer, setOffer] = useState([]);
  const [offerArr, setOfferArr] = useState([]);
  const [years, setYears] = useState([]);
  const [chosenData, setChosenData] = useState([]);
  const [services, setServices] = useState([]);
  const [chosenList, setChosenList] = useState([]);
  const [serviesNamesList, setServicesNamesList] = useState([]);
  const [sum, setSum] = useState(0);
  const [objectsList, setObjectsList] = useState([]);

  const [rows, setRows] = useState([]);
  const [counter, setCounter] = useState(1);
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
    setOfferArr(Object.entries(offer));
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
    setChosenData(value);
    const servicesNames = value.map((item) => {
      return item.name;
    });
    setServices(servicesNames);
  };

  useEffect(() => {
    const servicesNames = chosenData.map((item) => {
      return item.name;
    });
    setServices(servicesNames);
  }, [chosenData]);

  //dlaczego nie stworzyć tego elementu w row, żeby przy edycji się zmieniał?
  const getObject = (value) => {
    /*for (let x = 0; x < objectsList.length; x++) {
    if (value.id === objectsList[x].id) {
      console.log(objectsList[x])
    }
  }*/
    setObjectsList([...objectsList, value]);

    let prices = objectsList.map((item) => {
      return item.price;
    });
    let priceSum = prices.reduce((acc, num) => {
      return acc + num;
    }, 0);
    let servicesList = objectsList.map((item) => {
      return item.name;
    });
    setSum(priceSum);

    //let newPricesList = [...pricesList, priceValue];
    //setPricesList(newPricesList)
  };

  /*const getPrice = (value) => {
    setPriceValue(value)
   // console.log(value)
   }*/

  const handleAddClick = () => {
    let newRows = [...rows, counter];
    setRows(newRows);
    let newCounter = counter + 1;
    setCounter(newCounter);
  };

  return (
    <div>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Rok</th>
            <th scope="col">Usługa</th>
            <th scope="col">Cena</th>
          </tr>
        </thead>
        <tbody>
          <Row
            key={0}
            sendChosenYear={sendChosenYear}
            yearSelectClass="form-select"
            handleChosenArray={handleChosenArray}
            options={services}
            chosenData={chosenData}
            years={years}
            handleChosenYear={handleChosenYear}
            sendObject={getObject}
            sendItem={sendItem}
          />
          {rows.map((item) => {
            return (
              <Row
                key={item}
                yearSelectClass="form-select col-10 nonvisible"
                handleChosenArray={handleChosenArray}
                options={services}
                chosenData={chosenData}
                years={years}
                handleChosenYear={handleChosenYear}
                sendObject={getObject}
                sendItem={sendItem}
              />
            );
          })}
          <tr className={isDekoderFree ? "" : "nonvisible"}>
            <td></td>
            <td>
              <Text textClass="fs-6 col-12" textValue="+ Dekoder 4K" />
            </td>
            <td>
              <Text textClass="fs-5" textValue="0 zł" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              {" "}
              <Button
                buttonValue="+ Dodaj usługę"
                handleClick={handleAddClick}
                buttonClass="btn btn-primary col-1.5 position-absolute"
              />
            </td>
            <td className="d-flex flex-row">
            <Text
                textClass="fs-5 col-12"
                textValue="Razem: "
              />
              <Text
                textClass="fs-5 col-12"
                textValue={`${pricesSum} zł`}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
