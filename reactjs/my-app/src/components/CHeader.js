import React from 'react' ;



class CHeader extends React.Component {
  render() {
    return (
      <>
        <h2>Hello {this.props.name} - {this.props.last}, Class Header component</h2>
        {this.props.children}
      </>
    )
  }
}

export default CHeader ;