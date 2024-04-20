import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  let foodItems = [
    "Apple",
    "Orange",
    "Mongo",
    "Banana",
    "Aare Kuch bhi khaa le bhai fir bhi body nhi bnegi",
    "Ghee",
  ];
  // let foodItems = [];
  return (
    // <React.Fragment> two syntax for this first one is this react.Fragements .. second is preffers one --------> this is preffered <> </>
    <>
      <center>
        <h1>Fragements Example</h1>{" "}
      </center>
      <br />
      <h2>Healthiest food to eat list.</h2>

      <ErrorMessage foodItems={foodItems} />

      <FoodItems foodItems={foodItems} />
    </>
    // </React.Fragment>
  );
}

export default App;
