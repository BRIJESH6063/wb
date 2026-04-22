/*



function greet() {
  return 'Rohit' ;
}
const response = greet() ;
console.log(response) ;
---->>> Rohit

===============   ASYNC function returns 'PROMISE'   =================
====>>> 'async' function returns 'PROMISE'.
async function greet() {
  return 'Rohit' ;
}
const response = greet() ;
console.log(response) ;
---->>> Promise { 'Rohit' }

----------------------------- consume a 'PROMISE' ------------------------------
async function greet() {
  return 'Rohit' ;
}

const promise = greet() ;
promise.then((data) => {
  console.log(data) ;
})
.catch((error) => {
  console.log(error.message) ;
})
.finally(() => {
  console.log('Finally of Promise is handled!!') ;
})

================================   direct promise vs compiler wrapped promise   ================================
async function greet() {
  // return 'Rohit' ;
  // this 'return data' is wrapped into a promise. you can directly return a made up 'Promise'

  return new Promise((resolve, reject) => {
    resolve('Rohit') ;
  })

  // both are equally same and correct, first is wrapped into promise by compiler, second one is directly a 'Promise'
}

const promise = greet() ;
promise.then((data) => {
  console.log(data) ;
})
.catch((error) => {
  console.log(error.message) ;
})
.finally(() => {
  console.log('Finally of Promise is handled!!') ;
})

==================================   MESSED UP code of 'fetching data'   ==================================
fetch('https://api.github.com/users')
.then((response) => response.json())
.then((data) => console.log(data))
.then((data) => console.log(data)) // undefined
.catch((error) => console.log(error)) ;


=============   We want this type of code  =====================
---->>> ''easy and understandable code''
const response = fetch('https://api.github.com/users') ;
const data = response.json() ;
console.log(data) ;
---->>> This does not work (ERROR)


==================    AWAIT fetch('')    =======================
---->>> Program waits till Promise is resolved/rejected
---->>> This blocks the flow of program
const response = await fetch('https://api.github.com/users') ;
const data = await response.json() ;
console.log(data) ;
---->>> waits untill above code is executed
console.log('End of program') ;



==================    ASYNC function()    ==========================
---->>> Never use 'await' without async function, program may freeze
async function githubData() {
  const response = await fetch('https://api.github.com/users') ;
  const data = await response.json() ;
  console.log(data) ;
}

githubData() ;
console.log('End of program') ;

---->>> output
End of program
[ { data... } ]


*/

/*

async function githubData() {

  try {
    const response = await fetch('https://api.github.com/users') ;
    if(!response.ok) {
      throw new Error('Data fetching failed!!') ;
    }
    const users = await response.json() ;

    const parent = document.getElementById('container') ;
    
    for(let user of users) {
      const card = document.createElement('div') ;
      card.classList.add('user') ;

      const image = document.createElement('img') ;
      image.src = user.avatar_url ;

      const userName = document.createElement('h2') ;
      userName.textContent = user.login ;

      const anchor = document.createElement('a') ;
      anchor.href = user.html_url ;
      anchor.textContent = 'visit profile' ;

      card.append(image, userName, anchor) ;
      parent.append(card) ;

    }
  } catch(error) {
    console.log(error) ;
  }
  

}

githubData() ;

*/


/*
const orderDetails = {
  orderId : 21312312,
  food: ['Pizza', 'Biryani', 'Coke'] ,
  cost: 453,
  customer_name: 'dinesh',
  customer_location: 'dwarkaa delhi',
  resturant_location: 'Thiruvananthampuram'
}


const orderPlacement = function (orderDetails) {
  console.log(`Payment of ${orderDetails.cost} is under process!!...`) ;
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The payment has been recieved! Your order has been placed!') ;
      orderDetails.payment_status = true ;
      resolve(orderDetails) ;
    }, 3000)
  })
  return p1 ;
}

const prepareFood = function(orderDetails) {
  console.log(`Your foods ${orderDetails.food} preparation has started!!`) ;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Your food is prepared!!..') ;
      orderDetails.token = 111211 ;
      resolve(orderDetails) ;
    }, 3000)
    
  })
}

const pickupOrder = function (orderDetails) {
  console.log( `Your food will be picked by delivery agent soon from ${orderDetails.resturant_location}`) ;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Your food has been picked') ;
      orderDetails.pickup = true ;
      resolve(orderDetails) ;
    }, 3000)
  })
}

const deliverOrder = function(orderDetails) {
  console.log(`Your order will be delivered soon by delvery agent DINESH on ${orderDetails.customer_location}`) ;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Your order has been delivered successfully!!, ENJOY YOUR MEAL') ;
      orderDetails.delivered = true ;
      resolve(orderDetails) ;
    }, 3000)
  })
}


async function ordering() {
  const response1 = await orderPlacement(orderDetails) ;
  const response2 = await prepareFood(response1) ;
  const response3 = await pickupOrder(response2) ;
  const response4 = await deliverOrder(response3) ;

  console.log('response 4 ',response4) ;
}


ordering() ;

---->>> output
Payment of 453 is under process!!...
The payment has been recieved! Your order has been placed!
Your foods Pizza,Biryani,Coke preparation has started!!
Your food is prepared!!..
Your food will be picked by delivery agent soon from Thiruvananthampuram
Your food has been picked
Your order will be delivered soon by delvery agent DINESH on dwarkaa delhi
Your order has been delivered successfully!!, ENJOY YOUR MEAL
response 4  {
  orderId: 21312312,
  food: [ 'Pizza', 'Biryani', 'Coke' ],
  cost: 453,
  customer_name: 'dinesh',
  customer_location: 'dwarkaa delhi',
  resturant_location: 'Thiruvananthampuram',
  payment_status: true,
  token: 111211,
  pickup: true,
  delivered: true
}

=======================  Parallel fetching ============================
---->>> fetching multiple data (independent of each other) will face delay bcoz of async-await

async function userDetails() {
  const comment = await fetch('comment-server') ;
  const photos = await fetch('photos-server') ;
  const likes = await fetch('likes-server') ;
  const chat = await fetch('chat-server') ;
  
}

---->>> hence, better use this instead





*/


async function userDetails() {
  // const comments = await fetch('comment-server') ;
  // const photos = await fetch('photos-server') ;
  // const likes = await fetch('likes-server') ;
  // const chats = await fetch('chat-server') ;

  // parallel fetching of all data
  const [comments, photos, likes, chats] 
  = await Promise.all([
    fetch('comments-server'),
    fetch('photos-server'),
    fetch('likes-server'),
    fetch('chats-server')
  ]) ;

}













