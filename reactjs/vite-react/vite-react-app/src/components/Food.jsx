

/*
REACT RECONCILATION 
-------------------------------------------------------------

  foods.map((food) => <li>{food}</li>)

[ "Apple", "Banana", "Grapes" ] <----> [ "Mango", "Apple", "Banana", "Grapes" ] 

Comparison between initial and final array takes place POSITION WISE (first-first second-second and so on...)
Old-first = Apple, New-First = Banana ****--> Change noticed
Similarly Old-Second = Banana, New-Second = Apple ****--> Change noticed
so on ......

It will consider whole ARRAY as changed but in REALITY only one new ITEM is ADDED.
We should not be re-rendering all the array again(since we did not change the entire array)

We need to assign 'KEY' to every ListItem. This will solve the problem.
NOW, Comparison between initial and final array takes place 'KEY wise'

  foods.map((food, index) => <li key={index}>{food}</li>)

here, while comparison with key which is index/position.
Default Behaviour --> key = index

This doesnot solve problem but maintains it. 
Hence, key must be absolute UNIQUE 

  foods.map((food) => <li key={food}>{food}</li>)

*/

function Food({ foods }) {
  let k = 0 ;

  return (
    <>
      <ul>
        {
          foods.map((food) => <li key={food}>{food}</li>)
        }
      </ul>
    </>
  )
}


export default Food ;