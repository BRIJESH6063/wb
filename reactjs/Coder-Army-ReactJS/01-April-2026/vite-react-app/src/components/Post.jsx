
import React from "react";



const Post = React.memo(({value}) => {

  console.log('Post page rendered') ;

  return (
    <>
      <h3>Hello {value.name} Age {value.age} from Post Page</h3> 
    </>
  )
}) 

export default Post ;