import { useState, useEffect } from "react";
import Table from "./Table";
import Suggestion from "./Suggestion";
import Button from "./Button";
import Text from "./Text";

const Main = () => {
  const [itemsList, setItemsList] = useState([]);
  const [pricesSum, setPricesSum] = useState(0);
  const [suggestedService, setSuggestedService] = useState("");
  const [suggestedPrice, setSuggestedPrice] = useState("");

  const handleYearChange = (value) => {
    let chosenYear = value;
    return chosenYear;
  };

  const getItem = (item) => {
    const newList = [...itemsList, item];
    setItemsList(newList);
  };
/*
  const checkList = () => {
    let checkedList = itemsList.map((element) => {

    })
  }*/

  useEffect(() => {
    const prices = itemsList.map((item) => {
      return item.price;
    });
    const reducedPrices = prices.reduce((acc, num) => {
      return acc + num;
    }, 0);
    setPricesSum(reducedPrices)
   console.log(itemsList)
     /*const checkedList = itemsList.map((el) => {
      for (let i = 0; i < itemsList.length; i++) {
        if (el.name === "internet" && itemsList[i].name === "telewizja") {

        }
      }
     })*/
  }, [itemsList]);


  return (
    <div className="container">
      <Table sendChosenYear={handleYearChange} sendItem={getItem} pricesSum={pricesSum} itemsList={itemsList} />
      <Suggestion suggestedService={suggestedService} suggestedPrice={suggestedPrice} />
    </div>
  );
};

export default Main;
