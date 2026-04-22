// console.log('DOM.JS file connected to index.html')

document.addEventListener('DOMContentLoaded', () => {
  let getListOfProductsElement = document.querySelector('.list-of-products') ;

  function resderProducts(getProducts) {
    getListOfProductsElement.innerHTML = getProducts.map(
      singleProductItem => `<li>${singleProductItem.title}</li>`
    ).join(' ') ;
  }

  async function fetchListOfProducts() {
    try {
      const apiResponse = await fetch('https://dummyjson.com/products', {
        method: 'GET',
      }) ;
  
      const apiResult = await apiResponse.json() ;
      // console.log(apiResult) ;
  
      if(apiResult?.products?.length>0) resderProducts(apiResult?.products) ;
  
    } catch(e) {
      console.log(e) ;
    }
  }
  
  fetchListOfProducts() ;


}) ;












/*

?. --> operator called optional chaining.
it throws undefined for invalid access instead of throwing error

*/


























