

const form = document.querySelector('form') ;

form.addEventListener('submit', (event) => {

  event.preventDefault() ;

  const boy = document.getElementById('boy') ;
  const girl = document.getElementById('girl') ;

  const n1 = boy.value.length ;
  const n2 = girl.value.length ;

  

  const calc = Math.pow(n1+n2, 3)%101 ;
  // console.log(n1, n2, calc) ;

  const result = document.getElementById('result') ;
  result.textContent = `RESULT : ${calc} %` ;
  
})

