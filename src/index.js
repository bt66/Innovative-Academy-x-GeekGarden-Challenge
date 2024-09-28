const express = require("express");
const userRouter = require("./router/user.router");
const roomRouter = require("./router/room.router");
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/user', userRouter);
app.use('/room', roomRouter);

app.get("/", (req,res)=> {
  res.send({
    message: "Welcome"
  })
})

app.listen(8000, ()=> {
  console.log("App listen on port 8000");
})