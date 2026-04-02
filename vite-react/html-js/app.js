

let count = 0 ;


function render() {

  document.getElementById('root').innerHTML = `
    <h3>This is counter for react App</h3>
    <h1>Counter: ${count}</h1>
    <button onClick='increment()'>Increase</button>
    <button onClick='decrement()'>Decrease</button>
  ` ;

}


function increment() {
  count++ ;
  render() ;
}

function decrement() {
  count-- ;
  render() ;
}


render() ;