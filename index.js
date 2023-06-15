const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require("./config/connection");
const modelInit = require("./models/init")()
const routes = require('./routes');
const cors = require('cors');
const auth = require("./auth")();
const validation = require("./middleware/validateMiddelware");
const fileUpload = require('express-fileupload');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const PORT = process.env.PORT || 8080

const options = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: 'ProblemHub',
            version: '1.0.0',
            description: "About : - Documentation of application FlexFit which is a Fitness class Booking application in which you can hire Top quality Trainers or become a Trainer itself.",
        },
        servers: [{ url: `http://localhost:${PORT}`, }],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                description: 'JWT authorization of an API',
                name: 'Authorization',
                in: 'header',
            },
        },
    },
    apis: ["./swagger/*.js"]
}
const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(fileUpload({
    useTempFiles: true
}))
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/uploads", express.static('uploads'));
let router = express.Router()
routes(router, auth, validation);
app.get("/", (req, res) => {
    res.send({ message: "App is working fine :-)" })
})
app.use('/app', router)
app.listen(PORT, console.log(`server start:#${PORT}`));
