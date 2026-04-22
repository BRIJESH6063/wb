const http = require("http") ;
const url = require("url") ;
const express = require("express") 

const app = express() ;

app.get("/", (req, res) => {
  return res.end("GET REQUEST from HOME PAGE") ;
}) ;

app.get("/about", (req, res) => {
  const name = req.query.myname ;
  return res.end("GET REQUEST from ABOUT PAGE  : "+name ) ;
})





const myServer = http.createServer(app) ;
myServer.listen(8000, ()=> {
  console.log("Server started successfuly!...") ;
})







































































/*


const server = http.createServer((req, res) => {
  // console.log("New request recieved") ;
  // console.log(req) ;
  // res.end("Hello From Server..") ;
  // console.log(req.url) ;

  const myUrl = url.parse(req.url, true) ;
  console.log(myUrl.query) ;

  // console.log(myUrl.pathname) ;
  switch(myUrl.pathname) {
    case "/" :
      res.end("HOME PAGE") ;
      break 
    case "/about" :
      const userName = myUrl.query.myname ;
      const id = myUrl.query.id ;
      console.log(userName) ;
      res.end("About Page: "+userName+" id: "+id) ;
      break ;
    case "/signup" :
      if(req.method=="GET") res.end("This is signup Page!")
      else if(req.method="POST") {
        // DB query!
        res.end("Success!!..") ;
      }
      break ;
    default :
      res.end("Error 404: Page not found") ;
  }



  
}) ;

const port = 3000 ;
server.listen(port, ()=> {
  console.log("Server started successfully!..") ;
}) ;





-----------

switch(req.url) {
  case "/" :
    res.end("Home Page") ;
    break ;
  case "/about" :
    res.end("About Page") ;
    break ;
}

-------------------------






Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: [Object: null prototype] {},
  pathname: '/favicon.ico',
  path: '/favicon.ico',
  href: '/favicon.ico'
}





*/