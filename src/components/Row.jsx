import { useState, useEffect } from "react";
import Select from "./Select";
import Text from "./Text";

const Row = () => {
    const [offer, setOffer] = useState([]);
    const [years, setYears] = useState([]);
    const [services, setServices] = useState([]);
    const [prices, setprices] = useState([]);
  
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
          const servicesNames = offerArr[i][1].map((item) => {
            return item.name;
          });
          setServices(servicesNames);
  
          /*const servicesPrices = offerArr[i][1].map((item) => {
            return item.price;
          });
  
          setprices(servicesPrices);*/
        }
      }
    };
  
    const handleChosenService = (value) => {
      console.log(value);
      //do naprawy
      console.log(offerArr[1][1].name);
      for (let i = 0; i < offerArr.length; i++) {
          if (offerArr[i][1].name === value) {
            console.log(offerArr[i][1].price);
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
          <Text textValue="heloł zł" />
        </td>
      </tr>

    )
}

export default Row;