import React, {Component} from 'react' ;




export default class Form extends Component {
  formStyle={
    fontSize: '18px'
  }

  state={
    username: '',
    password: ''
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  handlePassword=(event) => {
    this.setState({
      password: event.target.value
    }) ;
  }

  handleSubmit=(event) => {
    alert(`${this.state.username} ${this.state.password}`) ;
    event.preventDefault() ; // page does not load and dont remove data
  }


  render() {
    return (
      <>
        <br /> <br /> <br />
        <h2>Login Form Component</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form" style={this.formStyle}>
            <div className="username">
              <label>Username</label> 
              <input type="text" value={this.state.username} onChange={this.handleUsername}/>
            </div>
            <div className="password">
              <label>Password</label> 
              <input type="password" value={this.state.password} onChange={this.handlePassword}/>
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
        
      </>
    )
  }
}