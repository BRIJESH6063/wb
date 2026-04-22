

const showTime = function () {
  const div = document.querySelector('div') ;
  const time = new Date().toLocaleTimeString() ;

  div.textContent = time ;
}

setInterval(() => {
  showTime() ;
}, 1000)
