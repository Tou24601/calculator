const Text = ({textValue, textClass}) => {
    return (
        <div className="col-3 d-flex flex-row justify-content-end">
        <p className={textClass}>{textValue}</p>
        </div>)
}
export default Text;