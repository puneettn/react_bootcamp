import Items from "./Items";

const FoodItems = (props) => {
  return (
    <ul className="list-group">
      {props.foodItems.map((items) => (
        <Items key={items} foodItem={items}></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
