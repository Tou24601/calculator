import Select from "../components/Select";
import {ChosenAaaData} from "../components/Row";

const ServiceSelect = ({sendChosenValue, options}) => {

    console.log(ChosenAaaData)
  return (
    <>
      <Select
         selectClass={"form-select"}
              options={options}
              selectedOption="Wybierz usługę"
              sendChosenValue={sendChosenValue} />
    </>
  );
};

export default ServiceSelect;
