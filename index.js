const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection=require("./config/connection");
const modelInit=require("./models/init")()
const routes=require('./routes');
const cors = require('cors');
const auth=require("./auth")();
const validation=require("./middleware/validateMiddelware");
const fileUpload=require('express-fileupload');

app.use(fileUpload({
    useTempFiles:true
}))
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/uploads",express.static('uploads'));
let router=express.Router()
routes(router,auth,validation);
app.get("/",(req,res)=>{
    res.send({message:"App is working fine :-)"})
})
app.use('/app',router)
const PORT=process.env.PORT||8080
app.listen(PORT,console.log(`server start:#${PORT}`));
