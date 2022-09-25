const express = require("express");
const dbConnect = require("./utils/dbConnection");
const app = express();

const usersRouters = require("./routes/v1/users.routes");


dbConnect()
app.use(express.json());

// routes
app.use("/api/v1/user",usersRouters);

app.all("*" , (req,res) =>{
    res.send("No route Found");  
})

app.listen(3000 , ()=> console.log("my app is running"))