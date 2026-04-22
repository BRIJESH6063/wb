

const parent = document.getElementById('parent') ;
parent.addEventListener('click', (event) => {
  console.log(event.target) ;
  const child = event.target ;
  const body = document.querySelector('body') ;
  body.style.backgroundColor = child.id ;
}) ;

