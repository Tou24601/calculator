const Button = ({buttonValue, handleClick, buttonClass}) => {
    return (
      <div className="col-2">
        <button
          type="button"
          className={buttonClass}
          onClick={handleClick}
          //id={buttonId}
        >
          {buttonValue}
        </button>
      </div>
    );
  };
  
  export default Button;