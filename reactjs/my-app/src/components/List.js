import React from "react";
import Testing from "./Testing";

class List extends React.Component {
  // state declaration without constructor method
  state = {

  }
  
  constructor() {
    super() ;
    // state declaration with constructor method
    this.state = {
      users: [
        {id: 121, name: "john", class: "upper"} ,
        {id: 122, name: "victor", class: "lower"} ,
        {id: 123, name: "ravish", class: "lower"} ,
        {id: 124, name: "dinesh", class: "upper"} ,
      ]
    }
  }

  render() {
    const numbers = [121, 232, 321, 782, 210, 110] ; // --> direct access data
    // const numbers = this.props.numbers ; // prop access data


    // const userRow = this.state.users.map((user) => {
    //   return (
    //     <tr><td>{user.id}</td> <td>{user.name}</td> <td>{user.class}</td></tr>
    //   )
    // })




    // const numElements = numbers.map((num) => {
    //   return <li key={num}>{num}</li>
    // }) ;
    // console.log(numElements) ;

    // console.log(this.state.users)

    return (
      <React.Fragment>
        <>
          <p>Number List are as follows -- </p>
          <div className="list">
            {/* <ul>{numElements}</ul> */}
            <ul>
              {
                numbers.map((num) => <li key={num}>{num}</li>)
              }
            </ul>
          </div>
        </>

        <div className="tab">
          <table>
            <thead><tr><th>ID</th><th>Name</th><th>Class</th></tr></thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.id}>       
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.class}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



        <div className="test">
          {
            this.state.users.map((user) => {
              return <Testing key={user.id} value={user.id} />
            })
          }
        </div>
        
      </React.Fragment>
    )
  }
}

export default List ;