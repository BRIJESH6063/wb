/* zomato application */

/*

const orderPlacement = function () {
  console.log('Payment is under process!!...') ;
  setTimeout(() => {
    console.log('The payment has been recieved! Your order has been placed!') ;
  }, 3000)
}

const prepareFood = function() {
  console.log('Your food preparation has started!!') ;
  setTimeout(() => {
    console.log('Your food is prepared and it will be picked by delivery agent soon!!..') ;
  }, 3000)
}

orderPlacement() ;
prepareFood() ;
---------------------------   OUTPUT (wrong)   ---------------------------
Payment is under process!!...
Your food preparation has started!!
The payment has been recieved! Your order has been placed!
Your food is prepared and it will be picked by delivery agent soon!!..

=========================   fun(callback)   ==================================
const orderPlacement = function (callback) {
  console.log('Payment is under process!!...') ;
  setTimeout(() => {
    console.log('The payment has been recieved! Your order has been placed!') ;
    callback() ;
  }, 3000)
}

const prepareFood = function() {
  console.log('Your food preparation has started!!') ;
  setTimeout(() => {
    console.log('Your food is prepared and it will be picked by delivery agent soon!!..') ;
  }, 3000)
}

orderPlacement(prepareFood) ;
--------------------------------------------------------------------------
Payment is under process!!...
The payment has been recieved! Your order has been placed!
Your food preparation has started!!
Your food is prepared and it will be picked by delivery agent soon!!..


===========================   fun(fun(fun)) 'WRONG'   ==================================
const orderPlacement = function (callback) {
  console.log('Payment is under process!!...') ;
  setTimeout(() => {
    console.log('The payment has been recieved! Your order has been placed!') ;
    callback() ;
  }, 3000)
}

const prepareFood = function(callback) {
  console.log('Your food preparation has started!!') ;
  setTimeout(() => {
    console.log('Your food is prepared and it will be picked by delivery agent soon!!..') ;
    callback() ;
  }, 3000)
}

const pickupOrder = function () {
  console.log('Your food will be picked soon!!') ;
  setTimeout(() => {
    console.log('Your food is picked by delivery agent DINESH and will be delivered shortly!!') ;
  }, 3000)
}

orderPlacement(prepareFood(pickupOrder)) ;
---->>> program crashed!!

====================================      ========================================
const orderPlacement = function (callback) {
  console.log('Payment is under process!!...') ;
  setTimeout(() => {
    console.log('The payment has been recieved! Your order has been placed!') ;
    callback() ;
  }, 3000)
}

const prepareFood = function(callback) {
  console.log('Your food preparation has started!!') ;
  setTimeout(() => {
    console.log('Your food is prepared!!..') ;
    callback() ;
  }, 3000)
}

const pickupOrder = function () {
  console.log('Your food will be picked by delivery agent soon!!') ;
  setTimeout(() => {
    console.log('Your food is picked by delivery agent DINESH and will be delivered shortly!!') ;
  }, 3000)
}

orderPlacement(() => {
  prepareFood(() => {
    pickupOrder() ;
  })
}) ;

-------------------------------- output ------------------------------------
Payment is under process!!...
The payment has been recieved! Your order has been placed!
Your food preparation has started!!
Your food is prepared!!..
Your food will be picked soon!!
Your food is picked by delivery agent DINESH and will be delivered shortly!!


======================================================================================
const orderPlacement = function (callback) {
  console.log('Payment is under process!!...') ;
  setTimeout(() => {
    console.log('The payment has been recieved! Your order has been placed!') ;
    callback() ;
  }, 3000)
}

const prepareFood = function(callback) {
  console.log('Your food preparation has started!!') ;
  setTimeout(() => {
    console.log('Your food is prepared!!..') ;
    callback() ;
  }, 3000)
}

const pickupOrder = function (callback) {
  console.log('Your food will be picked by delivery agent soon!!') ;
  setTimeout(() => {
    console.log('Your food has been picked') ;
    callback() ;
  }, 3000)
}

const deliverOrder = function() {
  console.log('Your order will be delivered soon by delvery agent DINESH') ;
  setTimeout(() => {
    console.log('Your order is delivered successfully!!, ENJOY YOUR MEAL') ;
  }, 3000)
}

orderPlacement(() => {
  prepareFood(() => {
    pickupOrder(() => {
      deliverOrder() ;
    }) ;
  })
}) ;

----------------------------------------------------------------------------
Payment is under process!!...
The payment has been recieved! Your order has been placed!
Your food preparation has started!!
Your food is prepared!!..
Your food will be picked by delivery agent soon!!
Your food has been picked
Your order will be delivered soon by delvery agent DINESH
Your order is delivered successfully!!, ENJOY YOUR MEAL


=========================   Callback Hell (code readability + debugging HELL) ================================
const orderDetails = {
  orderId : 21312312,
  food: ['Pizza', 'Biryani', 'Coke'] ,
  cost: 453,
  customer_name: 'dinesh',
  customer_location: 'dwarkaa delhi',
  resturant_location: 'Thiruvananthampuram'
}


const orderPlacement = function (orderDetails, callback) {
  console.log(`Payment of ${orderDetails.cost} is under process!!...`) ;
  setTimeout(() => {
    console.log('The payment has been recieved! Your order has been placed!') ;
    orderDetails.payment_status = true ;
    callback(orderDetails) ;
  }, 3000)
}

const prepareFood = function(orderDetails, callback) {
  console.log(`Your foods ${orderDetails.food} preparation has started!!`) ;
  setTimeout(() => {
    console.log('Your food is prepared!!..') ;
    orderDetails.token = 111211 ;
    callback(orderDetails) ;
  }, 3000)
}

const pickupOrder = function (orderDetails, callback) {
  console.log( `Your food will be picked by delivery agent soon from ${orderDetails.resturant_location}`) ;
  setTimeout(() => {
    console.log('Your food has been picked') ;
    orderDetails.pickup = true ;
    callback(orderDetails) ;
  }, 3000)
}

const deliverOrder = function(orderDetails) {
  console.log(`Your order will be delivered soon by delvery agent DINESH on ${orderDetails.customer_location}`) ;
  setTimeout(() => {
    console.log('Your order has been delivered successfully!!, ENJOY YOUR MEAL') ;
    orderDetails.delivered = true ;
  }, 3000)
}

orderPlacement(orderDetails, (orderDetails) => {
  prepareFood(orderDetails, (orderDetails) => {
    pickupOrder(orderDetails, (orderDetails) => {
      deliverOrder(orderDetails) ;
    }) ;
  })
}) ;

--------------------------------  OUTPUT  ------------------------------------------
Payment of 453 is under process!!...
The payment has been recieved! Your order has been placed!
Your foods Pizza,Biryani,Coke preparation has started!!
Your food is prepared!!..
Your food will be picked by delivery agent soon from Thiruvananthampuram
Your food has been picked
Your order will be delivered soon by delvery agent DINESH on dwarkaa delhi
Your order has been delivered successfully!!, ENJOY YOUR MEAL

*/

const orderDetails = {
  orderId : 21312312,
  food: ['Pizza', 'Biryani', 'Coke'] ,
  cost: 453,
  customer_name: 'dinesh',
  customer_location: 'dwarkaa delhi',
  resturant_location: 'Thiruvananthampuram'
}


const orderPlacement = function (orderDetails, callback) {
  console.log(`Payment of ${orderDetails.cost} is under process!!...`) ;
  setTimeout(() => {
    console.log('The payment has been recieved! Your order has been placed!') ;
    orderDetails.payment_status = true ;
    callback(orderDetails) ;
  }, 3000)
}

const prepareFood = function(orderDetails, callback) {
  console.log(`Your foods ${orderDetails.food} preparation has started!!`) ;
  setTimeout(() => {
    console.log('Your food is prepared!!..') ;
    orderDetails.token = 111211 ;
    callback(orderDetails) ;
  }, 3000)
}

const pickupOrder = function (orderDetails, callback) {
  console.log( `Your food will be picked by delivery agent soon from ${orderDetails.resturant_location}`) ;
  setTimeout(() => {
    console.log('Your food has been picked') ;
    orderDetails.pickup = true ;
    callback(orderDetails) ;
  }, 3000)
}

const deliverOrder = function(orderDetails) {
  console.log(`Your order will be delivered soon by delvery agent DINESH on ${orderDetails.customer_location}`) ;
  setTimeout(() => {
    console.log('Your order has been delivered successfully!!, ENJOY YOUR MEAL') ;
    orderDetails.delivered = true ;
  }, 3000)
}

orderPlacement(orderDetails, (orderDetails) => {
  prepareFood(orderDetails, (orderDetails) => {
    pickupOrder(orderDetails, (orderDetails) => {
      deliverOrder(orderDetails) ;
    }) ;
  })
}) ;






 