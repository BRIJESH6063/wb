

const form = document.querySelector('form') ;

form.addEventListener('submit', (event) => {
  event.preventDefault() ;

  const itotalIncome = Number(document.getElementById('income').value) ;
  // console.log(income, typeof income) ;

  const final = document.getElementById('final') ;
  let totalTax = 0 ;

  if(itotalIncome<=1200000) totalTax = 0 ;
  else if(itotalIncome<=1600000) totalTax = (itotalIncome-1200000)*0.15 ;
  else if(itotalIncome<=2000000) totalTax = (itotalIncome-1600000)*0.20 + (400000*0.15) ;
  else if(itotalIncome<=2400000) totalTax = (itotalIncome-1600000)*0.25 + (400000*0.15) + (400000*0.20) ;
  else totalTax = (itotalIncome-2400000)*0.30 + (400000*0.15) + (400000*0.20) + (400000*0.25) ;

  final.textContent = `Total Tax : ${totalTax}` ;
})