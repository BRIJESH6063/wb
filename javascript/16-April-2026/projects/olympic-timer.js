

const showTimer = function() {
  const currentTime = Date.now() ;
  const olympicStartTime = new Date(2028, 6, 14).getTime() ;

  let timer = olympicStartTime-currentTime ;

  const day = Math.floor(timer/(1000*60*60*24)) ;
  timer %= (1000*60*60*24) ;
  const hours = Math.floor(timer/(1000*60*60)) ;
  timer %= (1000*60*60) ;
  const minutes = Math.floor(timer/(1000*60)) ;
  timer %= (1000*60) ;
  const seconds = Math.floor(timer/(1000)) ;
  timer %= (1000) ;

  const final = document.getElementById('final') ;
  final.textContent = `${day} DAYS ${hours} HOURS ${minutes} MINUTES ${seconds} SECONDS` ;
}



setInterval(() => {
  showTimer() ;
}, 1000) ;
