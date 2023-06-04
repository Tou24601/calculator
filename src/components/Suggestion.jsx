import Text from "./Text";

const Suggestion = ({suggestedService, suggestedPrice}) => {
    return (
        <div className="container">
            <Text textValue={`Sugerowany produkt: ${suggestedService} w cenie ${suggestedPrice}`} textClass="fs-5 col-12" />
        </div>
    )
}

export default Suggestion