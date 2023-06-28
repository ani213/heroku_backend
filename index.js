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
const { sendMailFromTemplate, templateFromUrl, templateUrl } = require('./common');
const { logger } = require('./logger');
const PORT = process.env.PORT || 8080

const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
const options = {
    swaggerDefinition: {
        openapi: '3.0.0', // YOU NEED THIS
        info: {
            title: 'ProblemHub',
            version: '1.0.0',
            description: 'Your API description'
        },
        servers: [{ url: `${process.env.SERVER}` }],
        basePath: '/',
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [{
            bearerAuth: []
        }]
    },
    apis: ["swagger/**/*.js"]
}
const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec, { customCssUrl: CSS_URL }));

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
app.get('/app/home', async (req, res) => {
    sendMailFromTemplate({
        mailTo: 'aniket@yopmail.com', mailSubject: "Subject send by Template", options: {
            firstName: "Aniket Kumar",
            varification: 46773
        }
    },

        templateUrl('templates/email.hbs')
    ).then((data) => {

        res.send(data)
    }).catch((err) => {
        logger.error(err);
        res.send({ message: err.message })
    })
})
app.use('/app', router)
app.listen(PORT, console.log(`server start:#${PORT}`));
