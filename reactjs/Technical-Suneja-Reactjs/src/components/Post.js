import React from "react";


const Post = React.memo(({ value }) => {

  console.log("Post Component rendered!!..") ;

  return (
    <div>
      <h2>Hi, I am {value.name} and my age is {value.age}</h2>
    </div>
  )
})


export default Post ;