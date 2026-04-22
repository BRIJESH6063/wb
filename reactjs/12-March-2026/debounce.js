let counter=0 ;
function checkInput() {
  console.log("input recieved --> "+(counter++)) ;
}

function debounce(callback, time) {
  let timer = 0 ;
  return function(...args) {
    if(timer) clearTimeout(timer) ;
    setTimeout(()=> {
      callback() ;
    }, time)
  }
}

const checkInputDebounce = debounce(checkInput, 1000) ;