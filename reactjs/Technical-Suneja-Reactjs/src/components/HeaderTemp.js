
export const HeaderTemp = (props)=> {
// function Header() {
  // console.log(props) ;
  return (
    <div className="headerTemp">
      <h3>Hello {props.name} - {props.last}, Header component HC</h3>
      {props.children}
    </div>
  )
}

