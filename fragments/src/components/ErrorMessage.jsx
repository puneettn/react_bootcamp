const ErrorMessage = (props) => {
  return <> {props.foodItems.length === 0 && <h2>I am still hungry</h2>} </>;
};

export default ErrorMessage;
