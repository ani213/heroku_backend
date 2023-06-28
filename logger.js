const winston = require('winston');

module.exports.logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({
            filename: 'error.log', level: 'error',
            format: winston.format.combine(winston.format.timestamp(), winston.format.json())
        }),
    ],
});