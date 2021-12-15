const express = require("express");
const app = express();
const cors = require("cors");
require("./db/db");
app.use(express.json());
app.use(cors());

///////////////////////////////

const signUpRoute = require("./routers/routes/signUpRoute");
const loginRoute  = require("./routers/routes/loginRoute")

 const accountRoute  = require("./routers/routes/accountRoute")
 app.use(accountRoute);

app.use(signUpRoute);
app.use(loginRoute);








//port
const Port = 5000;
app.listen(Port,()=>{
    console.log("server is running");
})
