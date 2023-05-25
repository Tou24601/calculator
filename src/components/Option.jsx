const Option = ({optionValue, isSelected, optionTxt}) => {
    return (
        <option value={optionValue} selected={isSelected}>{optionTxt}</option>
    )
}

export default Option;