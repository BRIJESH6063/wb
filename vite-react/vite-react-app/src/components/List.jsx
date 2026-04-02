import { useState } from "react";

import Food from "./Food";

/*
REACT RECONCILATION 
-------------------------------------------------------------
["Apple", "Banana", "Grapes"] <----> ["Mango", "Apple", "Banana", "Grapes"] 
Comparison 

*/



function List() {

  const [foods, setFoods] = useState(["Apple", "Banana", "Grapes"]) ;

  function handleAddFood() {
    setFoods(["Mango", ...foods]) ;
  }

  return (
    <>
      <div>
        <button onClick={handleAddFood}>Add Fruit</button>
        <Food foods={foods} />
      </div>
    </>
  )
}

export default List ;