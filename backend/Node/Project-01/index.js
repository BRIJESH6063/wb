const express = require("express") ;
const users = require("./employee.json") ;
const fs = require("fs")
const mongoose = require("mongoose") ;
const { timeStamp } = require("console");

const app = express() ;

// Middleware - plugin
app.use(express.urlencoded({extended: false})) ;
app.use(express.json({extended: false})) ;


mongoose
  .connect("mongodb://127.0.0.1:27017/brijesh-demo-app")
  .then(()=> console.log("MongoDB connected successfully!.."))
  .catch((err) => console.log("MongoDB connection error.. ", err))

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },

}, {timestamps: true}) ;


const User = mongoose.model("users", UserSchema) ;




/*

<h1>JSON FIRST_NAME</h1>


${users.map((user) => {
  return `<li>${user.first_name}</li>`
}).join("")}
*/
app.route("/users")
  .get( async (req, res) => {
    const allDBUsers = await User.find({}) ;
    console.log(allDBUsers) ;
    const html = `
      <ul>
        ${allDBUsers.map((user) => {
          return `<li>${user.first_name} - ${user.email}</li>`
        }).join("")}
        
      </ul>
    ` ;
    return res.send(html) ;
  })


app.route("/api/users")
  .get((req, res) => {
    res.send(users) ;
  })
  .post( async (req, res) => {
    // TODO: create a user
    console.log(req.body) ;
    const body = req.body ;
    if( !body || 
        !body.first_name || 
        !body.last_name || 
        !body.email || 
        !body.gender || 
        !body.job_title )
    res.status(400).send("All fields are required") ;
    // users.push({
    //   id: users.length+1,
    //   ...body
      
    // }) ;
    // fs.writeFile("./employee.json", JSON.stringify(users), () => {
    //   return res.json({status: "User Added Successfully . id: "+(users.length)}) ;
    // })


    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    }) ;

    console.log(result) ;
    res.status(201).json({msg: "success"}) ;
    
  })

app.route("/api/users/:id")
  .get(async (req, res) => {
    // const userId = Number(req.params.id) ;
    // const user = users.find((user) => user.id === userId) ;

    const user = await User.findById(req.params.id) ;
    if(!user) res.status(404).send("Status 404 : Not found Error") ;
    res.send(user) ;
  })
  .patch(async (req, res) => {
    // EDIT the user with id
    // const userId = req.params.id ;

    await User.findByIdAndUpdate(req.params.id, {lastName: "Changed"}) ;
    return res.json({status: "Pending...."})
  })
  .delete(async (req, res) => {
    // DELETE the user with id
    const userId = req.params.id ;

    await User.findByIdAndDelete(req.params.id, {lastName: "Changed"}) ;
    return res.json({status: "Pending...."})
  })
  

app.listen(8000, ()=> console.log("Server running at 8000 sucess!..")) ;





/*

app.get("/users", (req, res)=> {
  const html = `
    <h1>JSON FIRST_NAME</h1>
    <ul>
      ${users.map((user) => {
        return `<li>${user.first_name}</li>`
      }).join("")}
    </ul>
  ` ;
  
  return res.send(html) ;
})

app.get("/api/users", (req, res) => {
  return res.send(users) ;
}) ;


app.get("/api/users/:id", (req, res) => {
  const userId = Number(req.params.id) ;
  const user = users.find((user) => user.id === userId) ;
  res.send(user) ;
})


app.post("/api/users", (req, res) => {
  // TODO: create user
  return res.json({status: "pending"}) ;
}) ;

app.patch("/api/users/:id", (req, res) => {
  // Edit the user with id
  const userId = req.params.id ;

})


app.delete("/api/users/:id", (req, res) => {
  // Delete the user with id
  const userId = req.params.id ;

})

*/




