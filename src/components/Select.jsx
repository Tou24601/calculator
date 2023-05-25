import Option from "../components/Option";

const Select = ({ options, selectID, selectLabel }) => {
  console.log(options);
  return (
      <select className="form-select" id={selectID} name="">
        {options.map((item) => {
          return <Option optionValue={item} optionTxt={item} />;
        })}
      </select>
  );
};
export default Select;
